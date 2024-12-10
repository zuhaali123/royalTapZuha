"use client";

import * as React from "react";
import { MoreVertical, Plus, Search,Dot } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { Badge } from "@/components/ui/badge";

interface User {
  id: string;
  name: string;
  email: string;
  role: "Super Admin" | "Admin" | "Manager";
  accessLevel: string;
  details?: string;
  joinDate: string;
  avatar: string;
  background:string;
}

const users: User[] = [
  {
    id: "1",
    name: "Roy Sharaliy",
    email: "roy@sharaliy.com",
    role: "Super Admin",
    accessLevel: "Full Access",
    details: "#details",
    joinDate: "Since Nov, 2024",
    avatar: "/images/person1.png",
    background:"blue"
  },
  {
    id: "2",
    name: "Afi Noor",
    email: "afi@royaltap.shop",
    role: "Super Admin",
    accessLevel: "Full Access",
    details: "#details",
    joinDate: "Since Nov, 2024",
    avatar: "/images/person3.png",
    background:"red"
  },
  {
    id: "3",
    name: "Tehila",
    email: "tehila@royal.marketing",
    role: "Admin",
    accessLevel: "Admin Access",
    details: "(Left menu)",
    joinDate: "Since Nov, 2024",
    avatar: "/images/person1.png",
    background:"gray"
  },
  {
    id: "4",
    name: "Roy Sharaliy",
    email: "roy@sharaliy.com",
    role: "Super Admin",
    accessLevel: "Full Access",
    details: "#details",
    joinDate: "Since Nov, 2024",
    avatar: "/images/person4.png",
    background:"green"
  },
  {
    id: "5",
    name: "Afi Noor",
    email: "afi@royaltap.shop",
    role: "Super Admin",
    accessLevel: "Full Access",
    details: "#details",
    joinDate: "Since Nov, 2024",
    avatar: "/images/person2.png",
    background:"blue"
  },
  {
    id: "6",
    name: "Tehila",
    email: "tehila@royal.marketing",
    role: "Admin",
    accessLevel: "Admin Access",
    details: "(Left menu)",
    joinDate: "Since Nov, 2024",
    avatar: "/images/person3.png",
    background:"purple"
  },
  {
    id: "7",
    name: "Roy Sharaliy",
    email: "roy@sharaliy.com",
    role: "Super Admin",
    accessLevel: "Full Access",
    details: "#details",
    joinDate: "Since Nov, 2024",
    avatar: "/images/person4.png",
    background:"pink"
  },
  {
    id: "8",
    name: "Afi Noor",
    email: "afi@royaltap.shop",
    role: "Super Admin",
    accessLevel: "Full Access",
    details: "#details",
    joinDate: "Since Nov, 2024",
    avatar: "/images/person1.png",
    background:"orange"
  },
  {
    id: "9",
    name: "Tehila",
    email: "tehila@royal.marketing",
    role: "Admin",
    accessLevel: "Admin Access",
    details: "(Left menu)",
    joinDate: "Since Nov, 2024",
    avatar: "/images/person2.png",
    background:"yellow"
  },
  // Add more users as needed
];

function getAvatarBackground(color: string) {
  const colorMap: Record<string, string> = {
    blue: "bg-blue-500",
    red: "bg-red-500",
    gray: "bg-gray-500",
    green: "bg-green-500",
    purple: "bg-purple-500",
    pink: "bg-pink-500",
    orange: "bg-orange-500",
    yellow: "bg-yellow-500",
  };

  return colorMap[color] || "bg-gray-200"; // Default to gray if the color is not found
}

function getRoleColor(color: string) {
  const colorMap: Record<string, string> = {
    blue: "bg-blue-500",
    red: "bg-red-500",
    gray: "bg-gray-500",
    green: "bg-green-500",
    purple: "bg-purple-500",
    pink: "bg-pink-500",
    orange: "bg-orange-500",
    yellow: "bg-yellow-500",
  };

  return colorMap[color]
}


const roleColor = {
  "Super Admin": "bg-green-500",
  Admin: "bg-blue-500",
  Manager: "bg-yellow-500",
};

export function UserManagement() {
  const [selectedTab, setSelectedTab] = React.useState("active");
  const [selectedUsers, setSelectedUsers] = React.useState<string[]>([]);

  const handleUserSelect = (userId: string) => {
    setSelectedUsers((prev) =>
      prev.includes(userId)
        ? prev.filter((id) => id !== userId)
        : [...prev, userId]
    );
  };

  const handleSelectAll = () => {
    setSelectedUsers((prev) =>
      prev.length === users.length ? [] : users.map((user) => user.id)
    );
  };

  return (
    <div className="w-full p-4 space-y-4 bg-[#ffffff]">
      <div className="flex justify-between items-center">
        <Tabs defaultValue="active" className="w-auto">
          <TabsList>
            <TabsTrigger value="active">Active</TabsTrigger>
            <TabsTrigger value="deleted">Deleted</TabsTrigger>
          </TabsList>
        </Tabs>
        <div className="flex items-center gap-4">
          <div className="relative">
            <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input placeholder="Search..." className="pl-8 w-[250px]" />
          </div>
          <Button className="bg-[#EDC433] text-black-900">
            <Plus className="mr-2 h-4 w-4" />
            Invite Member
          </Button>
        </div>
      </div>

      <div className="border rounded-lg">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[50px]">
                <Checkbox
                  checked={selectedUsers.length === users.length}
                  onCheckedChange={handleSelectAll}
                />
              </TableHead>
              <TableHead>Name</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Role</TableHead>
              <TableHead>Access Level</TableHead>
              <TableHead className="w-[50px]">Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {users.map((user) => (
              <TableRow key={user.id}>
                <TableCell>
                  <Checkbox
                    checked={selectedUsers.includes(user.id)}
                    onCheckedChange={() => handleUserSelect(user.id)}
                  />
                </TableCell>
                <TableCell>
                  <div className="flex items-center gap-2">
                  <Avatar className={`h-8 w-8 ${getAvatarBackground(user.background)}`}>
                      <AvatarImage  src={user.avatar} alt={user.name} />
                      <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="font-medium text-[#806400] text-[14px] underline">{user.name}</div>
                      <div className="text-[12px] text-[#525866] font-normal">
                        {user.joinDate}
                      </div>
                    </div>
                  </div>
                </TableCell>
                <TableCell className="text-[14px] text-[#0E121B] font-normal">{user.email}</TableCell>
                <TableCell>
                  {/* <Badge className="text-[#525866] text-[12px] font-medium  p-1"
                   variant="outline"
                  > <Dot className={`h-4 w-4  stroke-2 text-red-80 `} />
                    {user.role}
                  </Badge> */}
                  <Badge className="flex items-center max-w-fit gap-2 border border-gray-300 bg-white text-gray-700 px-3 py-1 rounded-full shadow-sm ">
     
      <span
        className={`h-2 w-2 rounded-full ${
          roleColor[user.role] || "bg-gray-400"
        }`}
      ></span>
      
      <span className="text-sm font-medium">{user.role}</span>
    </Badge>
                </TableCell>
                <TableCell>
                  <div className="text-[#0E121B] font-medium text-sm">
                    {user.accessLevel}
                    <div className="text-[12px] text-[#525866] font-normal">
                      {user.details}
                    </div>
                  </div>
                </TableCell>
                <TableCell>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" className="h-8 w-8 p-0 bg-[#F5F7FA]">
                        <MoreVertical className="h-4 w-4 " />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem>Edit</DropdownMenuItem>
                      <DropdownMenuItem>Reset Password</DropdownMenuItem>
                      <DropdownMenuItem className="text-destructive">
                        Delete
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      <div className="flex items-center justify-between">
        <div className="text-sm text-muted-foreground">Page 1 of 16</div>
        <Pagination>
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious href="#" />
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#" isActive>
                1
              </PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">2</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">3</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">4</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">5</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationEllipsis />
            </PaginationItem>
            <PaginationItem>
              <PaginationNext href="#" />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
        <div className="text-sm text-muted-foreground">7 / page</div>
      </div>
    </div>
  );
}
