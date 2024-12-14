"use client"

import { useCallback, useState } from "react"
import { File, ChevronDown, MoreVertical, ChartLine, UsersRound,ArrowUpDown,ChevronUp } from 'lucide-react'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,

} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Separator } from "@/components/ui/separator";
import { Report, sampleData } from "@/utils/constants"
import React from "react"
type SortDirection = "asc" | "desc";
type SortColumn = keyof Report | null;

const timeRanges = [
  { value: "all", label: "All Time" },
  { value: "year", label: "Year" },
  { value: "month", label: "Month" },
  { value: "week", label: "Week" },
  { value: "day", label: "Day" },
]



interface ReportModalProps {
    open: boolean;
    onOpenChange: (open: boolean) => void;
  }

export function AgentReportModal({ open, onOpenChange }: ReportModalProps){
  const [timeRange, setTimeRange] = useState("all")
  const [sortColumn, setSortColumn] = useState<SortColumn>(null);
  const [sortDirection, setSortDirection] = useState<SortDirection>("asc");


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


  const sortedData = React.useMemo(() => {
    if (!sortColumn) return sampleData;
    return [...sampleData].sort((a, b) => {
      if (a[sortColumn] < b[sortColumn])
        return sortDirection === "asc" ? -1 : 1;
      if (a[sortColumn] > b[sortColumn])
        return sortDirection === "asc" ? 1 : -1;
      return 0;
    });
  }, [sampleData, sortColumn, sortDirection]);

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format(amount)
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      
      <DialogContent className="max-w-[1200px]">
        <DialogHeader>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
            <Button variant="outline" size="icon" className="h-8 w-8 rounded-full border-gray-200 p-2"  >
                <File className="h-8 w-8" />
              </Button>
              <div className="ml-4">
                <DialogTitle className="text-xl">Agent Report</DialogTitle>
                <p className="text-sm text-muted-foreground">#subtitle here</p>
              </div>
            </div>
           
          </div>
        </DialogHeader>
       < Separator className="my-4" />

        <div className="space-y-6 border-2 p-5 border-[#E1E4EA] rounded-xl">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-medium">Sales</h2>
            <Select value={timeRange} onValueChange={setTimeRange}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Select time range" />
              </SelectTrigger>
              <SelectContent>
                {timeRanges.map((range) => (
                  <SelectItem key={range.value} value={range.value}>
                    {range.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="flex items-center gap-4 rounded-lg border p-4">
            <Button variant="outline" size="icon" className="h-8 w-8 rounded-full border-gray-200 p-2"  >
                <ChartLine className="h-4 w-4" />
              </Button>
              <div>
                <div className="text-sm font-normal text-[#525866]">Sales</div>
                <div className="flex items-center gap-2">
                  <div className="text-[18px] font-medium text-[#0E121B]">$90,250.00</div>
                  <span className="rounded bg-emerald-50 px-2 py-1 text-xs text-emerald-600">
                    +3.2%
                  </span>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-4 rounded-lg border p-4">
            <Button variant="outline" size="icon" className="h-8 w-8 rounded-full border-gray-200 p-2"  >
                <UsersRound className="h-4 w-4" />
              </Button>
              <div>
                <div className="text-sm font-normal underline text-[#806400]">Items Sold</div>
                <div className="flex items-center gap-2">
                  <div className="text-[18px] font-medium text-[#0E121B]">444,4444</div>
                  <span className="rounded bg-emerald-50 px-2 py-1 text-xs text-emerald-600">
                    +5%
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-lg border">
            <Table>
              <TableHeader>
                <TableRow className="bg-[#FAF7F5]">
                  <TableHead onClick={() => handleSort("orderId")} className="cursor-pointer">
                  <div className="flex items-center text-[14px] text-[#525866]">
                    Order ID {renderSortIcon("orderId")} </div>
                  </TableHead>
                  <TableHead onClick={() => handleSort("orderDate")} className="cursor-pointer">
                  <div className="flex items-center text-[14px] text-[#525866]">
                    Order Date {renderSortIcon("orderDate")}</div>
                  </TableHead>
                  <TableHead onClick={() => handleSort("name")} className="cursor-pointer">
                    <div className="flex items-center text-[14px] text-[#525866]">
                    Name {renderSortIcon("name")}</div>
                  </TableHead>
                  <TableHead onClick={() => handleSort("city")} className="cursor-pointer">
                  <div className="flex items-center text-[14px] text-[#525866]">
                    City {renderSortIcon("city")}</div>
                  </TableHead>
                  <TableHead onClick={() => handleSort("state")} className="cursor-pointer">
                  <div className="flex items-center text-[14px] text-[#525866]">
                    State {renderSortIcon("state")}</div>
                  </TableHead>
                  <TableHead onClick={() => handleSort("zip")} className="cursor-pointer">
                  <div className="flex items-center text-[14px] text-[#525866]">
                    Zip {renderSortIcon("zip")}</div>
                  </TableHead>
                  <TableHead onClick={() => handleSort("itemsSold")} className="cursor-pointer">
                  <div className="flex items-center text-[14px] text-[#525866]">
                    Items Sold {renderSortIcon("itemsSold")}</div>
                  </TableHead>
                  <TableHead onClick={() => handleSort("amount")} className="cursor-pointer">
                  <div className="flex items-center text-[14px] text-[#525866]">
                    Amount {renderSortIcon("amount")}</div>
                  </TableHead>
                  <TableHead className="w-[50px]">Action</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {sortedData.map((row, index) => (
                  <TableRow key={index}>
                    <TableCell className="font-semibold text-[14px] text-[#806400] underline">
                      #{row.orderId}
                    </TableCell>
                    <TableCell className="text-[#0E121B] font-semibold text-[14px]">{row.orderDate}</TableCell>
                    <TableCell>
                      <div className="text-[#0E121B] font-semibold text-[14px]">{row.name}</div>
                      <div className="text-[12px] font-normal text-[#525866]">{row.businessName}</div>
                    </TableCell>
                    <TableCell className="text-[#0E121B] font-medium text-[14px]">{row.city}</TableCell>
                    <TableCell className="text-[#0E121B] font-medium text-[14px]">{row.state}</TableCell>
                    <TableCell className="text-[#0E121B] font-medium text-[14px]">{row.zip}</TableCell>
                    <TableCell className="text-[#0E121B] font-medium text-[14px]">{row.itemsSold}</TableCell>
                    <TableCell className="text-[#0E121B] font-semibold text-[14px]">{formatCurrency(row.amount)}</TableCell>
                    <TableCell>
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" size="icon" className="h-8 w-8">
                            <MoreVertical className="h-4 w-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuItem>View details</DropdownMenuItem>
                          <DropdownMenuItem>Edit</DropdownMenuItem>
                          <DropdownMenuItem className="text-red-600">Delete</DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>

   

          
        </div>

        <Button className="w-full bg-[#F4C550] text-black font-semibold hover:bg-[#E5B640]" onClick={() => onOpenChange(false)}>
            Close
          </Button>
      </DialogContent>
    </Dialog>
  )
}

