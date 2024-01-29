"use client";
import { React, useEffect } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import timeline_img1 from "@/images/we_meet_img.png";
import timeline_img2 from "@/images/design_thinking_img.png";
import timeline_img3 from "@/images/meet_Again_img.png";
import timeline_img4 from "@/images/execution_img.png";
import timeline_img5 from "@/images/final_Reveal_img.png";
// import border_line from "@/svgs/border.svg";
// import border_line2 from "@/svgs/responsive_line.svg";
import styles from "@/Components/HowWeWorkTimeline/howWeWorkTimeline.module.css";
// import { gsap, Power3, Expo } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);

const Timeline = () => {
  // const animateBorder = () => {
  //   gsap.fromTo(
  //     ".border_top",
  //     { scaleX: 0 },
  //     {
  //       scaleX: 1,
  //       background: "red",
  //       duration: 2,
  //       transformOrigin: "left center",
  //       ease: "power2.inOut",
  //       repeat: -1,
  //       yoyo: true,
  //       scrollTrigger: {
  //         trigger: ".border_top",
  //         start: "50%",
  //         end: "30%",
  //         // end: "bottom 60%",
  //         toggleActions: "play none none reverse",
  //         // end: "bottom center",
  //         scrub: 1,
  //         markers: true,
  //       },
  //     }
  //   );
  // };

  // useEffect(() => {
  //   animateBorder();
  // }, []);

  return (
    <div className={styles.timeline_container}>
      <div className={styles.timeline_Section}>
        <div className={styles.timeline_content1}>
          <div className={styles.timeline_img_section}>
            <Image
              src={timeline_img1}
              alt="none"
              className={styles.timeline1_image}
            />
          </div>
          <div className={styles.timeline1_content}>
            <div>
              <p className={styles.timline1_meet_text}>WE MEET</p>
            </div>
            <div className={styles.timeline1_innertext}>
              <p className={styles.timline1_meet_text_inner}>
                We meet for your project , this is fun because we care about
                your choice and use this meeting to know you better
              </p>
            </div>
          </div>
        </div>
        <div className={styles.border_line_content}>
          <div className={styles.border_top}>
            {/* <motion.div
      className={styles.border_top}
      initial={{ pathLength: 0, opacity: 0 }}
      animate={{ pathLength: 1, opacity: 1 }}
      transition={{ duration: 2, ease: 'easeInOut' }}
    /> */}
          </div>
          <div className={styles.border_top_max}>
            {/* <Image src={border_line2} alt="none" className={styles.border_max}  /> */}
          </div>
        </div>

        <div className={styles.timeline_content2}>
          <div className={styles.timeline_img_section}>
            <Image
              src={timeline_img2}
              alt="none"
              className={styles.timeline1_image}
            />
          </div>
          <div className={styles.timeline1_content}>
            <div>
              <p className={styles.timline1_meet_text}>
                DESIGN
                <br /> THINKING
              </p>
            </div>
            <div className={styles.timeline1_innertext2}>
              <p className={styles.timline1_meet_text_inner2}>
                We use design thinking to plan your project , our sharp and
                dedicated designer create a customised design only complimenting
                your choice.
              </p>
            </div>
          </div>
        </div>
        <div className={styles.border_line_content}>
          <div className={styles.border_top1}></div>

          <div className={styles.border_top_max}>
            {/* <Image src={border_line2} alt="none" className={styles.border_max}  /> */}
          </div>
          {/* <Image src={border_line2} alt="none" className={styles.linesvg} /> */}
        </div>

        <div className={styles.timeline_content1}>
          <div className={styles.timeline_img_section}>
            <Image
              src={timeline_img3}
              alt="none"
              className={styles.timeline1_image}
            />
          </div>
          <div className={styles.timeline1_content1}>
            <div className={styles.timline1_meet_text_content}>
              <p className={styles.timline1_meet_text}>
                ME MEET AGAIN , NOW WE HAVE THE DESIGN AND QUOTATION
              </p>
            </div>
            <div className={styles.timeline1_innertext_design}>
              <p className={styles.timline1_meet_text_inner}>
                In this meeting we have the design and quotation , we give you
                options and with your permission we put a final design for you
                and start working .
              </p>
            </div>
          </div>
        </div>
        <div className={styles.border_line_content}>
          <div className={styles.border_top}></div>
          <div className={styles.border_top_max}>
            {/* <Image src={border_line2} alt="none" className={styles.border_max} /> */}
          </div>
          {/* <Image src={border_line} alt="none" className={styles.linesvg} /> */}
        </div>

        <div className={styles.timeline_content2}>
          <div className={styles.timeline_img_section}>
            <Image
              src={timeline_img4}
              alt="none"
              className={styles.timeline1_image}
            />
          </div>
          <div className={styles.timeline1_content}>
            <div>
              <p className={styles.timline1_meet_text}>
                THE
                <br /> EXECUTION
              </p>
            </div>
            <div className={styles.timeline1_innertext4}>
              <p className={styles.timline1_meet_text_inner2}>
                Our team of excellent workers moves in and start building your
                project . Meanwhile , you relax and plan for the house warming
                party
              </p>
            </div>
          </div>
        </div>
        <div className={styles.border_line_content}>
          <div className={styles.border_top1}></div>
          <div className={styles.border_top_max}>
            {/* <Image src={border_line2} alt="none" className={styles.border_max} /> */}
          </div>
          {/* <Image src={border_line2} alt="none" className={styles.linesvg} /> */}
        </div>

        <div className={styles.timeline_content1}>
          <div className={styles.timeline_img_section}>
            <Image
              src={timeline_img5}
              alt="none"
              className={styles.timeline1_image}
            />
          </div>
          <div className={styles.timeline1_content}>
            <div>
              <p className={styles.timline1_meet_text}>
                THE FINAL <br /> REVEAL
              </p>
            </div>
            <div className={styles.timeline1_innertext5}>
              <p className={styles.timline1_meet_text_inner}>
                This the most exciting part , you get to see the your dream home
                in reality . All those sleepless nights dreaming about your home
                , this is where your new journey starts.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Timeline;
