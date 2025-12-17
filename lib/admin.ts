import { getSession } from "./auth-utils";

export const isAdmin = async () => {
  const session = await getSession();
  return !!session?.user;
};
