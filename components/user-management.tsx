"use client";

import * as React from "react";
import { MoreVertical, Plus, Search, Dot } from "lucide-react";
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
import { useState, useCallback } from "react";
import { ChevronUp, ChevronDown, ArrowUpDown,Trash2 } from "lucide-react";
import { InviteMemberModal } from "./modals/invite-member-modal";
import { ActivityLogDialog } from "./modals/activity-log-dialog";
import { Separator } from "@/components/ui/separator"
import {users } from '../utils/constants'
import type { User } from "../utils/constants";
import { getAvatarBackground } from "@/utils/helpers";
type SortDirection = "asc" | "desc";
type SortColumn = keyof User | null;

const roleColor = {
  "Super Admin": "bg-green-500",
  Admin: "bg-blue-500",
  Manager: "bg-yellow-500",
};

export function UserManagement() {
  const [selectedTab, setSelectedTab] = React.useState("active");
  const [selectedUsers, setSelectedUsers] = React.useState<string[]>([]);
  const [sortColumn, setSortColumn] = useState<SortColumn>(null);
  const [sortDirection, setSortDirection] = useState<SortDirection>("asc");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isActivityModalOpen, setIsActivityModalOpen] = useState(false);
  const [isAllSelected, setIsAllSelected] = useState(false);

const handleSelectAll = () => {
  const allSelected = selectedUsers.length === users.length;
  setSelectedUsers(allSelected ? [] : users.map((user) => user.id));
  setIsAllSelected(!allSelected); // Track if all rows are selected
};


  const sortedUsers = React.useMemo(() => {
    if (!sortColumn) return users;
    return [...users].sort((a, b) => {
      if (a[sortColumn] < b[sortColumn])
        return sortDirection === "asc" ? -1 : 1;
      if (a[sortColumn] > b[sortColumn])
        return sortDirection === "asc" ? 1 : -1;
      return 0;
    });
  }, [users, sortColumn, sortDirection]);

  const filteredUsers = sortedUsers.filter((user) =>
    Object.values(user)
      .join(" ")
      .toLowerCase()
      .includes(searchQuery.toLowerCase())
  );

  const handleUserSelect = (userId: string) => {
    setSelectedUsers((prev) =>
      prev.includes(userId)
        ? prev.filter((id) => id !== userId)
        : [...prev, userId]
    );
  };

  // const handleSelectAll = () => {
  //   setSelectedUsers((prev) =>
  //     prev.length === users.length ? [] : users.map((user) => user.id)
  //   );
  // };

  const handleSort = useCallback((column: SortColumn) => {
    setSortColumn(column);
    setSortDirection((prev) => (prev === "asc" ? "desc" : "asc"));
  }, []);

  const renderSortIcon = (column: SortColumn) => {
    if (sortColumn !== column) {
      return <ArrowUpDown className="ml-2 h-4 w-4" />;
    }
    return sortDirection === "asc" ? (
      <ChevronUp className="ml-2 h-4 w-4" />
    ) : (
      <ChevronDown className="ml-2 h-4 w-4" />
    );
  };

  return (
    <div className="w-full p-4 space-y-4 bg-[#ffffff]">
      {/* <div className="flex justify-between items-center">
        <Tabs defaultValue="active" className="w-auto">
          <TabsList>
            <TabsTrigger value="active">Active</TabsTrigger>
            <TabsTrigger value="deleted">Deleted</TabsTrigger>
          </TabsList>
        </Tabs>
        <div className="flex items-center gap-4">
          <div className="relative">
            <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search..."
              className="pl-8 w-[250px]"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
         

<Button
  className="bg-[#EDC433] hover:bg-[#d5ac1b] text-black-900"
  onClick={() => setIsModalOpen(true)} // Ensure this is the only button triggering the modal
>
  <Plus className="mr-2 h-4 w-4" />
  Invite Member
</Button>

        </div>
      </div> */}

<div className="flex justify-between items-center">
  
      <Tabs defaultValue="active" className="w-auto">
        <TabsList>
          <TabsTrigger value="active">Active</TabsTrigger>
          <TabsTrigger value="deleted">Deleted</TabsTrigger>
        </TabsList>
      </Tabs>
      {!isAllSelected ? (
    <>
      <div className="flex items-center gap-4">
        <div className="relative">
          <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search..."
            className="pl-8 w-[250px]"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        
        <Button
          className="bg-[#EDC433] hover:bg-[#d5ac1b] text-end text-black-900"
          onClick={() => setIsModalOpen(true)}
        >
          <Plus className="mr-2 h-4 w-4" />
          Invite Member
        </Button>
      </div>
    </>
  ) : (
    <div className="flex justify-end w-full">
    <Button className="bg-red-500 hover:bg-red-600 text-white flex items-center gap-2">
      <Trash2 className="mr-2 h-4 w-4" />
      Delete
    </Button>
    </div>
  )}
</div>


      <div className="border rounded-lg">
        <Table>
          <TableHeader className="bg-[#FAF7F5]">
            <TableRow>
              <TableHead className="w-[50px] ">
                <Checkbox
                  checked={selectedUsers.length === users.length}
                  onCheckedChange={handleSelectAll}
                  className={isAllSelected ? "bg-yellow-400" : ""}
                />
              </TableHead>

              <TableHead
                onClick={() => handleSort("name")}
                className="cursor-pointer "
              >
                <div className="flex items-center text-[14px] text-[#525866]">
                  Name {renderSortIcon("name")}
                </div>
              </TableHead>
              <TableHead
                onClick={() => handleSort("email")}
                className="cursor-pointer"
              >
               <div className="flex items-center text-[14px] text-[#525866]">
                  Email {renderSortIcon("email")}
                </div>
              </TableHead>
              <TableHead
                onClick={() => handleSort("role")}
                className="cursor-pointer"
              >
               <div className="flex items-center text-[14px] text-[#525866]">
                  Role {renderSortIcon("role")}
                </div>
              </TableHead>
              <TableHead
                onClick={() => handleSort("accessLevel")}
                className="cursor-pointer"
              >
               <div className="flex items-center text-[14px] text-[#525866]">
                  Access Level {renderSortIcon("accessLevel")}
                </div>
              </TableHead>

              <TableHead className="w-[50px] text-[14px] text-[#525866]">Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredUsers.map((user) => (
              <TableRow key={user.id}>
                <TableCell>
                  <Checkbox
                    checked={selectedUsers.includes(user.id)}
                    onCheckedChange={() => handleUserSelect(user.id)}
                    className={selectedUsers.includes(user.id) ? "bg-yellow-400" : ""}
                  />
                </TableCell>
                <TableCell>
                  <div className="flex items-center gap-2">
                    <Avatar
                      className={`h-8 w-8 ${getAvatarBackground(
                        user.background
                      )}`}
                    >
                      <AvatarImage src={user.avatar} alt={user.name} />
                      <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="font-medium text-[#806400] text-[14px] underline">
                        {user.name}
                      </div>
                      <div className="text-[12px] text-[#525866] font-normal">
                        {user.joinDate}
                      </div>
                    </div>
                  </div>
                </TableCell>
                <TableCell className="text-[14px] text-[#0E121B] font-normal">
                  {user.email}
                </TableCell>
                <TableCell>
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
                      <Button
                        variant="ghost"
                        className="h-8 w-8 p-0 bg-[#F5F7FA]"
                      >
                        <MoreVertical className="h-4 w-4 " />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem className="text-[14px] block w-full text-[#525866] font-normal text-center p-2">Edit</DropdownMenuItem>
                      <Separator />
                      <DropdownMenuItem className="text-[14px] block w-full text-[#525866] font-normal text-center p-2" onClick={() => setIsActivityModalOpen(true)} >Activity Log</DropdownMenuItem>
                      <Separator />
                      <DropdownMenuItem className="text-[14px] block w-full text-[#525866] font-normal text-center p-2">Reset Password</DropdownMenuItem>
                      <Separator />
                      <DropdownMenuItem className="text-destructive block w-full text-[14px]  font-normal text-center p-2">
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
      <InviteMemberModal open={isModalOpen} onOpenChange={setIsModalOpen} />
      <ActivityLogDialog open={isActivityModalOpen} onOpenChange={setIsActivityModalOpen} />
      

    </div>
    
  );
}
