"use client"

import * as React from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardContent } from "@/components/ui/card"
import { Eye, EyeOff, Upload, User, Users, Users2,Mail,Lock } from 'lucide-react'
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
// import { Toaster } from "@/components/ui/Toaster"


export const generalFormSchema = z.object({
  avatar: z.string().optional(),
  firstName: z.string().min(2, {
    message: "First name must be at least 2 characters.",
  }),
  lastName: z.string().min(2, {
    message: "Last name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
})

export const securityFormSchema = z.object({
  currentPassword: z.string().min(8, {
    message: "Password must be at least 8 characters.",
  }),
  newPassword: z.string().min(8, {
    message: "Password must be at least 8 characters.",
  }),
  confirmNewPassword: z.string().min(8, {
    message: "Password must be at least 8 characters.",
  }),
}).refine((data) => data.newPassword === data.confirmNewPassword, {
  message: "Passwords don't match",
  path: ["confirmNewPassword"],
})



export  function AdminAccount() {
  const [showCurrentPassword, setShowCurrentPassword] = React.useState(false)
  const [showNewPassword, setShowNewPassword] = React.useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = React.useState(false)
  const [avatarUrl, setAvatarUrl] = React.useState("")

  const generalForm = useForm<z.infer<typeof generalFormSchema>>({
    resolver: zodResolver(generalFormSchema),
    defaultValues: {
      firstName: "John",
      lastName: "Doe",
      email: "john.doe@mail.com",
    },
  })

  const securityForm = useForm<z.infer<typeof securityFormSchema>>({
    resolver: zodResolver(securityFormSchema),
    defaultValues: {
      currentPassword: "",
      newPassword: "",
      confirmNewPassword: "",
    },
  })

  function onGeneralSubmit(values: z.infer<typeof generalFormSchema>) {
   
  }

  function onSecuritySubmit(values: z.infer<typeof securityFormSchema>) {
   
  }

//   const handleAvatarUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
//     const file = event.target.files?.[0]
//     if (file) {
//       const url = URL.createObjectURL(file)
//       setAvatarUrl(url)
//       generalForm.setValue("avatar", url)
//     }
//   }

const handleAvatarUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const url = URL.createObjectURL(file); // Create a temporary URL for the uploaded file
      setAvatarUrl(url); // Update the state with the file's temporary URL
      generalForm.setValue("avatar", file.name); // Set the file name or actual avatar field value in the form
    }
  };
  

  return (
    <Card className="w-full max-w-2xl border-none shadow-none">
      <CardContent className="p-3">
        <Tabs defaultValue="general" className="w-full">
          <TabsList className="mb-4">
            <TabsTrigger value="general">General</TabsTrigger>
            <TabsTrigger value="security">Security</TabsTrigger>
          </TabsList>
          <TabsContent value="general">
            <Form {...generalForm}>
              <form onSubmit={generalForm.handleSubmit(onGeneralSubmit)} className="space-y-6">
                <div>
                  <p className="text-sm  text-[#0E121B] font-semibold mb-2">Upload Avatar</p>
                  <p className="text-sm text-[#0E121B] font-normal mb-4">
                    Min 400x400px, PNG or JPEG
                  </p>
                  <div className="flex items-center gap-4">
                    <Avatar className="w-16 h-16 bg-[#F0CD54]">
                      <AvatarImage src={avatarUrl} />
                      <AvatarFallback>
                        <User className="w-8 h-8" />
                      </AvatarFallback>
                    </Avatar>
                    <Label htmlFor="avatar" className="cursor-pointer">
                      <Input
                        id="avatar"
                        type="file"
                        className="hidden "
                        accept="image/png,image/jpeg"
                        onChange={handleAvatarUpload}
                      />
                      <Button type="button" variant="secondary" size="sm" className="cursor-pointer"  onClick={() => document.getElementById('avatar')?.click()}>
                        <Upload className="w-4 h-4 mr-2" />
                        Upload
                      </Button>
                    </Label>
                  </div>
                </div>
                <FormField
                  control={generalForm.control}
                  name="firstName"
                  render={({ field }) => (
                    <FormItem className="w-[300px]">
                      <FormLabel className="text-sm text-[#0E121B] font-semibold">First Name</FormLabel>
                      <div className="relative">
                      <FormControl>
                        <Input {...field} className={`px-10 h-10`}  />
                        </FormControl>
                        <User className="absolute left-3 top-1/2 -translate-y-1/2 h-[16px] w-[14px] text-[#0E121B]" />
                      </div>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={generalForm.control}
                  name="lastName"
                  render={({ field }) => (
                    <FormItem className="w-[300px]">
                      <FormLabel className="text-sm text-[#0E121B] font-semibold">Last Name</FormLabel>
                      <div className="relative">
                      <FormControl>
                        <Input {...field} className={`px-10 h-10`} />
                        </FormControl>
                        <User className="absolute left-3 top-1/2 -translate-y-1/2 h-[16px] w-[14px] text-[#0E121B]" />
                      </div>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={generalForm.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem className="w-[300px]">
                      <FormLabel className="text-sm text-[#0E121B] font-semibold">Email</FormLabel>
                      <div className="relative">
                      <FormControl>
                        <Input {...field}  className={`px-10 h-10`} type="email" />
                        </FormControl>
                        <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-[16px] w-[14px] text-[#0E121B]" />
                      </div>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type="submit" className="bg-[#F8C944] hover:bg-[#E5B83F] text-black">
                  Save
                </Button>
              </form>
            </Form>
          </TabsContent>
          <TabsContent value="security">
            <Form {...securityForm}>
              <form onSubmit={securityForm.handleSubmit(onSecuritySubmit)} className="space-y-6">
                <FormField
                  control={securityForm.control}
                  name="currentPassword"
                  render={({ field }) => (
                    <FormItem className="w-[300px]">
                      <FormLabel className="text-sm text-[#0E121B] font-semibold">Current Password</FormLabel>
                      <div className="relative">
                      <FormControl>
                        
                          <Input placeholder="********" className="px-10 h-10"
                            {...field}
                            type={showCurrentPassword ? "text" : "password"}
                          />
                          
                       
                      </FormControl>
                      <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-[14px] w-[16px] text-[#99A0AE]" />
                      <Button
                            type="button"
                            variant="ghost"
                            size="icon"
                            className="absolute right-0 top-0 h-full px-3"
                            onClick={() => setShowCurrentPassword(!showCurrentPassword)}
                          >
                            {showCurrentPassword ? (
                              <EyeOff className="h-[14px] w-[16px] text-[#99A0AE]" />
                            ) : (
                              <Eye className="h-[14px] w-[16px] text-[#99A0AE]" />
                            )}
                          </Button>
                        </div>
                     
                      <FormMessage />
                    </FormItem>
                  )}
                />


                
                <FormField
                  control={securityForm.control}
                  name="newPassword"
                  render={({ field }) => (
                    <FormItem className="w-[300px]">
                      <FormLabel className="text-sm text-[#0E121B] font-semibold">New Password</FormLabel>
                      <FormControl>
                        <div className="relative">
                        <Input placeholder="********" className={`px-10 h-10`}
                            {...field}
                            type={showNewPassword ? "text" : "password"}
                          />
                          <Button
                            type="button"
                            variant="ghost"
                            size="icon"
                            className="absolute right-0 top-0 h-full px-3"
                            onClick={() => setShowNewPassword(!showNewPassword)}
                          >
                            {showNewPassword ? (
                              <EyeOff className="h-[14px] w-[16px] text-[#99A0AE] " />
                            ) : (
                              <Eye className="h-[14px] w-[16px] text-[#99A0AE]" />
                            )}
                          </Button>
                      <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-[14px] w-[16px] text-[#99A0AE]" />

                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={securityForm.control}
                  name="confirmNewPassword"
                  render={({ field }) => (
                    <FormItem className="w-[300px]">
                      <FormLabel className="text-sm text-[#0E121B] font-semibold">Confirm New Password</FormLabel>
                      <FormControl>
                        <div className="relative">
                        <Input placeholder="********" className={`px-10 h-10`}
                            {...field}
                            type={showConfirmPassword ? "text" : "password"}
                          />
                          <Button
                            type="button"
                            variant="ghost"
                            size="icon"
                            className="absolute right-0 top-0 h-full px-3"
                            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                          >
                            {showConfirmPassword ? (
                              <EyeOff className="h-[14px] w-[16px] text-[#99A0AE]" />
                            ) : (
                              <Eye className="h-[14px] w-[16px] text-[#99A0AE]" />
                            )}
                          </Button>
                      <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-[14px] w-[16px] text-[#99A0AE]" />

                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <div className="grid gap-2">
                  <Label className="text-sm text-[#0E121B] font-semibold">Two-Factor Authentication</Label>
                  <Button type="button" variant="outline" className="w-fit">
                    Set Up Two-Factor Authentication
                  </Button>
                </div>
                <Button type="submit" className="bg-[#F8C944] hover:bg-[#E5B83F] text-black">
                  Save
                </Button>
              </form>
            </Form>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  )
}

