"use client";

import { MobileSidebar } from "@/features/main/MobileSidebar";
import { UserMenu } from "@/components/UserMenu";
import { ThemeToggle } from "@/components/ui/theme-toggle";

const MobileHeader = () => {
  return (
    <nav className="lg:hidden px-6 h-16 flex items-center justify-between bg-green-500 border-b fixed top-0 w-full z-50">
      <MobileSidebar />
      <div className="ml-auto flex items-center gap-x-8">
        <ThemeToggle />
        <UserMenu />
      </div>
    </nav>
  );
};

export default MobileHeader;
