import { redirect } from "next/navigation";

import { isAdmin } from "@/lib/admin";

import AdminClient from "./adminClient";

const AdminPage = () => {
  if (!isAdmin()) {
    redirect("/");
  }

  return <AdminClient />;
};

export default AdminPage;
