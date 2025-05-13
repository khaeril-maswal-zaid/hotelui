"use client";

import type React from "react";

import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Eye, EyeOff, Hotel, LogIn, ShieldAlert } from "lucide-react";

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
import { Checkbox } from "@/components/ui/checkbox";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

export default function AdminLoginPage() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();

    // For demonstration purposes, use a hardcoded admin account
    // In a real application, this would be authenticated against a secure backend
    if (email === "admin@luxuryhotel.com" && password === "admin123") {
      // Set a flag in sessionStorage to indicate the admin is logged in
      sessionStorage.setItem("adminLoggedIn", "true");

      // Redirect to admin dashboard
      navigate("/admin");
    } else {
      // Show error message for invalid credentials
      setError("Invalid email or password. Please try again.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-muted/30 p-4">
      <div className="w-full max-w-md">
        <div className="flex justify-center mb-6">
          <div className="flex items-center gap-2">
            <Hotel className="h-8 w-8 text-primary" />
            <span className="text-2xl font-bold">Hotel Admin</span>
          </div>
        </div>

        <Card className="border-2">
          <CardHeader className="space-y-1">
            <CardTitle className="text-2xl text-center">Login Admin</CardTitle>
            <CardDescription className="text-center">
              Masukkan kredensial Anda untuk mengakses dasbor admin
            </CardDescription>
          </CardHeader>
          <form onSubmit={handleLogin}>
            <CardContent className="space-y-4">
              <Alert
                variant="destructive"
                className="bg-destructive/10 text-destructive border-destructive/20"
              >
                <ShieldAlert className="h-4 w-4" />
                <AlertTitle>Area Terbatas</AlertTitle>
                <AlertDescription>
                  Area ini hanya diperuntukkan bagi personel yang berwenang.
                  Percobaan akses tanpa izin dapat dicatat dan dilaporkan.
                </AlertDescription>
              </Alert>

              {error && (
                <Alert variant="destructive">
                  <AlertTitle>Kesalahan Autentikasi</AlertTitle>
                  <AlertDescription>{error}</AlertDescription>
                </Alert>
              )}

              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="admin@luxuryhotel.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <Label htmlFor="password">Kata Sandi</Label>
                  <Link
                    to="/admin/forgot-password"
                    className="text-xs text-muted-foreground hover:text-primary"
                  >
                    Lupa kata sandi?
                  </Link>
                </div>
                <div className="relative">
                  <Input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="••••••••"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                  <Button
                    type="button"
                    variant="ghost"
                    size="icon"
                    className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? (
                      <EyeOff className="h-4 w-4 text-muted-foreground" />
                    ) : (
                      <Eye className="h-4 w-4 text-muted-foreground" />
                    )}
                    <span className="sr-only">
                      {showPassword
                        ? "Sembunyikan kata sandi"
                        : "Tampilkan kata sandi"}
                    </span>
                  </Button>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="remember" />
                <label
                  htmlFor="remember"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Ingat saya
                </label>
              </div>
            </CardContent>
            <CardFooter>
              <Button type="submit" className="w-full">
                <LogIn className="mr-2 h-4 w-4" />
                Masuk ke Panel Admin
              </Button>
            </CardFooter>
          </form>
        </Card>

        <div className="mt-4 text-center">
          <Link
            to="/"
            className="text-sm text-muted-foreground hover:text-primary"
          >
            ← Kembali ke Situs Hotel
          </Link>
        </div>

        {/* Untuk keperluan demonstrasi saja - tidak akan disertakan dalam aplikasi nyata */}
        {/* <div className="mt-6 rounded-md bg-muted p-4 text-sm">
          <p className="font-medium">Kredensial Demo:</p>
          <p>Email: admin@luxuryhotel.com</p>
          <p>Kata Sandi: admin123</p>
        </div> */}
      </div>
    </div>
  );
}
