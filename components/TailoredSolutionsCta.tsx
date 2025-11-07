"use client";
import React from "react";
import { motion } from "framer-motion";
import { User } from "@/types/user";

type LeaderWord = {
  heading: string;
  sub_heading: string;
  leader: User[];
};
const TailoredSolutionsCta: React.FC<LeaderWord> = ({
  heading,
  sub_heading,
  leader,
}) => {
  const user = leader[0];
  return (
    <motion.section
      className="bg-brand-teal text-white"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4 lg:px-8 py-20 text-center">
        <p className="font-semibold tracking-widest mb-2">{heading}</p>
        <h2 className="text-3xl lg:text-4xl font-extrabold max-w-3xl mx-auto mb-4">
          {user.quote}
        </h2>
        <p className="font-semibold">{`${user.firstname} ${user.lastname}`}</p>
        <p className="text-sm opacity-80">{user.job}</p>
      </div>
    </motion.section>
  );
};

export default TailoredSolutionsCta;
