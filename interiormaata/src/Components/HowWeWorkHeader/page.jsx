import React from "react";
import styles from "@/Components/HowWeWorkHeader/howWeWork.module.css"
const Work = () => {
  return (
    <div className={styles.work_container}>
      <div className={styles.work_title}>
        <p className={styles.work_text}>WE CAN MAKE YOUR DREAM COME TRUE</p>
      </div>
      <div className={styles.work_title1}>
        <p className={styles.work_text1}>
          Ananya said, " Every project is like a baby, you take care of them
          with lots of love and care, pamper them till it's big enough to move
          into a new family with proper manners and culture ". We stand for
          sustainable design and apply design thinking on it, which means each
          project is unique and customized according to your requirements. Here
          have a look at how it goes.
        </p>
      </div>
    </div>
  );
};
export default Work;