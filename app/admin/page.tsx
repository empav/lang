import dynamic from "next/dynamic";
import { redirect } from "next/navigation";

import { isAdmin } from "@/lib/admin";

const AdminApp = dynamic(() => import("./adminApp"), { ssr: true });

const AdminPage = () => {
  if (!isAdmin()) {
    redirect("/");
  }

  return <AdminApp />;
};

export default AdminPage;
