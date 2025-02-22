"use client";

import { Tooltip, TooltipProvider } from "@/components/ui/tooltip";
import { PieChart } from "recharts";
import { Cell, Pie, ResponsiveContainer } from "recharts";

export default function TreamDistributionChart() {
    const data = [
      {
        name: "Delta",
        value: 55,
        color: "#84cc16",
      },
      {
        name: "Alpha",
        value: 34,
        color: "#3b82f6",
      },
      {
        name: "Canary",
        value: 11,
        color: "#f97316",
      },
    ];

  return (
    <ResponsiveContainer height={150} width="100%">
      <PieChart>
        <TooltipProvider>
          <Tooltip
        
          />
        </TooltipProvider>
        <Pie
          data={data}
          dataKey="value"
          nameKey="name"
          cx="50%"
          cy="50%"
          outerRadius={50}
          fill="#8884d8"
        >
          {data.map((entry, index) => (
            <Cell key={index} fill={entry.color} />
          ))}
        </Pie>
      </PieChart>
    </ResponsiveContainer>
  );
}
