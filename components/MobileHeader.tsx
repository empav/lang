import { MobileSidebar } from "./MobileSidebar";
import { UserMenu } from "./UserMenu";

export const MobileHeader = () => {
  return (
    <nav className="lg:hidden px-6 h-16 flex items-center justify-between bg-green-500 border-b fixed top-0 w-full z-50">
      <MobileSidebar />
      <UserMenu />
    </nav>
  );
};
