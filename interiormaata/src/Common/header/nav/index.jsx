'use client';
import styles from './style4.module.css';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { height } from '../anim';
import Body from './Body';
import Footer from './Footer';
import Image from './Image';

const links = [
  {
    title: "HOME",
    href: "/Home",
    src: "home.png"
  },
  {
    title: "About Us",
    href: "/AboutUs",
    src: "shop.png"
  },
  {
    title: "Online Consultancy",
    href: "/Consultancy",
    src: "home.png"
  },
  {
    title: "PROJECTS",
    href: "/Projects",
    src: "lookbook.png"
  },
  {
    title: "TEAM",
    href: "/Team",
    src: "contact.png"
  },
  {
    title: "HOW WE WORK",
    href: "/HowWeWork",
    src: "contact.png"
  },
  {
    title: "SERVICES",
    href: "/Services",
    src: "contact.png"
  },
  {
    title: "CONTACT",
    href: "/ContactUs",
    src: "contact.png"
  }

]

export default function Index() {

  const [selectedLink, setSelectedLink] = useState({isActive: false, index: 0});

  return (
    <motion.div variants={height} initial="initial" animate="enter" exit="exit" className={styles.nav}>
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <Body links={links} selectedLink={selectedLink} setSelectedLink={setSelectedLink}/>
          <Footer />
        </div>
        <Image src={links[selectedLink.index].src} isActive={selectedLink.isActive}/>
      </div>
    </motion.div>
  )
}