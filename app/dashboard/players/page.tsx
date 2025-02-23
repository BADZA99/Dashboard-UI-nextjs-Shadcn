import { Card, CardHeader, CardTitle ,
  CardContent,


} from "@/components/ui/card";
import { DataTable } from "@/components/ui/DataTable";
import { columns, type Player } from "./columns";

export default async function PlayersPage() {
  // Fonction pour simuler un délai
  const delay = (ms: number) =>
    new Promise((resolve) => setTimeout(resolve, ms));

  // Attendre 5 secondes
  await delay(5000);

  const players : Player [] = [
    {
      id: 1,
      firstName: "John",
      lastName: "Doe",
      teamName: "Team A",
      isTeamLeader: true,
      avatar: "/images/cm.jpg",
    },
    {
      id: 2,
      firstName: "Jane",
      lastName: "Smith",
      teamName: "Team B",
      isTeamLeader: false,
      avatar: "/images/tf.jpg",
    },
    {
      id: 3,
      firstName: "Alice",
      lastName: "Johnson",
      teamName: "Team A",
      isTeamLeader: false,
      avatar: "/images/rl.jpg",
    },
    {
      id: 4,
      firstName: "Bob",
      lastName: "Brown",
      teamName: "Team C",
      isTeamLeader: true,
      avatar: "/images/cm.jpg",
    },
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle>Loading</CardTitle>
      </CardHeader>

      <CardContent className="">
      <DataTable
      data={players}
      columns={columns}
       />
      </CardContent>
    </Card>
  );
}
