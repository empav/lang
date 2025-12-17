import { ThemeToggle } from "@/components/ui/theme-toggle";
import { UserMenu } from "@/components/UserMenu";
import Image from "next/image";

const Header = () => {
  return (
    <header className="h-20 w-full border-b-2 border-foreground/15 px-4">
      <div className="lg:max-w-5xl mx-auto flex items-center justify-between h-full gap-x-4">
        <div className="flex items-center gap-x-2 mr-auto">
          <Image
            src="/logos/mascot.svg"
            alt="Logo Lang"
            width={40}
            height={40}
          />
          <h1 className="text-2xl font-extrabold text-green-500">Lang</h1>
        </div>
        <ThemeToggle />
        <UserMenu />
      </div>
    </header>
  );
};
export default Header;
