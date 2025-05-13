import { Mail, MapPin, Phone } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import MainLayout from "../../components/layout/main-layout";

export default function ContactPage() {
  return (
    <MainLayout>
      <div className="container mx-auto py-10 md:py-16">
        <div className="text-center">
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Hubungi Kami
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            Punya pertanyaan atau butuh bantuan? Tim kami siap membantu Anda.
          </p>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2">
          <div>
            <Card>
              <CardHeader>
                <CardTitle>Kirim Pesan kepada Kami</CardTitle>
                <CardDescription>
                  Isi formulir di bawah ini dan kami akan segera menghubungi
                  Anda.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-4">
                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="name">Nama</Label>
                      <Input id="name" placeholder="Nama Anda" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" type="email" placeholder="Email Anda" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="subject">Subjek</Label>
                    <Input id="subject" placeholder="Subjek pesan Anda" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message">Pesan</Label>
                    <Textarea
                      id="message"
                      placeholder="Pesan Anda"
                      className="min-h-[150px] resize-none"
                    />
                  </div>
                </form>
              </CardContent>
              <CardFooter>
                <Button className="w-full">Kirim Pesan</Button>
              </CardFooter>
            </Card>
          </div>

          <div className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle>Informasi Kontak</CardTitle>
                <CardDescription>
                  Hubungi kami melalui informasi kontak berikut.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
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
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Jam Operasional</CardTitle>
                <CardDescription>
                  Resepsionis kami buka 24 jam untuk membantu Anda.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>Senin - Jumat</span>
                    <span>24 Jam</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sabtu - Minggu</span>
                    <span>24 Jam</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Hari Libur</span>
                    <span>24 Jam</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* <div className="relative h-[300px] overflow-hidden rounded-lg bg-muted">
              <div className="flex h-full items-center justify-center">
                <p className="text-center text-muted-foreground">
                  Peta interaktif akan ditampilkan di sini
                </p>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
