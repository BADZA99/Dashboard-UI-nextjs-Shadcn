"use client";

import { ColumnDef } from "@tanstack/react-table";
import Image from "next/image";

// This type is used to define the shape of our data.
export type Player = {
  id: number;
  firstName: string;
  lastName: string;
  teamName: string;
  isTeamLeader: boolean;
  avatar: string;
};

export const columns: ColumnDef<Player>[] = [
  {
    accessorKey: "avatar",
    header: "Avatar",
    cell: ({ row }) => (
      <Image
        src={row.original.avatar}
        alt={`${row.original.firstName} ${row.original.lastName}`}
        width={50}
        height={50}
      />
    ),
  },
  {
    accessorKey: "firstName",
    header: "First Name",
  },
  {
    accessorKey: "lastName",
    header: "Last Name",
  },
  {
    accessorKey: "teamName",
    header: "Team Name",
  },
  {
    accessorKey: "isTeamLeader",
    header: "Team Leader",
    cell: ({ row }) => (row.original.isTeamLeader ? "Yes" : "No"),
  },
];
