import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import React from "react";
import EmployeesStats from "./components/employees/employess-stats";

export default function DashboardPage() {
  return (
    <Tabs defaultValue="Players">
      <TabsList className="mb-4">
        <TabsTrigger value="Players">Players stats</TabsTrigger>

        <TabsTrigger value="Employes">Employes stats</TabsTrigger>
      </TabsList>

      <TabsContent value="Players">
        <div>Players</div>
      </TabsContent>
      <TabsContent value="Employes">
        <EmployeesStats />
      </TabsContent>
    </Tabs>
  );
}
