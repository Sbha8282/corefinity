"use client"

import * as React from "react"
import { 
  Play, 
  Trash2, 
  Edit3, 
  ChevronRight,
  Plus,
  Server,
  Cpu,
  Database,
  Activity,
  Shield,
  Layout,
  Layers,
  Rocket,
  GitBranch,
  Mail,
  Zap,
  Terminal,
  BarChart3,
  Search,
  RefreshCw,
  Lock,
  Network,
  Settings2,
  AlertTriangle,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

const tabs = [
  { id: "General", icon: Layout },
  { id: "Pods", icon: Layers },
  { id: "Nodes", icon: Server },
  { id: "Deployments", icon: Rocket },
  { id: "Pipelines", icon: GitBranch },
  { id: "Emails", icon: Mail },
  { id: "Cache Warmer", icon: Zap },
  { id: "Actions", icon: Play },
  { id: "Diagnostics", icon: Terminal },
  { id: "Autoscaler", icon: BarChart3 },
  { id: "Monitors", icon: Activity },
  { id: "Quick Actions", icon: Plus },
  { id: "Firewall", icon: Shield },
]

export default function EnvironmentsPage() {
  const [activeTab, setActiveTab] = React.useState("General")

  return (
    <div className="space-y-6 animate-in fade-in duration-500">
      {/* Breadcrumbs */}
      <div className="flex items-center gap-2 text-[11px] font-black uppercase tracking-widest text-slate-400">
        <span className="text-primary hover:underline cursor-pointer">Home</span>
        <ChevronRight className="h-3 w-3" />
        <span className="text-primary hover:underline cursor-pointer">Environments</span>
        <ChevronRight className="h-3 w-3" />
        <span className="text-slate-600">Production Overview</span>
      </div>

      {/* Header */}
      <div className="bg-white rounded-2xl border border-slate-200 p-8 flex flex-col md:flex-row md:items-center justify-between shadow-sm gap-6">
        <div className="flex items-center gap-8">
          <div className="h-16 w-16 rounded-2xl bg-primary/10 flex items-center justify-center text-primary">
            <Server className="h-8 w-8" />
          </div>
          <div>
            <h1 className="text-3xl font-black text-slate-900 tracking-tight leading-tight">Production Cluster</h1>
            <p className="text-sm text-slate-500 font-medium">us-east-1-main • ARN: corefinity:prod:infra:001</p>
          </div>
          <div className="flex items-center gap-2 border-l border-slate-100 pl-8">
             <Button variant="outline" size="icon" className="h-11 w-11 text-emerald-600 border-emerald-100 bg-emerald-50 hover:bg-emerald-100 rounded-xl">
               <Play className="h-5 w-5 fill-current" />
             </Button>
             <Button variant="outline" size="icon" className="h-11 w-11 text-rose-600 border-rose-100 bg-rose-50 hover:bg-rose-100 rounded-xl">
               <Trash2 className="h-5 w-5" />
             </Button>
             <Button variant="outline" size="icon" className="h-11 w-11 text-primary border-orange-100 bg-orange-50 hover:bg-orange-100 rounded-xl">
               <Edit3 className="h-5 w-5" />
             </Button>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <Select defaultValue="production">
            <SelectTrigger className="w-[200px] h-12 border-slate-200 rounded-xl font-bold bg-white text-slate-700">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="production">Production-Cluster</SelectItem>
              <SelectItem value="staging">Staging-Sandbox</SelectItem>
              <SelectItem value="dev">Dev-Experimental</SelectItem>
            </SelectContent>
          </Select>
          <Button className="bg-primary hover:bg-orange-600 h-12 px-8 rounded-xl font-black shadow-lg shadow-primary/20 gap-2 text-xs uppercase tracking-widest text-white transition-transform active:scale-95">
            <Plus className="h-4 w-4" /> New Environment
          </Button>
        </div>
      </div>

      {/* Tabs Navigation */}
      <div className="border-b border-slate-200 overflow-x-auto bg-white/50 backdrop-blur rounded-t-2xl px-4 scrollbar-hide">
        <div className="flex items-center gap-1 min-w-max">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-6 py-5 text-xs font-black uppercase tracking-widest transition-all relative whitespace-nowrap ${
                activeTab === tab.id 
                  ? "text-primary" 
                  : "text-slate-400 hover:text-slate-600"
              }`}
            >
              <tab.icon className={`h-4 w-4 ${activeTab === tab.id ? "text-primary" : "text-slate-300"}`} />
              {tab.id}
              {activeTab === tab.id && (
                <div className="absolute bottom-0 left-0 w-full h-1 bg-primary rounded-t-full shadow-[0_-2px_8px_rgba(249,115,22,0.4)]" />
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Tab Content Rendering */}
      <div className="bg-white rounded-b-2xl border-x border-b border-slate-200 p-8 shadow-sm min-h-[600px]">
        {activeTab === "General" && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 animate-in fade-in slide-in-from-bottom-2 duration-300">
            <Card className="border-slate-100 bg-slate-50/50 shadow-none">
              <CardHeader><CardTitle className="text-xs uppercase font-black text-slate-400 tracking-widest">Ownership</CardTitle></CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-sm">SI</div>
                  <div>
                    <div className="font-bold text-slate-900">Subhamoy Indusvalley</div>
                    <div className="text-[10px] uppercase font-black text-slate-400">Owner & Architect</div>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="border-slate-100 bg-slate-50/50 shadow-none">
              <CardHeader><CardTitle className="text-xs uppercase font-black text-slate-400 tracking-widest">Region</CardTitle></CardHeader>
              <CardContent>
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600"><Layers className="h-5 w-5" /></div>
                  <div>
                    <div className="font-bold text-slate-900">AWS us-east-1</div>
                    <div className="text-[10px] uppercase font-black text-slate-400">High Availability Zone</div>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="border-slate-100 bg-slate-50/50 shadow-none">
              <CardHeader><CardTitle className="text-xs uppercase font-black text-slate-400 tracking-widest">Resources</CardTitle></CardHeader>
              <CardContent>
                <div className="flex items-center gap-4">
                  <div className="flex-1 space-y-2">
                    <div className="flex justify-between text-[10px] font-black uppercase"><span className="text-slate-400">CPU Load</span><span className="text-primary">42%</span></div>
                    <Progress value={42} className="h-1.5" />
                  </div>
                  <div className="flex-1 space-y-2">
                    <div className="flex justify-between text-[10px] font-black uppercase"><span className="text-slate-400">Memory</span><span className="text-primary">68%</span></div>
                    <Progress value={68} className="h-1.5" />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {activeTab === "Pods" && (
          <div className="space-y-4 animate-in fade-in duration-300">
             <div className="flex justify-between items-center mb-4">
               <h2 className="text-lg font-bold text-slate-900">Active Orchestration Pods</h2>
               <div className="relative w-64">
                 <Search className="absolute left-3 top-2.5 h-4 w-4 text-slate-400" />
                 <Input placeholder="Search pods..." className="pl-9 h-9 rounded-xl border-slate-200" />
               </div>
             </div>
             <Table>
                <TableHeader>
                  <TableRow className="bg-slate-50">
                    <TableHead className="text-[10px] uppercase font-black">Pod Name</TableHead>
                    <TableHead className="text-[10px] uppercase font-black">Status</TableHead>
                    <TableHead className="text-[10px] uppercase font-black">Restarts</TableHead>
                    <TableHead className="text-[10px] uppercase font-black">IP Address</TableHead>
                    <TableHead className="text-[10px] uppercase font-black text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {["api-gateway-v2-7x", "worker-node-alpha", "payment-sv-66", "auth-broker-01"].map((pod, i) => (
                    <TableRow key={i} className="hover:bg-slate-50/50 transition-colors">
                      <TableCell className="font-bold text-slate-900">{pod}</TableCell>
                      <TableCell><Badge className="bg-emerald-50 text-emerald-600 border-none font-bold">Running</Badge></TableCell>
                      <TableCell className="font-mono text-xs">0</TableCell>
                      <TableCell className="font-mono text-xs text-slate-500">10.0.{i}.142</TableCell>
                      <TableCell className="text-right"><Button variant="ghost" size="icon"><Terminal className="h-4 w-4" /></Button></TableCell>
                    </TableRow>
                  ))}
                </TableBody>
             </Table>
          </div>
        )}

        {activeTab === "Nodes" && (
          <div className="space-y-6 animate-in fade-in duration-300">
            <h3 className="text-lg font-bold text-slate-900">Cluster Nodes</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {[1, 2, 3, 4].map((i) => (
                <Card key={i} className="p-4 border-slate-100 bg-slate-50/50">
                  <div className="flex items-center justify-between mb-4">
                    <Server className="h-5 w-5 text-primary" />
                    <Badge className="bg-emerald-100 text-emerald-700 border-none">Healthy</Badge>
                  </div>
                  <div className="text-sm font-bold">node-primary-0{i}</div>
                  <div className="text-[10px] text-slate-400 uppercase font-black">t3.large • us-east-1a</div>
                  <div className="mt-4 space-y-2">
                    <div className="flex justify-between text-[10px] font-black"><span className="text-slate-400">CPU</span><span>12%</span></div>
                    <Progress value={12} className="h-1" />
                  </div>
                </Card>
              ))}
            </div>
          </div>
        )}

        {activeTab === "Deployments" && (
          <div className="space-y-4 animate-in fade-in duration-300">
            <h3 className="text-lg font-bold text-slate-900">Recent Environment Deployments</h3>
            <div className="space-y-3">
              {[
                { id: "v2.1.0", status: "Success", time: "2h ago", author: "SI" },
                { id: "v2.0.9", status: "Success", time: "1d ago", author: "SI" },
                { id: "v2.0.8", status: "Failed", time: "2d ago", author: "JD" }
              ].map((dep, i) => (
                <div key={i} className="flex items-center justify-between p-4 bg-slate-50 rounded-xl border border-slate-100">
                  <div className="flex items-center gap-4">
                    <div className={`h-8 w-8 rounded-lg flex items-center justify-center ${dep.status === 'Success' ? 'bg-emerald-100 text-emerald-600' : 'bg-rose-100 text-rose-600'}`}>
                      <Rocket className="h-4 w-4" />
                    </div>
                    <div>
                      <div className="font-bold text-sm">Release {dep.id}</div>
                      <div className="text-[10px] text-slate-400 font-bold uppercase">{dep.time} • by {dep.author}</div>
                    </div>
                  </div>
                  <Badge className={dep.status === 'Success' ? 'bg-emerald-500' : 'bg-rose-500'}>{dep.status}</Badge>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === "Pipelines" && (
          <div className="space-y-6 animate-in fade-in duration-300">
             <div className="flex justify-between items-center">
               <h3 className="text-lg font-bold text-slate-900">Active CI/CD Pipelines</h3>
               <Button variant="outline" size="sm" className="rounded-xl border-slate-200 font-bold">Configure Workflows</Button>
             </div>
             {[1, 2].map((i) => (
               <Card key={i} className="p-6 border-slate-100 bg-slate-50/50">
                 <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-3">
                      <GitBranch className="h-5 w-5 text-primary" />
                      <div>
                        <div className="font-bold text-sm">Main Branch Sync</div>
                        <div className="text-[10px] text-slate-400 font-black uppercase tracking-widest">Pipeline ID: P-992{i}</div>
                      </div>
                    </div>
                    <Badge className="bg-orange-100 text-orange-600 border-none font-bold">In Progress</Badge>
                 </div>
                 <div className="flex items-center gap-4">
                    <div className="flex-1 h-2 bg-slate-200 rounded-full overflow-hidden">
                      <div className="h-full bg-primary animate-pulse" style={{ width: '65%' }} />
                    </div>
                    <span className="text-[10px] font-black text-slate-400">65%</span>
                 </div>
               </Card>
             ))}
          </div>
        )}

        {activeTab === "Emails" && (
          <div className="space-y-6 animate-in fade-in duration-300">
             <div className="flex items-center justify-between">
               <h3 className="text-lg font-bold text-slate-900">SMTP & Transactional Logs</h3>
               <Badge className="bg-emerald-100 text-emerald-600">Active</Badge>
             </div>
             <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="text-[10px] uppercase font-black">Recipient</TableHead>
                    <TableHead className="text-[10px] uppercase font-black">Subject</TableHead>
                    <TableHead className="text-[10px] uppercase font-black">Status</TableHead>
                    <TableHead className="text-[10px] uppercase font-black text-right">Timestamp</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {[1, 2, 3].map((i) => (
                    <TableRow key={i}>
                      <TableCell className="text-xs font-bold">user-{i}@corefinity.com</TableCell>
                      <TableCell className="text-xs">Infrastructure Alert Alert</TableCell>
                      <TableCell><Badge className="bg-emerald-50 text-emerald-600 border-none">Delivered</Badge></TableCell>
                      <TableCell className="text-right text-[10px] font-bold text-slate-400 uppercase">10:4{i} AM</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
             </Table>
          </div>
        )}

        {activeTab === "Cache Warmer" && (
          <div className="space-y-8 animate-in fade-in duration-300">
             <div className="bg-slate-50 p-8 rounded-2xl border border-dashed border-slate-200 text-center">
                <Zap className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="font-bold text-slate-900 text-xl">CloudFront Edge Warmer</h3>
                <p className="text-sm text-slate-500 max-w-sm mx-auto mt-2">Pre-heat your global cache to ensure 100% hit rate before traffic spikes.</p>
                <Button className="mt-8 bg-primary hover:bg-orange-600 h-12 px-10 rounded-xl font-black text-xs uppercase tracking-widest text-white shadow-xl shadow-primary/20">
                   Start Warm-up Cycle
                </Button>
             </div>
             <div className="space-y-4">
                <div className="flex justify-between items-center text-[10px] font-black uppercase tracking-widest text-slate-400">
                  <span>Last Cycle Progress</span>
                  <span className="text-emerald-500">Completed (100%)</span>
                </div>
                <Progress value={100} className="h-2" />
             </div>
          </div>
        )}

        {activeTab === "Actions" && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 animate-in fade-in duration-300">
             {[
               { title: "Force Restart", desc: "Performs a rolling restart of all pods.", icon: RefreshCw, color: "text-blue-500", bg: "bg-blue-50" },
               { title: "Flush Redis Cache", desc: "Clear all application layer caches immediately.", icon: Zap, color: "text-orange-500", bg: "bg-orange-50" },
               { title: "Scale to Max", desc: "Immediately spin up 12 nodes for traffic peaks.", icon: BarChart3, color: "text-emerald-500", bg: "bg-emerald-50" },
               { title: "Enter Maintenance", desc: "Routes all traffic to static maintenance page.", icon: Lock, color: "text-rose-500", bg: "bg-rose-50" }
             ].map((action, i) => (
               <button key={i} className="flex items-center gap-5 p-6 rounded-2xl border border-slate-100 hover:border-primary transition-all bg-white text-left group shadow-sm">
                  <div className={`h-12 w-12 rounded-xl flex items-center justify-center shrink-0 ${action.bg} ${action.color} group-hover:scale-110 transition-transform`}>
                    <action.icon className="h-6 w-6" />
                  </div>
                  <div>
                    <div className="font-bold text-slate-900">{action.title}</div>
                    <div className="text-xs text-slate-500 font-medium">{action.desc}</div>
                  </div>
               </button>
             ))}
          </div>
        )}

        {activeTab === "Diagnostics" && (
          <div className="space-y-6 animate-in fade-in duration-300">
             <div className="bg-slate-900 text-emerald-400 p-8 rounded-2xl font-mono text-xs border border-slate-800 shadow-2xl overflow-hidden relative">
               <div className="absolute top-0 left-0 w-full h-1 bg-primary animate-pulse" />
               <div className="flex items-center gap-2 mb-6 border-b border-slate-800 pb-4 opacity-50 uppercase tracking-widest text-[10px]">
                 <Terminal className="h-3 w-3" /> Corefinity AI Diagnostic Assistant
               </div>
               <div className="space-y-2">
                 <p className="text-primary">{" >> "} initializing corefinity-ai-v2.1...</p>
                 <p>Analyzing us-east-1 production logs...</p>
                 <p className="text-emerald-300/50">Found 2 warnings in auth-broker: SSL handshake delay detected.</p>
                 <p className="text-emerald-500">{" >> "} Health Score: 98% (Excellent)</p>
                 <p className="animate-pulse">_</p>
               </div>
             </div>
             <Button className="w-full h-12 rounded-xl font-black uppercase text-xs tracking-widest bg-primary hover:bg-orange-600 text-white">
               Run Full AI Diagnostics
             </Button>
          </div>
        )}

        {activeTab === "Autoscaler" && (
          <div className="space-y-6 animate-in fade-in duration-300">
            <h3 className="text-lg font-bold text-slate-900">Horizontal Pod Autoscaler (HPA)</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="p-6 border-slate-100 bg-slate-50/50">
                <div className="space-y-6">
                  <div className="space-y-2">
                    <div className="flex justify-between text-xs font-bold uppercase"><span className="text-slate-500">Min Replicas</span><span className="text-primary">4</span></div>
                    <Progress value={20} className="h-2" />
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-xs font-bold uppercase"><span className="text-slate-500">Max Replicas</span><span className="text-primary">12</span></div>
                    <Progress value={60} className="h-2" />
                  </div>
                </div>
              </Card>
              <Card className="p-6 border-slate-100 bg-slate-50/50 flex flex-col justify-center">
                 <div className="flex items-center gap-4">
                   <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center text-primary"><BarChart3 className="h-6 w-6" /></div>
                   <div>
                     <div className="text-sm font-bold text-slate-900">Scaling Strategy</div>
                     <p className="text-xs text-slate-500">Target CPU Utilization: 75%</p>
                   </div>
                 </div>
              </Card>
            </div>
          </div>
        )}

        {activeTab === "Monitors" && (
          <div className="space-y-6 animate-in fade-in duration-300">
             <div className="flex items-center justify-between">
                <h3 className="text-lg font-bold text-slate-900">Health Monitors</h3>
                <Button variant="outline" size="sm" className="rounded-xl border-slate-200">
                  <Plus className="h-4 w-4 mr-2" /> Add Probe
                </Button>
             </div>
             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {["API Gateway", "Auth Broker", "Database Cluster"].map((m, i) => (
                  <Card key={i} className="p-5 border-slate-100 bg-slate-50/50">
                     <div className="flex items-center justify-between mb-4">
                        <Activity className="h-4 w-4 text-emerald-500" />
                        <span className="text-[10px] font-black uppercase text-emerald-500">Healthy</span>
                     </div>
                     <div className="font-bold text-sm mb-1">{m}</div>
                     <div className="text-[10px] text-slate-400 font-bold">Latency: {12 + i}ms</div>
                  </Card>
                ))}
             </div>
          </div>
        )}

        {activeTab === "Quick Actions" && (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 animate-in fade-in duration-300">
             {[
               { id: "logs", label: "View Logs", icon: Terminal },
               { id: "shell", label: "SSH Shell", icon: Network },
               { id: "backup", label: "Backup DB", icon: Database },
               { id: "security", label: "Scan Security", icon: Shield }
             ].map((q) => (
               <Button key={q.id} variant="outline" className="flex flex-col h-24 gap-3 border-slate-200 rounded-2xl hover:bg-primary/5 hover:border-primary transition-all">
                  <q.icon className="h-6 w-6 text-primary" />
                  <span className="text-[10px] font-black uppercase tracking-widest">{q.label}</span>
               </Button>
             ))}
          </div>
        )}

        {activeTab === "Firewall" && (
          <div className="space-y-8 animate-in fade-in duration-300">
            <div className="bg-emerald-50 border border-emerald-100 p-6 rounded-2xl flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 rounded-xl bg-emerald-500 flex items-center justify-center text-white"><Shield className="h-6 w-6" /></div>
                <div>
                  <div className="font-bold text-emerald-900">Advanced Firewall Active</div>
                  <p className="text-sm text-emerald-600">All incoming traffic is being filtered through AWS WAF.</p>
                </div>
              </div>
              <Button variant="outline" className="border-emerald-200 text-emerald-700 bg-white hover:bg-emerald-50 rounded-xl font-bold">WAF Settings</Button>
            </div>
            
            <div className="space-y-4">
              <h3 className="font-bold text-slate-900">Whitelisted IP Addresses</h3>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="text-[10px] font-black uppercase">IP Address</TableHead>
                    <TableHead className="text-[10px] font-black uppercase">Label</TableHead>
                    <TableHead className="text-[10px] font-black uppercase">Status</TableHead>
                    <TableHead className="text-[10px] font-black uppercase text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell className="font-mono text-xs font-bold text-primary">192.168.1.10</TableCell>
                    <TableCell className="text-sm font-medium">Main Office VPN</TableCell>
                    <TableCell><Badge variant="outline" className="bg-emerald-50 text-emerald-600 border-none">Active</Badge></TableCell>
                    <TableCell className="text-right"><Button variant="ghost" className="text-xs font-bold text-slate-400">Remove</Button></TableCell>
                  </TableRow>
                </TableBody>
              </Table>
              <Button variant="outline" className="w-full border-dashed border-2 h-12 rounded-xl text-slate-400 font-bold hover:bg-slate-50">
                <Plus className="h-4 w-4 mr-2" /> Add New IP Rule
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
