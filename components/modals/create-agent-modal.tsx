// "use client";

// import * as React from "react";
// import { Button } from "@/components/ui/button";
// import {
//   Dialog,
//   DialogContent,
//   DialogDescription,
//   DialogFooter,
//   DialogHeader,
//   DialogTitle,
//   DialogTrigger,
// } from "@/components/ui/dialog";
// import {
//   Form,
//   FormControl,
//   FormDescription,
//   FormField,
//   FormItem,
//   FormLabel,
//   FormMessage,
// } from "@/components/ui/form";
// import { Input } from "@/components/ui/input";
// import {
//   Select,
//   SelectContent,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
// } from "@/components/ui/select";
// import { useForm } from "react-hook-form";
// import { zodResolver } from "@hookform/resolvers/zod";
// import * as z from "zod";
// import { UserPlus } from "lucide-react";
// import { Separator } from "@/components/ui/separator";

// const formSchema = z.object({
//   firstName: z.string().min(2, {
//     message: "First name must be at least 2 characters.",
//   }),
//   lastName: z.string().min(2, {
//     message: "Last name must be at least 2 characters.",
//   }),
//   email: z.string().email({
//     message: "Please enter a valid email address.",
//   }),
//   role: z.string({
//     required_error: "Please select a role.",
//   }),
//   accessLevel: z.string({
//     required_error: "Please select an access level.",
//   }),
// });

// interface InviteModalProps {
//   open: boolean;
//   onOpenChange: (open: boolean) => void;
// }

// export function InviteMemberModal({ open, onOpenChange }: InviteModalProps) {
//   const form = useForm<z.infer<typeof formSchema>>({
//     resolver: zodResolver(formSchema),
//     defaultValues: {
//       firstName: "",
//       lastName: "",
//       email: "",
//       role: "",
//       accessLevel: "",
//     },
//   });

//   function onSubmit(values: z.infer<typeof formSchema>) {
//     // TODO: Implement the invite logic
//     console.log(values);
//   }

//   return (
//     <Dialog open={open} onOpenChange={onOpenChange}>
//       <DialogTrigger asChild></DialogTrigger>
//       <DialogContent className="sm:max-w-[425px]">
//         <DialogHeader className="flex flex-row items-start space-x-4 pb-4">
//           <div className="h-12 w-12 rounded-full bg-gray-100 p-2 flex items-center justify-center">
//             <UserPlus className="h-6 w-6 text-gray-600" />
//           </div>
//           <div>
//             <DialogTitle className="text-[18px] font-medium text-[#0E121B]">
//               Invite a New User
//             </DialogTitle>
//             <DialogDescription className="text-[#525866]">
//               #subtitle here
//             </DialogDescription>
//           </div>
//         </DialogHeader>
//         <Separator />

//         <Form {...form}>
//           <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
//             <FormField
//               control={form.control}
//               name="firstName"
//               render={({ field }) => (
//                 <FormItem>
//                   <FormLabel className="text-[14px] !font-semibold text-[#0E121B]">
//                     First Name <span className="text-black-500">*</span>
//                   </FormLabel>
//                   <FormControl>
//                     <Input placeholder="John" {...field} />
//                   </FormControl>
//                   <FormMessage />
//                 </FormItem>
//               )}
//             />
//             <FormField
//               control={form.control}
//               name="lastName"
//               render={({ field }) => (
//                 <FormItem>
//                   <FormLabel className="text-[14px] !font-semibold text-[#0E121B]">
//                     Last Name <span className="text-black-500">*</span>
//                   </FormLabel>
//                   <FormControl>
//                     <Input placeholder="Doe" {...field} />
//                   </FormControl>
//                   <FormMessage />
//                 </FormItem>
//               )}
//             />
//             <FormField
//               control={form.control}
//               name="email"
//               render={({ field }) => (
//                 <FormItem>
//                   <FormLabel className="text-[14px] !font-semibold text-[#0E121B]">
//                     Email <span className="text-black-500">*</span>
//                   </FormLabel>
//                   <FormControl>
//                     <Input placeholder="john.doe@example.com" {...field} />
//                   </FormControl>
//                   <FormMessage />
//                 </FormItem>
//               )}
//             />
//             <FormField
//               control={form.control}
//               name="role"
//               render={({ field }) => (
//                 <FormItem>
//                   <FormLabel className="text-[14px] !font-semibold text-[#0E121B]">
//                     Role <span className="text-black-500">*</span>
//                   </FormLabel>
//                   <Select
//                     onValueChange={field.onChange}
//                     defaultValue={field.value}
//                   >
//                     <FormControl>
//                       <SelectTrigger>
//                         <SelectValue placeholder="Select a role" />
//                       </SelectTrigger>
//                     </FormControl>
//                     <SelectContent>
//                       <SelectItem value="super-admin">Super Admin</SelectItem>
//                       <SelectItem value="admin">Admin</SelectItem>
//                       <SelectItem value="manager">Manager</SelectItem>
//                     </SelectContent>
//                   </Select>
//                   <FormMessage />
//                 </FormItem>
//               )}
//             />
//             <FormField
//               control={form.control}
//               name="accessLevel"
//               render={({ field }) => (
//                 <FormItem>
//                   <FormLabel className="text-[14px] !font-semibold text-[#0E121B]">
//                     Access Level <span className="text-black-500">*</span>
//                   </FormLabel>
//                   <Select
//                     onValueChange={field.onChange}
//                     defaultValue={field.value}
//                   >
//                     <FormControl>
//                       <SelectTrigger>
//                         <SelectValue placeholder="Select access level" />
//                       </SelectTrigger>
//                     </FormControl>
//                     <SelectContent>
//                       <SelectItem value="full">Full Access</SelectItem>
//                       <SelectItem value="admin">Admin Access</SelectItem>
//                       <SelectItem value="limited">Limited Access</SelectItem>
//                     </SelectContent>
//                   </Select>
//                   <FormMessage />
//                 </FormItem>
//               )}
//             />
//             <DialogFooter>
//               <Button
//                 type="submit"
//                 className=" w-full bg-[#EDC433] hover:bg-[#d5ac1b] text-black"
//               >
//                 Save
//               </Button>
//             </DialogFooter>
//           </form>
//         </Form>
//       </DialogContent>
//     </Dialog>
//   );
// }

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
import { UserPlus } from "lucide-react";
import { Separator } from "@/components/ui/separator";
interface CreateAgentModalProps {
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

export function CreateAgentModal({
  open,
  onOpenChange,
}: CreateAgentModalProps) {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phoneNumber: "",
      address: "",
      city: "",
      state: "",
      country: "",
      zip: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    // Simulate async operation, such as saving the data to a server
    await new Promise((resolve) => setTimeout(resolve, 500));

    // Close the modal after successful form submission
    onOpenChange(false);
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
     
      <DialogContent className="md:max-w-[815px]">
        <DialogHeader className="flex flex-row items-center gap-2">
        <Button variant="outline" size="icon" className="h-11 w-11 rounded-full border-gray-200 p-2">
            <UserPlus className="h-8 w-8 text-gray-600" />
          </Button>
          <div className="ml-4">
            <DialogTitle className="text-[18px] font-semibold text-[#0E121B]">
              Create a New Agent
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
