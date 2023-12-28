"use client"
import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Button from "@/Assets/Buttons/button";
import Image from "next/image";
import Cover_image from "@/images/AboutUs_Ananya_cover_image.png";
import styles from "@/Components/AboutUs_header/AboutUs_header.module.css";

const Page = () => {
  const text =
    "Ananya ( Known as interior maata ) is an Interior designer with 9 years of experience in Residential and Commercial projects from Kolkata, Mumbai, Gujarat, and Nepal. She is well known for her Youtube videos and holds a strong aesthetic for Minimal, Sustainable home dećor.";

  const sentence = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.01,
        staggerChildren: 0.008,
      },
    },
  };

  const letter = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView) {
      // Trigger animation when the component is in view
      // You can customize this part based on your animation logic
      // For example, you can set a state to trigger the animation
    }
  }, [inView]);

  
  return (
    <div>
      <div className={styles.aboutUsHeader_outer}>
        <div className={styles.aboutUsHeader} ref={ref}>
          <h1 className={styles.ananya}>ananya Bhattacharjee </h1>
          <div className={styles.aboutUs_flex_divider}>
            <div className={styles.aboutUs_banner_image_outer}>
              <Image
                src={Cover_image}
                alt="image"
                className={styles.aboutUs_banner_image}
              />
            </div>
            <motion.div
              className={styles.aboutUs_banner_text_outer}
              variants={sentence}
              initial="hidden"
              animate={inView ? "visible" : "hidden"} // Animate when in view
            >
              {text.split("").map((char, index) => (
                <motion.span
                  className={styles.aboutUs_banner_text}
                  key={char + "-" + index}
                  variants={letter}
                >
                  {char}
                </motion.span>
              ))}

              <div className={styles.aboutUs_buttonOuter}>
                <Button button_text="Read More" />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
