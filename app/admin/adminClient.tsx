"use client";

import dynamic from "next/dynamic";

const AdminApp = dynamic(() => import("./adminApp"), { ssr: false });

const AdminClient = () => {
  return <AdminApp />;
};

export default AdminClient;

