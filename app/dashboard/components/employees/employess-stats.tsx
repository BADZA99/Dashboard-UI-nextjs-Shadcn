import { Card, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { CardContent } from "../../../../components/ui/card";
import {
  AlertTriangleIcon,
  BadgeCheckIcon,
  LaptopIcon,
  PartyPopperIcon,
  UserIcon,
  UserRoundXIcon,
} from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import Image from "next/image";
import cm from "@/public/images/cm.jpg";
import WorkLocationTrends from "../WorkLocationTrends";

export default function EmployesStats() {
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
            <CardTitle className="text-base">Employees</CardTitle>
          </CardHeader>
          <CardContent className="flex justify-between">
            <div className="flex gap-2">
              {employeesActivePercentage > 90 ? (
                <BadgeCheckIcon className="w-5 h-5" />
              ) : (
                <UserRoundXIcon className="w-5 h-5" />
              )}

              <span className="text-5xl font-bold">{activeEmployees}</span>
            </div>
          </CardContent>
          <CardFooter>
            <span className="items-center">
              {employeesActivePercentage > 90 ? (
                <span className="text-green-500">
                  <BadgeCheckIcon className="w-5 h-5" />
                  {employeesActivePercentage}% active
                </span>
              ) : (
                <span className="text-red-500">
                  <AlertTriangleIcon className="w-5 h-5" />
                  {employeesActivePercentage}% inactive
                </span>
              )}
            </span>
          </CardFooter>
        </Card>
        <Card className="border-pink-500 flex flex-col ">
          {" "}
          <CardHeader className="pb-2">
            <CardTitle className="text-base">Employees</CardTitle>
          </CardHeader>
          <CardContent className="flex gap-2 items-center ">
            <Avatar>
              <Image src={cm} alt="Avatar" width={40} height={40} />
              <AvatarFallback>OM</AvatarFallback>
            </Avatar>
            <span className="text-2xl">Omar</span>
          </CardContent>
          <CardFooter className="flex gap-2 items-center text-sm text-muted-foreground mt-auto text-pink-500">
            <PartyPopperIcon color="pink" className="w-5 h-5 " />
            <span className="">Congratulations Omar</span>
          </CardFooter>
        </Card>
      </div>
      {/* card for bar chart */}
      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-lg flex items-center gap-2">
            <LaptopIcon className="w-5 h-5" />
            <span>employee work location trend</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="">
          <WorkLocationTrends />
        </CardContent>
      </Card>
    </>
  );
}
