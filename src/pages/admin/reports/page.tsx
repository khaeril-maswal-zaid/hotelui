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
          <h1 className="text-3xl font-bold tracking-tight">Reports</h1>
          <p className="text-muted-foreground">
            View and export hotel performance reports
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
                Export
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>Export Options</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <FileText className="mr-2 h-4 w-4" />
                Export as PDF
              </DropdownMenuItem>
              <DropdownMenuItem>
                <FileText className="mr-2 h-4 w-4" />
                Export as Excel
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Printer className="mr-2 h-4 w-4" />
                Print Report
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Occupancy Rate
            </CardTitle>
            <BarChart className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">78%</div>
            <p className="text-xs text-muted-foreground">+5% from last month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Revenue</CardTitle>
            <LineChart className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$24,780</div>
            <p className="text-xs text-muted-foreground">
              +12% from last month
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Average Daily Rate
            </CardTitle>
            <PieChart className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$165</div>
            <p className="text-xs text-muted-foreground">+3% from last month</p>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <CardTitle>Hotel Performance Reports</CardTitle>
              <CardDescription>
                View detailed reports on hotel performance metrics
              </CardDescription>
            </div>
            <div className="flex gap-2">
              <Select value={reportType} onValueChange={setReportType}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Report Type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="occupancy">Occupancy Report</SelectItem>
                  <SelectItem value="revenue">Revenue Report</SelectItem>
                  <SelectItem value="guests">Guest Statistics</SelectItem>
                </SelectContent>
              </Select>
              <Select value={reportPeriod} onValueChange={setReportPeriod}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Time Period" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="daily">Daily</SelectItem>
                  <SelectItem value="weekly">Weekly</SelectItem>
                  <SelectItem value="monthly">Monthly</SelectItem>
                  <SelectItem value="yearly">Yearly</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="table">
            <TabsList className="mb-4">
              <TabsTrigger value="table">Table View</TabsTrigger>
              <TabsTrigger value="chart">Chart View</TabsTrigger>
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
                    Chart Visualization
                  </h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Chart visualization would be displayed here
                  </p>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button variant="outline">Previous Period</Button>
          <Button variant="outline">Next Period</Button>
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
                ? "Date"
                : period === "weekly"
                ? "Week"
                : "Month"}
            </TableHead>
            <TableHead>Total Rooms</TableHead>
            <TableHead>Occupied Rooms</TableHead>
            <TableHead>Available Rooms</TableHead>
            <TableHead>Occupancy Rate</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {period === "daily" && (
            <>
              <TableRow>
                <TableCell>May 1, 2023</TableCell>
                <TableCell>30</TableCell>
                <TableCell>24</TableCell>
                <TableCell>6</TableCell>
                <TableCell>80%</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>May 2, 2023</TableCell>
                <TableCell>30</TableCell>
                <TableCell>26</TableCell>
                <TableCell>4</TableCell>
                <TableCell>87%</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>May 3, 2023</TableCell>
                <TableCell>30</TableCell>
                <TableCell>22</TableCell>
                <TableCell>8</TableCell>
                <TableCell>73%</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>May 4, 2023</TableCell>
                <TableCell>30</TableCell>
                <TableCell>25</TableCell>
                <TableCell>5</TableCell>
                <TableCell>83%</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>May 5, 2023</TableCell>
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
                <TableCell>Week 1 (May 1-7)</TableCell>
                <TableCell>210</TableCell>
                <TableCell>175</TableCell>
                <TableCell>35</TableCell>
                <TableCell>83%</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Week 2 (May 8-14)</TableCell>
                <TableCell>210</TableCell>
                <TableCell>168</TableCell>
                <TableCell>42</TableCell>
                <TableCell>80%</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Week 3 (May 15-21)</TableCell>
                <TableCell>210</TableCell>
                <TableCell>180</TableCell>
                <TableCell>30</TableCell>
                <TableCell>86%</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Week 4 (May 22-28)</TableCell>
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
                <TableCell>January 2023</TableCell>
                <TableCell>930</TableCell>
                <TableCell>698</TableCell>
                <TableCell>232</TableCell>
                <TableCell>75%</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>February 2023</TableCell>
                <TableCell>840</TableCell>
                <TableCell>655</TableCell>
                <TableCell>185</TableCell>
                <TableCell>78%</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>March 2023</TableCell>
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
                <TableCell>May 2023</TableCell>
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

function RevenueReport({ period }: { period: string }) {
  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>
              {period === "daily"
                ? "Date"
                : period === "weekly"
                ? "Week"
                : "Month"}
            </TableHead>
            <TableHead>Room Revenue</TableHead>
            <TableHead>F&B Revenue</TableHead>
            <TableHead>Other Revenue</TableHead>
            <TableHead>Total Revenue</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {period === "daily" && (
            <>
              <TableRow>
                <TableCell>May 1, 2023</TableCell>
                <TableCell>$3,600</TableCell>
                <TableCell>$1,200</TableCell>
                <TableCell>$450</TableCell>
                <TableCell>$5,250</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>May 2, 2023</TableCell>
                <TableCell>$3,900</TableCell>
                <TableCell>$1,350</TableCell>
                <TableCell>$500</TableCell>
                <TableCell>$5,750</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>May 3, 2023</TableCell>
                <TableCell>$3,300</TableCell>
                <TableCell>$1,100</TableCell>
                <TableCell>$400</TableCell>
                <TableCell>$4,800</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>May 4, 2023</TableCell>
                <TableCell>$3,750</TableCell>
                <TableCell>$1,250</TableCell>
                <TableCell>$480</TableCell>
                <TableCell>$5,480</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>May 5, 2023</TableCell>
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
                <TableCell>Week 1 (May 1-7)</TableCell>
                <TableCell>$26,250</TableCell>
                <TableCell>$8,750</TableCell>
                <TableCell>$3,200</TableCell>
                <TableCell>$38,200</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Week 2 (May 8-14)</TableCell>
                <TableCell>$25,200</TableCell>
                <TableCell>$8,400</TableCell>
                <TableCell>$3,100</TableCell>
                <TableCell>$36,700</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Week 3 (May 15-21)</TableCell>
                <TableCell>$27,000</TableCell>
                <TableCell>$9,000</TableCell>
                <TableCell>$3,300</TableCell>
                <TableCell>$39,300</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Week 4 (May 22-28)</TableCell>
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
                <TableCell>January 2023</TableCell>
                <TableCell>$104,700</TableCell>
                <TableCell>$34,900</TableCell>
                <TableCell>$12,800</TableCell>
                <TableCell>$152,400</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>February 2023</TableCell>
                <TableCell>$98,250</TableCell>
                <TableCell>$32,750</TableCell>
                <TableCell>$12,000</TableCell>
                <TableCell>$143,000</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>March 2023</TableCell>
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
                <TableCell>May 2023</TableCell>
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

function GuestReport({ period }: { period: string }) {
  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>
              {period === "daily"
                ? "Date"
                : period === "weekly"
                ? "Week"
                : "Month"}
            </TableHead>
            <TableHead>New Guests</TableHead>
            <TableHead>Returning Guests</TableHead>
            <TableHead>Total Guests</TableHead>
            <TableHead>Avg. Stay Duration</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {period === "daily" && (
            <>
              <TableRow>
                <TableCell>May 1, 2023</TableCell>
                <TableCell>8</TableCell>
                <TableCell>16</TableCell>
                <TableCell>24</TableCell>
                <TableCell>2.5 days</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>May 2, 2023</TableCell>
                <TableCell>10</TableCell>
                <TableCell>16</TableCell>
                <TableCell>26</TableCell>
                <TableCell>2.3 days</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>May 3, 2023</TableCell>
                <TableCell>6</TableCell>
                <TableCell>16</TableCell>
                <TableCell>22</TableCell>
                <TableCell>2.7 days</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>May 4, 2023</TableCell>
                <TableCell>9</TableCell>
                <TableCell>16</TableCell>
                <TableCell>25</TableCell>
                <TableCell>2.4 days</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>May 5, 2023</TableCell>
                <TableCell>12</TableCell>
                <TableCell>16</TableCell>
                <TableCell>28</TableCell>
                <TableCell>2.2 days</TableCell>
              </TableRow>
            </>
          )}

          {period === "weekly" && (
            <>
              <TableRow>
                <TableCell>Week 1 (May 1-7)</TableCell>
                <TableCell>45</TableCell>
                <TableCell>130</TableCell>
                <TableCell>175</TableCell>
                <TableCell>2.4 days</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Week 2 (May 8-14)</TableCell>
                <TableCell>38</TableCell>
                <TableCell>130</TableCell>
                <TableCell>168</TableCell>
                <TableCell>2.5 days</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Week 3 (May 15-21)</TableCell>
                <TableCell>50</TableCell>
                <TableCell>130</TableCell>
                <TableCell>180</TableCell>
                <TableCell>2.3 days</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Week 4 (May 22-28)</TableCell>
                <TableCell>60</TableCell>
                <TableCell>130</TableCell>
                <TableCell>190</TableCell>
                <TableCell>2.2 days</TableCell>
              </TableRow>
            </>
          )}

          {period === "monthly" && (
            <>
              <TableRow>
                <TableCell>January 2023</TableCell>
                <TableCell>168</TableCell>
                <TableCell>530</TableCell>
                <TableCell>698</TableCell>
                <TableCell>2.6 days</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>February 2023</TableCell>
                <TableCell>155</TableCell>
                <TableCell>500</TableCell>
                <TableCell>655</TableCell>
                <TableCell>2.5 days</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>March 2023</TableCell>
                <TableCell>184</TableCell>
                <TableCell>560</TableCell>
                <TableCell>744</TableCell>
                <TableCell>2.4 days</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>April 2023</TableCell>
                <TableCell>195</TableCell>
                <TableCell>570</TableCell>
                <TableCell>765</TableCell>
                <TableCell>2.3 days</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>May 2023</TableCell>
                <TableCell>210</TableCell>
                <TableCell>590</TableCell>
                <TableCell>800</TableCell>
                <TableCell>2.4 days</TableCell>
              </TableRow>
            </>
          )}
        </TableBody>
      </Table>
    </div>
  );
}
