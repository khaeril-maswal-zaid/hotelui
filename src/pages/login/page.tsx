"use client";

import type React from "react";

import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Eye, EyeOff, Hotel, LogIn } from "lucide-react";

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
import { Checkbox } from "@/components/ui/checkbox";
import { Alert, AlertDescription } from "@/components/ui/alert";
import MainLayout from "../../components/layout/main-layout";

export default function LoginPage() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // For demonstration purposes, accept any credentials
    setSuccess("Login successful!");

    // In a real app, you would authenticate the user here
    console.log("Login attempt with:", { email, password });

    // Redirect to home page after login
    setTimeout(() => {
      navigate.push("/");
    }, 1000);
  };

  const handleSignUp = (e: React.FormEvent) => {
    e.preventDefault();

    // Simple validation
    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    setSuccess("Account created successfully!");

    // In a real app, you would register the user here
    console.log("Sign up attempt with:", { name, email, password });

    // Redirect to home page after registration
    setTimeout(() => {
      router.push("/");
    }, 1000);
  };

  return (
    <MainLayout>
      <div className="container flex items-center justify-center py-16 md:py-24">
        <div className="mx-auto w-full max-w-md">
          <div className="flex justify-center mb-6">
            <div className="flex items-center gap-2">
              <Hotel className="h-8 w-8 text-primary" />
              <span className="text-2xl font-bold">Hotel Mewah</span>
            </div>
          </div>

          <Tabs defaultValue="login" className="w-full">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="login">Masuk</TabsTrigger>
              <TabsTrigger value="signup">Daftar</TabsTrigger>
            </TabsList>

            <TabsContent value="login">
              <Card>
                <CardHeader>
                  <CardTitle>Selamat datang kembali</CardTitle>
                  <CardDescription>
                    Masuk ke akun Anda untuk mengelola pemesanan dan preferensi
                  </CardDescription>
                </CardHeader>
                <form onSubmit={handleLogin}>
                  <CardContent className="space-y-4">
                    {error && (
                      <Alert variant="destructive">
                        <AlertDescription>{error}</AlertDescription>
                      </Alert>
                    )}

                    {success && (
                      <Alert className="bg-green-50 text-green-800 border-green-200">
                        <AlertDescription>{success}</AlertDescription>
                      </Alert>
                    )}

                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="email.anda@contoh.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <Label htmlFor="password">Kata Sandi</Label>
                        <Link
                          to="/forgot-password"
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
                      Masuk
                    </Button>
                  </CardFooter>
                </form>
              </Card>
            </TabsContent>

            <TabsContent value="signup">
              <Card>
                <CardHeader>
                  <CardTitle>Buat akun</CardTitle>
                  <CardDescription>
                    Daftar untuk menikmati manfaat eksklusif dan mengelola
                    pemesanan Anda
                  </CardDescription>
                </CardHeader>
                <form onSubmit={handleSignUp}>
                  <CardContent className="space-y-4">
                    {error && (
                      <Alert variant="destructive">
                        <AlertDescription>{error}</AlertDescription>
                      </Alert>
                    )}

                    {success && (
                      <Alert className="bg-green-50 text-green-800 border-green-200">
                        <AlertDescription>{success}</AlertDescription>
                      </Alert>
                    )}

                    <div className="space-y-2">
                      <Label htmlFor="name">Nama Lengkap</Label>
                      <Input
                        id="name"
                        placeholder="John Doe"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="signup-email">Email</Label>
                      <Input
                        id="signup-email"
                        type="email"
                        placeholder="email.anda@contoh.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="signup-password">Kata Sandi</Label>
                      <div className="relative">
                        <Input
                          id="signup-password"
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
                    <div className="space-y-2">
                      <Label htmlFor="confirm-password">
                        Konfirmasi Kata Sandi
                      </Label>
                      <Input
                        id="confirm-password"
                        type="password"
                        placeholder="••••••••"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        required
                      />
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="terms" required />
                      <label
                        htmlFor="terms"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Saya setuju dengan{" "}
                        <Link
                          to="/terms"
                          className="text-primary hover:underline"
                        >
                          syarat dan ketentuan
                        </Link>
                      </label>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button type="submit" className="w-full">
                      Buat Akun
                    </Button>
                  </CardFooter>
                </form>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </MainLayout>
  );
}
