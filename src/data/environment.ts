export type Decoration = {
  id: number;
  emoji: string;
  x: string;
  y: string;
};

export const decorations: Decoration[] = [
  { id: 1, emoji: "🌳", x: "18%", y: "18%" },
  { id: 2, emoji: "🌳", x: "80%", y: "20%" },
  { id: 3, emoji: "🌳", x: "18%", y: "80%" },
  { id: 4, emoji: "🌳", x: "82%", y: "78%" },

  { id: 5, emoji: "🪑", x: "35%", y: "30%" },
  { id: 6, emoji: "🪑", x: "63%", y: "30%" },

  { id: 7, emoji: "🏛", x: "50%", y: "20%" },

  { id: 8, emoji: "🌸", x: "32%", y: "52%" },
  { id: 9, emoji: "🌸", x: "68%", y: "52%" },

  { id: 10, emoji: "🪨", x: "25%", y: "60%" },
  { id: 11, emoji: "🪨", x: "75%", y: "62%" },

  { id: 12, emoji: "🏳️", x: "50%", y: "10%" },
];