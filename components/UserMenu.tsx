"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { getUserInitials } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export function UserMenu() {
  const router = useRouter();

  const { data: session } = authClient.useSession();

  if (!session) return null;

  return (
    <div className="flex items-center gap-x-8">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button size={"icon"} variant="icon" aria-label="Open user menu">
            <Avatar className="size-12">
              {session.user.image ? (
                <AvatarImage src={session.user.image} alt={session.user.name} />
              ) : (
                <AvatarFallback>
                  {getUserInitials(session.user.name)}
                </AvatarFallback>
              )}
            </Avatar>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-44">
          <DropdownMenuItem asChild className="cursor-pointer">
            <Button
              className="w-full justify-start"
              variant={"icon"}
              onClick={() =>
                authClient.signOut({
                  fetchOptions: {
                    onSuccess: () => router.replace("/login"),
                  },
                })
              }
            >
              Logout
            </Button>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
