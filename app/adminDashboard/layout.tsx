// "use client"

// // import {Sidebar} from '../../components/sidebar';
// import {Header} from '../../components/header';
// import {AppSidebar} from '../../components/sidebar';


// export default function DashboardLayout({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   return (
//     <div className="flex h-screen">
//       {/* Sidebar */}
//       <AppSidebar />

//       {/* Main Content */}
//       <div className="flex-1 flex flex-col">
//         {/* Header */}
//         <Header />

//         {/* Page Content */}
//         <main className="flex-1 bg-gray-100 p-6">{children}</main>
//       </div>
//     </div>
//   );
// }


"use client"

import { Header } from '@/components/header'
import { AppSidebar } from '@/components/sidebar'
import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar"

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <SidebarProvider>
      <div className="flex h-screen bg-white-100 w-full">
        <AppSidebar  />
        <SidebarInset className="flex flex-col">
          <Header />
          <main className="flex-1 bg-white-100 p-6 overflow-auto">
            {children}
          </main>
        </SidebarInset>
      </div>
    </SidebarProvider>
  )
}


