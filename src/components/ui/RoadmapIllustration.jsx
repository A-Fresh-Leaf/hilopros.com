import React from 'react'

export function RoadmapIllustration({ id, color }) {
  switch (id) {
    case 'solar':
      return (
        <div className="relative w-full h-32 bg-slate-950 flex flex-col justify-between p-3.5 overflow-hidden border-b border-white/5 font-mono select-none">
          {/* Neon Grid Backing */}
          <div className="absolute inset-0 bg-grid opacity-[0.15]" />
          
          <div className="flex justify-between items-start z-10">
            <span className="text-[9px] uppercase tracking-wider font-bold text-amber-500">Solar Grid Active</span>
            <span className="text-[10px] text-white font-bold bg-amber-500/10 px-2 py-0.5 rounded border border-amber-500/20">
              5.8 kW
            </span>
          </div>

          <div className="flex flex-col gap-1 z-10">
            {/* Solar House Schematic */}
            <div className="flex gap-2 items-end">
              <div className="w-16 h-8 border border-amber-500/30 bg-amber-500/5 rounded flex flex-wrap gap-1 p-1">
                <div className="w-3 h-2 bg-amber-500/40 rounded-sm animate-pulse" />
                <div className="w-3 h-2 bg-amber-500/40 rounded-sm" />
                <div className="w-3 h-2 bg-amber-500/40 rounded-sm" />
                <div className="w-3 h-2 bg-amber-500/40 rounded-sm animate-pulse" />
              </div>
              <div className="text-[8px] text-gray-400">
                <div className="text-white font-bold">12 Panels</div>
                <div>Efficiency: 98.4%</div>
              </div>
            </div>
          </div>
        </div>
      )

    case 'battery':
      return (
        <div className="relative w-full h-32 bg-slate-950 flex flex-col justify-between p-3.5 overflow-hidden border-b border-white/5 font-mono select-none">
          <div className="absolute inset-0 bg-grid opacity-[0.15]" />
          
          <div className="flex justify-between items-start z-10">
            <span className="text-[9px] uppercase tracking-wider font-bold text-emerald-500">Storage Online</span>
            <span className="text-[10px] text-white font-bold bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20 animate-pulse">
              96% Charge
            </span>
          </div>

          {/* Battery level cell animation */}
          <div className="flex items-center gap-3 z-10">
            <div className="w-14 h-6 border-2 border-emerald-500/40 rounded p-0.5 flex gap-0.5 items-center relative">
              <div className="w-3 h-full bg-emerald-500 rounded-sm" />
              <div className="w-3 h-full bg-emerald-500 rounded-sm" />
              <div className="w-3 h-full bg-emerald-500 rounded-sm" />
              <div className="w-2 h-full bg-emerald-500/40 rounded-sm animate-pulse" />
              <div className="absolute -right-1.5 top-1.5 w-1 h-3 bg-emerald-500/40 rounded-r" />
            </div>
            <div className="text-[8px] text-gray-400">
              <div className="text-white font-bold">Tesla Powerwall 3</div>
              <div>Capacity: 13.5 kWh</div>
            </div>
          </div>
        </div>
      )

    case 'energy-monitoring':
      return (
        <div className="relative w-full h-32 bg-slate-950 flex flex-col justify-between p-3.5 overflow-hidden border-b border-white/5 font-mono select-none">
          <div className="absolute inset-0 bg-grid opacity-[0.15]" />
          
          <div className="flex justify-between items-start z-10">
            <span className="text-[9px] uppercase tracking-wider font-bold text-orange-500">Live Load Monitor</span>
            <span className="text-[10px] text-white font-bold bg-orange-500/10 px-2 py-0.5 rounded border border-orange-500/20">
              1.4 kW
            </span>
          </div>

          {/* Waveform graphic */}
          <div className="h-10 w-full flex items-end gap-[2px] z-10 relative">
            <div className="h-[20%] w-[8%] bg-orange-500/20 rounded-t" />
            <div className="h-[40%] w-[8%] bg-orange-500/40 rounded-t" />
            <div className="h-[85%] w-[8%] bg-orange-500/60 rounded-t animate-pulse" />
            <div className="h-[55%] w-[8%] bg-orange-500/50 rounded-t" />
            <div className="h-[30%] w-[8%] bg-orange-500/30 rounded-t" />
            <div className="h-[75%] w-[8%] bg-orange-500/70 rounded-t animate-pulse" />
            <div className="h-[90%] w-[8%] bg-orange-500/90 rounded-t animate-pulse" />
            <div className="h-[45%] w-[8%] bg-orange-500/40 rounded-t" />
            <div className="h-[20%] w-[8%] bg-orange-500/20 rounded-t" />
            <div className="absolute top-1 right-1 text-[8px] text-gray-500">Circuit: HVAC</div>
          </div>
        </div>
      )

    case 'ev-charging':
      return (
        <div className="relative w-full h-32 bg-slate-950 flex flex-col justify-between p-3.5 overflow-hidden border-b border-white/5 font-mono select-none">
          <div className="absolute inset-0 bg-grid opacity-[0.15]" />
          
          <div className="flex justify-between items-start z-10">
            <span className="text-[9px] uppercase tracking-wider font-bold text-cyan-500">EV Station Active</span>
            <span className="text-[10px] text-white font-bold bg-cyan-500/10 px-2 py-0.5 rounded border border-cyan-500/20">
              48A / 11.5 kW
            </span>
          </div>

          <div className="flex flex-col gap-1 z-10">
            <div className="text-[8px] text-gray-400">
              <span className="text-white font-bold">Charge Session Status:</span>
              <div className="flex items-center gap-2 mt-1">
                <div className="w-24 h-1.5 bg-white/5 rounded-full overflow-hidden border border-white/10">
                  <div className="h-full bg-cyan-500 rounded-full animate-pulse" style={{ width: '74%' }} />
                </div>
                <span>74%</span>
              </div>
              <div className="text-[7px] text-gray-500 mt-1">Time Remaining: 1h 15m</div>
            </div>
          </div>
        </div>
      )

    case 'robotics':
      return (
        <div className="relative w-full h-32 bg-slate-950 flex flex-col justify-between p-3.5 overflow-hidden border-b border-white/5 font-mono select-none">
          <div className="absolute inset-0 bg-grid opacity-[0.15]" />
          
          <div className="flex justify-between items-start z-10">
            <span className="text-[9px] uppercase tracking-wider font-bold text-purple-500">Robotic Drone Guard</span>
            <span className="text-[10px] text-white font-bold bg-purple-500/10 px-2 py-0.5 rounded border border-purple-500/20">
              Patrol Active
            </span>
          </div>

          {/* Radar Sweep animation */}
          <div className="flex items-center gap-3 z-10">
            <div className="relative w-10 h-10 border border-purple-500/30 rounded-full flex items-center justify-center">
              <div className="w-6 h-6 border border-purple-500/20 rounded-full" />
              <div className="absolute w-full h-[1px] bg-purple-500/30 animate-spin" />
              <div className="w-1.5 h-1.5 bg-purple-500 rounded-full animate-ping" />
            </div>
            <div className="text-[8px] text-gray-400">
              <div className="text-white font-bold">Unit: Sentinel-1</div>
              <div>Dock Status: Charging 45%</div>
            </div>
          </div>
        </div>
      )

    case 'ai-automation':
      return (
        <div className="relative w-full h-32 bg-slate-950 flex flex-col justify-between p-3.5 overflow-hidden border-b border-white/5 font-mono select-none">
          <div className="absolute inset-0 bg-grid opacity-[0.15]" />
          
          <div className="flex justify-between items-start z-10">
            <span className="text-[9px] uppercase tracking-wider font-bold text-brand-teal">Neural Logic Core</span>
            <span className="text-[10px] text-white font-bold bg-brand-teal/10 px-2 py-0.5 rounded border border-brand-teal/20">
              Model: Adapt-v2
            </span>
          </div>

          {/* Glowing Neural Node Diagram */}
          <div className="flex items-center justify-between z-10 px-4">
            <div className="flex gap-4 items-center">
              <div className="flex flex-col gap-2">
                <div className="w-2 h-2 rounded-full bg-brand-teal/40" />
                <div className="w-2 h-2 rounded-full bg-brand-teal" />
              </div>
              <div className="w-5 h-[1px] bg-brand-teal/30 relative">
                <div className="absolute top-1/2 left-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-brand-teal animate-ping" />
              </div>
              <div className="w-3 h-3 rounded-full border border-brand-teal flex items-center justify-center">
                <div className="w-1 h-1 rounded-full bg-brand-teal" />
              </div>
            </div>
            <div className="text-[8px] text-gray-400 text-right">
              <div className="text-white font-bold">Optimization: 99.8%</div>
              <div>Learning rate: 0.002</div>
            </div>
          </div>
        </div>
      )

    case 'residential-cyber':
      return (
        <div className="relative w-full h-32 bg-slate-950 flex flex-col justify-between p-3.5 overflow-hidden border-b border-white/5 font-mono select-none">
          <div className="absolute inset-0 bg-grid opacity-[0.15]" />
          
          <div className="flex justify-between items-start z-10">
            <span className="text-[9px] uppercase tracking-wider font-bold text-red-500">Firewall secure</span>
            <span className="text-[10px] text-white font-bold bg-red-500/10 px-2 py-0.5 rounded border border-red-500/20">
              VLAN Active
            </span>
          </div>

          {/* Secure VLAN Checklist */}
          <div className="text-[8.5px] text-gray-400 z-10 space-y-1">
            <div className="flex items-center justify-between border-b border-white/5 pb-0.5">
              <span>IoT Network (Isolated):</span>
              <span className="text-emerald-500 font-bold">Secure</span>
            </div>
            <div className="flex items-center justify-between border-b border-white/5 pb-0.5">
              <span>Primary VLAN (Encrypted):</span>
              <span className="text-emerald-500 font-bold">Secure</span>
            </div>
            <div className="flex items-center justify-between">
              <span>Intrusion Prevention:</span>
              <span className="text-emerald-500 font-bold">Enabled</span>
            </div>
          </div>
        </div>
      )

    case 'commercial-cyber':
      return (
        <div className="relative w-full h-32 bg-slate-950 flex flex-col justify-between p-3.5 overflow-hidden border-b border-white/5 font-mono select-none">
          <div className="absolute inset-0 bg-grid opacity-[0.15]" />
          
          <div className="flex justify-between items-start z-10">
            <span className="text-[9px] uppercase tracking-wider font-bold text-red-500">Threat Shield active</span>
            <span className="text-[10px] text-white font-bold bg-red-500/10 px-2 py-0.5 rounded border border-red-500/20 animate-pulse">
              IPS Scanning
            </span>
          </div>

          {/* Logs Terminal Mockup */}
          <div className="bg-slate-900 border border-white/5 rounded p-2 text-[7px] text-red-400 z-10 leading-relaxed font-mono">
            <div>$ sudo security-audit --scan</div>
            <div>[OK] Firewall rules initialized. </div>
            <div className="text-emerald-400">[SECURE] 0 rogue access points detected.</div>
          </div>
        </div>
      )

    case 'remote-monitoring':
      return (
        <div className="relative w-full h-32 bg-slate-950 flex flex-col justify-between p-3.5 overflow-hidden border-b border-white/5 font-mono select-none">
          <div className="absolute inset-0 bg-grid opacity-[0.15]" />
          
          <div className="flex justify-between items-start z-10">
            <span className="text-[9px] uppercase tracking-wider font-bold text-sky-500">24/7 Remote Diagnostics</span>
            <span className="text-[10px] text-white font-bold bg-sky-500/10 px-2 py-0.5 rounded border border-sky-500/20">
              Ping 14ms
            </span>
          </div>

          {/* Latency graphs or uptime indicators */}
          <div className="flex items-center justify-between z-10">
            <div className="text-[8px] text-gray-400">
              <div className="text-white font-bold">Uptime: 99.997%</div>
              <div>Packets: 0% loss</div>
            </div>
            <div className="flex items-center gap-1.5">
              <div className="w-1.5 h-1.5 rounded-full bg-sky-500 animate-ping" />
              <span className="text-[7.5px] uppercase font-bold text-sky-400">Broadcasting Status</span>
            </div>
          </div>
        </div>
      )

    case 'preventive-maintenance':
      return (
        <div className="relative w-full h-32 bg-slate-950 flex flex-col justify-between p-3.5 overflow-hidden border-b border-white/5 font-mono select-none">
          <div className="absolute inset-0 bg-grid opacity-[0.15]" />
          
          <div className="flex justify-between items-start z-10">
            <span className="text-[9px] uppercase tracking-wider font-bold text-sky-500">Device Telemetry</span>
            <span className="text-[10px] text-white font-bold bg-sky-500/10 px-2 py-0.5 rounded border border-sky-500/20">
              Firmware Check
            </span>
          </div>

          {/* Server metrics/Gauges */}
          <div className="text-[8px] text-gray-400 z-10 space-y-1">
            <div className="flex justify-between">
              <span>Main Switch Temp:</span>
              <span className="text-white font-bold">42°C</span>
            </div>
            <div className="flex justify-between">
              <span>UPS Battery Health:</span>
              <span className="text-emerald-500 font-bold">100% (Normal)</span>
            </div>
            <div className="text-[7px] text-gray-500 text-left">Last Diagnostic: Today 04:00 AM</div>
          </div>
        </div>
      )

    case 'commercial-low-voltage':
      return (
        <div className="relative w-full h-32 bg-slate-950 flex flex-col justify-between p-3.5 overflow-hidden border-b border-white/5 font-mono select-none">
          <div className="absolute inset-0 bg-grid opacity-[0.15]" />
          
          <div className="flex justify-between items-start z-10">
            <span className="text-[9px] uppercase tracking-wider font-bold text-blue-500">Enterprise Trunking</span>
            <span className="text-[10px] text-white font-bold bg-blue-500/10 px-2 py-0.5 rounded border border-blue-500/20">
              Cat6A Certified
            </span>
          </div>

          <div className="flex items-end justify-between z-10">
            <div className="flex gap-1 items-center">
              <div className="w-1.5 h-4 bg-blue-500 rounded-sm" />
              <div className="w-1.5 h-6 bg-blue-500 rounded-sm" />
              <div className="w-1.5 h-5 bg-blue-500 rounded-sm animate-pulse" />
              <div className="w-1.5 h-7 bg-blue-500 rounded-sm" />
            </div>
            <div className="text-[8px] text-gray-400 text-right">
              <div className="text-white font-bold">48-Port Patch Panel</div>
              <div>Crosstalk Shield: Active</div>
            </div>
          </div>
        </div>
      )

    default:
      return null
  }
}
