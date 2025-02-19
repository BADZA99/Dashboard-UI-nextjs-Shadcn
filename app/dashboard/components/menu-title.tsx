import { ChartBar } from 'lucide-react';
import React from 'react'

export default function MenuTitle() {
  return (
    <h4 className="flex items-center justify-beetween ">
      <ChartBar size={30} className="text-pink-500 " /> 
      <span>AllTimeStats</span>
    </h4>
  );
}
