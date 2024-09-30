"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const Header = () => {
  return (
    <header className="flex justify-between items-center p-[1rem] pl-0 text-white">
      <motion.div
        className="flex items-center"
        transition={{ type: "spring", damping: 18, mass: 0.75 }}
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
      >
        <h1 className="md:mr-[2rem] sm:mr-1 font-bold text-2xl text-purple-700">
          Bookin
        </h1>
        <motion.input
          type="text"
          placeholder="what will you read today"
          className="px-4 py-2 rounded-md ml-[2rem] border border-purple-600 lg:w-[400px] md:w-[400px] sm:w-[200px] bg-purple-50/15"
        />
      </motion.div>
      <motion.div
        className="flex items-center"
        transition={{ type: "spring", damping: 18, mass: 0.75 }}
        initial={{ opacity: 0, x: 1000 }}
        animate={{ opacity: 1, x: 0 }}
      >
        <Link href="/profile" className="mr-[1rem]">
          <motion.img
            src="https://versetracker.com/sites/default/files/styles/rapper_profile/public/rapper-pictures/r/random-guy-battle-rapper-1535300807.jpg?itok=1GIajYRh"
            alt="avatar"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            className="w-[40px] h-[40px] rounded-lg"
          />
        </Link>
      </motion.div>
    </header>
  );
};

export default Header;
