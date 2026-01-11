"use client";

import React from "react";
import StatCard from "./stat-card";
import { motion, Variants } from "motion/react";

interface StatCardProps {
  label: string;
  value: string | number;
  icon?: React.ReactNode;
  primary?: boolean;
  danger?: boolean;
}

const container: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const item: Variants = {
  hidden: { y: 10, opacity: 0, filter: "blur(10px)" },
  show: {
    y: 0,
    opacity: 1,
    filter: "blur(0px)",
    transition: { duration: 0.3 },
  },
};

function StatCardView({ statCards }: { statCards: StatCardProps[] }) {
  return (
    <motion.section
      variants={container}
      initial="hidden"
      animate="show"
      className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5"
    >
      {statCards.map((stat, idx) => (
        <motion.div variants={item} key={`${stat.label}-${idx}`}>
          <StatCard {...stat} />
        </motion.div>
      ))}
    </motion.section>
  );
}

export default StatCardView;
