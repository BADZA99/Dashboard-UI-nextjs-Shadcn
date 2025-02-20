import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import React from "react";

export default function DashboardPage() {
  return (
    <Tabs defaultValue="Players">
      <TabsList>
        <TabsTrigger value="Players">Players stats</TabsTrigger>

        <TabsTrigger value="Employes">Employes stats</TabsTrigger>
      </TabsList>

      <TabsContent value="Players">
        <div>Players</div>
      </TabsContent>
      <TabsContent value="Employes">
        <div>Employes</div>
      </TabsContent>
    </Tabs>
  );
}
