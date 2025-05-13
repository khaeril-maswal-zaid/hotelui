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
        <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
        <p className="text-muted-foreground">
          Overview of your hotel's performance and current status
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Current Reservations
            </CardTitle>
            <CalendarClock className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">24</div>
            <p className="text-xs text-muted-foreground">+5% from last week</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Available Rooms
            </CardTitle>
            <BedDouble className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">12</div>
            <p className="text-xs text-muted-foreground">75% occupancy rate</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Current Guests
            </CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">42</div>
            <p className="text-xs text-muted-foreground">+12% from last week</p>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="today" className="space-y-4">
        <TabsList>
          <TabsTrigger value="today">Today</TabsTrigger>
          <TabsTrigger value="week">This Week</TabsTrigger>
          <TabsTrigger value="month">This Month</TabsTrigger>
        </TabsList>
        <TabsContent value="today" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Recent Reservations</CardTitle>
              <CardDescription>
                Today's new reservations and check-ins
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="grid grid-cols-4 text-sm font-medium text-muted-foreground">
                  <div>Guest</div>
                  <div>Room</div>
                  <div>Check-in</div>
                  <div>Status</div>
                </div>
                <div className="grid grid-cols-4 items-center gap-4 rounded-lg border p-4">
                  <div className="font-medium">John Smith</div>
                  <div>Deluxe Room</div>
                  <div>Today, 2:00 PM</div>
                  <div className="rounded-full bg-yellow-100 px-2 py-1 text-xs text-yellow-800">
                    Pending
                  </div>
                </div>
                <div className="grid grid-cols-4 items-center gap-4 rounded-lg border p-4">
                  <div className="font-medium">Sarah Johnson</div>
                  <div>Suite</div>
                  <div>Today, 3:30 PM</div>
                  <div className="rounded-full bg-green-100 px-2 py-1 text-xs text-green-800">
                    Confirmed
                  </div>
                </div>
                <div className="grid grid-cols-4 items-center gap-4 rounded-lg border p-4">
                  <div className="font-medium">Michael Brown</div>
                  <div>Standard Room</div>
                  <div>Today, 1:00 PM</div>
                  <div className="rounded-full bg-blue-100 px-2 py-1 text-xs text-blue-800">
                    Checked In
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="week" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Weekly Overview</CardTitle>
              <CardDescription>Reservations for this week</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Weekly data will appear here
              </p>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="month" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Monthly Overview</CardTitle>
              <CardDescription>Reservations for this month</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Monthly data will appear here
              </p>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </AdminLayout>
  );
}
