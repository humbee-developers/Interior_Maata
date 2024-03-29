import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import third_Section_image1 from "@/images/AboutUs_flex_image1.png";
import third_Section_image2 from "@/images/AboutUs_flex_image2.png";
import Button from "@/Assets/Buttons/Button2";
import Button3 from "@/Assets/Buttons/Button3";
import styles from "@/Components/AboutUs_flex/AboutUsFlex.module.css";
const Page = () => {
  const [ref1, inView1] = useInView({
    triggerOnce: true, // Only trigger once
  });

  const [ref2, inView2] = useInView({
    triggerOnce: true, // Only trigger once
  });
  return (
    <div>
      <div className={styles.forth_Section_container} ref={ref1}>
        <div className={styles.forth_Section_content}>
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            animate={inView1 ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.2, delay: 0.2 }}
            className={styles.forth_section_first}
          >
            Design
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 50 }}
            animate={inView1 ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.3, delay: 0.3 }}
            className={styles.forth_Section_execution}
          >
            Execution
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 50 }}
            animate={inView1 ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.4, delay: 0.4 }}
            className={styles.forth_section_third}
          >
            Design and Execution by
            <br />
            Interior Maata Team
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={inView1 ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.6 }}
            className={styles.forth_content_button}
          >
            <Button button_text="Read More" />
          </motion.div>
        </div>
        <div className={styles.forth_Section_image}>
          <Image
            src={third_Section_image1}
            alt="Description of the image"
            className={styles.forth_Section_img}
          />
        </div>
      </div>

      <div className={styles.forth_Section_container1} ref={ref2}>
        <div className={styles.forth_Section_image}>
          <Image
            src={third_Section_image2}
            alt="Description of the image"
            className={styles.forth_Section_img}
          />
        </div>
        <div className={styles.forth_Section_content1}>
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            animate={inView2 ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className={styles.forth_section_first}
          >
            Design
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 50 }}
            animate={inView2 ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className={styles.forth_Section_execution}
          >
            Consultancy
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 50 }}
            animate={inView2 ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className={styles.forth_section_third}
          >
            Design and Execution by
            <br />
            Interior Maata Team
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={inView2 ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
            className={styles.forth_content_button}
          >
            <Button3 button_text="Read More" />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Page;
