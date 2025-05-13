import { Search } from "lucide-react";

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
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import MainLayout from "../../components/layout/main-layout";

export default function CheckStatusPage() {
  return (
    <MainLayout>
      <div className="container py-10">
        <div className="mx-auto max-w-md">
          <div className="text-center">
            <h1 className="text-3xl font-bold tracking-tight">
              Cek Status Reservasi
            </h1>
            <p className="mt-2 text-muted-foreground">
              Masukkan detail reservasi Anda untuk memeriksa status pemesanan
            </p>
          </div>

          <Card className="mt-8">
            <CardHeader>
              <CardTitle>Temukan Reservasi Anda</CardTitle>
              <CardDescription>
                Gunakan nomor reservasi atau email untuk memeriksa status
                pemesanan Anda
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="reservation" className="w-full">
                <TabsList className="grid w-full grid-cols-2">
                  <TabsTrigger value="reservation">Nomor Reservasi</TabsTrigger>
                  <TabsTrigger value="email">Email</TabsTrigger>
                </TabsList>
                <TabsContent value="reservation" className="mt-4">
                  <form className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="reservationNumber">Nomor Reservasi</Label>
                      <Input
                        id="reservationNumber"
                        placeholder="Masukkan nomor reservasi Anda"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Nama Belakang</Label>
                      <Input
                        id="lastName"
                        placeholder="Masukkan nama belakang Anda"
                      />
                    </div>
                    <Button type="submit" className="w-full">
                      <Search className="mr-2 h-4 w-4" />
                      Cek Status
                    </Button>
                  </form>
                </TabsContent>
                <TabsContent value="email" className="mt-4">
                  <form className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="email">Alamat Email</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="Masukkan alamat email Anda"
                      />
                    </div>
                    <Button type="submit" className="w-full">
                      <Search className="mr-2 h-4 w-4" />
                      Temukan Reservasi
                    </Button>
                  </form>
                </TabsContent>
              </Tabs>
            </CardContent>
            <CardFooter className="flex flex-col text-center text-sm text-muted-foreground">
              <p>Kesulitan menemukan reservasi Anda?</p>
              <p>Hubungi tim dukungan kami di support@luxuryhotel.com</p>
            </CardFooter>
          </Card>
        </div>
      </div>
    </MainLayout>
  );
}
