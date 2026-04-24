"use client"

import * as React from "react"
import { 
  Plus, 
  Search, 
  ChevronRight,
  Paperclip,
  Link2,
  MoreHorizontal,
  ChevronDown,
  AlertCircle,
  MessageSquare,
  History,
  Activity as ActivityIcon,
  User,
  Tag,
  Clock,
  Layout
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const tickets = [
  { id: "COR-1024", title: "API latency spikes in US-East production", status: "In Progress", priority: "High", created: "2024-03-24", author: "Sarah Connor", category: "Infrastructure", description: "Varnish version 5.0 is not supported so it should be 4.0 even though actually used Varnish version is 5." },
  { id: "COR-1025", title: "Add 2FA support for GitHub SSO", status: "Open", priority: "Medium", created: "2024-03-23", author: "John Smith", category: "Security", description: "Standard authentication module update required for SSO integration." },
  { id: "COR-1026", title: "Database migration for user service", status: "Resolved", priority: "Low", created: "2024-03-22", author: "Mike Wazowski", category: "Database", description: "Legacy SQL to NoSQL migration for scaling purposes." },
]

export default function TicketsPage() {
  const [selectedTicket, setSelectedTicket] = React.useState(tickets[0])

  return (
    <div className="flex h-[calc(100vh-8rem)] overflow-hidden gap-6">
      {/* Left List Sidebar */}
      <div className="w-80 flex-shrink-0 flex flex-col gap-4">
        <div className="relative">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input className="pl-9 bg-card" placeholder="Filter tickets..." />
        </div>
        <div className="flex-1 overflow-y-auto space-y-2 pr-2">
          {tickets.map((ticket) => (
            <button
              key={ticket.id}
              onClick={() => setSelectedTicket(ticket)}
              className={`w-full text-left p-3 rounded-lg transition-all border ${
                selectedTicket.id === ticket.id 
                  ? "bg-primary/5 border-primary" 
                  : "bg-card border-transparent hover:border-border"
              }`}
            >
              <div className="text-[10px] font-bold text-muted-foreground mb-1 uppercase tracking-wider">{ticket.id}</div>
              <div className="font-semibold text-sm truncate mb-1">{ticket.title}</div>
              <div className="flex items-center gap-2">
                <Badge variant="outline" className="text-[10px] h-4">{ticket.status}</Badge>
                <span className="text-[10px] text-muted-foreground">{ticket.created}</span>
              </div>
            </button>
          ))}
        </div>
        <Button variant="outline" className="w-full gap-2 border-dashed">
          <Plus className="h-4 w-4" /> Create Ticket
        </Button>
      </div>

      {/* Main Content Detail Area */}
      <div className="flex-1 overflow-y-auto bg-card rounded-xl border border-border flex">
        <div className="flex-1 p-8 space-y-8">
          {/* Breadcrumbs */}
          <div className="flex items-center gap-2 text-xs text-muted-foreground">
            <span>Corefinity</span>
            <ChevronRight className="h-3 w-3" />
            <span>Support</span>
            <ChevronRight className="h-3 w-3" />
            <span className="font-medium text-foreground">{selectedTicket.id}</span>
          </div>

          <div className="space-y-4">
            <h1 className="text-3xl font-bold font-headline tracking-tight">{selectedTicket.title}</h1>
            <div className="flex items-center gap-2">
              <Button variant="outline" size="sm" className="h-8 gap-2">
                <Paperclip className="h-4 w-4" /> Attach
              </Button>
              <Button variant="outline" size="sm" className="h-8 gap-2">
                <Link2 className="h-4 w-4" /> Link item
              </Button>
              <Button variant="outline" size="sm" className="h-8 gap-2">
                <Plus className="h-4 w-4" /> Create subtask
              </Button>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" size="sm" className="h-8">
                    <MoreHorizontal className="h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem>Log work</DropdownMenuItem>
                  <DropdownMenuItem>Move ticket</DropdownMenuItem>
                  <DropdownMenuItem className="text-destructive">Delete</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>

          <Accordion type="single" collapsible defaultValue="description">
            <AccordionItem value="description" className="border-none">
              <AccordionTrigger className="text-sm font-bold uppercase tracking-wider hover:no-underline py-2">
                Description
              </AccordionTrigger>
              <AccordionContent className="pt-4">
                <div className="bg-slate-50 p-6 rounded-lg font-code text-xs leading-relaxed border border-slate-100 whitespace-pre">
                  {`# Ticket Description\n\n${selectedTicket.description}\n\n1  # VCL version 5.0 is not supported so it should be 4.0\n2  vcl 4.0;\n3  \n4  import std;\n5  # The minimal Varnish version is 5.0\n6  # For SSL offloading, pass the following header...`}
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>

          <div className="space-y-4">
            <h4 className="text-sm font-bold uppercase tracking-wider">Subtasks</h4>
            <Button variant="ghost" size="sm" className="w-full justify-start text-xs font-medium text-muted-foreground hover:bg-slate-50 border border-dashed rounded-lg py-4">
              <Plus className="h-3 w-3 mr-2" /> Add subtask
            </Button>
          </div>

          <div className="space-y-4">
            <h4 className="text-sm font-bold uppercase tracking-wider">Activity</h4>
            <Tabs defaultValue="all" className="w-full">
              <TabsList className="bg-transparent h-auto p-0 gap-6 border-b rounded-none w-full justify-start mb-4">
                <TabsTrigger value="all" className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent px-1 py-2 font-semibold">All</TabsTrigger>
                <TabsTrigger value="comments" className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent px-1 py-2 font-semibold">Comments</TabsTrigger>
                <TabsTrigger value="history" className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent px-1 py-2 font-semibold">History</TabsTrigger>
                <TabsTrigger value="worklogs" className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent px-1 py-2 font-semibold">Worklogs</TabsTrigger>
              </TabsList>
              
              <TabsContent value="all" className="space-y-6">
                <div className="flex gap-3">
                  <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-xs shrink-0">JD</div>
                  <div className="flex-1 space-y-2">
                    <Input placeholder="Add a comment..." className="bg-slate-50 border-none h-10" />
                    <div className="text-[10px] text-muted-foreground">Pro tip: press <kbd className="bg-slate-100 px-1 rounded">M</kbd> to comment</div>
                  </div>
                </div>
                
                <div className="space-y-6">
                  <div className="flex gap-3">
                    <div className="h-8 w-8 rounded-full bg-slate-200 flex items-center justify-center text-slate-500 font-bold text-xs shrink-0">SC</div>
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-bold">Sarah Connor</span>
                        <span className="text-[10px] text-muted-foreground">13 April 2024 at 11:30</span>
                      </div>
                      <p className="text-sm text-slate-600">Comment visible to everyone</p>
                    </div>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>

        {/* Right Detail Sidebar */}
        <div className="w-80 border-l border-border p-6 space-y-6">
          <div className="flex items-center gap-2">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="secondary" className="bg-primary/10 text-primary hover:bg-primary/20 gap-2 h-9 px-3 font-bold uppercase text-[11px]">
                  {selectedTicket.status}
                  <ChevronDown className="h-3 w-3" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem>In Progress</DropdownMenuItem>
                <DropdownMenuItem>To Do</DropdownMenuItem>
                <DropdownMenuItem>Done</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <Button variant="ghost" size="icon" className="h-9 w-9">
              <ActivityIcon className="h-4 w-4" />
            </Button>
          </div>

          <Accordion type="single" collapsible defaultValue="details">
            <AccordionItem value="details" className="border-none">
              <AccordionTrigger className="text-xs font-bold uppercase tracking-wider hover:no-underline py-2 border-b">
                Details
              </AccordionTrigger>
              <AccordionContent className="pt-4 space-y-4">
                <div className="grid grid-cols-2 gap-y-4 text-xs">
                  <span className="text-muted-foreground">Priority</span>
                  <div className="flex items-center gap-2 font-medium">
                    <div className={`h-2 w-2 rounded-full ${selectedTicket.priority === 'High' ? 'bg-destructive' : 'bg-warning'}`} />
                    {selectedTicket.priority}
                  </div>

                  <span className="text-muted-foreground">Assignee</span>
                  <div className="flex items-center gap-2 font-medium">
                    <div className="h-5 w-5 rounded-full bg-slate-100 flex items-center justify-center text-[8px] font-bold">SC</div>
                    {selectedTicket.author}
                  </div>

                  <span className="text-muted-foreground">Team</span>
                  <span className="font-medium">None</span>

                  <span className="text-muted-foreground">Reporter</span>
                  <div className="flex items-center gap-2 font-medium">
                    <div className="h-5 w-5 rounded-full bg-slate-100 flex items-center justify-center text-[8px] font-bold">JD</div>
                    John Doe
                  </div>

                  <span className="text-muted-foreground">Labels</span>
                  <span className="font-medium text-muted-foreground italic">None</span>

                  <span className="text-muted-foreground">Due date</span>
                  <span className="font-medium text-muted-foreground italic">None</span>

                  <span className="text-muted-foreground">Company</span>
                  <Badge variant="outline" className="w-fit">Corefinity</Badge>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>

          <div className="text-[10px] text-muted-foreground pt-4 border-t">
            Created 13 April 2024 at 11:30
            <br />
            Updated 2 minutes ago
          </div>
        </div>
      </div>
    </div>
  )
}
