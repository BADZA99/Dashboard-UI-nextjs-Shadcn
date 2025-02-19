import React from 'react'
import MenuTitle from './menu-title';
import MenuItem from './MenuItem';

export default function MainMenu() {
  return <div className="bg-muted overflow-auto p-4">
    <div className="border-b dark:border-b-black border-b-zinc-300 pb-4">
        <MenuTitle />
    </div>
    {/* menu items */}
    <div className="py-4">
      <MenuItem href={"/dashboard"}>Dashboard</MenuItem>
      <MenuItem href={"/dashboard/players"}>Players</MenuItem>
      <MenuItem href={"/dashboard/teams"}>Teams</MenuItem>
      <MenuItem href={"/dashboard/matches"}>Matches</MenuItem>
    </div>
  </div>;
}
