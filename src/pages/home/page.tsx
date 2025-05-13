import { img } from "lucide-react";
import { Link } from "react-router-dom";
import {
  BedDouble,
  CalendarRange,
  Coffee,
  Mail,
  MapPin,
  Phone,
  Utensils,
  Wifi,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { BookingForm } from "@/components/booking-form";

import MainLayout from "@/components/layout/main-layout";

const features = [
  {
    icon: Wifi,
    title: "Free Wi-Fi",
    description: "High-speed internet access throughout the hotel",
  },
  {
    icon: Utensils,
    title: "Restaurant",
    description: "Fine dining experience with international cuisine",
  },
  {
    icon: Coffee,
    title: "Room Service",
    description: "24/7 room service for your convenience",
  },
  {
    icon: BedDouble,
    title: "Comfortable Rooms",
    description: "Luxurious rooms with modern amenities",
  },
];

export default function HomePage() {
  return (
    <MainLayout>
      <div className="flex flex-col">
        {/* Hero Section */}
        <section className="relative overflow-hidden h-[80vh] w-full">
          <img
            src="public/images/4.jpg"
            alt="Luxury Hotel"
            className="object-cover w-full"
          />
          <div className="absolute inset-0 bg-black/40" />
          <div className="container relative z-10 flex h-full flex-col items-center justify-center text-center text-white">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              Experience Luxury & Comfort
            </h1>
            <p className="mt-4 max-w-2xl text-lg sm:text-xl">
              Enjoy your stay in our premium hotel with world-class amenities
              and exceptional service
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Button size="lg" asChild>
                <Link to="#booking-section">Book Now</Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="bg-white/10 text-white hover:bg-white/20"
                asChild
              >
                <Link to="/rooms">Explore Rooms</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Quick Booking Form */}
        <section id="booking-section" className="bg-background py-12">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-5xl">
              <div className="rounded-xl border bg-card p-6 shadow-lg">
                <h2 className="mb-6 text-center text-2xl font-bold">
                  Quick Reservation
                </h2>
                <BookingForm simplified />
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid gap-12 md:grid-cols-2 md:items-center">
              <div>
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                  About Our Hotel
                </h2>
                <p className="mt-4 text-muted-foreground">
                  Located in the heart of the city, our hotel offers the perfect
                  blend of luxury, comfort, and convenience. With stunning
                  views, elegant rooms, and exceptional service, we ensure that
                  your stay with us is nothing short of extraordinary.
                </p>
                <p className="mt-4 text-muted-foreground">
                  Whether you're traveling for business or leisure, our
                  dedicated staff is committed to making your experience
                  memorable. From the moment you arrive until your departure, we
                  strive to exceed your expectations.
                </p>
                <Button className="mt-6" variant="outline" asChild>
                  <Link to="/contact">Learn More</Link>
                </Button>
              </div>
              <div className="relative aspect-video overflow-hidden rounded-lg">
                <img
                  src="public/images/8.jpg"
                  alt="Hotel Interior"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="bg-muted py-16 md:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                Our Facilities
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
                Enjoy our premium facilities designed to make your stay
                comfortable and memorable
              </p>
            </div>
            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {features.map((feature, index) => (
                <Card key={index} className="bg-background">
                  <CardHeader>
                    <feature.icon className="h-10 w-10 text-primary" />
                    <CardTitle className="mt-4">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Room Preview Section */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                Our Rooms
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
                Choose from our selection of comfortable and luxurious rooms
              </p>
            </div>
            <div className="mt-12 grid gap-6 md:grid-cols-3">
              {/* Standard Room */}
              <Card>
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src="public/images/2.jpg"
                    alt="Standard Room"
                    className="object-cover transition-transform hover:scale-105"
                  />
                </div>
                <CardHeader>
                  <CardTitle>Standard Room</CardTitle>
                  <CardDescription>
                    Perfect for solo travelers or couples
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-2xl font-bold">
                    $100
                    <span className="text-sm font-normal text-muted-foreground">
                      /night
                    </span>
                  </p>
                  <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-center">
                      <BedDouble className="mr-2 h-4 w-4" />
                      Queen-sized bed
                    </li>
                    <li className="flex items-center">
                      <Wifi className="mr-2 h-4 w-4" />
                      Free Wi-Fi
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button className="w-full" asChild>
                    <Link to="/booking?room=standard">Book Now</Link>
                  </Button>
                </CardFooter>
              </Card>

              {/* Deluxe Room */}
              <Card>
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src="public/images/3.jpg"
                    alt="Deluxe Room"
                    className="object-cover transition-transform hover:scale-105"
                  />
                </div>
                <CardHeader>
                  <CardTitle>Deluxe Room</CardTitle>
                  <CardDescription>
                    Spacious room with premium amenities
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-2xl font-bold">
                    $150
                    <span className="text-sm font-normal text-muted-foreground">
                      /night
                    </span>
                  </p>
                  <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-center">
                      <BedDouble className="mr-2 h-4 w-4" />
                      King-sized bed
                    </li>
                    <li className="flex items-center">
                      <Wifi className="mr-2 h-4 w-4" />
                      Free Wi-Fi
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button className="w-full" asChild>
                    <Link to="/booking?room=deluxe">Book Now</Link>
                  </Button>
                </CardFooter>
              </Card>

              {/* Suite */}
              <Card>
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src="public/images/9.jpg"
                    alt="Suite"
                    className="object-cover transition-transform hover:scale-105"
                  />
                </div>
                <CardHeader>
                  <CardTitle>Suite</CardTitle>
                  <CardDescription>
                    Luxury suite with separate living area
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-2xl font-bold">
                    $250
                    <span className="text-sm font-normal text-muted-foreground">
                      /night
                    </span>
                  </p>
                  <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-center">
                      <BedDouble className="mr-2 h-4 w-4" />
                      King-sized bed
                    </li>
                    <li className="flex items-center">
                      <Wifi className="mr-2 h-4 w-4" />
                      Free Wi-Fi
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button className="w-full" asChild>
                    <Link to="/booking?room=suite">Book Now</Link>
                  </Button>
                </CardFooter>
              </Card>
            </div>
            <div className="mt-12 text-center">
              <Button variant="outline" size="lg" asChild>
                <Link to="/rooms">View All Rooms</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid gap-12 md:grid-cols-2">
              <div>
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                  Contact Us
                </h2>
                <p className="mt-4 text-muted-foreground">
                  Have questions or need assistance? Our team is here to help
                  you with any inquiries.
                </p>

                <div className="mt-8 space-y-4">
                  <div className="flex items-start">
                    <MapPin className="mr-3 h-5 w-5 text-primary" />
                    <div>
                      <h3 className="font-medium">Address</h3>
                      <p className="text-muted-foreground">
                        123 Luxury Avenue, City Center, Country
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <Phone className="mr-3 h-5 w-5 text-primary" />
                    <div>
                      <h3 className="font-medium">Phone</h3>
                      <p className="text-muted-foreground">+1 (555) 123-4567</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <Mail className="mr-3 h-5 w-5 text-primary" />
                    <div>
                      <h3 className="font-medium">Email</h3>
                      <p className="text-muted-foreground">
                        info@luxuryhotel.com
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <CalendarRange className="mr-3 h-5 w-5 text-primary" />
                    <div>
                      <h3 className="font-medium">Reception Hours</h3>
                      <p className="text-muted-foreground">
                        24/7, 365 days a year
                      </p>
                    </div>
                  </div>
                </div>

                <Button className="mt-8" asChild>
                  <Link to="/contact">Contact Us</Link>
                </Button>
              </div>

              <div className="relative h-[400px] overflow-hidden rounded-lg">
                <img
                  src="public/images/10.jpg"
                  alt="Hotel Map Location"
                  className="object-cover"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black/20">
                  <Button
                    variant="outline"
                    className="bg-white/80 hover:bg-white"
                  >
                    View on Map
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </MainLayout>
  );
}
