import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./card";

// Data for the comparison table
const comparisonData = [
  { provider: "io.net", totalCost: "$11,299", vsIoNet: "Baseline" },
  { provider: "Azure", totalCost: "$88,618", vsIoNet: "+684%" },
  { provider: "GCP", totalCost: "$140,418", vsIoNet: "+1,143%" },
  { provider: "AWS", totalCost: "$156,034", vsIoNet: "+1,281%" },
];

const CostComparison: React.FC = () => {
  return (
    <section className="relative py-16 md:py-24">
      {/* Subtle background effects */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div
          className="absolute top-0 w-full h-[40vh] opacity-60"
          style={{
            background:
              "radial-gradient(circle at 50% 0%, rgba(59,130,246,0.08) 0%, transparent 60%)",
          }}
        />
        <div
          className="absolute inset-0 opacity-50"
          style={{
            backgroundImage:
              "repeating-linear-gradient(0deg, #1f293708, #1f293708 1px, transparent 1px, transparent 100%), repeating-linear-gradient(90deg, #1f293708, #1f293708 1px, transparent 1px, transparent 100%)",
            backgroundSize: "30px 30px",
          }}
        />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white">
            Cost Comparison
          </h2>
          <p className="mt-2 text-lg text-zinc-400">1,587 Hours, 8x H100 GPUS</p>
        </div>

        {/* Glowing border container */}
        <div className="rounded-3xl p-[1px] bg-gradient-to-br from-indigo-500/40 to-purple-500/40 shadow-[0_0_40px_rgba(79,70,229,0.5),0_0_100px_rgba(139,92,246,0.2)]">
          <Card className="bg-[#040812]/60 rounded-[1.4rem] overflow-hidden border border-white/10">
            <CardHeader className="px-0 pt-0">
              {/* Table Header */}
              <div className="grid grid-cols-3 text-lg font-bold text-gray-300 bg-gray-900/50">
                <div className="p-4 border-r border-gray-800">Provider</div>
                <div className="p-4 border-r border-gray-800">Total Cost</div>
                <div className="p-4 text-right">vs io.net</div>
              </div>
            </CardHeader>
            <CardContent className="px-0">
              {/* Table Rows */}
              <div className="divide-y divide-gray-800">
                {comparisonData.map((row) => {
                  const isBaseline = row.provider === "io.net";
                  return (
                    <div
                      key={row.provider}
                      className={`grid grid-cols-3 ${isBaseline ? "bg-indigo-900/40 border-b-2 border-indigo-500/50" : ""
                        }`}
                    >
                      <div
                        className={`p-4 font-bold border-r border-gray-800 ${isBaseline ? "text-indigo-400" : "text-gray-100"
                          }`}
                      >
                        {row.provider}
                      </div>
                      <div className="p-4 text-xl font-extrabold text-white border-r border-gray-800">
                        {row.totalCost}
                      </div>
                      <div
                        className={`p-4 text-xl font-extrabold text-right ${isBaseline ? "text-indigo-400" : "text-red-400"
                          }`}
                      >
                        {row.vsIoNet}
                      </div>
                    </div>
                  );
                })}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default CostComparison;

