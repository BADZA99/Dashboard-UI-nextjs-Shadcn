export default async function PlayersPage() {
  // Fonction pour simuler un délai
  const delay = (ms: number) =>
    new Promise((resolve) => setTimeout(resolve, ms));

  // Attendre 5 secondes
  await delay(5000);

  const players = [
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
      avatar: "/images/cm.jpg",
    },
    {
      id: 3,
      firstName: "Alice",
      lastName: "Johnson",
      teamName: "Team A",
      isTeamLeader: false,
      avatar: "/images/cm.jpg",
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
    <div>
     
    </div>
  );
}
