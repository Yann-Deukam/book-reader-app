"use client";

import React from "react";
import { motion } from "framer-motion";
import { useParams } from "next/navigation";
import { books } from "@/constants/mockData";
import {
  ChevronLeftIcon,
  CogIcon,
  MagnifyingGlassIcon,
  ShareIcon,
} from "@heroicons/react/24/outline";

const BookPage = () => {
  const { id } = useParams();

  const selectedBook = books.filter((book, i) => {
    return id === String(book.id);
  });

  if (!selectedBook.length) return <p>Book not found</p>;

  return (
    <motion.div
      transition={{ type: "spring", damping: 40, mass: 0.75 }}
      initial={{ opacity: 0, x: 1000 }}
      animate={{ opacity: 1, x: 0 }}
    >
      <motion.section
        transition={{ type: "spring", damping: 44, mass: 0.75 }}
        initial={{ opacity: 0, y: -1000 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex w-[90%] mx-auto justify-between items-center min-h-[5vh] my-10 "
      >
        <div className="left-icons">
          <ChevronLeftIcon className="w-5 cursor-pointer" />
        </div>
        <div className="title">
          <h2 className="text-center pl-[100px] text-4xl font-bold">
            {selectedBook[0].title}
          </h2>
        </div>
        <div className="icons">
          <button className="savedButton">Save</button>
          <CogIcon />
          <ShareIcon />
          <MagnifyingGlassIcon />
        </div>
      </motion.section>
    </motion.div>
  );
};

export default BookPage;
