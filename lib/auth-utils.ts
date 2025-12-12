import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { auth } from "./auth";

const getSession = async () =>
  await auth.api.getSession({
    headers: await headers(),
  });

const requireAuth = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session) {
    redirect("/login");
  } else {
    return session;
  }
};

const requireUnAuth = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (session) {
    redirect("/");
  }
};

export { getSession, requireAuth, requireUnAuth };
