import "dotenv/config";
import { drizzle } from "drizzle-orm/neon-http";
import { neon } from "@neondatabase/serverless";
import * as schema from "@/drizzle/schema";
import { reset } from "./reset";
import { spanishSeed } from "./langs/es";

const sql = neon(process.env.DATABASE_URL!);
const db = drizzle(sql, { schema });

const seed = async () => {
  try {
    await reset();

    const languages = [spanishSeed];

    for (const lang of languages) {
      const [course] = await db
        .insert(schema.courses)
        .values({
          title: lang.title,
          imageSrc: lang.imageSrc,
        })
        .returning();

      for (const unit of lang.units) {
        const [unitRow] = await db
          .insert(schema.units)
          .values({
            courseId: course.id,
            title: unit.title,
            description: unit.description,
            order: unit.order,
          })
          .returning();

        for (const lesson of unit.lessons) {
          const [lessonRow] = await db
            .insert(schema.lessons)
            .values({
              unitId: unitRow.id,
              title: lesson.title,
              order: lesson.order,
            })
            .returning();

          for (const challenge of lesson.challenges) {
            const [challengeRow] = await db
              .insert(schema.challenges)
              .values({
                lessonId: lessonRow.id,
                type: challenge.type,
                question: challenge.question,
                order: challenge.order,
              })
              .returning();

            await db.insert(schema.challengeOptions).values(
              challenge.options.map((opt) => ({
                challengeId: challengeRow.id,
                ...opt,
              }))
            );
          }
        }
      }
    }
    console.log("Seeded databse successfully");
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

seed();
