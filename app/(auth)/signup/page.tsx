import SignForm from "@/features/auth/SignForm";
import { requireUnAuth } from "@/lib/auth-utils";

export default async function SignUp() {
  await requireUnAuth();
  return <SignForm isLogin={false} />;
}
