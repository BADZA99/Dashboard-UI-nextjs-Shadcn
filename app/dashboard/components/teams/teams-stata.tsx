import { Card, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { CardContent } from "../../../../components/ui/card";
import {
  AlertTriangleIcon,
  BadgeCheckIcon,
  LaptopIcon,

  UserIcon,
  UserRoundXIcon,
} from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";



export default function PlayersStats() {
  const totalEmployees = 100;
  const activeEmployees = 98;
  const employeesActivePercentage = (activeEmployees / totalEmployees) * 100;
  return (
    <>
      <div className="grid lg:grid-cols-3 gap-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-base">Employees</CardTitle>
          </CardHeader>
          <CardContent className="flex justify-between">
            <div className="flex gap-2">
              <UserIcon className="w-5 h-5" />
              <span className="text-5xl font-bold">{totalEmployees}</span>
            </div>
            <div className="1">
              <Button size="xs" asChild>
                <Link href="/dashboard/employees">view all</Link>
              </Button>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-base">teams leaders</CardTitle>
          </CardHeader>
          <CardContent className="flex justify-between">
            
          </CardContent>
        
        </Card>
        <Card className=" ">
          {" "}
          <CardHeader className="pb-2">
            <CardTitle className="text-base">teams distribution</CardTitle>
          </CardHeader>
          <CardContent className="flex gap-2 items-center ">
         
          </CardContent>
        
        </Card>
      </div>
      {/* card for bar chart */}
      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-lg flex items-center gap-2">
            <LaptopIcon className="w-5 h-5" />
            <span>teams work location trend</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="pl-0">
   teams line chart
        </CardContent>
      </Card>
    </>
  );
}
