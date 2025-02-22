import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { CardContent } from "../../../../components/ui/card";
import {
  LaptopIcon,

  PieChartIcon,

  StarIcon,

  UserIcon,
} from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import cm from "@/public/images/cm.jpg";
import tf from "@/public/images/tf.jpg";
import rl from "@/public/images/rl.jpg";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import Image from "next/image";
import TreamDistributionChart from "./TreamDistributionChart";
import SupportTicket from "./SupportTicket";

const teamLeaders = [
  {
    firstName: "Colin",
    lastName: "Murray",
    avatar: cm,
  },
  {
    firstName: "Tom",
    lastName: "Phillips",
  },
  {
    firstName: "Liam",
    lastName: "Fuentes",
  },
  {
    firstName: "Tina",
    lastName: "Fey",
    avatar: tf,
  },
  {
    firstName: "Katie",
    lastName: "Johnson",
  },
  {
    firstName: "Tina",
    lastName: "Jones",
  },
  {
    firstName: "Amy",
    lastName: "Adams",
  },
  {
    firstName: "Ryan",
    lastName: "Lopez",
    avatar: rl,
  },
  {
    firstName: "Jenny",
    lastName: "Jones",
  },
];


export default function PlayersStats() {
  const totalEmployees = 100;


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
            <CardTitle className="text-base flex justify-between items-center">
              <span>teams leaders</span>
              <StarIcon className=" text-yellow-500" />
            </CardTitle>
          </CardHeader>
          <CardContent className="flex  flex-wrap gap-2">
            {teamLeaders.map((teamLeader) => (
              <TooltipProvider key={teamLeader.firstName}>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Avatar>
                      {!!teamLeader.avatar && (
                        <Image
                          src={teamLeader.avatar}
                          alt={teamLeader.firstName}
                          width={40}
                          height={40}
                        />
                      )}
                      <AvatarFallback>
                        {teamLeader.firstName[0]}
                        {teamLeader.lastName[0]}
                      </AvatarFallback>
                    </Avatar>
                  </TooltipTrigger>
                  <TooltipContent className="bg-background text-foreground rounded-md p-2 shadow-md">
                    {teamLeader.firstName} {teamLeader.lastName}
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            ))}
          </CardContent>
        </Card>
        <Card className=" ">
          {" "}
          <CardHeader className="pb-2">
              <CardTitle className="text-base flex justify-between items-center">
                <span>teams distribution</span>
                <PieChartIcon />
              </CardTitle>
          </CardHeader>
          <CardContent className="flex gap-2 items-center ">
            <TreamDistributionChart />
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
            <SupportTicket />
        </CardContent>
      </Card>
    </>
  );
}
