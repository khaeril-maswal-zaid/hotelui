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
    title: "Wi-Fi Gratis",
    description: "Akses internet berkecepatan tinggi di seluruh area hotel",
  },
  {
    icon: Utensils,
    title: "Restoran",
    description: "Pengalaman bersantap mewah dengan hidangan internasional",
  },
  {
    icon: Coffee,
    title: "Layanan Kamar",
    description: "Layanan kamar 24 jam untuk kenyamanan Anda",
  },
  {
    icon: BedDouble,
    title: "Kamar Nyaman",
    description: "Kamar mewah dengan fasilitas modern",
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
              Rasakan Kemewahan & Kenyamanan
            </h1>
            <p className="mt-4 max-w-2xl text-lg sm:text-xl">
              Nikmati masa menginap Anda di hotel premium kami dengan fasilitas
              kelas dunia dan layanan yang luar biasa
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Button size="lg" asChild>
                <Link to="#booking-section">Pesan Sekarang</Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="bg-white/10 text-white hover:bg-white/20"
                asChild
              >
                <Link to="/rooms">Lihat Kamar</Link>
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
                  Tentang Hotel Kami
                </h2>
                <p className="mt-4 text-muted-foreground">
                  Terletak di jantung kota, hotel kami menghadirkan perpaduan
                  sempurna antara kemewahan, kenyamanan, dan kemudahan. Dengan
                  pemandangan yang menakjubkan, kamar-kamar yang elegan, serta
                  layanan yang luar biasa, kami pastikan setiap momen Anda
                  bersama kami menjadi pengalaman yang tak terlupakan.
                </p>
                <p className="mt-4 text-muted-foreground">
                  Baik Anda bepergian untuk urusan bisnis maupun liburan, staf
                  kami yang berdedikasi siap memberikan pelayanan terbaik untuk
                  membuat masa menginap Anda semakin berkesan. Sejak Anda tiba
                  hingga saat keberangkatan, kami berkomitmen untuk melampaui
                  harapan Anda.
                </p>
                <Button className="mt-6" variant="outline" asChild>
                  <Link to="/contact">Selengkapnya</Link>
                </Button>
              </div>
              <div className="relative aspect-video overflow-hidden rounded-lg">
                <img
                  src={"public/images/8.jpg"}
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
                Fasilitas Kami
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
                Nikmati berbagai fasilitas premium yang dirancang untuk membuat
                masa menginap Anda nyaman dan tak terlupakan
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
                Kamar Kami
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
                Pilih dari beragam kamar kami yang nyaman dan mewah
              </p>
            </div>
            <div className="mt-12 grid gap-6 md:grid-cols-3">
              {/* Kamar Standard */}
              <Card className="rounded-t-lg">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src="public/images/2.jpg"
                    alt="Kamar Standard"
                    className="object-cover transition-transform hover:scale-105"
                  />
                </div>
                <CardHeader>
                  <CardTitle>Kamar Standard</CardTitle>
                  <CardDescription>
                    Cocok untuk pelancong solo atau pasangan
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-2xl font-bold">
                    $100
                    <span className="text-sm font-normal text-muted-foreground">
                      /malam
                    </span>
                  </p>
                  <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-center">
                      <BedDouble className="mr-2 h-4 w-4" />
                      Tempat tidur queen size
                    </li>
                    <li className="flex items-center">
                      <Wifi className="mr-2 h-4 w-4" />
                      Wi-Fi gratis
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button className="w-full" asChild>
                    <Link to="/booking?room=standard">Pesan Sekarang</Link>
                  </Button>
                </CardFooter>
              </Card>

              {/* Kamar Deluxe */}
              <Card className="rounded-t-lg">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src="public/images/3.jpg"
                    alt="Kamar Deluxe"
                    className="object-cover transition-transform hover:scale-105"
                  />
                </div>
                <CardHeader>
                  <CardTitle>Kamar Deluxe</CardTitle>
                  <CardDescription>
                    Kamar luas dengan fasilitas premium
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-2xl font-bold">
                    $150
                    <span className="text-sm font-normal text-muted-foreground">
                      /malam
                    </span>
                  </p>
                  <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-center">
                      <BedDouble className="mr-2 h-4 w-4" />
                      Tempat tidur king size
                    </li>
                    <li className="flex items-center">
                      <Wifi className="mr-2 h-4 w-4" />
                      Wi-Fi gratis
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button className="w-full" asChild>
                    <Link to="/booking?room=deluxe">Pesan Sekarang</Link>
                  </Button>
                </CardFooter>
              </Card>

              {/* Suite */}
              <Card className="rounded-t-lg">
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
                    Suite mewah dengan ruang tamu terpisah
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-2xl font-bold">
                    $250
                    <span className="text-sm font-normal text-muted-foreground">
                      /malam
                    </span>
                  </p>
                  <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-center">
                      <BedDouble className="mr-2 h-4 w-4" />
                      Tempat tidur king size
                    </li>
                    <li className="flex items-center">
                      <Wifi className="mr-2 h-4 w-4" />
                      Wi-Fi gratis
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button className="w-full" asChild>
                    <Link to="/booking?room=suite">Pesan Sekarang</Link>
                  </Button>
                </CardFooter>
              </Card>
            </div>
            <div className="mt-12 text-center">
              <Button variant="outline" size="lg" asChild>
                <Link to="/rooms">Lihat Semua Kamar</Link>
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
                  Hubungi Kami
                </h2>
                <p className="mt-4 text-muted-foreground">
                  Punya pertanyaan atau butuh bantuan? Tim kami siap membantu
                  Anda dengan segala pertanyaan.
                </p>

                <div className="mt-8 space-y-4">
                  <div className="flex items-start">
                    <MapPin className="mr-3 h-5 w-5 text-primary" />
                    <div>
                      <h3 className="font-medium">Alamat</h3>
                      <p className="text-muted-foreground">
                        123 Luxury Avenue, Pusat Kota, Negara
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <Phone className="mr-3 h-5 w-5 text-primary" />
                    <div>
                      <h3 className="font-medium">Telepon</h3>
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
                      <h3 className="font-medium">Jam Resepsionis</h3>
                      <p className="text-muted-foreground">
                        24 jam, 365 hari dalam setahun
                      </p>
                    </div>
                  </div>
                </div>

                <Button className="mt-8" asChild>
                  <Link to="/contact">Hubungi Kami</Link>
                </Button>
              </div>

              <div className="relative h-[400px] overflow-hidden rounded-lg">
                <img
                  src="public/images/10.jpg"
                  alt="Lokasi Peta Hotel"
                  className="object-cover h-full"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black/20">
                  <Button
                    variant="outline"
                    className="bg-white/80 hover:bg-white"
                  >
                    Lihat di Peta
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
