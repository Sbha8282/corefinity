"use client"

import * as React from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import {
  LayoutDashboard,
  Server,
  Rocket,
  Key,
  Bell,
  ShieldCheck,
  Smartphone,
  ChevronRight,
  MessageSquare,
  Settings
} from "lucide-react"

import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarFooter,
  useSidebar
} from "@/components/ui/sidebar"

const navigation = [
  { name: "Dashboard", href: "/", icon: LayoutDashboard },
  { name: "Environments", href: "/environments", icon: Server },
  { name: "Deployments", href: "/deployments", icon: Rocket },
  { name: "Tickets", href: "/tickets", icon: MessageSquare },
]

const securityNav = [
  { name: "SSH Keys", href: "/settings?tab=ssh", icon: Key },
]

export function AppSidebar() {
  const pathname = usePathname()
  const { state } = useSidebar()
  const isCollapsed = state === "collapsed"

  return (
    <Sidebar collapsible="icon" className="border-r border-slate-800 bg-[#0f172a] text-slate-400">
      <SidebarHeader className="flex items-center justify-center py-10 px-6">
        <Link href="/" className="flex items-center justify-center w-full">
          <div className={`relative ${isCollapsed ? "h-10 w-10" : "h-16 w-40"} transition-all duration-300 flex items-center justify-center shrink-0`}>
            <Image 
              src="/logo.svg" 
              alt="Corefinity Logo" 
              fill 
              className="object-contain" 
              priority
            />
          </div>
        </Link>
      </SidebarHeader>
      
      <SidebarContent className="px-3">
        <SidebarGroup className="pt-0">
          <SidebarGroupLabel className="px-4 text-[10px] font-black uppercase tracking-widest text-slate-500 mb-4">
            Control Panel
          </SidebarGroupLabel>
          <SidebarMenu>
            {navigation.map((item) => {
              const isActive = pathname === item.href
              return (
                <SidebarMenuItem key={item.name}>
                  <SidebarMenuButton
                    asChild
                    isActive={isActive}
                    tooltip={item.name}
                    className={`
                      transition-all duration-200 py-7 px-4 rounded-2xl mb-2
                      ${isActive 
                        ? "bg-primary text-white shadow-xl shadow-primary/25 font-black" 
                        : "text-slate-400 hover:bg-white/5 hover:text-white"
                      }
                    `}
                  >
                    <Link href={item.href}>
                      <item.icon className={`h-5 w-5 ${isActive ? "text-white" : "text-slate-500"}`} />
                      <span className="tracking-tight text-sm uppercase font-black">{item.name}</span>
                      {isActive && !isCollapsed && <ChevronRight className="ml-auto h-4 w-4" />}
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              )
            })}
          </SidebarMenu>
        </SidebarGroup>

        <SidebarGroup className="mt-6">
          <SidebarGroupLabel className="px-4 text-[10px] font-black uppercase tracking-widest text-slate-500 mb-4">
            Security & Identity
          </SidebarGroupLabel>
          <SidebarMenu>
            {securityNav.map((item) => {
              return (
                <SidebarMenuItem key={item.name}>
                  <SidebarMenuButton
                    asChild
                    tooltip={item.name}
                    className="transition-all duration-200 py-7 px-4 rounded-2xl mb-2 text-slate-400 hover:bg-white/5 hover:text-white"
                  >
                    <Link href={item.href}>
                      <item.icon className="h-5 w-5 text-slate-500" />
                      <span className="tracking-tight text-sm uppercase font-black">{item.name}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              )
            })}
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter className="p-6 border-t border-slate-800 bg-[#0f172a]">
        {!isCollapsed && (
          <div className="flex items-center gap-4 p-4 bg-white/5 rounded-2xl border border-white/5">
            <div className="h-10 w-10 rounded-xl bg-primary flex items-center justify-center font-black text-xs text-white shadow-lg shadow-primary/20">SI</div>
            <div className="flex flex-col min-w-0">
              <span className="text-xs font-black text-white truncate uppercase tracking-tighter">Subhamoy I.</span>
              <span className="text-[9px] text-slate-500 font-black uppercase tracking-widest">Admin</span>
            </div>
            <Link href="/settings" className="ml-auto">
              <Settings className="h-4 w-4 text-slate-500 hover:text-primary cursor-pointer transition-colors" />
            </Link>
          </div>
        )}
      </SidebarFooter>
    </Sidebar>
  )
}
