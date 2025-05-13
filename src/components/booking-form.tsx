"use client";

import type React from "react";

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { CalendarIcon } from "lucide-react";
import { format } from "date-fns";

import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
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
import { cn } from "../lib/utils";

interface BookingFormProps {
  simplified?: boolean;
}

export function BookingForm({ simplified = false }: BookingFormProps) {
  const router = useNavigate();
  const [name, setName] = useState("");
  const [checkIn, setCheckIn] = useState<Date>();
  const [checkOut, setCheckOut] = useState<Date>();
  const [guests, setGuests] = useState("");
  const [roomType, setRoomType] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // If simplified form, redirect to booking page with form data
    if (simplified) {
      const params = new URLSearchParams();
      if (name) params.append("name", name);
      if (checkIn) params.append("checkIn", checkIn.toISOString());
      if (checkOut) params.append("checkOut", checkOut.toISOString());
      if (guests) params.append("guests", guests);
      if (roomType) params.append("room", roomType);
      if (email) params.append("email", email);
      if (phone) params.append("phone", phone);

      router(`/booking?${params.toString()}`);
    } else {
      // Handle full booking form submission
      console.log("Booking submitted:", {
        name,
        checkIn,
        checkOut,
        guests,
        roomType,
        email,
        phone,
      });
      // Here you would typically submit to an API
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {!simplified && (
          <div className="space-y-2 sm:col-span-2 md:col-span-3 lg:col-span-4">
            <h3 className="text-lg font-medium">Guest Information</h3>
          </div>
        )}

        <div className="space-y-2">
          <Label htmlFor="name">Full Name</Label>
          <Input
            id="name"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="checkIn">Check-in Date</Label>
          <Popover>
            <PopoverTrigger asChild>
              <Button
                id="checkIn"
                variant="outline"
                className={cn(
                  "w-full justify-start text-left font-normal",
                  !checkIn && "text-muted-foreground"
                )}
              >
                <CalendarIcon className="mr-2 h-4 w-4" />
                {checkIn ? format(checkIn, "PPP") : "Select date"}
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

        <div className="space-y-2">
          <Label htmlFor="checkOut">Check-out Date</Label>
          <Popover>
            <PopoverTrigger asChild>
              <Button
                id="checkOut"
                variant="outline"
                className={cn(
                  "w-full justify-start text-left font-normal",
                  !checkOut && "text-muted-foreground"
                )}
              >
                <CalendarIcon className="mr-2 h-4 w-4" />
                {checkOut ? format(checkOut, "PPP") : "Select date"}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0">
              <Calendar
                mode="single"
                selected={checkOut}
                onSelect={setCheckOut}
                initialFocus
                disabled={(date) =>
                  date < new Date() || (checkIn ? date <= checkIn : false)
                }
              />
            </PopoverContent>
          </Popover>
        </div>

        <div className="space-y-2">
          <Label htmlFor="guests">Guests</Label>
          <Select value={guests} onValueChange={setGuests}>
            <SelectTrigger id="guests">
              <SelectValue placeholder="Number of guests" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="1">1 Guest</SelectItem>
              <SelectItem value="2">2 Guests</SelectItem>
              <SelectItem value="3">3 Guests</SelectItem>
              <SelectItem value="4">4 Guests</SelectItem>
              <SelectItem value="5">5+ Guests</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {simplified && (
          <>
            <div className="space-y-2">
              <Label htmlFor="roomType">Room Type</Label>
              <Select value={roomType} onValueChange={setRoomType}>
                <SelectTrigger id="roomType">
                  <SelectValue placeholder="Select room type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="standard">Standard Room</SelectItem>
                  <SelectItem value="deluxe">Deluxe Room</SelectItem>
                  <SelectItem value="suite">Suite</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="Your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="phone">Phone</Label>
              <Input
                id="phone"
                placeholder="Your phone number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>

            <div className="flex items-end">
              <Button type="submit" className="w-full">
                Check Availability
              </Button>
            </div>
          </>
        )}

        {!simplified && (
          <>
            <div className="space-y-2 sm:col-span-2 md:col-span-3 lg:col-span-4">
              <h3 className="text-lg font-medium">Room Selection</h3>
            </div>

            <div className="space-y-2">
              <Label htmlFor="roomType">Room Type</Label>
              <Select value={roomType} onValueChange={setRoomType}>
                <SelectTrigger id="roomType">
                  <SelectValue placeholder="Select room type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="standard">Standard Room</SelectItem>
                  <SelectItem value="deluxe">Deluxe Room</SelectItem>
                  <SelectItem value="suite">Suite</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2 sm:col-span-2 md:col-span-3 lg:col-span-4">
              <h3 className="text-lg font-medium">Contact Information</h3>
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="Your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="phone">Phone</Label>
              <Input
                id="phone"
                placeholder="Your phone number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>

            <div className="mt-6 sm:col-span-2 md:col-span-3 lg:col-span-4">
              <Button type="submit" className="w-full">
                Complete Booking
              </Button>
            </div>
          </>
        )}
      </div>
    </form>
  );
}
