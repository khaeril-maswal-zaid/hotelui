import { Link } from "react-router-dom";
import { BedDouble, Check, Coffee, Tv, Wifi } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import MainLayout from "@/components/layout/main-layout";

const roomTypes = [
  {
    id: "standard",
    name: "Standard Room",
    description:
      "Comfortable room with essential amenities for a pleasant stay.",
    price: 100,
    size: "25m²",
    capacity: "2 Adults",
    bed: "1 Queen Bed",
    features: [
      "Free Wi-Fi",
      "Air Conditioning",
      "Flat-screen TV",
      "Private Bathroom",
      "Daily Housekeeping",
    ],
    images: [
      "public/images/2.jpg",
      "public/images/3.jpg",
      "public/images/9.jpg",
    ],
  },
  {
    id: "deluxe",
    name: "Deluxe Room",
    description: "Spacious room with premium amenities and city views.",
    price: 150,
    size: "35m²",
    capacity: "2 Adults, 1 Child",
    bed: "1 King Bed",
    features: [
      "Free Wi-Fi",
      "Air Conditioning",
      "Flat-screen TV",
      "Mini Bar",
      "Coffee Machine",
      "Private Bathroom",
      "Bathrobe & Slippers",
      "Daily Housekeeping",
    ],
    images: [
      "public/images/3.jpg",
      "public/images/2.jpg",
      "public/images/9.jpg",
    ],
  },
  {
    id: "suite",
    name: "Executive Suite",
    description: "Luxury suite with separate living area and premium services.",
    price: 250,
    size: "50m²",
    capacity: "2 Adults, 2 Children",
    bed: "1 King Bed + Sofa Bed",
    features: [
      "Free Wi-Fi",
      "Air Conditioning",
      '55" Flat-screen TV',
      "Mini Bar",
      "Espresso Machine",
      "Separate Living Area",
      "Luxury Bathroom",
      "Bathrobe & Slippers",
      "Turn-down Service",
      "Executive Lounge Access",
    ],
    images: [
      "public/images/9.jpg",
      "public/images/3.jpg",
      "public/images/2.jpg",
    ],
  },
];

export default function RoomsPage() {
  return (
    <MainLayout>
      <div className="container mx-auto py-10 md:py-16">
        <div className="text-center">
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Our Rooms
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            Choose from our selection of comfortable and luxurious rooms
            designed to make your stay memorable
          </p>
        </div>

        <Tabs defaultValue="all" className="mt-10">
          <div className="flex justify-center">
            <TabsList>
              <TabsTrigger value="all">All Rooms</TabsTrigger>
              <TabsTrigger value="standard">Standard</TabsTrigger>
              <TabsTrigger value="deluxe">Deluxe</TabsTrigger>
              <TabsTrigger value="suite">Suite</TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="all" className="mt-8">
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {roomTypes.map((room) => (
                <RoomCard key={room.id} room={room} />
              ))}
            </div>
          </TabsContent>

          {roomTypes.map((roomType) => (
            <TabsContent key={roomType.id} value={roomType.id} className="mt-8">
              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                <RoomCard room={roomType} />
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </MainLayout>
  );
}

function RoomCard({ room }: { room: (typeof roomTypes)[0] }) {
  return (
    <Card className="overflow-hidden">
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={room.images[0] || "/placeholder.svg"}
          alt={room.name}
          className="object-cover transition-transform hover:scale-105"
        />
      </div>
      <CardHeader>
        <CardTitle>{room.name}</CardTitle>
        <CardDescription>{room.description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="mb-4">
          <p className="text-2xl font-bold">
            ${room.price}
            <span className="text-sm font-normal text-muted-foreground">
              /night
            </span>
          </p>
        </div>

        <div className="mb-4 grid grid-cols-2 gap-2 text-sm">
          <div className="flex items-center gap-2">
            <BedDouble className="h-4 w-4 text-muted-foreground" />
            <span>{room.bed}</span>
          </div>
          <div className="flex items-center gap-2">
            <Wifi className="h-4 w-4 text-muted-foreground" />
            <span>Free Wi-Fi</span>
          </div>
          <div className="flex items-center gap-2">
            <Coffee className="h-4 w-4 text-muted-foreground" />
            <span>
              {room.id !== "standard" ? "Coffee Machine" : "Coffee Maker"}
            </span>
          </div>
          <div className="flex items-center gap-2">
            <Tv className="h-4 w-4 text-muted-foreground" />
            <span>Flat-screen TV</span>
          </div>
        </div>

        <div className="space-y-2">
          <h4 className="font-medium">Room Features:</h4>
          <ul className="space-y-1">
            {room.features.slice(0, 4).map((feature, index) => (
              <li key={index} className="flex items-start text-sm">
                <Check className="mr-2 h-4 w-4 text-green-500" />
                <span>{feature}</span>
              </li>
            ))}
            {room.features.length > 4 && (
              <li className="text-sm text-muted-foreground">
                + {room.features.length - 4} more features
              </li>
            )}
          </ul>
        </div>
      </CardContent>
      <CardFooter className="flex gap-2">
        <Button className="flex-1" asChild>
          <Link to={`/booking?room=${room.id}`}>Book Now</Link>
        </Button>
        <Button variant="outline" className="flex-1" asChild>
          <Link to={`/rooms/${room.id}`}>View Details</Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
