"use server";

import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import { getSession } from "@/lib/auth-utils";
import { getCourseById, getUserProgress } from "@/drizzle/queries";
import { db } from "@/drizzle/db";
import { userProgress } from "@/drizzle/schema";

export const upsertUserProgress = async (courseId: number) => {
  const session = await getSession();

  if (!session?.user) {
    throw new Error("Unauthorized");
  }

  const course = await getCourseById(courseId);

  if (!course) {
    throw new Error("Course not found");
  }

  const existingUserProgress = await getUserProgress();

  if (existingUserProgress) {
    await db.update(userProgress).set({ activeCourseId: courseId });
  } else {
    await db.insert(userProgress).values({
      activeCourseId: courseId,
      userId: session.user.id,
      username: session.user.name.replace(" ", "").toLowerCase(),
      userImageSrc: session.user.image || "/mascot.svg",
    });
  }

  revalidatePath("/courses");
  revalidatePath("/learn");
  redirect("/learn");
};
