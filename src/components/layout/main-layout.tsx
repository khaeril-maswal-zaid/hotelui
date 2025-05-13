"use client";

import type React from "react";
import { Link } from "react-router-dom";
import { Hotel, LogIn, Menu, X } from "lucide-react";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto flex h-16 items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <Hotel className="h-6 w-6" />
            <span className="text-xl font-bold">Luxury Hotel</span>
          </Link>
          <nav className="hidden md:flex items-center gap-6">
            <Link
              to="/"
              className="text-sm font-medium transition-colors hover:text-primary"
            >
              Home
            </Link>
            <Link
              to="/rooms"
              className="text-sm font-medium transition-colors hover:text-primary"
            >
              Rooms
            </Link>
            <Link
              to="/booking"
              className="text-sm font-medium transition-colors hover:text-primary"
            >
              Booking
            </Link>
            <Link
              to="/check-status"
              className="text-sm font-medium transition-colors hover:text-primary"
            >
              Check Status
            </Link>
            <Link
              to="/contact"
              className="text-sm font-medium transition-colors hover:text-primary"
            >
              Contact
            </Link>
          </nav>
          <div className="flex items-center gap-2">
            <ThemeToggle />
            <Button
              variant="outline"
              size="sm"
              asChild
              className="hidden md:inline-flex"
            >
              <Link to="/login">
                <LogIn className="mr-2 h-4 w-4" />
                Log in
              </Link>
            </Button>
            <Button asChild className="hidden md:inline-flex">
              <Link to="/booking">Book Now</Link>
            </Button>
            <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
              <SheetTrigger asChild className="md:hidden">
                <Button variant="outline" size="icon">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <div className="flex flex-col gap-6 px-2 py-6">
                  <div className="flex items-center justify-between">
                    <Link
                      to="/"
                      className="flex items-center gap-2"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <Hotel className="h-6 w-6" />
                      <span className="text-xl font-bold">Luxury Hotel</span>
                    </Link>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <X className="h-5 w-5" />
                      <span className="sr-only">Close</span>
                    </Button>
                  </div>
                  <nav className="flex flex-col gap-4">
                    <Link
                      to="/"
                      className="text-lg font-medium transition-colors hover:text-primary"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Home
                    </Link>
                    <Link
                      to="/rooms"
                      className="text-lg font-medium transition-colors hover:text-primary"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Rooms
                    </Link>
                    <Link
                      to="/booking"
                      className="text-lg font-medium transition-colors hover:text-primary"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Booking
                    </Link>
                    <Link
                      to="/check-status"
                      className="text-lg font-medium transition-colors hover:text-primary"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Check Status
                    </Link>
                    <Link
                      to="/contact"
                      className="text-lg font-medium transition-colors hover:text-primary"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Contact
                    </Link>
                    <Link
                      to="/login"
                      className="text-lg font-medium transition-colors hover:text-primary flex items-center"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <LogIn className="mr-2 h-4 w-4" />
                      Log in
                    </Link>
                    <Button asChild className="mt-4">
                      <Link to="/booking" onClick={() => setIsMenuOpen(false)}>
                        Book Now
                      </Link>
                    </Button>
                  </nav>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>
      <main className="flex-1">{children}</main>
      <footer className="bg-muted">
        <div className="container mx-auto py-12 md:py-16">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Hotel className="h-6 w-6" />
                <span className="text-xl font-bold">Luxury Hotel</span>
              </div>
              <p className="text-sm text-muted-foreground mb-4">
                Experience luxury and comfort in the heart of the city. Our
                hotel offers premium accommodations with world-class amenities.
              </p>
              <div className="flex space-x-4">
                <a
                  to="#"
                  className="text-muted-foreground hover:text-foreground"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5"
                  >
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                  </svg>
                </a>
                <a
                  to="#"
                  className="text-muted-foreground hover:text-foreground"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5"
                  >
                    <rect
                      x="2"
                      y="2"
                      width="20"
                      height="20"
                      rx="5"
                      ry="5"
                    ></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                  </svg>
                </a>
                <a
                  to="#"
                  className="text-muted-foreground hover:text-foreground"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5"
                  >
                    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                  </svg>
                </a>
              </div>
            </div>
            <div>
              <h3 className="font-medium text-lg mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    to="/rooms"
                    className="text-sm text-muted-foreground hover:text-foreground"
                  >
                    Rooms
                  </Link>
                </li>
                <li>
                  <Link
                    to="/booking"
                    className="text-sm text-muted-foreground hover:text-foreground"
                  >
                    Booking
                  </Link>
                </li>
                <li>
                  <Link
                    to="/check-status"
                    className="text-sm text-muted-foreground hover:text-foreground"
                  >
                    Check Status
                  </Link>
                </li>
                <li>
                  <Link
                    to="/contact"
                    className="text-sm text-muted-foreground hover:text-foreground"
                  >
                    Contact
                  </Link>
                </li>
                <li>
                  <Link
                    to="/admin"
                    className="text-sm text-muted-foreground hover:text-foreground"
                  >
                    Admin
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-medium text-lg mb-4">Contact Us</h3>
              <address className="not-italic">
                <p className="text-sm text-muted-foreground mb-2">
                  123 Luxury Avenue, City Center, Country
                </p>
                <p className="text-sm text-muted-foreground mb-2">
                  Phone: +1 (555) 123-4567
                </p>
                <p className="text-sm text-muted-foreground mb-2">
                  Email: info@luxuryhotel.com
                </p>
              </address>
            </div>
            <div>
              <h3 className="font-medium text-lg mb-4">Newsletter</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Subscribe to our newsletter for special deals and updates
              </p>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                />
                <Button type="submit" size="sm">
                  Subscribe
                </Button>
              </div>
            </div>
          </div>
          <div className="mt-12 border-t pt-8 text-center">
            <p className="text-sm text-muted-foreground">
              &copy; {new Date().getFullYear()} Luxury Hotel. All rights
              reserved.
            </p>
            <div className="mt-4 flex justify-center gap-4">
              <Link
                to="#"
                className="text-xs text-muted-foreground hover:text-foreground"
              >
                Privacy Policy
              </Link>
              <Link
                to="#"
                className="text-xs text-muted-foreground hover:text-foreground"
              >
                Terms of Service
              </Link>
              <Link
                to="#"
                className="text-xs text-muted-foreground hover:text-foreground"
              >
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
