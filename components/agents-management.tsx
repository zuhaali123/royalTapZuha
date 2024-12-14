"use client";

import * as React from "react";
import { MoreVertical, Plus, Search, ExternalLink } from "lucide-react";
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

import { useState } from "react";
import { ChevronUp, ChevronDown, ArrowUpDown, Trash2 } from "lucide-react";
import { CreateAgentModal } from "./modals/create-agent-modal";
import { EditAgentModal } from "./modals/edit-agent-modal"; 
import { AgentDealsModal } from "./modals/agent-deals-modal";
import { AgentReportModal } from "./modals/agent-report-modal";
import { Separator } from "@/components/ui/separator";
import { agents } from "../utils/constants";
import type { Agent } from "../utils/constants";
import { getAvatarBackground } from "@/utils/helpers";

type SortDirection = "asc" | "desc";
type SortColumn = keyof Agent | null;

export function AgentsManagement() {
  const [selectedTab, setSelectedTab] = React.useState("all");
  const [selectedAgents, setSelectedAgents] = React.useState<string[]>([]);
  const [sortColumn, setSortColumn] = useState<SortColumn>(null);
  const [sortDirection, setSortDirection] = useState<SortDirection>("asc");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDealModalOpen, setIsDealModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isAllSelected, setIsAllSelected] = useState(false);
  const [isReportModalOpen, setReportModalOpen] = useState(false);

  

  const handleSelectAll = () => {
    const allSelected = selectedAgents.length === agents.length;
    setSelectedAgents(allSelected ? [] : agents.map((agent) => agent.id));
    setIsAllSelected(!allSelected); // Track if all rows are selected
  };

  const sortedAgents = React.useMemo(() => {
    if (!sortColumn) return agents;
    return [...agents].sort((a, b) => {
      if (a[sortColumn]! < b[sortColumn]!)
        return sortDirection === "asc" ? -1 : 1;
      if (a[sortColumn]! > b[sortColumn]!)
        return sortDirection === "asc" ? 1 : -1;
      return 0;
    });
  }, [agents, sortColumn, sortDirection]);

  const filteredAgents = sortedAgents.filter((agent) =>
    Object.values(agent)
      .join(" ")
      .toLowerCase()
      .includes(searchQuery.toLowerCase())
  );

  const handleAgentSelect = (agentId: string) => {
    setSelectedAgents((prev) =>
      prev.includes(agentId)
        ? prev.filter((id) => id !== agentId)
        : [...prev, agentId]
    );
  };

  const handleSort = (column: SortColumn) => {
    setSortColumn(column);
    setSortDirection((prev) => (prev === "asc" ? "desc" : "asc"));
  };

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
      <div className="flex justify-between items-center">
        <Tabs defaultValue="all" className="w-auto">
          <TabsList>
            <TabsTrigger value="all">All</TabsTrigger>
            <TabsTrigger value="archieved">Archieved</TabsTrigger>
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

              <div className="flex items-center gap-2">
                <Button variant="outline" size="sm" className="h-8">
                  <ExternalLink className="h-4 w-4" />
                  Export
                </Button>
              </div>

              <Button
                className="bg-[#EDC433] hover:bg-[#d5ac1b] text-end text-black-900"
                onClick={() => setIsModalOpen(true)}
              >
                <Plus className="mr-2 h-4 w-4" />
                Create a new Agent
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
              <TableHead className="w-[50px]">
                <Checkbox
                  checked={selectedAgents.length === agents.length}
                  onCheckedChange={handleSelectAll}
                />
              </TableHead>
              {[
                "name",
                "email",
                "phone",
                "city",
                "state",
                "country",
                "zip",
              ].map((column) => (
                <TableHead
                  key={column}
                  onClick={() => handleSort(column as keyof Agent)}
                  className="cursor-pointer"
                >
                  <div className="flex items-center text-[14px] text-[#525866]">
                    {column.charAt(0).toUpperCase() + column.slice(1)}{" "}
                    {renderSortIcon(column as keyof Agent)}
                  </div>
                </TableHead>
              ))}
              <TableHead className="w-[50px] text-[14px] text-[#525866]">
                Action
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredAgents.map((agent) => (
              <TableRow key={agent.id}>
                <TableCell>
                  <Checkbox
                    checked={selectedAgents.includes(agent.id)}
                    onCheckedChange={() => handleAgentSelect(agent.id)}
                  />
                </TableCell>
                <TableCell>
                  <div className="flex items-center gap-2">
                    <Avatar
                      className={`h-8 w-8 ${getAvatarBackground(
                        agent.background
                      )}`}
                    >
                      <AvatarImage src={agent.avatar} alt={agent.name} />
                      <AvatarFallback>{agent.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="font-medium text-[#806400] text-[14px] underline">
                        {agent.name}
                      </div>
                      <div className="text-[12px] text-[#525866] font-normal">
                        {agent.joinDate}
                      </div>
                    </div>
                  </div>
                </TableCell>
                {["email", "phone", "city", "state", "country", "zip"].map(
                  (field) => (
                    <TableCell
                      key={field}
                      className="text-[14px] text-[#0E121B] font-normal"
                    >
                      {agent[field as keyof Agent]}
                    </TableCell>
                  )
                )}
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
                      <DropdownMenuItem className="text-[14px] block w-full text-[#525866] font-normal text-center p-2"  onClick={() => setIsDealModalOpen(true)}>
                        Deals
                      </DropdownMenuItem>
                      <Separator />
                      <DropdownMenuItem className="text-[14px] block w-full text-[#525866] font-normal text-center p-2"  onClick={() => setReportModalOpen(true)}>
                       Agent Report 
                      </DropdownMenuItem>
                      <Separator />
                      <DropdownMenuItem
                        className="text-[14px] block w-full text-[#525866] font-normal text-center p-2" onClick={() => setIsEditModalOpen(true)}
                       
                      >
                        Edit
                      </DropdownMenuItem>

                      <Separator />
                      <DropdownMenuItem className="text-destructive block w-full text-[14px]  font-normal text-center p-2">
                        Archive
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
        <div className="text-sm text-muted-foreground">Page 1 of 5</div>
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
        <div className="text-sm text-muted-foreground">1 / page</div>
      </div>
      <CreateAgentModal open={isModalOpen} onOpenChange={setIsModalOpen} />
      <AgentDealsModal
        open={isDealModalOpen}
        onOpenChange={setIsDealModalOpen}
      />
      <EditAgentModal
        open={isEditModalOpen}
        onOpenChange={setIsEditModalOpen}
      />
      <AgentReportModal
        open={isReportModalOpen}
        onOpenChange={setReportModalOpen}
      />
      
      
    </div>
  );
}
