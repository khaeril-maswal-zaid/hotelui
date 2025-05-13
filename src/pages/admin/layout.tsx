"use client";

import { usePathname } from "next/navigation";
import AdminLayout from "@/components/layout/admin-layout";

export default function AdminDashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  // If we're on the login page, don't use the admin layout
  if (pathname === "/admin/login") {
    return <>{children}</>;
  }

  return <AdminLayout>{children}</AdminLayout>;
}
