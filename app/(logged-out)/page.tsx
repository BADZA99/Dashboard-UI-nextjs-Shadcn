import { Button } from '@/components/ui/button'
import React from 'react'
import { ChartBar } from 'lucide-react'
import Link from 'next/link'

export default function LandingPage() {
  return (
    <>
      <h1 className="flex gap-2 items-center">
        {" "}
        <ChartBar size={50} className="text-pink-500" /> all time stats
      </h1>
      <p>the best dashboard visualisation soccer player stats</p>
      <div className="flex gap-2 items-center">
        <Button asChild>
          <Link href={"/login"} className="font-bold">
            login
          </Link>
        </Button>
        <small>Or</small>
        <Button variant={"outline"}>
          <Link href={"/sign-up"}>sign up</Link>
        </Button>
      </div>
    </>
  );
}
