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
              Check Reservation Status
            </h1>
            <p className="mt-2 text-muted-foreground">
              Enter your reservation details to check your booking status
            </p>
          </div>

          <Card className="mt-8">
            <CardHeader>
              <CardTitle>Find Your Reservation</CardTitle>
              <CardDescription>
                Use your reservation number or email to check your booking
                status
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="reservation" className="w-full">
                <TabsList className="grid w-full grid-cols-2">
                  <TabsTrigger value="reservation">
                    Reservation Number
                  </TabsTrigger>
                  <TabsTrigger value="email">Email</TabsTrigger>
                </TabsList>
                <TabsContent value="reservation" className="mt-4">
                  <form className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="reservationNumber">
                        Reservation Number
                      </Label>
                      <Input
                        id="reservationNumber"
                        placeholder="Enter your reservation number"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input id="lastName" placeholder="Enter your last name" />
                    </div>
                    <Button type="submit" className="w-full">
                      <Search className="mr-2 h-4 w-4" />
                      Check Status
                    </Button>
                  </form>
                </TabsContent>
                <TabsContent value="email" className="mt-4">
                  <form className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="Enter your email address"
                      />
                    </div>
                    <Button type="submit" className="w-full">
                      <Search className="mr-2 h-4 w-4" />
                      Find Reservations
                    </Button>
                  </form>
                </TabsContent>
              </Tabs>
            </CardContent>
            <CardFooter className="flex flex-col text-center text-sm text-muted-foreground">
              <p>Having trouble finding your reservation?</p>
              <p>Contact our support team at support@luxuryhotel.com</p>
            </CardFooter>
          </Card>
        </div>
      </div>
    </MainLayout>
  );
}
