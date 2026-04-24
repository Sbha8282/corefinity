"use client"

import * as React from "react"
import { useRouter, useSearchParams } from "next/navigation"
import { 
  User, 
  Bell, 
  Key, 
  ShieldCheck, 
  Shield,
  Loader2
} from "lucide-react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { toast } from "@/hooks/use-toast"

const tabs = [
  { id: "profile", label: "Profile", icon: User },
  { id: "notifications", label: "Notifications", icon: Bell },
  { id: "api", label: "API Tokens", icon: Key },
  { id: "two-factor", label: "Two Factor Authentication", icon: ShieldCheck },
  { id: "firewall", label: "Firewall", icon: Shield },
]

export function SettingsClient() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const activeTab = searchParams.get("tab") || "profile"
  const [saving, setSaving] = React.useState(false)

  const handleUpdate = (e: React.FormEvent) => {
    e.preventDefault()
    setSaving(true)
    setTimeout(() => {
      setSaving(false)
      toast({ title: "Updated successfully" })
    }, 1000)
  }

  return (
    <div className="max-w-6xl mx-auto py-8">
      <h1 className="text-2xl font-bold text-[#4a5568] mb-8">Update Profile</h1>

      <div className="flex flex-col md:flex-row gap-8">
        <div className="w-full md:w-64 flex flex-col gap-1">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => router.push(`/settings?tab=${tab.id}`)}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all text-sm text-left group ${
                activeTab === tab.id 
                  ? "bg-white text-primary shadow-sm font-semibold" 
                  : "text-[#718096] hover:bg-white/50"
              }`}
            >
              <tab.icon className={`h-4.5 w-4.5 shrink-0 ${activeTab === tab.id ? "text-primary" : "text-slate-400 group-hover:text-slate-500"}`} />
              <span className="truncate">{tab.label}</span>
            </button>
          ))}
        </div>

        <div className="flex-1 space-y-8">
          {activeTab === "profile" && (
            <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
              <Card className="border border-slate-200 shadow-sm rounded-none overflow-hidden bg-white">
                <div className="p-8 space-y-6">
                  <div>
                    <h2 className="text-lg font-semibold text-[#2d3748]">Profile</h2>
                    <p className="text-sm text-[#718096]">Update your account's profile information and email address.</p>
                  </div>
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label className="text-sm font-semibold text-[#4a5568]">Name</Label>
                      <Input defaultValue="Subhamoy Indusvalley" className="bg-white border-[#cbd5e0] h-11 rounded-lg" />
                    </div>
                    <div className="space-y-2">
                      <Label className="text-sm font-semibold text-[#4a5568]">Email address</Label>
                      <Input defaultValue="subhamoy.i@corefinity.com" className="bg-white border-[#cbd5e0] h-11 rounded-lg" />
                    </div>
                    <div className="space-y-2">
                      <Label className="text-sm font-semibold text-[#4a5568]">Position</Label>
                      <Input defaultValue="Senior Infrastructure Architect" className="bg-white border-[#cbd5e0] h-11 rounded-lg" />
                    </div>
                  </div>
                </div>
                <div className="bg-slate-50/50 p-4 px-8 border-t border-slate-200 flex justify-end">
                  <Button onClick={handleUpdate} className="bg-primary hover:bg-orange-600 text-white px-6 h-10 font-bold rounded-lg transition-all">
                    {saving ? <Loader2 className="h-4 w-4 animate-spin" /> : "Save Changes"}
                  </Button>
                </div>
              </Card>

              <Card className="border border-slate-200 shadow-sm rounded-none overflow-hidden bg-white">
                <div className="p-8 space-y-6">
                  <h2 className="text-lg font-semibold text-[#2d3748]">Mobile number</h2>
                  <div className="space-y-4">
                    <div className="flex flex-col gap-2">
                      <Select defaultValue="gb">
                        <SelectTrigger className="w-full h-11 border-[#cbd5e0] rounded-lg text-sm text-[#4a5568] bg-white">
                          <SelectValue placeholder="Country" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="gb">🇬🇧 (GB) +44</SelectItem>
                          <SelectItem value="us">🇺🇸 (US) +1</SelectItem>
                        </SelectContent>
                      </Select>
                      <Input placeholder="7700 900XXX" className="bg-white border-[#cbd5e0] h-11 rounded-lg" />
                      <p className="text-[11px] italic text-[#a0aec0]">Please enter your mobile number using the international format.</p>
                    </div>
                  </div>
                </div>
                <div className="bg-slate-50/50 p-4 px-8 border-t border-slate-200 flex justify-end">
                  <Button onClick={handleUpdate} className="bg-primary hover:bg-orange-600 text-white px-6 h-10 font-bold rounded-lg transition-all">
                    Update
                  </Button>
                </div>
              </Card>

              <Card className="border border-slate-200 shadow-sm rounded-none overflow-hidden bg-white">
                <div className="p-8 space-y-6">
                  <div>
                    <h2 className="text-lg font-semibold text-[#2d3748]">Update Password</h2>
                    <p className="text-sm text-[#718096]">Ensure your account is using a long, random password to stay secure.</p>
                  </div>
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label className="text-sm font-semibold text-[#4a5568]">Current Password</Label>
                      <Input type="password" placeholder="••••••••" className="bg-white border-[#cbd5e0] h-11 rounded-lg" />
                    </div>
                    <div className="space-y-2">
                      <Label className="text-sm font-semibold text-[#4a5568]">New Password</Label>
                      <Input type="password" placeholder="••••••••" className="bg-white border-[#cbd5e0] h-11 rounded-lg" />
                    </div>
                    <div className="space-y-2">
                      <Label className="text-sm font-semibold text-[#4a5568]">Confirm Password</Label>
                      <Input type="password" placeholder="••••••••" className="bg-white border-[#cbd5e0] h-11 rounded-lg" />
                    </div>
                  </div>
                </div>
                <div className="bg-slate-50/50 p-4 px-8 border-t border-slate-200 flex justify-end">
                  <Button onClick={handleUpdate} className="bg-primary hover:bg-orange-600 text-white px-6 h-10 font-bold rounded-lg transition-all">
                    Update Password
                  </Button>
                </div>
              </Card>
            </div>
          )}

          {activeTab !== "profile" && (
            <div className="py-20 text-center space-y-4 opacity-50 bg-white border border-dashed rounded-xl">
              <div className="text-slate-400 text-sm font-medium italic">Content for {activeTab} is coming soon...</div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}