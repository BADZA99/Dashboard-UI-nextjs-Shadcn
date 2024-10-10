import LightDarkToggle from "@/components/light-dark-toggle";
import { ReactNode } from "react";

type props ={
    children?:ReactNode
}

export default function LoggedOutLayout({children}:props) {
  return (
  <div> 
  <div className="flex flex-col gap-4 min-h-screen items-center justify-center p-24">
    {children}
  </div>
  <LightDarkToggle 
  classname="fixed top-1/2 right-2"
  />
  </div>
  );
}
