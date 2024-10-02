"use client"
import React, { useState } from 'react'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from './ui/tooltip';
import { MoonIcon, SunIcon } from 'lucide-react';

type props = {
    classname?:string
}

export default function LightDarkToggle({classname}:props) {
    const [IsDark, setIsDark] = useState(true);
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger className={classname}>
          {IsDark ? (
            <MoonIcon
              onClick={() => {
                setIsDark((prevIsDark) => {
                  const newIsDark = !prevIsDark;
                  document.body.classList.toggle("dark", newIsDark);
                  return newIsDark;
                });
              }}
            />
          ) : (
            <SunIcon
              onClick={() => {
                setIsDark((prevIsDark) => {
                  const newIsDark = !prevIsDark;
                  document.body.classList.toggle("dark", newIsDark);
                  return newIsDark;
                });
              }}
            />
          )}
        </TooltipTrigger>
        <TooltipContent
          sideOffset={4}
          className={IsDark ? "bg-black" : "bg-black"}
        >
          {IsDark ? "Enable Light Mode" : " Enable Dark Mode"}
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}