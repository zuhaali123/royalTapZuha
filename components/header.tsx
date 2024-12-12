import { Bell, ChartPie, Search, Settings, User2, Users ,LogOut,ChevronUp} from 'lucide-react'
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import Link from 'next/link'

export function Header() {
  return (
    <header className="flex h-16 items-center justify-between border-b border-gray-200 bg-white p-[44px]">
      <div className="flex items-center gap-4">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-100">
          <User2 className="h-5 w-5 text-gray-600" />
        </div>
        <div className="flex flex-col">
          <h1 className="text-xl font-semibold text-gray-900">Manage Users</h1>
          <p className="text-sm text-gray-500">
            Manage and collaborate within your organization's team
          </p>
        </div>
      </div>
      <div className="flex items-center gap-2">
        <Button variant="ghost" size="icon" className="text-gray-500 hover:text-gray-600">
          <Search className="h-5 w-5" />
        </Button>
        <Button variant="ghost" size="icon" className="text-gray-500 hover:text-gray-600">
          <Bell className="h-5 w-5" />
        </Button>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="flex items-center gap-2 cursor-pointer rounded-full pl-2">
              <Avatar className="h-8 w-8 bg-red-600">
                <AvatarImage className='bg-yellow-600' src="/public/images/person1.png" />
                <AvatarFallback>SO</AvatarFallback>
              </Avatar>
              <span className="text-sm font-medium">Sophia</span>
              <ChevronUp className="h-5 w-5" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-56">
          <Link href="/adminDashboard/admin-account">
            <DropdownMenuLabel className="text-[14px]  w-full text-[#525866] font-normal flex "><Settings className="h-5 w-5" /> Admin Account</DropdownMenuLabel>
            </Link>
            <Link href="#">
            <DropdownMenuItem className="text-[14px] flex w-full text-[#525866] font-normal"><Users className="h-5 w-5" /> Manage Users</DropdownMenuItem>
            </Link>
            <Link href="#">
            <DropdownMenuItem className="text-[14px] flex w-full text-[#525866] font-normal"><ChartPie className="h-5 w-5" /> Analytics</DropdownMenuItem>
            </Link>
            <DropdownMenuSeparator />
            <Link href="/login">
            <DropdownMenuItem className="text-[14px] flex w-full text-red-600  font-normal"><LogOut className="h-5 w-5 text-red" /> Log out</DropdownMenuItem>
            </Link>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  )
}

