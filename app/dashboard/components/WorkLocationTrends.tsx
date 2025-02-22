'use client';

import { Bar, BarChart, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

const data = [
  {
    name: "Jan",
    office: 82,
    wfh: 44,
  },
  {
    name: "Feb",
    office: 80,
    wfh: 40,
  },
  {
    name: "Mar",
    office: 83,
    wfh: 42,
  },
  {
    name: "Apr",
    office: 50,
    wfh: 50,
  },
  {
    name: "May",
    office: 40,
    wfh: 60,
  },
  {
    name: "Jun",
    office: 60,
    wfh: 40,
  },
  {
    name: "Jul",
    office: 55,
    wfh: 55,
  },
  {
    name: "Aug",
    office: 49,
    wfh: 61,
  },
  {
    name: "Sep",
    office: 44,
    wfh: 70,
  },
  {
    name: "Oct",
    office: 40,
    wfh: 40,
  },
  {
    name: "Nov",
    office: 50,
    wfh: 50,
  },
  {
    name: "Dec",
    office: 50,
    wfh: 50,
  },
];


export default function WorkLocationTrends() {
  return (
    <ResponsiveContainer height={350} width="100%">
      {/* [&_.recharts-tootltip-cursor]:fill-zinc-200  pour que le curseur de la tooltip soit blanc */}
      <BarChart
        data={data}
        className="[&_.recharts-tootltip-cursor]:fill-zinc-200 dark:[&_.recharts-tootltip-cursor]:fill-zinc-800"
      >
        <XAxis dataKey="name" stroke="#888888" fontSize={12} />
        <YAxis stroke="#888888" fontSize={12} />
        <Tooltip separator=': ' formatter={(value,namee)=>{
            if(namee==='office'){
                return [value,'work from office'];
            }else if(namee==='wfh'){
                return [value,'work from home'];
            }

        }} 
        
        labelClassName='font-bold'
        wrapperClassName="dark:!bg-black rounded-md dark:!border-border" />
        <Legend
          iconType="circle"
          formatter={(value) => {
            if (value === "office") {
              return <div className="text-sm ">work from office</div>;
            } else if (value === "wfh") {
              return <div>work from home</div>;
            }
          }}
        />
        {/* meme stackid pour que les barres ne s'affichent pas sur le même niveau(colonne)*/}
        <Bar dataKey="office" stackId="1" fill="#ec4899" />
        <Bar dataKey="wfh" stackId="1" fill="#6b7280" radius={[4, 4, 0, 0]} />
      </BarChart>
    </ResponsiveContainer>
  );
}
