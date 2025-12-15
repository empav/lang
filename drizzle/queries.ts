import { cache } from "react";
import { db } from "@/drizzle/db";
import { courses, userProgress } from "./schema";
import { eq } from "drizzle-orm";
import { getSession } from "@/lib/auth-utils";

export const getCourses = cache(async () => {
  const data = await db.query.courses.findMany();

  return data;
});

export const getUserProgress = cache(async () => {
  const session = await getSession();

  if (!session?.user) {
    return null;
  }

  const data = await db.query.userProgress.findFirst({
    where: eq(userProgress.userId, session.user.id),
    with: {
      activeCourse: true,
    },
  });

  return data;
});

export const getCourseById = cache(async (courseId: number) => {
  const data = await db.query.courses.findFirst({
    where: eq(courses.id, courseId),
    //TODO Populate units and lessons
  });

  return data;
});
