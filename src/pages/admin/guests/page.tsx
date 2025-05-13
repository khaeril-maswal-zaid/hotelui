"use client";

import { useState } from "react";
import { Mail, MoreHorizontal, Phone, Search, User } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import AdminLayout from "../../../components/layout/admin-layout";

// Sample guest data
const guests = [
  {
    id: "G-001",
    name: "John Smith",
    email: "john.smith@example.com",
    phone: "+1 (555) 123-4567",
    nationality: "United States",
    address: "123 Main St, New York, NY",
    visits: 3,
    lastStay: "2023-05-12",
    totalSpent: 950,
    status: "Regular",
    notes: "Prefers rooms on higher floors. Allergic to feather pillows.",
  },
  {
    id: "G-002",
    name: "Sarah Johnson",
    email: "sarah.j@example.com",
    phone: "+1 (555) 987-6543",
    nationality: "Canada",
    address: "456 Maple Ave, Toronto, ON",
    visits: 1,
    lastStay: "2023-05-25",
    totalSpent: 1250,
    status: "New",
    notes: "First time guest. Celebrating anniversary.",
  },
  {
    id: "G-003",
    name: "Michael Brown",
    email: "michael.b@example.com",
    phone: "+1 (555) 456-7890",
    nationality: "United Kingdom",
    address: "789 Oxford St, London",
    visits: 5,
    lastStay: "2023-05-10",
    totalSpent: 3200,
    status: "VIP",
    notes: "Frequent business traveler. Member of loyalty program.",
  },
  {
    id: "G-004",
    name: "Emily Davis",
    email: "emily.d@example.com",
    phone: "+1 (555) 234-5678",
    nationality: "Australia",
    address: "101 Harbor View, Sydney",
    visits: 2,
    lastStay: "2023-05-18",
    totalSpent: 1800,
    status: "Regular",
    notes: "Prefers quiet rooms away from elevator.",
  },
  {
    id: "G-005",
    name: "Robert Wilson",
    email: "robert.w@example.com",
    phone: "+1 (555) 876-5432",
    nationality: "Germany",
    address: "202 Berlin Ave, Berlin",
    visits: 4,
    lastStay: "2023-05-30",
    totalSpent: 4500,
    status: "VIP",
    notes: "Always books suite. Requires airport pickup.",
  },
  {
    id: "G-006",
    name: "Jennifer Lee",
    email: "jennifer.l@example.com",
    phone: "+1 (555) 345-6789",
    nationality: "United States",
    address: "303 Palm Dr, Los Angeles, CA",
    visits: 1,
    lastStay: "2023-05-15",
    totalSpent: 750,
    status: "New",
    notes: "Traveling with pet. Requires pet-friendly room.",
  },
];

export default function GuestsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedTab, setSelectedTab] = useState("all");

  // Filter guests based on search query and selected tab
  const filteredGuests = guests
    .filter(
      (guest) =>
        guest.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        guest.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
        guest.phone.includes(searchQuery)
    )
    .filter((guest) =>
      selectedTab === "all"
        ? true
        : selectedTab === "vip"
        ? guest.status === "VIP"
        : selectedTab === "regular"
        ? guest.status === "Regular"
        : selectedTab === "new"
        ? guest.status === "New"
        : true
    );

  return (
    <AdminLayout>
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Manajemen Tamu</h1>
          <p className="text-muted-foreground">
            Lihat dan kelola informasi serta riwayat tamu
          </p>
        </div>
        <Button>
          <User className="mr-2 h-4 w-4" />
          Tambah Tamu Baru
        </Button>
      </div>

      <div className="grid gap-4 md:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Tamu</CardTitle>
            <User className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{guests.length}</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Tamu VIP</CardTitle>
            <div className="h-2 w-2 rounded-full bg-yellow-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {guests.filter((guest) => guest.status === "VIP").length}
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Tamu Reguler</CardTitle>
            <div className="h-2 w-2 rounded-full bg-green-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {guests.filter((guest) => guest.status === "Regular").length}
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Tamu Baru</CardTitle>
            <div className="h-2 w-2 rounded-full bg-blue-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {guests.filter((guest) => guest.status === "New").length}
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Direktori Tamu</CardTitle>
          <CardDescription>
            Lihat dan kelola semua tamu yang pernah menginap di hotel
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-between mb-4">
            <div className="relative w-full max-w-sm">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Cari tamu..."
                className="pl-8"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>

          <Tabs defaultValue="all" onValueChange={setSelectedTab}>
            <TabsList className="mb-4">
              <TabsTrigger value="all">Semua Tamu</TabsTrigger>
              <TabsTrigger value="vip">VIP</TabsTrigger>
              <TabsTrigger value="regular">Reguler</TabsTrigger>
              <TabsTrigger value="new">Baru</TabsTrigger>
            </TabsList>

            <div className="rounded-md border">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Tamu</TableHead>
                    <TableHead>Kontak</TableHead>
                    <TableHead>Kunjungan</TableHead>
                    <TableHead>Terakhir Menginap</TableHead>
                    <TableHead>Total Pengeluaran</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead className="text-right">Aksi</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredGuests.map((guest) => (
                    <TableRow key={guest.id}>
                      <TableCell>
                        <div className="flex items-center gap-3">
                          <Avatar>
                            <AvatarFallback>
                              {guest.name
                                .split(" ")
                                .map((n) => n[0])
                                .join("")}
                            </AvatarFallback>
                          </Avatar>
                          <div>
                            <div className="font-medium">{guest.name}</div>
                            <div className="text-xs text-muted-foreground">
                              {guest.id}
                            </div>
                          </div>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="flex flex-col">
                          <div className="flex items-center text-sm">
                            <Mail className="mr-1 h-3 w-3" />
                            {guest.email}
                          </div>
                          <div className="flex items-center text-sm">
                            <Phone className="mr-1 h-3 w-3" />
                            {guest.phone}
                          </div>
                        </div>
                      </TableCell>
                      <TableCell>{guest.visits}</TableCell>
                      <TableCell>{guest.lastStay}</TableCell>
                      <TableCell>${guest.totalSpent}</TableCell>
                      <TableCell>
                        <GuestStatusBadge status={guest.status} />
                      </TableCell>
                      <TableCell className="text-right">
                        <GuestActions guest={guest} />
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </Tabs>
        </CardContent>
      </Card>
    </AdminLayout>
  );
}

function GuestStatusBadge({ status }: { status: string }) {
  const getVariant = () => {
    switch (status) {
      case "VIP":
        return "default";
      case "Regular":
        return "outline";
      case "New":
        return "secondary";
      default:
        return "outline";
    }
  };

  return <Badge variant={getVariant()}>{status}</Badge>;
}

function GuestActions({ guest }: { guest: (typeof guests)[0] }) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="h-8 w-8 p-0">
          <span className="sr-only">Open menu</span>
          <MoreHorizontal className="h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuLabel>Actions</DropdownMenuLabel>
        <DropdownMenuSeparator />

        <Dialog>
          <DialogTrigger asChild>
            <DropdownMenuItem onSelect={(e) => e.preventDefault()}>
              Lihat Detail
            </DropdownMenuItem>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[600px]">
            <DialogHeader>
              <DialogTitle>Detail Tamu</DialogTitle>
              <DialogDescription>ID Tamu: {guest.id}</DialogDescription>
            </DialogHeader>
            <div className="grid gap-6 py-4">
              <div className="flex items-center gap-4">
                <Avatar className="h-16 w-16">
                  <AvatarFallback className="text-xl">
                    {guest.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <h3 className="text-lg font-medium">{guest.name}</h3>
                  <p className="text-sm text-muted-foreground">
                    {guest.nationality}
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label>Email</Label>
                  <div className="font-medium">{guest.email}</div>
                </div>
                <div>
                  <Label>Telepon</Label>
                  <div className="font-medium">{guest.phone}</div>
                </div>
              </div>

              <div>
                <Label>Alamat</Label>
                <div className="font-medium">{guest.address}</div>
              </div>

              <div className="grid grid-cols-3 gap-4">
                <div>
                  <Label>Kunjungan</Label>
                  <div className="font-medium">{guest.visits}</div>
                </div>
                <div>
                  <Label>Menginap Terakhir</Label>
                  <div className="font-medium">{guest.lastStay}</div>
                </div>
                <div>
                  <Label>Total Pengeluaran</Label>
                  <div className="font-medium">${guest.totalSpent}</div>
                </div>
              </div>

              <div>
                <Label>Catatan</Label>
                <div className="rounded-md border p-3 text-sm">
                  {guest.notes}
                </div>
              </div>

              <div>
                <Label>Riwayat Menginap</Label>
                <div className="mt-2 rounded-md border">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Tanggal</TableHead>
                        <TableHead>Kamar</TableHead>
                        <TableHead>Malam</TableHead>
                        <TableHead>Jumlah</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      <TableRow>
                        <TableCell>{guest.lastStay}</TableCell>
                        <TableCell>301 - Suite</TableCell>
                        <TableCell>5</TableCell>
                        <TableCell>
                          ${guest.visits > 1 ? 1250 : guest.totalSpent}
                        </TableCell>
                      </TableRow>
                      {guest.visits > 1 && (
                        <TableRow>
                          <TableCell>2023-03-15</TableCell>
                          <TableCell>202 - Deluxe</TableCell>
                          <TableCell>3</TableCell>
                          <TableCell>$450</TableCell>
                        </TableRow>
                      )}
                      {guest.visits > 2 && (
                        <TableRow>
                          <TableCell>2023-01-10</TableCell>
                          <TableCell>105 - Standard</TableCell>
                          <TableCell>2</TableCell>
                          <TableCell>$200</TableCell>
                        </TableRow>
                      )}
                    </TableBody>
                  </Table>
                </div>
              </div>
            </div>
          </DialogContent>
        </Dialog>

        <DropdownMenuItem>Edit Details</DropdownMenuItem>
        <DropdownMenuItem>Create Reservation</DropdownMenuItem>

        {guest.status !== "VIP" && (
          <DropdownMenuItem className="text-yellow-600">
            Mark as VIP
          </DropdownMenuItem>
        )}

        <DropdownMenuSeparator />
        <DropdownMenuItem>Send Email</DropdownMenuItem>
        <DropdownMenuItem>Export Data</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
