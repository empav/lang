import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const getUserInitials = (fullname: string) => {
  const initials = fullname.split(" ");

  return `${initials[0].at(0)?.toUpperCase()}${initials[1]
    .at(0)
    ?.toUpperCase()}`;
};
