"use client"

import * as React from "react"
import { 
  Rocket, 
  Terminal, 
  ChevronRight,
  ExternalLink,
  GitBranch,
  Clock,
  CheckCircle2,
  Circle,
  Loader2,
  Settings2,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import { Card } from "@/components/ui/card"

const deploymentStages = [
  { name: "Environment Provisioning", status: "Completed", time: "12s" },
  { name: "Source Build", status: "Completed", time: "48s" },
  { name: "Container Registry Push", status: "In Progress", progress: 72, time: "Running" },
  { name: "Canary Analysis", status: "Pending", time: "--" },
  { name: "Traffic Migration", status: "Pending", time: "--" },
]

export default function DeploymentsPage() {
  return (
    <div className="flex h-[calc(100vh-8rem)] overflow-hidden gap-6 animate-in fade-in duration-500">
      {/* Sidebar List */}
      <div className="w-80 flex-shrink-0 flex flex-col gap-4">
        <div className="flex-1 overflow-y-auto space-y-2 pr-2 scrollbar-hide">
          {[
            { id: "REL-204", repo: "core-api-v2", status: "In Progress" },
            { id: "REL-203", repo: "auth-gateway", status: "Success" },
            { id: "REL-201", repo: "payment-proxy", status: "Failed" }
          ].map((dep) => (
            <button
              key={dep.id}
              className={`w-full text-left p-4 rounded-2xl transition-all border ${
                dep.id === "REL-204" ? "bg-white border-primary shadow-md" : "bg-white/50 border-transparent hover:bg-white"
              }`}
            >
              <div className="text-[10px] font-black text-slate-400 mb-1 uppercase tracking-widest">{dep.id}</div>
              <div className="font-bold text-sm text-slate-900 truncate mb-2">{dep.repo}</div>
              <Badge className={`text-[9px] h-5 font-black uppercase tracking-tighter ${
                dep.status === 'Success' ? 'bg-emerald-500' : 
                dep.status === 'Failed' ? 'bg-rose-500' : 'bg-orange-500 animate-pulse'
              } text-white`}>{dep.status}</Badge>
            </button>
          ))}
        </div>
        <Button className="w-full gap-2 h-14 rounded-2xl shadow-xl shadow-primary/25 font-black uppercase text-xs tracking-widest bg-primary hover:bg-orange-600 text-white transition-all active:scale-95">
          <Rocket className="h-4 w-4" /> Trigger New Release
        </Button>
      </div>

      {/* Main Detail Area */}
      <div className="flex-1 overflow-y-auto bg-white rounded-3xl border border-slate-200 flex shadow-sm">
        <div className="flex-1 p-10 space-y-10">
          <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-slate-400">
            <span className="text-primary hover:underline cursor-pointer">Releases</span>
            <ChevronRight className="h-3 w-3" />
            <span className="text-slate-900">REL-204-CORE-API</span>
          </div>

          <div className="flex justify-between items-start">
            <div className="space-y-3">
              <h1 className="text-4xl font-black text-slate-900 tracking-tight leading-none">core-api-v2.1.0-rc</h1>
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-1.5 text-slate-400 text-xs font-bold">
                  <GitBranch className="h-3.5 w-3.5" /> main
                </div>
                <div className="flex items-center gap-1.5 text-slate-400 text-xs font-bold">
                  <Clock className="h-3.5 w-3.5" /> 1m 52s elapsed
                </div>
              </div>
            </div>
            <div className="flex gap-2">
              <Button variant="outline" className="rounded-xl border-slate-200 font-bold h-11 px-6 hover:bg-slate-50">
                <ExternalLink className="h-4 w-4 mr-2 text-primary" /> Live Snapshot
              </Button>
              <Button variant="outline" className="rounded-xl border-slate-200 font-bold h-11 px-6 hover:bg-slate-50">
                <Settings2 className="h-4 w-4 mr-2 text-primary" /> Pipeline Config
              </Button>
            </div>
          </div>

          <div className="space-y-8">
            <Tabs defaultValue="pipeline" className="w-full">
              <TabsList className="bg-transparent h-auto p-0 gap-8 border-b border-slate-100 rounded-none w-full justify-start mb-8">
                <TabsTrigger value="pipeline" className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent data-[state=active]:text-slate-900 px-0 py-4 text-sm font-black uppercase tracking-widest text-slate-400 transition-all">Execution Pipeline</TabsTrigger>
                <TabsTrigger value="logs" className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent data-[state=active]:text-slate-900 px-0 py-4 text-sm font-black uppercase tracking-widest text-slate-400 transition-all">Build Logs</TabsTrigger>
                <TabsTrigger value="config" className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent data-[state=active]:text-slate-900 px-0 py-4 text-sm font-black uppercase tracking-widest text-slate-400 transition-all">Pipeline YAML</TabsTrigger>
              </TabsList>

              <TabsContent value="pipeline" className="space-y-6">
                <div className="grid grid-cols-1 gap-4">
                  {deploymentStages.map((stage, i) => (
                    <div key={i} className="bg-slate-50/80 border border-slate-100 p-5 rounded-2xl flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        {stage.status === 'Completed' ? (
                          <CheckCircle2 className="h-5 w-5 text-emerald-500" />
                        ) : stage.status === 'In Progress' ? (
                          <Loader2 className="h-5 w-5 text-primary animate-spin" />
                        ) : (
                          <Circle className="h-5 w-5 text-slate-200" />
                        )}
                        <div>
                          <div className="text-sm font-bold text-slate-900">{stage.name}</div>
                          <div className="text-[10px] uppercase font-black text-slate-400 tracking-tighter">{stage.status}</div>
                        </div>
                      </div>
                      {stage.progress && (
                        <div className="w-48 space-y-1">
                          <div className="flex justify-between text-[10px] font-black text-primary"><span>Progress</span><span>{stage.progress}%</span></div>
                          <Progress value={stage.progress} className="h-1.5" />
                        </div>
                      )}
                      <div className="text-xs font-mono text-slate-400 font-bold">{stage.time}</div>
                    </div>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="logs" className="space-y-4">
                <div className="terminal-bg p-8 rounded-2xl min-h-[400px] text-xs leading-relaxed border border-slate-800 shadow-inner overflow-hidden">
                  <div className="flex items-center justify-between mb-6 border-b border-slate-700/50 pb-4">
                    <div className="opacity-50 font-black uppercase tracking-widest flex items-center gap-2">
                      <Terminal className="h-3 w-3" /> system_output_stream :: rel-204
                    </div>
                    <Button variant="ghost" size="sm" className="h-6 text-[10px] font-black uppercase text-slate-500 hover:text-white">Clear Logs</Button>
                  </div>
                  <div className="space-y-1 font-mono text-emerald-400">
                    <p><span className="text-slate-500 mr-2">[00:01:05]</span> <span className="text-blue-400">BUILD:</span> Successfully containerized core-api-v2.1.0-rc</p>
                    <p><span className="text-slate-500 mr-2">[00:01:10]</span> <span className="text-blue-400">REGISTRY:</span> Authenticating with Amazon ECR...</p>
                    <p><span className="text-slate-500 mr-2">[00:01:15]</span> <span className="text-blue-400">REGISTRY:</span> Preparing layer 8f94b12... Pushing (45.2 MB/s)</p>
                    <p><span className="text-slate-500 mr-2">[00:01:52]</span> <span className="text-emerald-400">PROGRESS:</span> Registry push 72% completed</p>
                    <div className="mt-4 animate-pulse">_</div>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="config" className="space-y-6">
                <Card className="border-slate-100 bg-slate-50/50 shadow-none p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-sm font-black uppercase tracking-widest text-slate-400">Pipeline.yaml</h3>
                    <Button size="sm" className="bg-primary text-white h-8 px-4 font-black uppercase text-[10px]">Update Pipeline</Button>
                  </div>
                  <div className="bg-slate-900 rounded-xl p-6 font-mono text-xs text-blue-300">
                    <pre>{`version: 2.1
jobs:
  build:
    docker:
      - image: cimg/node:18.16.0
    steps:
      - checkout
      - run: npm install
      - run: npm run build
  deploy:
    steps:
      - run: echo "Deploying to production..."`}</pre>
                  </div>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  )
}
