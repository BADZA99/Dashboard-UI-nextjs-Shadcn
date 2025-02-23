'use client'

import { DrawerContext } from "@/components/ui/drawer"
import { cn } from "@/lib/utils"
import Link from "next/link"
import { usePathname } from "next/navigation"
import React from "react"

type Props ={
  children:React.ReactNode
  href:string
}

export default function MenuItem({children,href}: Props) {
  const {onClose} = React.useContext(DrawerContext);
const pathname= usePathname();
const isActive=pathname===href;
return <Link className={cn("block hover:bg-white dark:hover:bg-zinc-600 rounded-md p-2 hover:text-foreground ",
    isActive && "bg-primary hover:bg-primary dark:hover:bg-primary hover:text-primary-foreground text-foreground"
)} 
href={href}
onClick={onClose}
>{children}</Link>
}
