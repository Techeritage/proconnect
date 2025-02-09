import SideNav from "@/components/Navigation/SideNav";
import React from "react";

const AdminLayout = ({ children }) => {
  return (
    <div className="h-dvh">
      <SideNav />
      <main className="pl-[300px]">{children}</main>
    </div>
  );
};

export default AdminLayout;
