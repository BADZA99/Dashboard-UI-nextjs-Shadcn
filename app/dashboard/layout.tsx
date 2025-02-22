import React from 'react'
import MainMenu from './components/MainMenu';
import MenuTitle from './components/menu-title';

export default function DashboardLayout({children}:{children:React.ReactNode}) {
  return (
    <div className="grid md:grid-cols-[250px_1fr] h-screen">
         {/* dashboard */}
<MainMenu classname='hidden md:flex' />
   {/* mobile menu */}
      <div className="p-4 block md:hiddensticky top-0 left-0 bg-background border-b border-border">
        <MenuTitle />
      </div>
      <div className="overflow-auto py-2 px-4">
        <h1 className="pb-4">Welcome Back , PAPABN</h1>
        {children}
      </div>
    </div>
  );
}
