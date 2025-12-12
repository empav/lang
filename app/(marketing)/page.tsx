import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { getSession } from "@/lib/auth-utils";

export default async function Home() {
  const session = await getSession();
  return (
    <div className="max-w-247 mx-auto flex-1 w-full flex flex-col lg:flex-row items-center justify-center p-4 gap-2">
      <div className="relative w-60 h-60 lg:w-106 lg:h-106 mb-8 lg:mb-0">
        <Image src="/hero.svg" fill alt="Hero" />
      </div>
      <div className="flex flex-col items-center gap-y-8">
        <h1 className="text-xl lg:text-3xl font-bold text-neutral-600 max-w-120 text-center">
          Learn, practice, and master new languages with Lang.
        </h1>
        <div className="flex flex-col items-center gap-y-3 max-w-82.5 w-full">
          {!session?.user ? (
            <>
              <Button size="lg" variant="secondary" className="w-full" asChild>
                <Link href="/signup">Get Started</Link>
              </Button>
              <Button
                size="lg"
                variant="primaryOutline"
                className="w-full"
                asChild
              >
                <Link href="/login">I already have an account</Link>
              </Button>
            </>
          ) : (
            <Button size="lg" variant="secondary" className="w-full" asChild>
              <Link href="/learn">Continue Learning</Link>
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}
