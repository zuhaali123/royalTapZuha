// import { cn } from "@/lib/utils";
// import { Button } from "@/components/ui/button";
// import { ScrollArea } from "@/components/ui/scroll-area";
// import {
//   ChevronRight,
//   BarChart2,
//   Users,
//   Ticket,
//   ShoppingCart,
//   Globe,
// } from "lucide-react";
// import Link from "next/link";
// import { usePathname } from "next/navigation";
// import Image from "next/image";
// import loginLogoImage from "../public/loginLogo.png";

// const menuItems = [
//   { icon: BarChart2, label: "Analytics", href: "/analytics" },
//   { icon: Users, label: "Customers", href: "/customers" },
//   { icon: Ticket, label: "Coupons", href: "/coupons" },
//   { icon: ShoppingCart, label: "Shop Order", href: "/shop-order" },
// ];

// export function Sidebar() {
//   const pathname = usePathname();

//   return (
//     <div className="flex h-screen w-[240px] flex-col border-r border-gray-200 bg-white">
//       <div className="flex items-center gap-3 border-b border-gray-200 p-5">
//         <Image
//           src={loginLogoImage}
//           width={48}
//           height={48}
//           alt="RolayTap logo"
//           className="rounded-full"
//         />
//         <div className="flex flex-col">
//           <span className="text-sm font-semibold text-[#0E121B]">RolayTap</span>
//           <span className="text-[12px] text-[#525866] font-normal">Admin Dashboard</span>
//         </div>
//       </div>
//       <ScrollArea className="flex-1">
//         <div className="p-5">
//           <div className="mb-4 px-2 text-xs font-semibold text-[#99A0AE]">
//             MENU
//           </div>
//           <nav className="space-y-1">
//             {menuItems.map((item) => (
//               <Button
//                 key={item.href}
//                 variant="ghost"
//                 className={cn(
//                   "w-full text-[14px] justify-start px-2 py-2 font-normal hover:bg-gray-100",
//                   pathname === item.href
//                     ? "bg-gray-100 font-medium"
//                     : "text-gray-700"
//                 )}
//                 asChild
//               >
//                 <Link href={item.href} className="text-[#525866] text-[14px] font-semibold" >
//                   <item.icon className="mr-3 h-5 w-5 text-[#525866] " />
//                   {item.label}
//                 </Link>
//               </Button>
//             ))}
//           </nav>
//         </div>
//       </ScrollArea>
//       <SidebarFooter>

//       <div className="border-t border-gray-200 p-5">
//         <Button
//           variant="ghost"
//           className="w-full justify-between px-2 py-2 font-normal text-gray-700 hover:bg-gray-100"
//         >
//           <div className="flex items-center">
//             <Globe className="mr-3 h-5 w-5" />
//             royaltap.shop
//           </div>
//           <ChevronRight className="h-4 w-4 text-gray-400" />
//         </Button>
//       </div>
//       </SidebarFooter>

//     </div>
//   );
// }



"use client"

import * as React from "react"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { BarChart2, Users, Ticket, ShoppingCart, Globe, ChevronRight } from 'lucide-react'

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
} from "@/components/ui/sidebar"

import loginLogoImage from "../public/loginLogo.png"

const menuItems = [
  // { icon: BarChart2, label: "Analytics", href: "/analytics" },
  { icon: ShoppingCart, label: "Shop Order", href: "/shop-order" },
  { icon: Users, label: "Customers", href: "/customers" },
  { icon: Ticket, label: "Coupons", href: "/coupons" },
 
]

export function AppSidebar() {
  const pathname = usePathname()

  return (
    <Sidebar className="border-r border-gray-200 !bg-white">
      <SidebarHeader className="border-b border-gray-200 p-5 !bg-white">
        <div className="flex items-center gap-3">
          <Image
            src={loginLogoImage}
            width={48}
            height={48}
            alt="RolayTap logo"
            className="rounded-full"
          />
          <div className="flex flex-col">
            <span className="text-sm font-semibold text-[#0E121B]">RolayTap</span>
            <span className="text-[12px] text-[#525866] font-normal">Admin Dashboard</span>
          </div>
        </div>
      </SidebarHeader>
      <SidebarContent className="!bg-white">
        <div className="p-5 !bg-white">
          <div className="mb-4 px-2 text-xs font-semibold text-[#99A0AE]">
            MENU
          </div>
          <SidebarMenu className="!bg-white">
            {menuItems.map((item) => (
              <SidebarMenuItem key={item.href}>
                <SidebarMenuButton
                  asChild
                  className={cn(
                    "w-full justify-start px-2 py-2 font-normal hover:bg-gray-100 my-1",
                    pathname === item.href
                      ? "bg-gray-100 font-medium"
                      : "text-gray-700"
                  )}
                >
                  <Link href={item.href} className="text-[#525866] text-[14px] font-semibold">
                    <item.icon className="mr-3 h-5 w-5 text-[#525866]" />
                    {item.label}
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </div>
      </SidebarContent>
      <SidebarFooter className="border-t border-gray-200 p-5 !bg-white">
        <Button
          variant="ghost"
          className="w-full justify-between px-2 py-2 font-normal text-gray-700 hover:bg-gray-100"
        >
          <div className="flex items-center">
            <Globe className="mr-3 h-5 w-5" />
            royaltap.shop
          </div>
          <ChevronRight className="h-4 w-4 text-gray-400" />
        </Button>
      </SidebarFooter>
    </Sidebar>
  )
}

