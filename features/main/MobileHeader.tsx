"use client";

import { MobileSidebar } from "@/features/main/MobileSidebar";
import { UserMenu } from "@/components/UserMenu";

const MobileHeader = () => {
  return (
    <nav className="lg:hidden px-6 h-16 flex items-center justify-between bg-green-500 border-b fixed top-0 w-full z-50">
      <MobileSidebar />
      <UserMenu />
    </nav>
  );
};

export default MobileHeader;
