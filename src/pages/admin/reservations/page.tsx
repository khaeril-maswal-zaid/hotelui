"use client";

import { useState } from "react";
import { Calendar, Check, Clock, MoreHorizontal, X } from "lucide-react";

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
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import AdminLayout from "../../../components/layout/admin-layout";

// Sample reservation data
const reservations = [
  {
    id: "RES-001",
    guestName: "John Smith",
    email: "john.smith@example.com",
    phone: "+1 (555) 123-4567",
    roomType: "Deluxe Room",
    roomNumber: "201",
    checkIn: "2023-05-15",
    checkOut: "2023-05-18",
    guests: 2,
    status: "Confirmed",
    paymentStatus: "Paid",
    totalAmount: 450,
  },
  {
    id: "RES-002",
    guestName: "Sarah Johnson",
    email: "sarah.j@example.com",
    phone: "+1 (555) 987-6543",
    roomType: "Suite",
    roomNumber: "301",
    checkIn: "2023-05-20",
    checkOut: "2023-05-25",
    guests: 3,
    status: "Pending",
    paymentStatus: "Awaiting Payment",
    totalAmount: 1250,
  },
  {
    id: "RES-003",
    guestName: "Michael Brown",
    email: "michael.b@example.com",
    phone: "+1 (555) 456-7890",
    roomType: "Standard Room",
    roomNumber: "105",
    checkIn: "2023-05-10",
    checkOut: "2023-05-12",
    guests: 1,
    status: "Checked In",
    paymentStatus: "Paid",
    totalAmount: 200,
  },
  {
    id: "RES-004",
    guestName: "Emily Davis",
    email: "emily.d@example.com",
    phone: "+1 (555) 234-5678",
    roomType: "Deluxe Room",
    roomNumber: "202",
    checkIn: "2023-05-18",
    checkOut: "2023-05-20",
    guests: 2,
    status: "Cancelled",
    paymentStatus: "Refunded",
    totalAmount: 300,
  },
  {
    id: "RES-005",
    guestName: "Robert Wilson",
    email: "robert.w@example.com",
    phone: "+1 (555) 876-5432",
    roomType: "Suite",
    roomNumber: "302",
    checkIn: "2023-05-25",
    checkOut: "2023-05-30",
    guests: 4,
    status: "Confirmed",
    paymentStatus: "Paid",
    totalAmount: 1500,
  },
  {
    id: "RES-006",
    guestName: "Jennifer Lee",
    email: "jennifer.l@example.com",
    phone: "+1 (555) 345-6789",
    roomType: "Standard Room",
    roomNumber: "106",
    checkIn: "2023-05-12",
    checkOut: "2023-05-15",
    guests: 2,
    status: "Checked Out",
    paymentStatus: "Paid",
    totalAmount: 300,
  },
];

export default function ReservationsPage() {
  const [selectedTab, setSelectedTab] = useState("all");

  // Filter reservations based on selected tab
  const filteredReservations =
    selectedTab === "all"
      ? reservations
      : reservations.filter((res) =>
          selectedTab === "upcoming"
            ? ["Confirmed", "Pending"].includes(res.status)
            : selectedTab === "current"
            ? res.status === "Checked In"
            : selectedTab === "past"
            ? ["Checked Out", "Cancelled"].includes(res.status)
            : true
        );

  return (
    <AdminLayout>
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">
            Manajemen Reservasi
          </h1>
          <p className="text-muted-foreground">
            Kelola pemesanan, check-in, dan check-out
          </p>
        </div>
        <Button>
          <Calendar className="mr-2 h-4 w-4" />
          Reservasi Baru
        </Button>
      </div>

      <div className="grid gap-4 md:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Total Reservasi
            </CardTitle>
            <Calendar className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{reservations.length}</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Terkonfirmasi</CardTitle>
            <Check className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {reservations.filter((res) => res.status === "Confirmed").length}
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Sudah Check-in
            </CardTitle>
            <Clock className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {reservations.filter((res) => res.status === "Checked In").length}
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Dibatalkan</CardTitle>
            <X className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {reservations.filter((res) => res.status === "Cancelled").length}
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Reservasi</CardTitle>
          <CardDescription>
            Kelola semua reservasi hotel dan statusnya
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="all" onValueChange={setSelectedTab}>
            <TabsList className="mb-4">
              <TabsTrigger value="all">Semua Reservasi</TabsTrigger>
              <TabsTrigger value="upcoming">Akan Datang</TabsTrigger>
              <TabsTrigger value="current">Sedang Menginap</TabsTrigger>
              <TabsTrigger value="past">Telah Menginap</TabsTrigger>
            </TabsList>

            <div className="rounded-md border">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>ID Reservasi</TableHead>
                    <TableHead>Tamu</TableHead>
                    <TableHead>Kamar</TableHead>
                    <TableHead>Check-in</TableHead>
                    <TableHead>Check-out</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Pembayaran</TableHead>
                    <TableHead className="text-right">Aksi</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredReservations.map((reservation) => (
                    <TableRow key={reservation.id}>
                      <TableCell className="font-medium">
                        {reservation.id}
                      </TableCell>
                      <TableCell>{reservation.guestName}</TableCell>
                      <TableCell>
                        {reservation.roomType} ({reservation.roomNumber})
                      </TableCell>
                      <TableCell>{reservation.checkIn}</TableCell>
                      <TableCell>{reservation.checkOut}</TableCell>
                      <TableCell>
                        <StatusBadge status={reservation.status} />
                      </TableCell>
                      <TableCell>
                        <PaymentStatusBadge
                          status={reservation.paymentStatus}
                        />
                      </TableCell>
                      <TableCell className="text-right">
                        <ReservationActions reservation={reservation} />
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

function StatusBadge({ status }: { status: string }) {
  const getVariant = () => {
    switch (status) {
      case "Confirmed":
        return "outline";
      case "Pending":
        return "secondary";
      case "Checked In":
        return "default";
      case "Checked Out":
        return "success";
      case "Cancelled":
        return "destructive";
      default:
        return "outline";
    }
  };

  return <Badge variant={getVariant()}>{status}</Badge>;
}

function PaymentStatusBadge({ status }: { status: string }) {
  const getVariant = () => {
    switch (status) {
      case "Paid":
        return "success";
      case "Awaiting Payment":
        return "warning";
      case "Refunded":
        return "destructive";
      default:
        return "outline";
    }
  };

  return (
    <Badge variant={getVariant()} className="bg-opacity-50">
      {status}
    </Badge>
  );
}

function ReservationActions({
  reservation,
}: {
  reservation: (typeof reservations)[0];
}) {
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
              View Details
            </DropdownMenuItem>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Reservation Details</DialogTitle>
              <DialogDescription>
                Reservation ID: {reservation.id}
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label>Guest Name</Label>
                  <div className="font-medium">{reservation.guestName}</div>
                </div>
                <div>
                  <Label>Room</Label>
                  <div className="font-medium">
                    {reservation.roomType} ({reservation.roomNumber})
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label>Check-in</Label>
                  <div className="font-medium">{reservation.checkIn}</div>
                </div>
                <div>
                  <Label>Check-out</Label>
                  <div className="font-medium">{reservation.checkOut}</div>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label>Status</Label>
                  <div className="font-medium">{reservation.status}</div>
                </div>
                <div>
                  <Label>Payment</Label>
                  <div className="font-medium">{reservation.paymentStatus}</div>
                </div>
              </div>
              <div>
                <Label>Total Amount</Label>
                <div className="font-medium">${reservation.totalAmount}</div>
              </div>
              <div>
                <Label>Contact</Label>
                <div className="text-sm">
                  <div>{reservation.email}</div>
                  <div>{reservation.phone}</div>
                </div>
              </div>
            </div>
            <DialogFooter>
              <Button type="button" variant="outline">
                Close
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>

        {reservation.status === "Pending" && (
          <>
            <Dialog>
              <DialogTrigger asChild>
                <DropdownMenuItem
                  onSelect={(e) => e.preventDefault()}
                  className="text-green-600"
                >
                  Confirm Reservation
                </DropdownMenuItem>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Confirm Reservation</DialogTitle>
                  <DialogDescription>
                    Are you sure you want to confirm this reservation?
                  </DialogDescription>
                </DialogHeader>
                <DialogFooter>
                  <Button variant="outline">Cancel</Button>
                  <Button>Confirm</Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>

            <Dialog>
              <DialogTrigger asChild>
                <DropdownMenuItem
                  onSelect={(e) => e.preventDefault()}
                  className="text-destructive"
                >
                  Reject Reservation
                </DropdownMenuItem>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Reject Reservation</DialogTitle>
                  <DialogDescription>
                    Are you sure you want to reject this reservation?
                  </DialogDescription>
                </DialogHeader>
                <div className="py-4">
                  <Label htmlFor="reason">Reason for rejection</Label>
                  <Input
                    id="reason"
                    className="mt-2"
                    placeholder="Enter reason for rejection"
                  />
                </div>
                <DialogFooter>
                  <Button variant="outline">Cancel</Button>
                  <Button variant="destructive">Reject</Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </>
        )}

        {reservation.status === "Confirmed" && (
          <Dialog>
            <DialogTrigger asChild>
              <DropdownMenuItem
                onSelect={(e) => e.preventDefault()}
                className="text-blue-600"
              >
                Check In Guest
              </DropdownMenuItem>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Check In Guest</DialogTitle>
                <DialogDescription>
                  Process check-in for {reservation.guestName}
                </DialogDescription>
              </DialogHeader>
              <div className="py-4 space-y-4">
                <div>
                  <Label>Room Assignment</Label>
                  <Select defaultValue={reservation.roomNumber}>
                    <SelectTrigger className="mt-2">
                      <SelectValue placeholder="Select room" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value={reservation.roomNumber}>
                        {reservation.roomNumber} - {reservation.roomType}
                      </SelectItem>
                      <SelectItem value="203">
                        203 - {reservation.roomType}
                      </SelectItem>
                      <SelectItem value="204">
                        204 - {reservation.roomType}
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label>ID Verification</Label>
                  <div className="flex items-center mt-2 space-x-2">
                    <Input type="file" />
                  </div>
                </div>
                <div>
                  <Label>Additional Notes</Label>
                  <Input
                    className="mt-2"
                    placeholder="Any special requests or notes"
                  />
                </div>
              </div>
              <DialogFooter>
                <Button variant="outline">Cancel</Button>
                <Button>Complete Check-In</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        )}

        {reservation.status === "Checked In" && (
          <Dialog>
            <DialogTrigger asChild>
              <DropdownMenuItem
                onSelect={(e) => e.preventDefault()}
                className="text-green-600"
              >
                Check Out Guest
              </DropdownMenuItem>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Check Out Guest</DialogTitle>
                <DialogDescription>
                  Process check-out for {reservation.guestName}
                </DialogDescription>
              </DialogHeader>
              <div className="py-4 space-y-4">
                <div className="flex justify-between">
                  <span>Room Charges:</span>
                  <span>${reservation.totalAmount}</span>
                </div>
                <div className="flex justify-between">
                  <span>Additional Charges:</span>
                  <span>$0.00</span>
                </div>
                <div className="flex justify-between font-bold">
                  <span>Total:</span>
                  <span>${reservation.totalAmount}</span>
                </div>
                <div>
                  <Label>Payment Method</Label>
                  <Select defaultValue="card">
                    <SelectTrigger className="mt-2">
                      <SelectValue placeholder="Select payment method" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="card">
                        Credit Card (on file)
                      </SelectItem>
                      <SelectItem value="cash">Cash</SelectItem>
                      <SelectItem value="transfer">Bank Transfer</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <DialogFooter>
                <Button variant="outline">Cancel</Button>
                <Button>Complete Check-Out</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        )}

        {["Confirmed", "Pending"].includes(reservation.status) && (
          <Dialog>
            <DialogTrigger asChild>
              <DropdownMenuItem
                onSelect={(e) => e.preventDefault()}
                className="text-destructive"
              >
                Cancel Reservation
              </DropdownMenuItem>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Cancel Reservation</DialogTitle>
                <DialogDescription>
                  Are you sure you want to cancel this reservation?
                </DialogDescription>
              </DialogHeader>
              <div className="py-4">
                <Label htmlFor="cancelReason">Reason for cancellation</Label>
                <Input
                  id="cancelReason"
                  className="mt-2"
                  placeholder="Enter reason for cancellation"
                />
              </div>
              <DialogFooter>
                <Button variant="outline">Back</Button>
                <Button variant="destructive">Cancel Reservation</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        )}

        <DropdownMenuSeparator />
        <DropdownMenuItem>Send Email</DropdownMenuItem>
        <DropdownMenuItem>Print Details</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
