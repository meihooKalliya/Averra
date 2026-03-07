"use client";
import { useState, useEffect, useRef } from "react";
import { ArrowRight, Link, Zap } from "lucide-react";
import { Badge } from "./badge";
import { Button } from "./button";
import { Card, CardContent, CardHeader, CardTitle } from "./card";

interface TimelineItem {
  id: number;
  title: string;
  date: string;
  content: string;
  category: string;
  icon: React.ElementType;
  relatedIds: number[];
  status: "completed" | "in-progress" | "pending";
  energy: number;
}

interface RadialOrbitalTimelineProps {
  timelineData: TimelineItem[];
}

export default function RadialOrbitalTimeline({ timelineData }: RadialOrbitalTimelineProps) {
  const [expandedItems, setExpandedItems] = useState<Record<number, boolean>>({});
  const [rotationAngle, setRotationAngle] = useState<number>(0);
  const [autoRotate, setAutoRotate] = useState<boolean>(true);
  const [pulseEffect, setPulseEffect] = useState<Record<number, boolean>>({});
  const [centerOffset, setCenterOffset] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const [activeNodeId, setActiveNodeId] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const orbitRef = useRef<HTMLDivElement>(null);
  const nodeRefs = useRef<Record<number, HTMLDivElement | null>>({});
  const activeItem = activeNodeId != null ? timelineData.find((i) => i.id === activeNodeId) : null;
  const fillerDots = Array.from({ length: 8 }).map((_, i) => {
    const angle = (i / 8) * Math.PI * 2;
    const r = 120;
    return { x: Math.cos(angle) * r, y: Math.sin(angle) * r, size: 2 + (i % 3), opacity: 0.15 + (i % 2) * 0.1 };
  });

  const handleContainerClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === containerRef.current || e.target === orbitRef.current) {
      setExpandedItems({});
      setActiveNodeId(null);
      setPulseEffect({});
      setAutoRotate(true);
    }
  };

  const closeAll = () => {
    setExpandedItems({});
    setActiveNodeId(null);
    setPulseEffect({});
    setAutoRotate(true);
  };

  const getRelatedItems = (id: number) => {
    const item = timelineData.find((i) => i.id === id);
    if (!item) return [] as TimelineItem[];
    return item.relatedIds.map((rid) => timelineData.find((t) => t.id === rid)).filter(Boolean) as TimelineItem[];
  };

  const isRelatedToActive = (id: number) => {
    if (activeNodeId == null) return false;
    const related = getRelatedItems(activeNodeId).map((r) => r.id);
    return related.includes(id);
  };

  const toggleItem = (id: number) => {
    setExpandedItems((prev) => {
      const next: Record<number, boolean> = { ...prev };
      Object.keys(next).forEach((k) => {
        const num = parseInt(k);
        if (num !== id) next[num] = false;
      });
      next[id] = !prev[id];
      if (!prev[id]) {
        setActiveNodeId(id);
        setAutoRotate(false);
        const related = getRelatedItems(id);
        const pe: Record<number, boolean> = {};
        related.forEach((r) => (pe[r.id] = true));
        setPulseEffect(pe);
      } else {
        setActiveNodeId(null);
        setPulseEffect({});
        setAutoRotate(true);
      }
      return next;
    });
  };

  useEffect(() => {
    let raf: number;
    const tick = () => {
      if (autoRotate) setRotationAngle((a) => (a + 0.1) % 360);
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [autoRotate]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      setCenterOffset({ x: (e.clientX - cx) * 0.02, y: (e.clientY - cy) * 0.02 });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const calculateNodePosition = (index: number, total: number) => {
    const radius = 160;
    const angle = ((index / total) * 360 + rotationAngle) * (Math.PI / 180);
    const x = Math.cos(angle) * radius;
    const y = Math.sin(angle) * radius;
    const zIndex = Math.round(100 + Math.sin(angle) * 50);
    const opacity = 0.6 + Math.cos(angle) * 0.2;
    return { x, y, zIndex, opacity };
  };

  const getStatusStyles = (status: TimelineItem["status"]) => {
    if (status === "completed") return "bg-green-600 text-white";
    if (status === "in-progress") return "bg-yellow-500 text-black";
    return "bg-zinc-700 text-white";
  };

  return (
    <div className="w-full h-screen flex flex-col items-center justify-center bg-[#040812] overflow-hidden" ref={containerRef} onClick={handleContainerClick}>
      <div className="relative w-full max-w-4xl h-full flex items-center justify-center">
        <div className="absolute w-full h-full flex items-center justify-center transition-all duration-700" ref={orbitRef} style={{ perspective: "1000px", transform: `translate(${centerOffset.x + (activeItem ? -160 : 0)}px, ${centerOffset.y}px)` }}>
          <div className="absolute w-16 h-16 rounded-full bg-gradient-to-br from-purple-500 via-blue-500 to-teal-500 animate-pulse flex items-center justify-center z-10">
            <div className="absolute w-20 h-20 rounded-full border border-white/20 animate-ping opacity-70"></div>
            <div className="absolute w-24 h-24 rounded-full border border-white/10 animate-ping opacity-50" style={{ animationDelay: "0.5s" }}></div>
            <div className="w-8 h-8 rounded-full bg-white/80 backdrop-blur-md"></div>
          </div>
          <div className="absolute w-96 h-96 rounded-full border border-white/10 cursor-pointer hover:border-white/20 transition-all duration-300" onClick={(e) => { e.stopPropagation(); closeAll(); }}></div>

          {fillerDots.map((d, idx) => (
            <div
              key={idx}
              className="absolute rounded-full bg-white/30"
              style={{ width: d.size, height: d.size, transform: `translate(${d.x}px, ${d.y}px)`, opacity: d.opacity }}
            ></div>
          ))}

          {timelineData.map((item, index) => {
            const position = calculateNodePosition(index, timelineData.length);
            const isExpanded = expandedItems[item.id];
            const isRelated = isRelatedToActive(item.id);
            const isPulsing = pulseEffect[item.id];
            const Icon = item.icon;
            const nodeStyle = { transform: `translate(${position.x}px, ${position.y}px)`, zIndex: isExpanded ? 200 : position.zIndex, opacity: isExpanded ? 1 : position.opacity } as React.CSSProperties;
            return (
              <div key={item.id} ref={(el) => (nodeRefs.current[item.id] = el)} className="absolute transition-all duration-700 cursor-pointer" style={nodeStyle} onClick={(e) => { e.stopPropagation(); toggleItem(item.id); }}>
                <div className={`absolute rounded-full -inset-1 ${isPulsing ? "animate-pulse duration-1000" : ""}`} style={{ background: `radial-gradient(circle, rgba(255,255,255,0.2) 0%, rgba(255,255,255,0) 70%)`, width: `${item.energy * 0.5 + 40}px`, height: `${item.energy * 0.5 + 40}px`, left: `-${(item.energy * 0.5 + 40 - 40) / 2}px`, top: `-${(item.energy * 0.5 + 40 - 40) / 2}px` }}></div>
                <div className={`w-10 h-10 rounded-full flex items-center justify-center ${isExpanded ? "bg-white text-black" : isRelated ? "bg-white/50 text-black" : "bg-[#040812] text-white"} border-2 ${isExpanded ? "border-white shadow-lg shadow-white/30" : isRelated ? "border-white animate-pulse" : "border-white/40"} transition-all duration-300 transform ${isExpanded ? "scale-150" : ""}`}>
                  <Icon size={16} />
                </div>
                <div className={`absolute top-12 whitespace-nowrap text-xs font-semibold tracking-wider transition-all duration-300 ${isExpanded ? "text-white scale-125" : "text-white/70"}`}>{item.title}</div>
                {isExpanded && (
                  <Card className="absolute top-20 left-1/2 -translate-x-1/2 w-64 bg-[#040812]/90 backdrop-blur-lg border-white/30 shadow-xl shadow-white/10 overflow-visible">
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-px h-3 bg-white/50"></div>
                    <CardHeader className="pb-2">
                      <div className="flex justify-between items-center">
                        <Badge className={`px-2 text-xs ${getStatusStyles(item.status)}`}>{item.status === "completed" ? "COMPLETE" : item.status === "in-progress" ? "IN PROGRESS" : "PENDING"}</Badge>
                        <span className="text-xs font-mono text-white/50">{item.date}</span>
                      </div>
                      <CardTitle className="text-sm mt-2">{item.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="text-xs text-white/80">
                      <p>{item.content}</p>
                      <div className="mt-4 pt-3 border-t border-white/10">
                        <div className="flex justify-between items-center text-xs mb-1">
                          <span className="flex items-center"><Zap size={10} className="mr-1" />Energy Level</span>
                          <span className="font-mono">{item.energy}%</span>
                        </div>
                        <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden">
                          <div className="h-full bg-gradient-to-r from-blue-500 to-purple-500" style={{ width: `${item.energy}%` }}></div>
                        </div>
                      </div>
                      {item.relatedIds.length > 0 && (
                        <div className="mt-4 pt-3 border-t border-white/10">
                          <div className="flex items-center mb-2"><Link size={10} className="text-white/70 mr-1" /><h4 className="text-xs uppercase tracking-wider font-medium text-white/70">Connected Nodes</h4></div>
                          <div className="flex flex-wrap gap-1">
                            {item.relatedIds.map((rid) => {
                              const relatedItem = timelineData.find((i) => i.id === rid);
                              return (
                                <Button key={rid} variant="outline" size="sm" className="flex items-center h-6 px-2 py-0 text-xs rounded-none border-white/20 bg-transparent hover:bg-white/10 text-white/80 hover:text-white transition-all" onClick={(e) => { e.stopPropagation(); toggleItem(rid); }}>
                                  {relatedItem?.title}
                                  <ArrowRight size={8} className="ml-1 text-white/60" />
                                </Button>
                              );
                            })}
                          </div>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                )}
              </div>
            );
          })}
        </div>
        {activeItem && (
          <div className="absolute right-6 top-1/2 -translate-y-1/2 w-80 transition-all duration-700" style={{ opacity: activeItem ? 1 : 0, pointerEvents: activeItem ? "auto" : "none" }}>
            <Card className="bg-[#040812]/80 border border-white/20 shadow-xl shadow-white/10">
              <CardHeader className="pb-2">
                <div className="flex justify-between items-center">
                  <Badge className={`px-2 text-xs ${getStatusStyles(activeItem.status)}`}>{activeItem.status === "completed" ? "COMPLETE" : activeItem.status === "in-progress" ? "IN PROGRESS" : "PENDING"}</Badge>
                  <span className="text-xs font-mono text-white/50">{activeItem.date}</span>
                </div>
                <CardTitle className="text-sm mt-2">{activeItem.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-xs text-white/80">
                <p className="mb-3">{activeItem.content}</p>
                <div className="mt-2 pt-3 border-t border-white/10">
                  <div className="flex justify-between items-center text-xs mb-1">
                    <span className="flex items-center"><Zap size={10} className="mr-1" />Energy Level</span>
                    <span className="font-mono">{activeItem.energy}%</span>
                  </div>
                  <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-blue-500 to-purple-500" style={{ width: `${activeItem.energy}%` }}></div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        )}
      </div>
    </div>
  );
}


