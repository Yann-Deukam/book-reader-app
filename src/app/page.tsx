"use client";

import Header from "@/components/Header";
import SideBar from "@/components/SideBar";
import Image from "next/image";
import { books } from "@/constants/mockData";
import { motion } from "framer-motion";
import BookCard from "@/components/BookCard";

export default function Home() {
  return (
    <div className="container p-4 mx-auto">
      <Header />
      <div className="container flex justify-between items-start">
        <section className="w-[30%]">
          <SideBar />
        </section>
        <div>
          <h1>All Books</h1>
          <ul>
            {books.map((book, i) => (
              <motion.li
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                transition={{ type: "spring", damping: 50, mass: 0.75 }}
                initial={{ opacity: 0, x: 200 * (i + 1) }}
                animate={{ opacity: 1, x: 0 }}
                key={i}
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
        </div>
      </div>
    </div>
  );
}
