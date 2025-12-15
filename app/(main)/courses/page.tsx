import { getCourses } from "@/drizzle/queries";
import { List } from "./list";

const CoursesPage = async () => {
  const coursesData = getCourses();

  const [courses] = await Promise.all([coursesData]);

  return (
    <div className="h-full max-w-228 px-3 mx-auto">
      <h1 className="text-2xl font-bold text-neutral-700">Language Courses</h1>
      <List courses={courses} activeCourseId={courses[0].id} />
    </div>
  );
};

export default CoursesPage;
