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
          <TabsTrigger value="general">General</TabsTrigger>
          <TabsTrigger value="homepage">Homepage Content</TabsTrigger>
          <TabsTrigger value="contact">Contact Information</TabsTrigger>
          <TabsTrigger value="accounts">Admin Accounts</TabsTrigger>
        </TabsList>

        <TabsContent value="general" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Hotel Information</CardTitle>
              <CardDescription>
                Update your hotel's basic information displayed across the
                website
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="hotelName">Hotel Name</Label>
                <Input id="hotelName" defaultValue="Luxury Hotel" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="hotelTagline">Tagline</Label>
                <Input
                  id="hotelTagline"
                  defaultValue="Experience Luxury & Comfort"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="hotelDescription">Short Description</Label>
                <Textarea
                  id="hotelDescription"
                  defaultValue="Enjoy your stay in our premium hotel with world-class amenities and exceptional service"
                  className="min-h-[100px]"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="hotelLogo">Hotel Logo</Label>
                <div className="flex items-center gap-4">
                  <Avatar className="h-16 w-16">
                    <AvatarImage src="/placeholder.svg" alt="Hotel Logo" />
                    <AvatarFallback>LH</AvatarFallback>
                  </Avatar>
                  <Input id="hotelLogo" type="file" />
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button>
                <Save className="mr-2 h-4 w-4" />
                Save Changes
              </Button>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Website Settings</CardTitle>
              <CardDescription>
                Configure general website settings and preferences
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="currency">Currency</Label>
                <Select defaultValue="usd">
                  <SelectTrigger id="currency">
                    <SelectValue placeholder="Select currency" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="usd">USD ($)</SelectItem>
                    <SelectItem value="eur">EUR (€)</SelectItem>
                    <SelectItem value="gbp">GBP (£)</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="timezone">Timezone</Label>
                <Select defaultValue="est">
                  <SelectTrigger id="timezone">
                    <SelectValue placeholder="Select timezone" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="est">Eastern Time (ET)</SelectItem>
                    <SelectItem value="cst">Central Time (CT)</SelectItem>
                    <SelectItem value="mst">Mountain Time (MT)</SelectItem>
                    <SelectItem value="pst">Pacific Time (PT)</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label htmlFor="maintenance">Maintenance Mode</Label>
                  <p className="text-sm text-muted-foreground">
                    Put the website in maintenance mode
                  </p>
                </div>
                <Switch id="maintenance" />
              </div>
              <Separator />
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label htmlFor="bookingEnabled">Online Booking</Label>
                  <p className="text-sm text-muted-foreground">
                    Enable online booking functionality
                  </p>
                </div>
                <Switch id="bookingEnabled" defaultChecked />
              </div>
            </CardContent>
            <CardFooter>
              <Button>
                <Save className="mr-2 h-4 w-4" />
                Save Changes
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="homepage" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Hero Section</CardTitle>
              <CardDescription>
                Update the main hero section content on the homepage
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="heroTitle">Hero Title</Label>
                <Input
                  id="heroTitle"
                  defaultValue="Experience Luxury & Comfort"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="heroSubtitle">Hero Subtitle</Label>
                <Input
                  id="heroSubtitle"
                  defaultValue="Enjoy your stay in our premium hotel with world-class amenities and exceptional service"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="heroImage">Hero Background Image</Label>
                <div className="flex items-center gap-4">
                  <div className="relative h-20 w-32 overflow-hidden rounded-md border">
                    <img
                      src="/placeholder.svg"
                      alt="Hero Background"
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <Input id="heroImage" type="file" />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="ctaText">Call to Action Button Text</Label>
                <Input id="ctaText" defaultValue="Book Now" />
              </div>
            </CardContent>
            <CardFooter>
              <Button>
                <Save className="mr-2 h-4 w-4" />
                Save Changes
              </Button>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Featured Sections</CardTitle>
              <CardDescription>
                Manage the content for featured sections on the homepage
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="aboutTitle">About Section Title</Label>
                <Input id="aboutTitle" defaultValue="About Our Hotel" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="aboutContent">About Section Content</Label>
                <Textarea
                  id="aboutContent"
                  defaultValue="Located in the heart of the city, our hotel offers the perfect blend of luxury, comfort, and convenience. With stunning views, elegant rooms, and exceptional service, we ensure that your stay with us is nothing short of extraordinary."
                  className="min-h-[100px]"
                />
              </div>
              <Separator className="my-4" />
              <div className="space-y-2">
                <Label htmlFor="facilitiesTitle">
                  Facilities Section Title
                </Label>
                <Input id="facilitiesTitle" defaultValue="Our Facilities" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="facilitiesSubtitle">
                  Facilities Section Subtitle
                </Label>
                <Input
                  id="facilitiesSubtitle"
                  defaultValue="Enjoy our premium facilities designed to make your stay comfortable and memorable"
                />
              </div>
              <Separator className="my-4" />
              <div className="space-y-2">
                <Label htmlFor="roomsTitle">Rooms Section Title</Label>
                <Input id="roomsTitle" defaultValue="Our Rooms" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="roomsSubtitle">Rooms Section Subtitle</Label>
                <Input
                  id="roomsSubtitle"
                  defaultValue="Choose from our selection of comfortable and luxurious rooms"
                />
              </div>
            </CardContent>
            <CardFooter>
              <Button>
                <Save className="mr-2 h-4 w-4" />
                Save Changes
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="contact" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Contact Information</CardTitle>
              <CardDescription>
                Update your hotel's contact information displayed on the website
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="address">Address</Label>
                <Input
                  id="address"
                  defaultValue="123 Luxury Avenue, City Center, Country"
                />
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input id="phone" defaultValue="+1 (555) 123-4567" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <Input id="email" defaultValue="info@luxuryhotel.com" />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="receptionHours">Reception Hours</Label>
                <Input
                  id="receptionHours"
                  defaultValue="24/7, 365 days a year"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="mapEmbed">Google Maps Embed Code</Label>
                <Textarea
                  id="mapEmbed"
                  placeholder="Paste Google Maps embed code here"
                  className="min-h-[100px]"
                />
              </div>
            </CardContent>
            <CardFooter>
              <Button>
                <Save className="mr-2 h-4 w-4" />
                Save Changes
              </Button>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Social Media</CardTitle>
              <CardDescription>
                Add your hotel's social media links
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
                Save Changes
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="accounts" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Admin Accounts</CardTitle>
              <CardDescription>
                Manage administrator accounts for the hotel management system
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="rounded-md border">
                <table className="w-full">
                  <thead>
                    <tr className="border-b bg-muted/50">
                      <th className="p-2 text-left font-medium">Name</th>
                      <th className="p-2 text-left font-medium">Email</th>
                      <th className="p-2 text-left font-medium">Role</th>
                      <th className="p-2 text-left font-medium">Status</th>
                      <th className="p-2 text-left font-medium">Actions</th>
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
                          Active
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
                          Active
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
                            Delete
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
                          Pending
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
                            Delete
                          </Button>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline">Export Users</Button>
              <Button>Add New Admin</Button>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Your Account</CardTitle>
              <CardDescription>
                Update your account information and password
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
                  <Label htmlFor="currentPassword">Current Password</Label>
                  <Input id="currentPassword" type="password" />
                </div>
                <div></div>
                <div className="space-y-2">
                  <Label htmlFor="newPassword">New Password</Label>
                  <Input id="newPassword" type="password" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="confirmPassword">Confirm New Password</Label>
                  <Input id="confirmPassword" type="password" />
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button>
                <Save className="mr-2 h-4 w-4" />
                Update Password
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </AdminLayout>
  );
}
