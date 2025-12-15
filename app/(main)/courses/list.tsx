"use client";

import { useRouter } from "next/navigation";
import { Card } from "./card";
import { courses } from "@/drizzle/schema";

type Props = {
  courses: (typeof courses.$inferSelect)[];
  activeCourseId?: typeof courses.$inferSelect.id;
};

export const List = ({ courses, activeCourseId }: Props) => {
  const router = useRouter();

  const onClick = (id: string) => {
    if (id === activeCourseId) {
      return router.push("/learn");
    }
  };

  return (
    <div className="pt-6 grid grid-cols-2 lg:grid-cols-[repeat(auto-fill,minmax(210px,1fr))] gap-4">
      {courses.map((course) => (
        <Card
          key={course.id}
          id={course.id}
          title={course.title}
          imageSrc={course.imageSrc}
          onClick={onClick}
          disabled={false}
          active={course.id === activeCourseId}
        />
      ))}
    </div>
  );
};
