import Image from "next/image";

const Header = () => {
  return (
    <header className="h-20 w-full border-b-2 border-slate-200 px-4">
      <div className="lg:max-w-5xl mx-auto flex items-center justify-between h-full">
        <div className="pt-8 pl-4 pb-7 flex items-center gap-x-3">
          <Image src="/globe.svg" alt="Logo" width={40} height={40} />
          <h1 className="text-2xl font-extrabold text-green-600">Lang</h1>
        </div>
      </div>
    </header>
  );
};
export default Header;
