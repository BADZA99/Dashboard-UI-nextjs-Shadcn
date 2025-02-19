import React from 'react'
import MainMenu from './components/MainMenu';

export default function DashboardLayout({children}:{children:React.ReactNode}) {
  return (
    <div className="grid grid-cols-[250px_1fr] h-screen">
<MainMenu />
      {/* dashboard */}
      <div className="overflow-auto py-2 px-4">
        <h1 className="pb-4">Welcome Back , PAPABN</h1>
        {children}
      </div>
    </div>
  );
}
