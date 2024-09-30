"use client";

import Header from "@/components/Header";
import SideBar from "@/components/SideBar";
import Image from "next/image";
import { motion } from "framer-motion";
import MainScreen from "@/components/MainScreen";

export default function Home() {
  return (
    <div className="container p-4 md:p-0 lg:p-0 mx-auto">
      <Header />
      <div className="container flex items-start">
        <section className="w-[15%] ">
          <SideBar />
        </section>
        <div>
          <MainScreen />
        </div>
      </div>
    </div>
  );
}
