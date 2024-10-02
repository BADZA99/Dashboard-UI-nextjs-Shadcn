import { ReactNode } from "react";

type props ={
    children?:ReactNode
}

export default function LoggedOutLayout({children}:props) {
  return <div className="flex flex-col gap-4 min-h-screen items-center justify-center p-24">
    {children}
  </div>;
}
