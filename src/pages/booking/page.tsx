"use client";

import type React from "react";

import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { CalendarIcon, CreditCard } from "lucide-react";
import { format } from "date-fns";

import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";
import MainLayout from "../../components/layout/main-layout";

export default function BookingPage() {
  const [searchParams] = useSearchParams();
  const roomType = searchParams.get("room") || "";
  const nameParam = searchParams.get("name") || "";
  const emailParam = searchParams.get("email") || "";
  const phoneParam = searchParams.get("phone") || "";
  const guestsParam = searchParams.get("guests") || "";

  const checkInParam = searchParams.get("checkIn");
  const checkOutParam = searchParams.get("checkOut");

  const [checkIn, setCheckIn] = useState<Date | undefined>(
    checkInParam ? new Date(checkInParam) : undefined
  );
  const [checkOut, setCheckOut] = useState<Date | undefined>(
    checkOutParam ? new Date(checkOutParam) : undefined
  );
  const [name, setName] = useState(nameParam);
  const [email, setEmail] = useState(emailParam);
  const [phone, setPhone] = useState(phoneParam);
  const [guests, setGuests] = useState(guestsParam);
  const [selectedRoomType, setSelectedRoomType] = useState(roomType);
  const [specialRequests, setSpecialRequests] = useState("");
  const [cardName, setCardName] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [cvv, setCvv] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Booking submitted:", {
      name,
      email,
      phone,
      checkIn,
      checkOut,
      guests,
      roomType: selectedRoomType,
      specialRequests,
      payment: {
        cardName,
        cardNumber,
        expiryDate,
        cvv,
      },
    });
    // Here you would typically submit to an API
  };

  return (
    <MainLayout>
      <div className="container py-10">
        <div className="mx-auto max-w-4xl">
          <div className="text-center">
            <h1 className="text-3xl font-bold tracking-tight">
              Pesan Penginapan Anda
            </h1>
            <p className="mt-2 text-muted-foreground">
              Isi formulir di bawah ini untuk melakukan reservasi Anda
            </p>
          </div>

          <Card className="mt-8">
            <CardHeader>
              <CardTitle>Detail Reservasi</CardTitle>
              <CardDescription>
                Silakan isi semua informasi yang diperlukan untuk menyelesaikan
                pemesanan
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid gap-6 md:grid-cols-2">
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="firstName">Nama Lengkap</Label>
                      <Input
                        id="firstName"
                        placeholder="Masukkan nama lengkap Anda"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="Masukkan alamat email Anda"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="phone">Nomor Telepon</Label>
                      <Input
                        id="phone"
                        placeholder="Masukkan nomor telepon Anda"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="roomType">Tipe Kamar</Label>
                      <Select
                        value={selectedRoomType}
                        onValueChange={setSelectedRoomType}
                      >
                        <SelectTrigger id="roomType">
                          <SelectValue placeholder="Pilih tipe kamar" />
                        </SelectTrigger>
                        <SelectContent className="bg-white">
                          <SelectItem
                            className="hover:bg-gray-100 hover:shadow"
                            value="standard"
                          >
                            Kamar Standar
                          </SelectItem>
                          <SelectItem
                            className="hover:bg-gray-100 hover:shadow"
                            value="deluxe"
                          >
                            Kamar Deluxe
                          </SelectItem>
                          <SelectItem
                            className="hover:bg-gray-100 hover:shadow"
                            value="suite"
                          >
                            Suite
                          </SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label htmlFor="guests">Jumlah Tamu</Label>
                      <Select value={guests} onValueChange={setGuests}>
                        <SelectTrigger id="guests">
                          <SelectValue placeholder="Pilih jumlah tamu" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="1">1 Tamu</SelectItem>
                          <SelectItem value="2">2 Tamu</SelectItem>
                          <SelectItem value="3">3 Tamu</SelectItem>
                          <SelectItem value="4">4 Tamu</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="grid gap-4 md:grid-cols-2">
                      <div>
                        <Label>Tanggal Check-in</Label>
                        <Popover>
                          <PopoverTrigger asChild>
                            <Button
                              variant="outline"
                              className={cn(
                                "w-full justify-start text-left font-normal",
                                !checkIn && "text-muted-foreground"
                              )}
                            >
                              <CalendarIcon className="mr-2 h-4 w-4" />
                              {checkIn
                                ? format(checkIn, "PPP")
                                : "Pilih tanggal"}
                            </Button>
                          </PopoverTrigger>
                          <PopoverContent className="w-auto p-0">
                            <Calendar
                              mode="single"
                              selected={checkIn}
                              onSelect={setCheckIn}
                              initialFocus
                              disabled={(date) => date < new Date()}
                            />
                          </PopoverContent>
                        </Popover>
                      </div>
                      <div>
                        <Label>Tanggal Check-out</Label>
                        <Popover>
                          <PopoverTrigger asChild>
                            <Button
                              variant="outline"
                              className={cn(
                                "w-full justify-start text-left font-normal",
                                !checkOut && "text-muted-foreground"
                              )}
                            >
                              <CalendarIcon className="mr-2 h-4 w-4" />
                              {checkOut
                                ? format(checkOut, "PPP")
                                : "Pilih tanggal"}
                            </Button>
                          </PopoverTrigger>
                          <PopoverContent className="w-auto p-0">
                            <Calendar
                              mode="single"
                              selected={checkOut}
                              onSelect={setCheckOut}
                              initialFocus
                              disabled={(date) =>
                                date < new Date() ||
                                (checkIn ? date <= checkIn : false)
                              }
                            />
                          </PopoverContent>
                        </Popover>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <Label htmlFor="specialRequests">Permintaan Khusus</Label>
                  <Textarea
                    id="specialRequests"
                    placeholder="Tulis permintaan atau kebutuhan khusus Anda"
                    className="resize-none"
                    value={specialRequests}
                    onChange={(e) => setSpecialRequests(e.target.value)}
                  />
                </div>

                <div>
                  <h3 className="text-lg font-medium">Informasi Pembayaran</h3>
                  <div className="mt-4 grid gap-4 md:grid-cols-2">
                    <div>
                      <Label htmlFor="cardName">Nama di Kartu</Label>
                      <Input
                        id="cardName"
                        placeholder="Masukkan nama pada kartu"
                        value={cardName}
                        onChange={(e) => setCardName(e.target.value)}
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="cardNumber">Nomor Kartu</Label>
                      <div className="relative">
                        <Input
                          id="cardNumber"
                          placeholder="Masukkan nomor kartu"
                          value={cardNumber}
                          onChange={(e) => setCardNumber(e.target.value)}
                          required
                        />
                        <CreditCard className="absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                      </div>
                    </div>
                    <div>
                      <Label htmlFor="expiryDate">Tanggal Kedaluwarsa</Label>
                      <Input
                        id="expiryDate"
                        placeholder="MM/YY"
                        value={expiryDate}
                        onChange={(e) => setExpiryDate(e.target.value)}
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="cvv">CVV</Label>
                      <Input
                        id="cvv"
                        placeholder="Masukkan CVV"
                        value={cvv}
                        onChange={(e) => setCvv(e.target.value)}
                        required
                      />
                    </div>
                  </div>
                </div>

                <Button type="submit" className="w-full" size="lg">
                  Selesaikan Pemesanan
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </MainLayout>
  );
}

function Label({
  htmlFor,
  children,
}: {
  htmlFor?: string;
  children: React.ReactNode;
}) {
  return (
    <label htmlFor={htmlFor} className="mb-2 block text-sm font-medium">
      {children}
    </label>
  );
}
