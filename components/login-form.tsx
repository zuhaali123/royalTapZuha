"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import Image from "next/image"
import Link from "next/link"
import { Eye, EyeOff, Mail, Lock } from 'lucide-react'
import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { loginSchema, type LoginValues } from "../lib/auth"
import logoImage from "../public/logo.png";
import loginLogoImage from "../public/loginLogo.png";
import { useRouter } from "next/navigation"
export  function LoginForm() {
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();
  const form = useForm<LoginValues>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
      remember: false,
    },
  })

  async function onSubmit(data: LoginValues) {
    // Simulate an API call
    console.log(data)
    // Add error state to demonstrate validation
    // form.setError("password", {
    //   type: "manual",
    //   message: "Wrong Password"
    // })
    router.push("/adminDashboard");
  }

  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex justify-center px-6 py-2">
        <div className="flex items-center gap-2">
          <Image
            src={logoImage}
            alt="RoyalTap Logo"
            className="object-contain"
          />
          <span className="text-xl font-semibold">RoyalTap</span>
        </div>
      </div>
      <div className="flex-1 flex items-center justify-center px-4">
        <Card className="w-full max-w-[416px] ">
          <CardContent className="pt-8 py-6 pb-6">
            <div className="flex justify-center mb-6">
              <div className=" bg-[#F7C55C] rounded-full flex items-center justify-center w-24 h-24">
                <Image
                  src={loginLogoImage}
                  alt="Login Icon"
                  className="object-contain"
                />
              </div>
            </div>
            <div className="text-center mb-6">
              <h1 className="text-2xl font-semibold text-[#0E121B] mb-1">Login to your account</h1>
              <p className="text-[16px] font-normal text-[#525866]">Enter your details to login.</p>
            </div>
            <hr className="border-1 border-[#E1E4EA] my-5" />
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-[14px] text-[#000000] font-semibold">Email Address</FormLabel>
                      <div className="relative">
                        <FormControl>
                          <Input
                            placeholder="john.doe@gmail.com"
                            type="email"
                            // className="pl-10"
                            className={`px-10 ${
                              form.formState.errors.email
                                ? "border-red-500 focus-visible:ring-red-500"
                                : ""
                            }`}
                            {...field}
                          />
                        </FormControl>
                        <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                      </div>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-[14px] text-[#000000] font-semibold">Password</FormLabel>
                      <div className="relative">
                        <FormControl>
                          <Input
                           placeholder="******"
                            type={showPassword ? "text" : "password"}
                            // className="pl-10 pr-10"
                            className={`px-10 ${
                              form.formState.errors.password
                                ? "border-red-500 focus-visible:ring-red-500"
                                : ""
                            }`}
                            {...field}
                          />
                        </FormControl>
                        <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                        <Button
                          variant="ghost"
                          size="icon"
                          className="absolute right-0 top-0 h-full px-3 text-gray-400 hover:text-gray-600"
                          type="button"
                          onClick={() => setShowPassword(!showPassword)}
                        >
                          {showPassword ? (
                            <EyeOff className="h-5 w-5" />
                          ) : (
                            <Eye className="h-5 w-5" />
                          )}
                        </Button>
                      </div>
                      <FormMessage className="text-red-500" />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="remember"
                  render={({ field }) => (
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2 my-1">
                        <FormControl>
                          <Checkbox
                            checked={field.value}
                            onCheckedChange={field.onChange}
                          />
                        </FormControl>
                        <Label htmlFor="remember" className="text-sm font-normal text-[#0E121B] cursor-pointer">
                          Keep me logged in
                        </Label>
                      </div>
                      <Link
                        href="/reset-password"
                        className="text-sm text-[#525866] hover:text-[#E5B54A] !font-semibold underline cursor-pointer"
                      >
                        Forgot password?
                      </Link>
                    </div>
                  )}
                />
                <Button
                  type="submit"
                  className="w-full !bg-[#EDC433] hover:bg-[#E5B54A] text-[#000000] text-sm font-bold rounded-[10px] !h-[40px] cursor-pointer"
                  size="lg"
                >
                  Login
                </Button>
              </form>
            </Form>
          </CardContent>
        </Card>
      </div>
      <div className="text-center p-6 text-[14px] text-[#525866]">
        © 2025 RoyalTap LLC. All Rights Reserved. Royal Marketing
      </div>
    </div>
  )
}

