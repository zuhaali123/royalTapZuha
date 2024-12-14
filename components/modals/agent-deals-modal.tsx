
"use client"

import { ArrowLeft} from 'lucide-react'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator";

const deals = [
  {
    id: "12344312",
    date: "Oct 23 at 9:36 PM",
    name: "Roy Sharally",
    businessName: "#business name",
    location: "Los Angeles",
    state: "California",
    zipCode: "55555",
    number:3
  },
  {
    id: "12344312",
    date: "Oct 23 at 9:36 PM",
    name: "Roy Sharally",
    businessName: "#business name",
    location: "Los Angeles",
    state: "California",
    zipCode: "55555",
    number:3
  },
  {
    id: "12344312",
    date: "Oct 23 at 9:36 PM",
    name: "Roy Sharally",
    businessName: "#business name",
    location: "Los Angeles",
    state: "California",
    zipCode: "55555",
    number:3
  },
  {
    id: "12344312",
    date: "Oct 23 at 9:36 PM",
    name: "Roy Sharally",
    businessName: "#business name",
    location: "Los Angeles",
    state: "California",
    zipCode: "55555",
    number:3
  },
]
interface DealsModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function AgentDealsModal({ open, onOpenChange }: DealsModalProps){
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
    
      <DialogContent className="max-w-[975px]">
        <DialogHeader>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
            <Button variant="outline" size="icon" className="h-11 w-11 rounded-full border-gray-200 p-2"  onClick={() => onOpenChange(false)}>
                <ArrowLeft className="h-8 w-8 text-gray-600"/>
              </Button>
              <div className="ml-3">
                <DialogTitle className="text-xl">Deals</DialogTitle>
                <p className="text-sm text-muted-foreground">#subtitle here</p>
              </div>
            </div>
            
          </div>
        </DialogHeader>
        <Separator className="my-3" />
        <div className="mt-4 space-y-3">
          {deals.map((deal, index) => (
            <>
            <div
              key={index}
              className="grid grid-cols-7 items-center gap-4 rounded-lg p-2 hover:bg-muted/50"
            >
              <div className="text-sm font-semibold text-[#806400] underline">
                #{deal.id}
              </div>
              <div className="text-sm text-[#0E121B] font-semibold">
                {deal.date}
              </div>
              <div className='text-center'>
                <div className="text-sm font-semibold">{deal.name}</div>
                <div className="text-[12px] text-[#525866]">
                  {deal.businessName}
                </div>
              </div>
              <div className="text-sm text-[#0E121B] text-center">{deal.location}</div>
              <div className="text-sm text-[#0E121B] text-center">{deal.state}</div>
              <div className="text-sm text-[#0E121B] text-center">{deal.zipCode}</div>
              <div className="text-sm text-[#0E121B] text-center">{deal.number}</div>
              
            </div>
            <Separator  />
            </>
          ))}
        </div>
        <div className="mt-4">
          <Button className="w-full bg-[#F4C550] text-black hover:bg-[#E5B640]"  onClick={() => onOpenChange(false)}>
            Close
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}

