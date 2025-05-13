import { BedDouble, Edit, MoreHorizontal, Plus, Trash } from "lucide-react";

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
import { Badge } from "@/components/ui/badge";
import AdminLayout from "../../../components/layout/admin-layout";

const rooms = [
  {
    id: 1,
    number: "101",
    type: "Standard",
    capacity: 2,
    price: 100,
    status: "Available",
  },
  {
    id: 2,
    number: "102",
    type: "Standard",
    capacity: 2,
    price: 100,
    status: "Occupied",
  },
  {
    id: 3,
    number: "201",
    type: "Deluxe",
    capacity: 3,
    price: 150,
    status: "Available",
  },
  {
    id: 4,
    number: "202",
    type: "Deluxe",
    capacity: 3,
    price: 150,
    status: "Maintenance",
  },
  {
    id: 5,
    number: "301",
    type: "Suite",
    capacity: 4,
    price: 250,
    status: "Available",
  },
];

export default function RoomsPage() {
  return (
    <AdminLayout>
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Manajemen Kamar</h1>
          <p className="text-muted-foreground">
            Kelola kamar hotel Anda, jenisnya, dan ketersediaannya
          </p>
        </div>
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          Tambah Kamar Baru
        </Button>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Kamar</CardTitle>
            <BedDouble className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">30</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Tersedia</CardTitle>
            <div className="h-2 w-2 rounded-full bg-green-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">18</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Terisi</CardTitle>
            <div className="h-2 w-2 rounded-full bg-red-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">12</div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Daftar Kamar</CardTitle>
          <CardDescription>
            Lihat dan kelola semua kamar di hotel Anda
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Kamar #</TableHead>
                <TableHead>Jenis</TableHead>
                <TableHead>Kapasitas</TableHead>
                <TableHead>Harga/Malam</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-right">Aksi</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {rooms.map((room) => (
                <TableRow key={room.id}>
                  <TableCell className="font-medium">{room.number}</TableCell>
                  <TableCell>{room.type}</TableCell>
                  <TableCell>{room.capacity} tamu</TableCell>
                  <TableCell>Rp{room.price}</TableCell>
                  <TableCell>
                    <Badge
                      variant={
                        room.status === "Available"
                          ? "outline"
                          : room.status === "Occupied"
                          ? "destructive"
                          : "secondary"
                      }
                    >
                      {room.status === "Available"
                        ? "Tersedia"
                        : room.status === "Occupied"
                        ? "Terisi"
                        : room.status}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-right">
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" className="h-8 w-8 p-0">
                          <span className="sr-only">Buka menu</span>
                          <MoreHorizontal className="h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuLabel>Aksi</DropdownMenuLabel>
                        <DropdownMenuItem>
                          <Edit className="mr-2 h-4 w-4" />
                          <span>Edit</span>
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem className="text-destructive">
                          <Trash className="mr-2 h-4 w-4" />
                          <span>Hapus</span>
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </AdminLayout>
  );
}
