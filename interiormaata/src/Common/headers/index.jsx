"use client";
import "./style1.css";
import Link from "next/link";
import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { opacity } from "./anim";
import NavSection from "./nav/index";
import nav_logo from "@/Svgs/logo.svg";
// import logoImage from "../../images/PVOT-Design-Final-Logo-White.png";
export default function NewNav() {
  const [isActive, setIsActive] = useState(false);
  const [toggle, setToggle] = useState(false);
  const handleNavLink = () => {
    setIsActive(!isActive);
  };
  const handleToggle = () => {
    setToggle(!toggle);
  };
  if (toggle) {
    document.body.classList.add("mobile_menu_open");
  } else {
    document.body.classList.remove("mobile_menu_open");
  }
  return (
    <div className="headerMain">
      <div
        className={`nav_logo_outer`}
      >
        <Image
          src={nav_logo}
          alt="Description of the image"
          className="nav_logo"
        />
        <span className="interiormaata">interiormaata</span>
      </div>
      <div className={`header_sec ${isActive ? "menuOpen" : "menuClosed"}`}>
        <div className="bar">
          <div
            onClick={() => {
              setIsActive(!isActive);
              // handleToggle();
            }}
            className="new_header_el"
          >
            <div
              className={`${"burger"} ${isActive ? "burgerActive" : ""}`}
            ></div>
            {/* <div className="label">
              <motion.p
                className="menu_names menuOpenName"
                variants={opacity}
                animate={!isActive ? "open" : "closed"}
              >
                Menu
              </motion.p>
              <motion.p
                className="menu_names menuCloseName"
                variants={opacity}
                animate={isActive ? "open" : "closed"}
              >
                Close
              </motion.p>
            </div> */}
          </div>
        </div>
        <AnimatePresence mode="wait">
          {isActive && <NavSection navLinkHandler={handleNavLink} />}
        </AnimatePresence>
      </div>
    </div>
  );
}