import "dotenv/config";
import { drizzle } from "drizzle-orm/neon-http";
import { user as usersTable } from "./auth-schema";

const db = drizzle(process.env.DATABASE_URL!);

async function main() {
  const user: typeof usersTable.$inferInsert = {
    id: "1",
    name: "Emanuele Pavan",
    email: "emanuele.pav@gmail.com",
  };

  await db.insert(usersTable).values(user);
  console.log("DB seeded successfully");
}

main();
