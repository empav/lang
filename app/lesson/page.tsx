import { redirect } from "next/navigation";

import { getLesson, getUserProgress } from "@/drizzle/queries";

const LessonPage = async () => {
  const lessonData = getLesson();
  const userProgressData = getUserProgress();

  const [lesson, userProgress] = await Promise.all([
    lessonData,
    userProgressData,
  ]);

  if (!lesson || !userProgress) {
    redirect("/learn");
  }

  const initialPercentage =
    (lesson.challenges.filter((challenge) => challenge.completed).length /
      lesson.challenges.length) *
    100;

  return (
    <code>{JSON.stringify({ ...lesson, initialPercentage }, null, 2)}</code>
  );
};

export default LessonPage;
