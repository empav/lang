import { UnitBanner } from "./unit-banner";
import { LessonButton } from "./lesson-button";
import type { Lesson, Unit as UnitType } from "@/drizzle/types";

type Props = {
  id: number;
  order: number;
  title: string;
  description: string;
  lessons: (Lesson & {
    completed: boolean;
  })[];
  activeLesson:
    | (Lesson & {
        unit: UnitType;
      })
    | undefined;
  activeLessonPercentage: number;
};

export const Unit = ({
  title,
  description,
  lessons,
  activeLesson,
  activeLessonPercentage,
}: Props) => {
  return (
    <>
      <UnitBanner title={title} description={description} />
      <div className="flex items-center flex-col relative">
        {lessons.map((lesson, index) => {
          const isCurrent = lesson.id === activeLesson?.id;
          const isLocked = !lesson.completed && !isCurrent;

          return (
            <LessonButton
              key={lesson.id}
              id={lesson.id}
              index={index}
              totalCount={lessons.length - 1}
              current={isCurrent}
              locked={isLocked}
              percentage={activeLessonPercentage}
            />
          );
        })}
      </div>
    </>
  );
};
