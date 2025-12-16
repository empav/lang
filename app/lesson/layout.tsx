import { ThemeToggle } from "@/components/ui/theme-toggle";

type Props = {
  children: React.ReactNode;
};

const LessonLayout = ({ children }: Props) => {
  return (
    <div className="flex flex-col h-dvh p-4">
      {children}
      <ThemeToggle />
    </div>
  );
};

export default LessonLayout;
