import React from 'react'
import MenuTitle from './menu-title';
import MenuItem from './MenuItem';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import Link from 'next/link';
import LightDarkToggle from '@/components/light-dark-toggle';
import {cn} from "@/lib/utils";

export default function MainMenu({classname}:{classname?:string}) {
  return <nav className={cn("bg-muted overflow-auto p-4 flex flex-col",classname)}>
    <header className="border-b dark:border-b-black border-b-zinc-300 pb-4">
        <MenuTitle />
    </header>
    {/* menu items */}
    <div className="py-4 grow">
      <MenuItem href={"/dashboard"}>Dashboard</MenuItem>
      <MenuItem href={"/dashboard/players"}>Players</MenuItem>
      <MenuItem href={"/dashboard/teams"}>Teams</MenuItem>
      <MenuItem href={"/dashboard/matches"}>Matches</MenuItem>
    </div>

    {/* footer */}
    <footer className="flex gap-2 items-center">
        <Avatar>
           <AvatarFallback
             className="bg-pink-300 dark:bg-pink-800 "
           >PA</AvatarFallback>
          
        </Avatar>
        {/* logout link */}
        <Link href={"/login"} className="text-primary hover:underline">
          logout
        </Link>
        {/* dark mode toggle */}
        <LightDarkToggle classname="ml-auto" />
    </footer>
  </nav>;
}
