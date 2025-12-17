import { Button } from "@/components/ui/button";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="hidden lg:block h-20 w-full border-t-2 border-foreground/15">
      <div className="flex items-center justify-evenly h-full">
        <Button size="lg" variant="ghost" className="flex-1 size-full">
          <Image
            src="/en.svg"
            alt="English"
            height={32}
            width={40}
            className="mr-4 rounded-md"
          />
          English
        </Button>
        <Button size="lg" variant="ghost" className="flex-1 size-full">
          <Image
            src="/es/es.svg"
            alt="Spanish"
            height={32}
            width={40}
            className="mr-4 rounded-md"
          />
          Spanish
        </Button>
        <Button size="lg" variant="ghost" className="flex-1 size-full">
          <Image
            src="/fr.svg"
            alt="French"
            height={32}
            width={40}
            className="mr-4 rounded-md"
          />
          French
        </Button>
        <Button size="lg" variant="ghost" className="flex-1 size-full">
          <Image
            src="/it.svg"
            alt="Italian"
            height={32}
            width={40}
            className="mr-4 rounded-md"
          />
          Italian
        </Button>
        <Button size="lg" variant="ghost" className="flex-1 size-full">
          <Image
            src="/de.svg"
            alt="German"
            height={32}
            width={40}
            className="mr-4 rounded-md"
          />
          German
        </Button>
      </div>
    </footer>
  );
};

export default Footer;
