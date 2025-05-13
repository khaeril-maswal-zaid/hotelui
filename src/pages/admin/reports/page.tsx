"use client";

import { useState } from "react";
import {
  BarChart,
  Calendar,
  Download,
  FileText,
  LineChart,
  PieChart,
  Printer,
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
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Calendar as CalendarComponent } from "@/components/ui/calendar";
import { format } from "date-fns";
import AdminLayout from "../../../components/layout/admin-layout";

export default function ReportsPage() {
  const [date, setDate] = useState<Date>(new Date());
  const [reportType, setReportType] = useState("occupancy");
  const [reportPeriod, setReportPeriod] = useState("daily");

  return (
    <AdminLayout>
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Laporan</h1>
          <p className="text-muted-foreground">
            Lihat dan ekspor laporan kinerja hotel
          </p>
        </div>
        <div className="flex gap-2">
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                className="w-[240px] justify-start text-left font-normal"
              >
                <Calendar className="mr-2 h-4 w-4" />
                {format(date, "PPP")}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="end">
              <CalendarComponent
                mode="single"
                selected={date}
                onSelect={(date) => date && setDate(date)}
                initialFocus
              />
            </PopoverContent>
          </Popover>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button>
                <Download className="mr-2 h-4 w-4" />
                Ekspor
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>Opsi Ekspor</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <FileText className="mr-2 h-4 w-4" />
                Ekspor sebagai PDF
              </DropdownMenuItem>
              <DropdownMenuItem>
                <FileText className="mr-2 h-4 w-4" />
                Ekspor sebagai Excel
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Printer className="mr-2 h-4 w-4" />
                Cetak Laporan
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Tingkat Hunian
            </CardTitle>
            <BarChart className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">78%</div>
            <p className="text-xs text-muted-foreground">+5% dari bulan lalu</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Pendapatan</CardTitle>
            <LineChart className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$24,780</div>
            <p className="text-xs text-muted-foreground">
              +12% dari bulan lalu
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Tarif Harian Rata-rata
            </CardTitle>
            <PieChart className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$165</div>
            <p className="text-xs text-muted-foreground">+3% dari bulan lalu</p>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <CardTitle className="pb-2">Laporan Kinerja Hotel</CardTitle>
              <CardDescription>
                Lihat laporan terperinci tentang metrik kinerja hotel
              </CardDescription>
            </div>
            <div className="flex gap-2">
              <Select value={reportType} onValueChange={setReportType}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Jenis Laporan" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="occupancy">
                    Laporan Tingkat Hunian
                  </SelectItem>
                  <SelectItem value="revenue">Laporan Pendapatan</SelectItem>
                  <SelectItem value="guests">Statistik Tamu</SelectItem>
                </SelectContent>
              </Select>
              <Select value={reportPeriod} onValueChange={setReportPeriod}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Periode Waktu" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="daily">Harian</SelectItem>
                  <SelectItem value="weekly">Mingguan</SelectItem>
                  <SelectItem value="monthly">Bulanan</SelectItem>
                  <SelectItem value="yearly">Tahunan</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="table">
            <TabsList className="mb-4">
              <TabsTrigger value="table">Tampilan Tabel</TabsTrigger>
              <TabsTrigger value="chart">Tampilan Grafik</TabsTrigger>
            </TabsList>

            <TabsContent value="table">
              {reportType === "occupancy" && (
                <OccupancyReport period={reportPeriod} />
              )}

              {reportType === "revenue" && (
                <RevenueReport period={reportPeriod} />
              )}

              {reportType === "guests" && <GuestReport period={reportPeriod} />}
            </TabsContent>

            <TabsContent value="chart">
              <div className="flex h-[400px] items-center justify-center rounded-md border border-dashed p-8">
                <div className="text-center">
                  <LineChart className="mx-auto h-10 w-10 text-muted-foreground" />
                  <h3 className="mt-2 text-lg font-medium">
                    Visualisasi Grafik
                  </h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Visualisasi grafik akan ditampilkan di sini
                  </p>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button variant="outline">Periode Sebelumnya</Button>
          <Button variant="outline">Periode Berikutnya</Button>
        </CardFooter>
      </Card>
    </AdminLayout>
  );
}

function OccupancyReport({ period }: { period: string }) {
  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>
              {period === "daily"
                ? "Tanggal"
                : period === "weekly"
                ? "Minggu"
                : "Bulan"}
            </TableHead>
            <TableHead>Pendapatan Kamar</TableHead>
            <TableHead>Pendapatan F&B</TableHead>
            <TableHead>Pendapatan Lainnya</TableHead>
            <TableHead>Total Pendapatan</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {period === "daily" && (
            <>
              <TableRow>
                <TableCell>1 Mei 2023</TableCell>
                <TableCell>$3,600</TableCell>
                <TableCell>$1,200</TableCell>
                <TableCell>$450</TableCell>
                <TableCell>$5,250</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>2 Mei 2023</TableCell>
                <TableCell>$3,900</TableCell>
                <TableCell>$1,350</TableCell>
                <TableCell>$500</TableCell>
                <TableCell>$5,750</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>3 Mei 2023</TableCell>
                <TableCell>$3,300</TableCell>
                <TableCell>$1,100</TableCell>
                <TableCell>$400</TableCell>
                <TableCell>$4,800</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>4 Mei 2023</TableCell>
                <TableCell>$3,750</TableCell>
                <TableCell>$1,250</TableCell>
                <TableCell>$480</TableCell>
                <TableCell>$5,480</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>5 Mei 2023</TableCell>
                <TableCell>$4,200</TableCell>
                <TableCell>$1,500</TableCell>
                <TableCell>$550</TableCell>
                <TableCell>$6,250</TableCell>
              </TableRow>
            </>
          )}

          {period === "weekly" && (
            <>
              <TableRow>
                <TableCell>Minggu 1 (1-7 Mei)</TableCell>
                <TableCell>$26,250</TableCell>
                <TableCell>$8,750</TableCell>
                <TableCell>$3,200</TableCell>
                <TableCell>$38,200</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Minggu 2 (8-14 Mei)</TableCell>
                <TableCell>$25,200</TableCell>
                <TableCell>$8,400</TableCell>
                <TableCell>$3,100</TableCell>
                <TableCell>$36,700</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Minggu 3 (15-21 Mei)</TableCell>
                <TableCell>$27,000</TableCell>
                <TableCell>$9,000</TableCell>
                <TableCell>$3,300</TableCell>
                <TableCell>$39,300</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Minggu 4 (22-28 Mei)</TableCell>
                <TableCell>$28,500</TableCell>
                <TableCell>$9,500</TableCell>
                <TableCell>$3,500</TableCell>
                <TableCell>$41,500</TableCell>
              </TableRow>
            </>
          )}

          {period === "monthly" && (
            <>
              <TableRow>
                <TableCell>Januari 2023</TableCell>
                <TableCell>$104,700</TableCell>
                <TableCell>$34,900</TableCell>
                <TableCell>$12,800</TableCell>
                <TableCell>$152,400</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Februari 2023</TableCell>
                <TableCell>$98,250</TableCell>
                <TableCell>$32,750</TableCell>
                <TableCell>$12,000</TableCell>
                <TableCell>$143,000</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Maret 2023</TableCell>
                <TableCell>$111,600</TableCell>
                <TableCell>$37,200</TableCell>
                <TableCell>$13,600</TableCell>
                <TableCell>$162,400</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>April 2023</TableCell>
                <TableCell>$114,750</TableCell>
                <TableCell>$38,250</TableCell>
                <TableCell>$14,000</TableCell>
                <TableCell>$167,000</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Mei 2023</TableCell>
                <TableCell>$120,000</TableCell>
                <TableCell>$40,000</TableCell>
                <TableCell>$14,700</TableCell>
                <TableCell>$174,700</TableCell>
              </TableRow>
            </>
          )}
        </TableBody>
      </Table>
    </div>
  );
}

function RevenueReport({ period }: { period: string }) {
  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>
              {period === "daily"
                ? "Tanggal"
                : period === "weekly"
                ? "Minggu"
                : "Bulan"}
            </TableHead>
            <TableHead>Total Kamar</TableHead>
            <TableHead>Kamar Terisi</TableHead>
            <TableHead>Kamar Tersedia</TableHead>
            <TableHead>Tingkat Hunian</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {period === "daily" && (
            <>
              <TableRow>
                <TableCell>1 Mei 2023</TableCell>
                <TableCell>30</TableCell>
                <TableCell>24</TableCell>
                <TableCell>6</TableCell>
                <TableCell>80%</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>2 Mei 2023</TableCell>
                <TableCell>30</TableCell>
                <TableCell>26</TableCell>
                <TableCell>4</TableCell>
                <TableCell>87%</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>3 Mei 2023</TableCell>
                <TableCell>30</TableCell>
                <TableCell>22</TableCell>
                <TableCell>8</TableCell>
                <TableCell>73%</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>4 Mei 2023</TableCell>
                <TableCell>30</TableCell>
                <TableCell>25</TableCell>
                <TableCell>5</TableCell>
                <TableCell>83%</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>5 Mei 2023</TableCell>
                <TableCell>30</TableCell>
                <TableCell>28</TableCell>
                <TableCell>2</TableCell>
                <TableCell>93%</TableCell>
              </TableRow>
            </>
          )}

          {period === "weekly" && (
            <>
              <TableRow>
                <TableCell>Minggu 1 (1-7 Mei)</TableCell>
                <TableCell>210</TableCell>
                <TableCell>175</TableCell>
                <TableCell>35</TableCell>
                <TableCell>83%</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Minggu 2 (8-14 Mei)</TableCell>
                <TableCell>210</TableCell>
                <TableCell>168</TableCell>
                <TableCell>42</TableCell>
                <TableCell>80%</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Minggu 3 (15-21 Mei)</TableCell>
                <TableCell>210</TableCell>
                <TableCell>180</TableCell>
                <TableCell>30</TableCell>
                <TableCell>86%</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Minggu 4 (22-28 Mei)</TableCell>
                <TableCell>210</TableCell>
                <TableCell>190</TableCell>
                <TableCell>20</TableCell>
                <TableCell>90%</TableCell>
              </TableRow>
            </>
          )}

          {period === "monthly" && (
            <>
              <TableRow>
                <TableCell>Januari 2023</TableCell>
                <TableCell>930</TableCell>
                <TableCell>698</TableCell>
                <TableCell>232</TableCell>
                <TableCell>75%</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Februari 2023</TableCell>
                <TableCell>840</TableCell>
                <TableCell>655</TableCell>
                <TableCell>185</TableCell>
                <TableCell>78%</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Maret 2023</TableCell>
                <TableCell>930</TableCell>
                <TableCell>744</TableCell>
                <TableCell>186</TableCell>
                <TableCell>80%</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>April 2023</TableCell>
                <TableCell>900</TableCell>
                <TableCell>765</TableCell>
                <TableCell>135</TableCell>
                <TableCell>85%</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Mei 2023</TableCell>
                <TableCell>930</TableCell>
                <TableCell>800</TableCell>
                <TableCell>130</TableCell>
                <TableCell>86%</TableCell>
              </TableRow>
            </>
          )}
        </TableBody>
      </Table>
    </div>
  );
}

function GuestReport({ period }: { period: string }) {
  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>
              {period === "daily"
                ? "Tanggal"
                : period === "weekly"
                ? "Minggu"
                : "Bulan"}
            </TableHead>
            <TableHead>Tamu Baru</TableHead>
            <TableHead>Tamu Kembali</TableHead>
            <TableHead>Total Tamu</TableHead>
            <TableHead>Rata-rata Durasi Menginap</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {period === "daily" && (
            <>
              <TableRow>
                <TableCell>1 Mei 2023</TableCell>
                <TableCell>8</TableCell>
                <TableCell>16</TableCell>
                <TableCell>24</TableCell>
                <TableCell>2,5 hari</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>2 Mei 2023</TableCell>
                <TableCell>10</TableCell>
                <TableCell>16</TableCell>
                <TableCell>26</TableCell>
                <TableCell>2,3 hari</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>3 Mei 2023</TableCell>
                <TableCell>6</TableCell>
                <TableCell>16</TableCell>
                <TableCell>22</TableCell>
                <TableCell>2,7 hari</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>4 Mei 2023</TableCell>
                <TableCell>9</TableCell>
                <TableCell>16</TableCell>
                <TableCell>25</TableCell>
                <TableCell>2,4 hari</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>5 Mei 2023</TableCell>
                <TableCell>12</TableCell>
                <TableCell>16</TableCell>
                <TableCell>28</TableCell>
                <TableCell>2,2 hari</TableCell>
              </TableRow>
            </>
          )}

          {period === "weekly" && (
            <>
              <TableRow>
                <TableCell>Minggu 1 (1-7 Mei)</TableCell>
                <TableCell>45</TableCell>
                <TableCell>130</TableCell>
                <TableCell>175</TableCell>
                <TableCell>2,4 hari</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Minggu 2 (8-14 Mei)</TableCell>
                <TableCell>38</TableCell>
                <TableCell>130</TableCell>
                <TableCell>168</TableCell>
                <TableCell>2,5 hari</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Minggu 3 (15-21 Mei)</TableCell>
                <TableCell>50</TableCell>
                <TableCell>130</TableCell>
                <TableCell>180</TableCell>
                <TableCell>2,3 hari</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Minggu 4 (22-28 Mei)</TableCell>
                <TableCell>60</TableCell>
                <TableCell>130</TableCell>
                <TableCell>190</TableCell>
                <TableCell>2,2 hari</TableCell>
              </TableRow>
            </>
          )}

          {period === "monthly" && (
            <>
              <TableRow>
                <TableCell>Januari 2023</TableCell>
                <TableCell>168</TableCell>
                <TableCell>530</TableCell>
                <TableCell>698</TableCell>
                <TableCell>2,6 hari</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Februari 2023</TableCell>
                <TableCell>155</TableCell>
                <TableCell>500</TableCell>
                <TableCell>655</TableCell>
                <TableCell>2,5 hari</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Maret 2023</TableCell>
                <TableCell>184</TableCell>
                <TableCell>560</TableCell>
                <TableCell>744</TableCell>
                <TableCell>2,4 hari</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>April 2023</TableCell>
                <TableCell>195</TableCell>
                <TableCell>570</TableCell>
                <TableCell>765</TableCell>
                <TableCell>2,3 hari</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Mei 2023</TableCell>
                <TableCell>210</TableCell>
                <TableCell>590</TableCell>
                <TableCell>800</TableCell>
                <TableCell>2,4 hari</TableCell>
              </TableRow>
            </>
          )}
        </TableBody>
      </Table>
    </div>
  );
}
