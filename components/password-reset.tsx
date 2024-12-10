"use client";

import Image from "next/image";
import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { EyeIcon } from "lucide-react";
import logoImage from "../public/logo.png";
import loginLogoImage from "../public/loginLogo.png";
import { useRouter } from "next/navigation";

const formSchema = z.object({
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
});

export function PasswordReset() {
  const [isEmailNotFound, setIsEmailNotFound] = useState(false);
  const router = useRouter();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);

    // Simulate API call and successful response
    setIsEmailNotFound(false);
    setTimeout(() => {
      // Simulate an API success or failure
      const emailExists = true; // Replace with your actual email existence check logic

      if (emailExists) {
        // Navigate to the login page if the email exists
        router.push("/login");
      } else {
        setIsEmailNotFound(true);
      }
    }, 1000);
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
          <CardHeader className="space-y-3 items-center pt-8">
            <div className="w-24 h-24 bg-[#D4A500] rounded-full flex items-center justify-center">
              <Image
                src={loginLogoImage}
                alt="Reset Icon"
                className="object-contain"
              />
            </div>
            <div className="space-y-2 text-center">
              <h1 className="text-2xl text-[#0E121B] font-semibold">
                Reset Password
              </h1>
              <p className="text-[#525866] text-[16px] font-normal">
                Enter your email to reset your password
              </p>
            </div>
          </CardHeader>
          <CardContent className="space-y-4 pb-8">
          <hr className="border-1 border-[#E1E4EA] mt-4 mb-6" />
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-4"
              >
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-[14px] text-[#000000] font-semibold">
                        Email Address
                      </FormLabel>
                      <FormControl>
                        <div className="relative">
                          <Input
                            placeholder="john.doe@gmail.com"
                            {...field}
                            className={`pr-10 ${
                              form.formState.errors.email || isEmailNotFound
                                ? "border-red-500 focus-visible:ring-red-500"
                                : ""
                            }`}
                          />
                          <EyeIcon className="absolute right-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                        </div>
                      </FormControl>
                      <FormMessage />
                      {isEmailNotFound && (
                        <p className="text-sm text-red-500 flex items-center gap-2 mt-2">
                          <span className="h-1.5 w-1.5 rounded-full bg-red-500" />
                          Email not found
                        </p>
                      )}
                    </FormItem>
                  )}
                />
                <Button
                  type="submit"
                  className="w-full bg-[#EDC433] hover:bg-[#E5B54E] font-semibold text-black mt-10"
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
  );
}
