"use client";

import { useState } from "react";
import { Save } from "lucide-react";

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
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { Separator } from "@/components/ui/separator";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import AdminLayout from "../../../components/layout/admin-layout";

export default function SettingsPage() {
  const [activeTab, setActiveTab] = useState("general");

  return (
    <AdminLayout>
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Website Settings</h1>
        <p className="text-muted-foreground">
          Manage your hotel website settings and content
        </p>
      </div>

      <Tabs
        defaultValue="general"
        value={activeTab}
        onValueChange={setActiveTab}
        className="space-y-4"
      >
        <TabsList>
          <TabsTrigger value="general">Umum</TabsTrigger>
          <TabsTrigger value="homepage">Konten Beranda</TabsTrigger>
          <TabsTrigger value="contact">Informasi Kontak</TabsTrigger>
          <TabsTrigger value="accounts">Akun Admin</TabsTrigger>
        </TabsList>

        <TabsContent value="general" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Informasi Hotel</CardTitle>
              <CardDescription>
                Perbarui informasi dasar hotel Anda yang ditampilkan di seluruh
                situs web
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="hotelName">Nama Hotel</Label>
                <Input id="hotelName" defaultValue="Hotel Mewah" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="hotelTagline">Slogan</Label>
                <Input
                  id="hotelTagline"
                  defaultValue="Rasakan Kemewahan & Kenyamanan"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="hotelDescription">Deskripsi Singkat</Label>
                <Textarea
                  id="hotelDescription"
                  defaultValue="Nikmati masa inap Anda di hotel premium kami dengan fasilitas kelas dunia dan layanan yang luar biasa"
                  className="min-h-[100px]"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="hotelLogo">Logo Hotel</Label>
                <div className="flex items-center gap-4">
                  <Avatar className="h-16 w-16">
                    <AvatarImage src="/placeholder.svg" alt="Logo Hotel" />
                    <AvatarFallback>LH</AvatarFallback>
                  </Avatar>
                  <Input id="hotelLogo" type="file" />
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button>
                <Save className="mr-2 h-4 w-4" />
                Simpan Perubahan
              </Button>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Pengaturan Website</CardTitle>
              <CardDescription>
                Konfigurasikan pengaturan dan preferensi umum situs web
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="currency">Mata Uang</Label>
                <Select defaultValue="usd">
                  <SelectTrigger id="currency">
                    <SelectValue placeholder="Pilih mata uang" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="usd">USD ($)</SelectItem>
                    <SelectItem value="eur">EUR (€)</SelectItem>
                    <SelectItem value="gbp">GBP (£)</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="timezone">Zona Waktu</Label>
                <Select defaultValue="est">
                  <SelectTrigger id="timezone">
                    <SelectValue placeholder="Pilih zona waktu" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="est">Waktu Timur (ET)</SelectItem>
                    <SelectItem value="cst">Waktu Tengah (CT)</SelectItem>
                    <SelectItem value="mst">Waktu Pegunungan (MT)</SelectItem>
                    <SelectItem value="pst">Waktu Pasifik (PT)</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label htmlFor="maintenance">Mode Pemeliharaan</Label>
                  <p className="text-sm text-muted-foreground">
                    Aktifkan mode pemeliharaan untuk situs web
                  </p>
                </div>
                <Switch id="maintenance" />
              </div>
              <Separator />
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label htmlFor="bookingEnabled">Pemesanan Online</Label>
                  <p className="text-sm text-muted-foreground">
                    Aktifkan fitur pemesanan online
                  </p>
                </div>
                <Switch id="bookingEnabled" defaultChecked />
              </div>
            </CardContent>
            <CardFooter>
              <Button>
                <Save className="mr-2 h-4 w-4" />
                Simpan Perubahan
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="homepage" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Bagian Hero</CardTitle>
              <CardDescription>
                Perbarui konten utama di bagian hero pada halaman depan
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="heroTitle">Judul Hero</Label>
                <Input
                  id="heroTitle"
                  defaultValue="Rasakan Kemewahan & Kenyamanan"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="heroSubtitle">Subjudul Hero</Label>
                <Input
                  id="heroSubtitle"
                  defaultValue="Nikmati masa inap Anda di hotel premium kami dengan fasilitas kelas dunia dan layanan yang luar biasa"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="heroImage">Gambar Latar Hero</Label>
                <div className="flex items-center gap-4">
                  <div className="relative h-20 w-32 overflow-hidden rounded-md border">
                    <img
                      src="/placeholder.svg"
                      alt="Latar Belakang Hero"
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <Input id="heroImage" type="file" />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="ctaText">Teks Tombol Aksi</Label>
                <Input id="ctaText" defaultValue="Pesan Sekarang" />
              </div>
            </CardContent>
            <CardFooter>
              <Button>
                <Save className="mr-2 h-4 w-4" />
                Simpan Perubahan
              </Button>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Bagian Unggulan</CardTitle>
              <CardDescription>
                Kelola konten untuk bagian unggulan di halaman depan
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="aboutTitle">Judul Bagian Tentang</Label>
                <Input id="aboutTitle" defaultValue="Tentang Hotel Kami" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="aboutContent">Konten Bagian Tentang</Label>
                <Textarea
                  id="aboutContent"
                  defaultValue="Terletak di pusat kota, hotel kami menawarkan perpaduan sempurna antara kemewahan, kenyamanan, dan kemudahan. Dengan pemandangan menakjubkan, kamar elegan, dan layanan luar biasa, kami pastikan masa inap Anda bersama kami akan menjadi pengalaman yang tak terlupakan."
                  className="min-h-[100px]"
                />
              </div>
              <Separator className="my-4" />
              <div className="space-y-2">
                <Label htmlFor="facilitiesTitle">Judul Bagian Fasilitas</Label>
                <Input id="facilitiesTitle" defaultValue="Fasilitas Kami" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="facilitiesSubtitle">
                  Subjudul Bagian Fasilitas
                </Label>
                <Input
                  id="facilitiesSubtitle"
                  defaultValue="Nikmati fasilitas premium kami yang dirancang untuk membuat masa inap Anda nyaman dan berkesan"
                />
              </div>
              <Separator className="my-4" />
              <div className="space-y-2">
                <Label htmlFor="roomsTitle">Judul Bagian Kamar</Label>
                <Input id="roomsTitle" defaultValue="Kamar Kami" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="roomsSubtitle">Subjudul Bagian Kamar</Label>
                <Input
                  id="roomsSubtitle"
                  defaultValue="Pilih dari berbagai pilihan kamar kami yang nyaman dan mewah"
                />
              </div>
            </CardContent>
            <CardFooter>
              <Button>
                <Save className="mr-2 h-4 w-4" />
                Simpan Perubahan
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="contact" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Informasi Kontak</CardTitle>
              <CardDescription>
                Perbarui informasi kontak hotel Anda yang ditampilkan di situs
                web
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="address">Alamat</Label>
                <Input
                  id="address"
                  defaultValue="123 Luxury Avenue, City Center, Negara"
                />
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="phone">Nomor Telepon</Label>
                  <Input id="phone" defaultValue="+1 (555) 123-4567" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Alamat Email</Label>
                  <Input id="email" defaultValue="info@luxuryhotel.com" />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="receptionHours">Jam Resepsionis</Label>
                <Input
                  id="receptionHours"
                  defaultValue="24/7, 365 hari dalam setahun"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="mapEmbed">Kode Sematan Google Maps</Label>
                <Textarea
                  id="mapEmbed"
                  placeholder="Tempelkan kode sematan Google Maps di sini"
                  className="min-h-[100px]"
                />
              </div>
            </CardContent>
            <CardFooter>
              <Button>
                <Save className="mr-2 h-4 w-4" />
                Simpan Perubahan
              </Button>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Media Sosial</CardTitle>
              <CardDescription>
                Tambahkan tautan media sosial hotel Anda
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="facebook">Facebook</Label>
                <Input
                  id="facebook"
                  placeholder="https://facebook.com/yourbusiness"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="instagram">Instagram</Label>
                <Input
                  id="instagram"
                  placeholder="https://instagram.com/yourbusiness"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="twitter">Twitter</Label>
                <Input
                  id="twitter"
                  placeholder="https://twitter.com/yourbusiness"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="linkedin">LinkedIn</Label>
                <Input
                  id="linkedin"
                  placeholder="https://linkedin.com/company/yourbusiness"
                />
              </div>
            </CardContent>
            <CardFooter>
              <Button>
                <Save className="mr-2 h-4 w-4" />
                Simpan Perubahan
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="accounts" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Akun Admin</CardTitle>
              <CardDescription>
                Kelola akun administrator untuk sistem manajemen hotel
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="rounded-md border">
                <table className="w-full">
                  <thead>
                    <tr className="border-b bg-muted/50">
                      <th className="p-2 text-left font-medium">Nama</th>
                      <th className="p-2 text-left font-medium">Email</th>
                      <th className="p-2 text-left font-medium">Peran</th>
                      <th className="p-2 text-left font-medium">Status</th>
                      <th className="p-2 text-left font-medium">Tindakan</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b">
                      <td className="p-2">
                        <div className="flex items-center gap-2">
                          <Avatar className="h-8 w-8">
                            <AvatarFallback>AD</AvatarFallback>
                          </Avatar>
                          <span>Admin User</span>
                        </div>
                      </td>
                      <td className="p-2">admin@luxuryhotel.com</td>
                      <td className="p-2">Super Admin</td>
                      <td className="p-2">
                        <span className="rounded-full bg-green-100 px-2 py-1 text-xs text-green-800">
                          Aktif
                        </span>
                      </td>
                      <td className="p-2">
                        <div className="flex gap-2">
                          <Button variant="outline" size="sm">
                            Edit
                          </Button>
                        </div>
                      </td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-2">
                        <div className="flex items-center gap-2">
                          <Avatar className="h-8 w-8">
                            <AvatarFallback>JD</AvatarFallback>
                          </Avatar>
                          <span>Jane Doe</span>
                        </div>
                      </td>
                      <td className="p-2">jane.doe@luxuryhotel.com</td>
                      <td className="p-2">Manager</td>
                      <td className="p-2">
                        <span className="rounded-full bg-green-100 px-2 py-1 text-xs text-green-800">
                          Aktif
                        </span>
                      </td>
                      <td className="p-2">
                        <div className="flex gap-2">
                          <Button variant="outline" size="sm">
                            Edit
                          </Button>
                          <Button
                            variant="outline"
                            size="sm"
                            className="text-destructive"
                          >
                            Hapus
                          </Button>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className="p-2">
                        <div className="flex items-center gap-2">
                          <Avatar className="h-8 w-8">
                            <AvatarFallback>JS</AvatarFallback>
                          </Avatar>
                          <span>John Smith</span>
                        </div>
                      </td>
                      <td className="p-2">john.smith@luxuryhotel.com</td>
                      <td className="p-2">Staff</td>
                      <td className="p-2">
                        <span className="rounded-full bg-yellow-100 px-2 py-1 text-xs text-yellow-800">
                          Menunggu
                        </span>
                      </td>
                      <td className="p-2">
                        <div className="flex gap-2">
                          <Button variant="outline" size="sm">
                            Edit
                          </Button>
                          <Button
                            variant="outline"
                            size="sm"
                            className="text-destructive"
                          >
                            Hapus
                          </Button>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline">Ekspor Pengguna</Button>
              <Button>Tambah Admin Baru</Button>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Akun Anda</CardTitle>
              <CardDescription>
                Perbarui informasi akun dan kata sandi Anda
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center gap-4">
                <Avatar className="h-16 w-16">
                  <AvatarFallback>AD</AvatarFallback>
                </Avatar>
                <div>
                  <h3 className="font-medium">Admin User</h3>
                  <p className="text-sm text-muted-foreground">
                    admin@luxuryhotel.com
                  </p>
                </div>
              </div>
              <Separator />
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="currentPassword">Kata Sandi Saat Ini</Label>
                  <Input id="currentPassword" type="password" />
                </div>
                <div></div>
                <div className="space-y-2">
                  <Label htmlFor="newPassword">Kata Sandi Baru</Label>
                  <Input id="newPassword" type="password" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="confirmPassword">
                    Konfirmasi Kata Sandi Baru
                  </Label>
                  <Input id="confirmPassword" type="password" />
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button>
                <Save className="mr-2 h-4 w-4" />
                Perbarui Kata Sandi
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </AdminLayout>
  );
}
