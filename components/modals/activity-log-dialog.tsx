"use client"

import * as React from "react"
import { ArrowLeft, ExternalLink, X } from 'lucide-react'
import { CaretSortIcon } from "@radix-ui/react-icons"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Button } from "@/components/ui/button"

interface Activity {
  id: string
  date: string
  madeBy: string
  activity: string
}

interface InviteModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}


export  function ActivityLogDialog({ open, onOpenChange }: InviteModalProps) {
  // const [open, setOpen] = React.useState(true)
  const [sorting, setSorting] = React.useState<{ column: keyof Activity | null; direction: 'asc' | 'desc' }>({
    column: 'date',
    direction: 'desc',
  })

  // Sample data
  const activities: Activity[] = [
    { id: "1", date: "Oct 23 at 9:36 PM", madeBy: "User", activity: "#user made some changes and we describe it here" },
    { id: "2", date: "Oct 23 at 9:36 PM", madeBy: "Roy Sharally", activity: "#user made some changes and we describe it here" },
    { id: "3", date: "Oct 23 at 9:36 PM", madeBy: "User", activity: "#user made some changes and we describe it here" },
    { id: "4", date: "Oct 23 at 9:36 PM", madeBy: "Roy Sharally", activity: "#user made some changes and we describe it here" },
    { id: "5", date: "Oct 23 at 9:36 PM", madeBy: "Roy Sharally", activity: "#user made some changes and we describe it here" },
    { id: "6", date: "Oct 23 at 9:36 PM", madeBy: "User", activity: "#user made some changes and we describe it here" },
  ]

  const sortData = (data: Activity[]) => {
    if (!sorting.column) return data

    return [...data].sort((a, b) => {
      if (sorting.direction === 'asc') {
        return a[sorting.column] > b[sorting.column] ? 1 : -1
      }
      return a[sorting.column] < b[sorting.column] ? 1 : -1
    })
  }

  const handleSort = (column: keyof Activity) => {
    setSorting(current => ({
      column,
      direction: current.column === column && current.direction === 'asc' ? 'desc' : 'asc',
    }))
  }

  const sortedData = sortData(activities)

  return (
      <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="md:max-w-[999px] p-4">
        <DialogHeader className="p-4 border-b space-y-0">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Button variant="outline" size="icon" className="h-8 w-8 rounded-full border-gray-200 p-2"  onClick={() => onOpenChange(false)}>
                <ArrowLeft className="h-4 w-4" />
              </Button>
              <div className="ml-2">
                <DialogTitle className="text-lg">Activity Log</DialogTitle>
                <DialogDescription className="text-sm mt-0">#description here</DialogDescription>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Button variant="outline" size="sm" className="h-8">
              <ExternalLink className="h-4 w-4" />
             
                Export
              </Button>
              
            </div>
          </div>
        </DialogHeader>
        <div className=" rounded-lg">
        <Table>
          <TableHeader className="bg-[#FAF7F5] rounded-lg">
              <TableRow>
                <TableHead onClick={() => handleSort('date')} className="cursor-pointer w-[200px]">
                  <div className="flex items-center text-[14px] text-[#525866]">
                    Activity Date
                    <CaretSortIcon className="ml-2 h-4 w-4" />
                  </div>
                </TableHead>
                <TableHead onClick={() => handleSort('madeBy')} className="cursor-pointer w-[200px]">
                  <div className="flex items-center text-[14px] text-[#525866]">
                    Made by
                    <CaretSortIcon className="ml-2 h-4 w-4" />
                  </div>
                </TableHead>
                <TableHead className="flex items-center text-[14px] text-[#525866]">Activity</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {sortedData.map((activity) => (
                <TableRow key={activity.id} className="!p-2">
                  <TableCell className="font-semibold text-[14px] text-[#0E121B]">{activity.date}</TableCell>
                  <TableCell>
                    {activity.madeBy === "Roy Sharally" ? (
                      <span className="text-yellow-600 underline cursor-pointer">
                        {activity.madeBy}
                      </span>
                    ) : (
                      activity.madeBy
                    )}
                  </TableCell>
                  <TableCell className="font-normal text-[14px] text-[#0E121B]">{activity.activity}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
        <DialogFooter className="p-0">
          <Button 
            className="w-full rounded-md h-10 bg-yellow-400 hover:bg-yellow-500 text-black"
            onClick={() => onOpenChange(false)}
          >
            Close
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

