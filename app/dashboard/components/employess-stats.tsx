import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { CardContent } from "../../../components/ui/card";
import { UserIcon } from "lucide-react";

export default function EmployesStats() {
  return (
    <div className="grid lg:grid-cols-3 gap-4">
      <Card>
        <CardHeader>
          <CardTitle className="text-base">Employees</CardTitle>
        </CardHeader>
        <CardContent className='flex justify-between'>
          <div className="flex gap-2">
            <UserIcon className="w-5 h-5" />
            <span className="text-5xl font-bold">10</span>
          </div>
          <div className="1">1</div>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle className="text-base">Employees</CardTitle>
        </CardHeader>
      </Card>
      <Card className="border-pink-500">
        {" "}
        <CardHeader>
          <CardTitle className="text-base">Employees</CardTitle>
        </CardHeader>
      </Card>
    </div>
  );
}
