"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export const LayoutGrid = ({ cards }: { cards: any[] }) => {
  const [selectedId, setSelectedId] = useState<string | null>(null);

  return (
    <div className="h-full w-full grid grid-cols-1 md:grid-cols-3 max-w-7xl mx-auto auto-rows-[200px] gap-4 p-4">
      {cards.map((card, i) => (
        <motion.div
          key={card.id}
          onClick={() => setSelectedId(card.id)}
          className={`${card.className} w-full rounded-xl flex-shrink-0 relative overflow-hidden cursor-pointer group`}
          layout
          layoutId={card.id}
        >
          <motion.div
            className={`absolute inset-0 w-full h-full ${card.thumbnail}`}
            layoutId={`${card.id}-background`}
            transition={{
              type: "spring",
              bounce: 0.2,
              duration: 0.6,
            }}
          >
            <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors duration-300" />
          </motion.div>
          <motion.div
            className="absolute inset-0 p-6 flex flex-col justify-end"
            layoutId={`${card.id}-content`}
            transition={{
              type: "spring",
              bounce: 0.2,
              duration: 0.6,
            }}
          >
            {card.content}
          </motion.div>
        </motion.div>
      ))}
    </div>
  );
}; 