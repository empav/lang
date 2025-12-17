import FeedWrapper from "@/components/FeedWrapper";
import StickyWrapper from "@/components/StickyWrapper";
import { Header } from "./header";
import { UserProgress } from "@/components/UserProgress";
import {
  getCourseProgress,
  getLessonPercentage,
  getUnits,
  getUserProgress,
} from "@/drizzle/queries";
import { redirect } from "next/navigation";
import { Unit } from "./unit";

const LearnPage = async () => {
  const userProgressData = getUserProgress();
  const courseProgressData = getCourseProgress();
  const lessonPercentageData = getLessonPercentage();
  const unitsData = getUnits();

  const [userProgress, courseProgress, lessonPercentage, units] =
    await Promise.all([
      userProgressData,
      courseProgressData,
      lessonPercentageData,
      unitsData,
    ]);

  if (!userProgress || !userProgress.activeCourse) {
    redirect("/courses");
  }
  if (!courseProgress) {
    redirect("/courses");
  }

  return (
    <div className="flex flex-row-reverse gap-12 px-6">
      <StickyWrapper>
        <UserProgress
          activeCourse={userProgress.activeCourse}
          hearts={userProgress.hearts}
          points={userProgress.points}
        />
      </StickyWrapper>
      <FeedWrapper>
        <Header title={userProgress.activeCourse.title} />
        <div className="lg:mt-20 mt-10">
          {units.map((unit) => (
            <div key={unit.id} className="mb-10">
              <Unit
                id={unit.id}
                order={unit.order}
                description={unit.description}
                title={unit.title}
                lessons={unit.lessons}
                activeLesson={courseProgress.activeLesson}
                activeLessonPercentage={lessonPercentage}
              />
            </div>
          ))}
        </div>
      </FeedWrapper>
    </div>
  );
};

export default LearnPage;
