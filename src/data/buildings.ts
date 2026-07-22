export type Building = {
  id: string;
  name: string;
  icon: string;
  description: string;
};

export const buildings: Building[] = [
  {
    id: "senate",
    name: "Senate Hall",
    icon: "🏛",
    description: "Participate in ranked debates.",
  },
  {
    id: "court",
    name: "Court of Appeals",
    icon: "⚖️",
    description: "Resolve disputes and review cases.",
  },
  {
    id: "library",
    name: "Library",
    icon: "📚",
    description: "Research evidence and arguments.",
  },
  {
    id: "plaza",
    name: "Voting Plaza",
    icon: "🗳",
    description: "Vote on community issues.",
  },
];