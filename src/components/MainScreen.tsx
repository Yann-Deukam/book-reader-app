import React from "react";
import { motion } from "framer-motion";
import { books } from "@/constants/mockData";
import BookCard from "@/components/BookCard";

const MainScreen = () => {
  return (
    <>
      <h1 className="mb-3 mt-10 ml-7 text-2xl font-bold">All Books</h1>
      <ul
        className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 p-4 pt-2" // Responsive grid settings
      >
        {books.map((book, i) => (
          <motion.li
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", damping: 4, mass: 0.75 }}
            initial={{ opacity: 0, x: 200 * (i + 1) }}
            animate={{ opacity: 1, x: 0 }}
            key={i}
            className="p-2" // Padding inside each list item
          >
            <a href={`/book/${book.id}`} style={{ textDecoration: "none" }}>
              <BookCard
                title={book.title}
                coverImage={book.image}
                description={book.description}
              />
            </a>
          </motion.li>
        ))}
      </ul>
    </>
  );
};

export default MainScreen;
