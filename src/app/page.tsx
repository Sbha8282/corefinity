"use client"

import * as React from "react"
import { 
  ArrowUpRight, 
  ArrowDownRight, 
  Server, 
  Rocket, 
  AlertCircle, 
  Activity,
  Zap,
  Cpu,
  Database,
  Globe,
  MoreVertical,
  Plus
} from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  AreaChart,
  Area
} from 'recharts'
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

const data = [
  { name: '00:00', cpu: 45, ram: 32, traffic: 120 },
  { name: '04:00', cpu: 52, ram: 34, traffic: 150 },
  { name: '08:00', cpu: 78, ram: 45, traffic: 450 },
  { name: '12:00', cpu: 65, ram: 42, traffic: 320 },
  { name: '16:00', cpu: 85, ram: 50, traffic: 580 },
  { name: '20:00', cpu: 60, ram: 38, traffic: 290 },
  { name: '23:59', cpu: 48, ram: 33, traffic: 140 },
]

const recentDeployments = [
  { id: "dep-1234", repo: "frontend-api", status: "Success", time: "2m ago", env: "Production" },
  { id: "dep-1235", repo: "auth-service", status: "Failed", time: "15m ago", env: "Staging" },
  { id: "dep-1236", repo: "payment-gateway", status: "In Progress", time: "Just now", env: "Production" },
]

export default function Dashboard() {
  return (
    <div className="space-y-8 animate-in fade-in duration-700">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <h1 className="text-4xl font-bold font-headline tracking-tight text-slate-900">Dashboard</h1>
          <p className="text-slate-500 mt-1 font-medium">Monitoring overview for <span className="text-primary font-bold">Corefinity Network</span> clusters.</p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline" className="gap-2 bg-white rounded-xl h-12 px-6 border-slate-200 text-slate-600 hover:bg-slate-50 transition-all font-semibold">
            <Zap className="h-4 w-4 text-primary" />
            Quick Actions
          </Button>
          <Button className="gap-2 h-12 px-6 rounded-xl shadow-lg shadow-primary/25 hover:scale-[1.02] active:scale-95 transition-all font-bold">
            <Plus className="h-4 w-4" />
            New Deployment
          </Button>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          { title: "Active Nodes", value: "24", sub: "+4 this week", icon: Server, color: "text-blue-500", bg: "bg-blue-50" },
          { title: "Avg. Deployment", value: "1.4m", sub: "-12s improved", icon: Rocket, color: "text-primary", bg: "bg-orange-50" },
          { title: "System Health", value: "99.9%", sub: "High availability", icon: Activity, color: "text-emerald-500", bg: "bg-emerald-50" },
          { title: "Incidents", value: "0", sub: "Clear for 48h", icon: AlertCircle, color: "text-rose-500", bg: "bg-rose-50" },
        ].map((stat, i) => (
          <Card key={i} className="glass-card border-none rounded-3xl group hover:translate-y-[-4px] transition-all duration-300">
            <CardContent className="pt-6">
              <div className="flex items-center justify-between mb-4">
                <div className={`p-3 rounded-2xl ${stat.bg} ${stat.color} group-hover:scale-110 transition-transform`}>
                  <stat.icon className="h-6 w-6" />
                </div>
                {i % 2 === 0 ? (
                  <Badge className="bg-emerald-50 text-emerald-600 border-none font-bold rounded-lg px-2 py-1">
                    <ArrowUpRight className="h-3 w-3 mr-1" />
                    12%
                  </Badge>
                ) : (
                  <Badge className="bg-rose-50 text-rose-600 border-none font-bold rounded-lg px-2 py-1">
                    <ArrowDownRight className="h-3 w-3 mr-1" />
                    5%
                  </Badge>
                )}
              </div>
              <div className="space-y-1">
                <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">{stat.title}</p>
                <h3 className="text-3xl font-bold text-slate-900">{stat.value}</h3>
                <p className="text-xs text-slate-500 font-medium">{stat.sub}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Chart */}
        <Card className="lg:col-span-2 glass-card border-none rounded-3xl overflow-hidden">
          <CardHeader className="pb-2 border-b border-slate-50">
            <div className="flex items-center justify-between">
              <div>
                <CardTitle className="text-xl">Network Performance</CardTitle>
                <CardDescription>Real-time throughput metrics across global clusters</CardDescription>
              </div>
              <div className="flex gap-2">
                <Badge variant="outline" className="bg-blue-50 text-blue-600 border-blue-100 rounded-lg px-3 py-1 font-bold">CPU LOAD</Badge>
                <Badge variant="outline" className="bg-emerald-50 text-emerald-600 border-emerald-100 rounded-lg px-3 py-1 font-bold">LATENCY</Badge>
              </div>
            </div>
          </CardHeader>
          <CardContent className="h-[340px] w-full pt-8">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={data}>
                <defs>
                  <linearGradient id="colorCpu" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#3B82F6" stopOpacity={0.15}/>
                    <stop offset="95%" stopColor="#3B82F6" stopOpacity={0}/>
                  </linearGradient>
                  <linearGradient id="colorRam" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#10B981" stopOpacity={0.15}/>
                    <stop offset="95%" stopColor="#10B981" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                <XAxis dataKey="name" stroke="#94A3B8" fontSize={11} tickLine={false} axisLine={false} dy={10} />
                <YAxis stroke="#94A3B8" fontSize={11} tickLine={false} axisLine={false} dx={-10} />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#fff', border: 'none', borderRadius: '16px', boxShadow: '0 10px 30px -10px rgba(0,0,0,0.1)' }}
                  itemStyle={{ fontSize: '12px', fontWeight: '700' }}
                  labelStyle={{ color: '#94A3B8', marginBottom: '4px', fontSize: '10px', textTransform: 'uppercase', fontWeight: '800' }}
                />
                <Area type="monotone" dataKey="cpu" stroke="#3B82F6" fillOpacity={1} fill="url(#colorCpu)" strokeWidth={3} dot={false} />
                <Area type="monotone" dataKey="ram" stroke="#10B981" fillOpacity={1} fill="url(#colorRam)" strokeWidth={3} dot={false} />
              </AreaChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Recent Activity */}
        <Card className="glass-card border-none rounded-3xl">
          <CardHeader className="pb-2 border-b border-slate-50">
            <CardTitle className="text-xl">Recent Events</CardTitle>
            <CardDescription>Latest system-wide activity logs</CardDescription>
          </CardHeader>
          <CardContent className="pt-6">
            <div className="space-y-2">
              {recentDeployments.map((dep, i) => (
                <div key={i} className="flex items-center gap-4 p-4 rounded-2xl hover:bg-slate-50 transition-all group cursor-pointer border border-transparent hover:border-slate-100">
                  <div className={`h-10 w-10 rounded-xl flex items-center justify-center shrink-0 ${
                    dep.status === "Success" ? "bg-emerald-50 text-emerald-600" : 
                    dep.status === "Failed" ? "bg-rose-50 text-rose-600" : "bg-orange-50 text-orange-600"
                  }`}>
                    {dep.status === "Success" ? <Rocket className="h-5 w-5" /> : <AlertCircle className="h-5 w-5" />}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-2">
                      <p className="text-sm font-bold text-slate-900 truncate">{dep.repo}</p>
                      <span className="text-[10px] font-bold text-slate-400 shrink-0">{dep.time}</span>
                    </div>
                    <div className="flex items-center gap-2 mt-0.5">
                      <Badge variant="outline" className="text-[9px] font-bold py-0 h-4 border-slate-200">{dep.env}</Badge>
                      <span className="text-[10px] text-slate-400 font-mono">{dep.id}</span>
                    </div>
                  </div>
                  <Button variant="ghost" size="icon" className="h-8 w-8 text-slate-300 group-hover:text-slate-900">
                    <MoreVertical className="h-4 w-4" />
                  </Button>
                </div>
              ))}
            </div>
            <Button variant="ghost" className="w-full mt-6 text-xs font-bold text-primary hover:bg-orange-50 rounded-xl">
              View Activity History
            </Button>
          </CardContent>
        </Card>
      </div>
      
      {/* Infrastructure Summary */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {[
          { title: "Cluster Health", value: "98.2%", icon: Cpu, color: "text-primary", bg: "bg-primary/5", barColor: "bg-primary" },
          { title: "Storage Allocated", value: "1.2 TB", icon: Database, color: "text-blue-500", bg: "bg-blue-50", barColor: "bg-blue-500" },
          { title: "Network Latency", value: "42ms", icon: Globe, color: "text-emerald-500", bg: "bg-emerald-50", barColor: "bg-emerald-500" },
        ].map((item, i) => (
          <Card key={i} className="glass-card border-none rounded-3xl">
            <CardHeader className="pb-2">
              <CardTitle className="text-xs font-bold uppercase tracking-widest text-slate-400 flex items-center gap-2">
                <div className={`p-2 rounded-lg ${item.bg} ${item.color}`}>
                  <item.icon className="h-4 w-4" />
                </div>
                {item.title}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-black text-slate-900">{item.value}</div>
              <div className="mt-4 h-2 w-full bg-slate-100 rounded-full overflow-hidden">
                <div className={`h-full ${item.barColor} transition-all duration-1000`} style={{ width: i === 0 ? '98%' : i === 1 ? '75%' : '40%' }} />
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
