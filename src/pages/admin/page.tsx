"use client";

import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BedDouble, CalendarClock, Users } from "lucide-react";

import AdminLayout from "@/components/layout/admin-layout";

export default function AdminDashboard() {
  const navigate = useNavigate();

  // Check if user is logged in (in a real app, this would check for an auth token)
  // For this demo, we'll just redirect to the login page
  useEffect(() => {
    // This is a simple check to see if the user came from the login page
    // In a real app, you would check for an auth token or session
    const isLoggedIn = sessionStorage.getItem("adminLoggedIn");

    if (!isLoggedIn) {
      navigate("/login-admin");
    }
  }, [navigate]);

  return (
    <AdminLayout>
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Dasbor</h1>
        <p className="text-muted-foreground">
          Gambaran umum kinerja dan status hotel Anda saat ini
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Reservasi Saat Ini
            </CardTitle>
            <CalendarClock className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">24</div>
            <p className="text-xs text-muted-foreground">
              +5% dari minggu lalu
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Kamar Tersedia
            </CardTitle>
            <BedDouble className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">12</div>
            <p className="text-xs text-muted-foreground">
              Tingkat okupansi 75%
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Tamu Saat Ini</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">42</div>
            <p className="text-xs text-muted-foreground">
              +12% dari minggu lalu
            </p>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="today" className="space-y-4">
        <TabsList>
          <TabsTrigger value="today">Hari Ini</TabsTrigger>
          <TabsTrigger value="week">Minggu Ini</TabsTrigger>
          <TabsTrigger value="month">Bulan Ini</TabsTrigger>
        </TabsList>
        <TabsContent value="today" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Reservasi Terbaru</CardTitle>
              <CardDescription>
                Reservasi dan check-in baru hari ini
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="grid grid-cols-4 text-sm font-medium text-muted-foreground">
                  <div>Tamu</div>
                  <div>Kamar</div>
                  <div>Check-in</div>
                  <div>Status</div>
                </div>
                <div className="grid grid-cols-4 items-center gap-4 rounded-lg border p-4">
                  <div className="font-medium">John Smith</div>
                  <div>Kamar Deluxe</div>
                  <div>Hari Ini, 14.00</div>
                  <div className="rounded-full bg-yellow-100 px-2 py-1 text-xs text-yellow-800">
                    Menunggu
                  </div>
                </div>
                <div className="grid grid-cols-4 items-center gap-4 rounded-lg border p-4">
                  <div className="font-medium">Sarah Johnson</div>
                  <div>Suite</div>
                  <div>Hari Ini, 15.30</div>
                  <div className="rounded-full bg-green-100 px-2 py-1 text-xs text-green-800">
                    Dikonfirmasi
                  </div>
                </div>
                <div className="grid grid-cols-4 items-center gap-4 rounded-lg border p-4">
                  <div className="font-medium">Michael Brown</div>
                  <div>Kamar Standar</div>
                  <div>Hari Ini, 13.00</div>
                  <div className="rounded-full bg-blue-100 px-2 py-1 text-xs text-blue-800">
                    Telah Check-in
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="week" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Ikhtisar Mingguan</CardTitle>
              <CardDescription>Reservasi untuk minggu ini</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Data mingguan akan ditampilkan di sini
              </p>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="month" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Ikhtisar Bulanan</CardTitle>
              <CardDescription>Reservasi untuk bulan ini</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Data bulanan akan ditampilkan di sini
              </p>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </AdminLayout>
  );
}
