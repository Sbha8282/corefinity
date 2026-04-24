"use client"

import * as React from "react"
import { Bell, Search, ChevronDown, LogOut, Key, User } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { SidebarTrigger } from "@/components/ui/sidebar"
import Link from "next/link"

export function AppNavbar() {
  const [client, setClient] = React.useState("All clients")
  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <header className="sticky top-0 z-40 w-full h-16 bg-white border-b border-slate-200 flex items-center justify-between px-6 shadow-sm">
        <div className="flex items-center gap-4 flex-1">
          <div className="w-9 h-9 bg-slate-100 rounded-lg animate-pulse" />
        </div>
      </header>
    )
  }

  return (
    <header className="sticky top-0 z-40 w-full h-16 bg-white border-b border-slate-200 flex items-center justify-between px-6 shadow-sm">
      <div className="flex items-center gap-4 flex-1">
        <SidebarTrigger className="text-slate-400 hover:text-slate-900" />
        
        <div className="flex items-center gap-2">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="sm" className="h-9 px-3 rounded-lg border-slate-200 text-slate-600 font-medium bg-white hover:bg-slate-50">
                Currently viewing as: {client}
                <ChevronDown className="ml-2 h-4 w-4 opacity-50" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start" className="rounded-xl p-1 modern-shadow">
              <DropdownMenuItem onClick={() => setClient("All clients")} className="rounded-lg cursor-pointer">All clients</DropdownMenuItem>
              <DropdownMenuItem onClick={() => setClient("Production")} className="rounded-lg cursor-pointer">Production</DropdownMenuItem>
              <DropdownMenuItem onClick={() => setClient("Staging")} className="rounded-lg cursor-pointer">Staging</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        <div className="relative max-w-md w-full ml-2 hidden md:block">
          <Search className="absolute left-3 top-2.5 h-4 w-4 text-slate-400" />
          <Input
            type="search"
            placeholder="Press / to search"
            className="pl-9 bg-slate-50 border-slate-200 h-9 rounded-lg focus-visible:ring-primary w-full text-sm placeholder:text-slate-400"
          />
        </div>
      </div>

      <div className="flex items-center gap-3">
        <Button variant="ghost" size="icon" className="h-9 w-9 text-slate-400 hover:bg-slate-50 rounded-full">
          <Bell className="h-5 w-5" />
        </Button>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <button className="flex items-center gap-2 px-3 py-1.5 rounded-lg border border-slate-200 hover:bg-slate-50 transition-colors">
              <div className="h-6 w-6 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold text-[10px]">
                SI
              </div>
              <span className="text-sm font-semibold text-slate-700">Subhamoy Indusvalley</span>
              <ChevronDown className="h-4 w-4 text-slate-400" />
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-48 rounded-xl p-1 modern-shadow mt-1" align="end">
            <DropdownMenuItem asChild>
              <Link href="/settings?tab=profile" className="rounded-lg py-2 text-primary font-bold cursor-pointer flex items-center">
                <User className="mr-2 h-4 w-4" /> Profile
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <Link href="/settings?tab=api" className="rounded-lg py-2 text-slate-600 cursor-pointer flex items-center">
                <Key className="mr-2 h-4 w-4" /> API Tokens
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem className="rounded-lg py-2 text-rose-600 font-medium cursor-pointer flex items-center">
              <LogOut className="mr-2 h-4 w-4" /> Logout
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  )
}
