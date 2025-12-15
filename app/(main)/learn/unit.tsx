import { lessons, units } from "@/drizzle/schema";

import { UnitBanner } from "./unit-banner";

type Props = {
  id: number;
  order: number;
  title: string;
  description: string;
  lessons: (typeof lessons.$inferSelect & {
    completed: boolean;
  })[];
  activeLesson:
    | (typeof lessons.$inferSelect & {
        unit: typeof units.$inferSelect;
      })
    | undefined;
  activeLessonPercentage: number;
};

export const Unit = ({ title, description, lessons }: Props) => {
  return (
    <>
      <UnitBanner title={title} description={description} />
      <div className="flex items-center flex-col relative">
        {lessons.map((lesson) => {
          return <code key={lesson.id}>{JSON.stringify(lesson, null, 2)}</code>;
        })}
      </div>
    </>
  );
};
