'use client';
import React from 'react'
import MainMenu from './components/MainMenu';
import MenuTitle from './components/menu-title';
import { Drawer, DrawerContent, DrawerTrigger } from '@/components/ui/drawer';
import { MenuIcon } from 'lucide-react';
import { useMediaQuery } from '@/hooks/use-media-query';

export default function DashboardLayout({children}:{children:React.ReactNode}) {
  const isDesktop = useMediaQuery("(min-width: 768px)");
  return (
    <div className="grid md:grid-cols-[250px_1fr] h-screen">
         {/* dashboard */}
<MainMenu classname='hidden md:flex' />
   {/* mobile menu */}
     { !isDesktop && (<div className="p-4 flex justify-between md:hidden sticky top-0 left-0 bg-background border-b border-border">
        <MenuTitle />
        <Drawer>
          <DrawerTrigger>
            <MenuIcon/>
          </DrawerTrigger>
          <DrawerContent>
            <MainMenu classname='flex' />
          </DrawerContent>
        </Drawer>
      </div>)}
      <div className="overflow-auto py-2 px-4">
        <h1 className="pb-4">Welcome Back , PAPABN</h1>
        {children}
      </div>
    </div>
  );
}
