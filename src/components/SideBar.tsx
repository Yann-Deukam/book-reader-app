"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  CogIcon,
  HomeIcon,
  StarIcon,
  UserGroupIcon,
} from "@heroicons/react/24/outline";

const SideBar = () => {
  const MenuList = [
    {
      title: "Home",
      icon: <HomeIcon className="w-6 h-6" />, // Set icon size with tailwind classes
    },
    {
      title: "About Us",
      icon: <UserGroupIcon className="w-6 h-6" />,
    },
    {
      title: "Settings",
      icon: <CogIcon className="w-6 h-6" />,
    },
    {
      title: "Rate Us",
      icon: <StarIcon className="w-6 h-6" />,
    },
  ];

  return (
    <>
      <div className="mt-24">
        {MenuList.map((list, i) => (
          <motion.div
            key={i}
            transition={{ type: "spring", damping: 22, mass: 0.99 }}
            initial={{ opacity: 0, x: -2000 * (i + 1) }}
            animate={{ opacity: 1, x: 0 }}
          >
            <ul className="w-[200px]">
              <motion.li
                className="mb-4 text-xl p-[10px] cursor-pointer rounded-md flex items-center"
                whileHover={{ scale: 1.1 }}
              >
                {/* Icon and title inside a flex container */}
                <div className="flex items-center space-x-3">
                  <span>{list.icon}</span>
                  <motion.span
                    transition={{ type: "spring", damping: 22, mass: 0.99 }}
                    initial={{ opacity: 0, x: -2000 * (i + 1) }}
                    animate={{ opacity: 1, x: 0 }}
                    style={{
                      color: "#000",
                      textDecoration: "none",
                      fontSize: "14px",
                      fontWeight: "600",
                      marginLeft: "10px",
                      lineHeight: 2,
                    }}
                    className="hidden md:block"
                  >
                    {list.title}
                  </motion.span>
                </div>
              </motion.li>
            </ul>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default SideBar;
