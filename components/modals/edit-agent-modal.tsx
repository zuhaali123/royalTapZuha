

"use client";

import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Pencil } from "lucide-react";
import { Separator } from "@/components/ui/separator";
interface EditAgentModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const formSchema = z.object({
  firstName: z.string().min(2, "First name must be at least 2 characters"),
  lastName: z.string(),
  email: z.string().email("Invalid email address"),
  phoneNumber: z.string().min(10, "Phone number must be at least 10 digits"),
  address: z.string().min(5, "Address must be at least 5 characters"),
  city: z.string().min(2, "City must be at least 2 characters"),
  state: z.string().min(2, "State must be at least 2 characters"),
  country: z.string().min(2, "Country must be at least 2 characters"),
  zip: z.string().min(5, "ZIP code must be at least 5 characters"),
});

export function EditAgentModal({
  open,
  onOpenChange,
}: EditAgentModalProps) {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "John",
      lastName: "Doe",
      email: "john.doe@domain.com",
      phoneNumber: "(555) 555-1234",
      address: "4538 Lowndes Hill Park Road",
      city: "Bakersfield",
      state: "California",
      country: "United Stated",
      zip: "55555",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    await new Promise((resolve) => setTimeout(resolve, 500));

    // Close the modal after successful form submission
    onOpenChange(false);
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      
      <DialogContent className="md:max-w-[815px]">
        <DialogHeader className="flex flex-row items-center gap-2">
        <Button variant="outline" size="icon" className="h-11 w-11 rounded-full border-gray-200 p-2">
            <Pencil className="h-8 w-8 text-gray-600" />
          </Button>
          <div className="ml-4">
            <DialogTitle className="text-[18px] font-semibold text-[#0E121B]">
            Edit Roy Sharaliy Profile
            </DialogTitle>
            <DialogDescription className="text-[#525866]">
              #subtitle here
            </DialogDescription>
          </div>
        </DialogHeader>
        <Separator className="my-3" />

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="firstName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-[14px] !font-semibold text-[#0E121B]">First Name *</FormLabel>
                    <FormControl>
                      <Input placeholder="John" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="lastName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-[14px] !font-semibold text-[#0E121B]">Last Name *</FormLabel>
                    <FormControl>
                      <Input placeholder="Doe" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-[14px] !font-semibold text-[#0E121B]">Email *</FormLabel>
                    <FormControl>
                      <Input placeholder="john.doe@domain.com" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="phoneNumber"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-[14px] !font-semibold text-[#0E121B]">Phone Number *</FormLabel>
                    <FormControl>
                      <Input placeholder="(555) 555-1234" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="address"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-[14px] !font-semibold text-[#0E121B]">Address *</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="4538 Lowndes Hill Park Road"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="city"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-[14px] !font-semibold text-[#0E121B]">City *</FormLabel>
                    <FormControl>
                      <Input placeholder="Bakersfield" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="grid grid-cols-3 gap-4">
              <FormField
                control={form.control}
                name="state"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-[14px] !font-semibold text-[#0E121B]">State *</FormLabel>
                    <FormControl>
                      <Input placeholder="California" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="country"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-[14px] !font-semibold text-[#0E121B]">Country *</FormLabel>
                    <FormControl>
                      <Input placeholder="United States" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="zip"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-[14px] !font-semibold text-[#0E121B]">ZIP *</FormLabel>
                    <FormControl>
                      <Input placeholder="55555" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <Separator className="my-7" />
            <Button
              type="submit"
              className="w-full bg-[#F4C550] text-[#0E121B] font-semibold hover:bg-[#E5B640] h-10 rounded-sm"  
            >
              Save
            </Button>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
