"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import "./nav.css";
import { useState } from "react";

const MOBILE_NAV_ITEMS = [
  {
    id: 0,
    navTitle: "Feature",
    link: "/feature",
  },
  {
    id: 1,
    navTitle: "FAQ",
    link: "/Faq-page",
  },
  {
    id: 2,
    navTitle: "Pricing",
    link: "/pricing",
  },
];

const Nav = () => {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  const hideNavItemsVariant = {
    opened: {
      opacity: 0,
      y: "-100%",
      transition: {
        duration: 0.3, // Faster duration
        ease: "easeInOut",
      },
    },
    closed: {
      opacity: 1,
      y: "0%",
      transition: {
        delay: 0.3, // Adjusted delay
        duration: 0.3, // Faster duration
        ease: "easeInOut",
      },
    },
  };

  const mobileMenuVariant = {
    opened: {
      y: "0%",
      transition: {
        delay: 0.1,
        duration: 0.5, // Faster duration
        ease: [0.74, 0, 0.19, 1.02],
      },
    },
    closed: {
      y: "-100%",
      transition: {
        delay: 0.1,
        duration: 0.5, // Faster duration
        ease: [0.74, 0, 0.19, 1.02],
      },
    },
  };

  const fadeInVariant = {
    opened: {
      opacity: 1,
      transition: {
        delay: 0.3, // Adjusted delay
        duration: 0.3, // Faster duration
      },
    },
    closed: { opacity: 0 },
  };

  const ulVariant = {
    opened: {
      transition: {
        delayChildren: 0.3, // Adjusted delay
        staggerChildren: 0.1,
      },
    },
    closed: {
      transition: {
        staggerChildren: 0.03,
        staggerDirection: -1,
      },
    },
  };

  const liVariant = {
    opened: {
      opacity: 1,
      x: "0%", // Modified from "y" to "x"
      transition: {
        duration: 0.12, // Adjusted duration for a faster animation
        ease: "easeOut",
      },
    },
    closed: {
      opacity: 0,
      x: "-100%", // Modified from "y" to "x"
      transition: {
        duration: 0.15,
        ease: "easeInOut",
      },
    },
  };

  const getTemplateVariant = {
    opened: {
      scaleX: [0, 1],
      transition: {
        delay: 0.8, // Adjusted delay
        duration: 0.5, // Slower duration for scaling
        ease: "easeInOut",
      },
    },
    closed: {
      scaleX: 0,
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
  };

  return (
    <div className="sticky bg-[#f2f1f1] top-0 px-4 z-30">
      <main className=" !w-[100%]  space py-3">
        <motion.nav
          className="flex justify-between w-[100%]   items-center "
          initial="closed"
          animate={mobileNavOpen ? "opened" : "closed"}
        >
          <div className="logo-container  ">
            <motion.div>
              <Link className=" z-50 relative " href="/">
                <div className="flex items-center gap-3">
                  <img
                    className="size-[50px]"
                    src="icon/eye.png"
                    alt="broken-logo"
                  />
                  <p className="lg:text-[24px] font-bold">CogniHub.</p>
                </div>
              </Link>
            </motion.div>
          </div>
          <div className="md:block hidden">
            <div className="flex gap-3 ">
              <Link href="/feature">
                <div className="btn-nav paragraphs">
                  <p>Feature</p>
                </div>
              </Link>
              <Link href="/Faq-page">
                <div className="btn-nav paragraphs">
                  <p>FAQ</p>
                </div>
              </Link>
              <Link href="/pricing">
                <div className="btn-nav paragraphs">
                  <p>Pricing</p>
                </div>
              </Link>
              <Link href="/feature">
                <div className="btn-nav2 gap-1 items-center justify-between flex shadow">
                  <p>Get the template</p>
                  <img className="size-[20px]" src="icon/gaze.png" alt="" />
                </div>
              </Link>
            </div>
          </div>
          <div className="menu-container md:hidden cursor-pointer ">
            <motion.div className="" onClick={() => setMobileNavOpen(true)}>
              <img
                className="md:w-[40px] w-[36px] "
                src="icon/burger.png"
                alt="open"
              />
            </motion.div>
          </div>
          <motion.div
            variants={mobileMenuVariant}
            className="mobile-menu md:hidden px-3 h-[100vh] md:px-[70px] p-4 bg-[#f2f1f1] "
          >
            <motion.button
              className="z-[50] "
              variants={fadeInVariant}
              onClick={() => setMobileNavOpen(false)}
            >
              <img className="size-[25px] " src="icon/close.png" alt="there" />
            </motion.button>
            <div className="">
              <div className="flex mt-3 md:flex-row flex-col gap-4 md:gap-6 justify-between ">
                <motion.ul
                  className="md:w-[50%] pt-6  text-center flex flex-col gap-3 "
                  variants={ulVariant}
                >
                  {MOBILE_NAV_ITEMS.map((navItem) => (
                    <motion.li
                      whileTap={{ scale: 0.95 }}
                      key={navItem.id}
                      variants={liVariant}
                    >
                      <motion.div
                        className=""
                        onClick={() => setMobileNavOpen(false)}
                      >
                        <Link href={`${navItem.link}`}>
                          <div className="btn-nav paragraphs cursor-pointer ">
                            <p>{navItem.navTitle}</p>
                          </div>
                        </Link>
                      </motion.div>
                    </motion.li>
                  ))}
                  <motion.div variants={liVariant}>
                    <div className="btn-nav2 items-center gap-1 justify-center flex shadow">
                      <p>Get the template</p>
                      <img className="size-[20px]" src="icon/gaze.png" alt="" />
                    </div>
                  </motion.div>
                </motion.ul>
              </div>
            </div>
          </motion.div>
        </motion.nav>
      </main>
    </div>
  );
};
export default Nav;
