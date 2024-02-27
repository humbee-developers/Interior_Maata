import React from "react";
import Image from "next/image";
import styles from "@/Components/AboutUs_ourDesign/aboutUs_ourDesign.module.css";
import Emphasis_logo from "@/Svgs/Emphasis_icon.svg";
import Variety_logo from "@/Svgs/Variety_icon.svg";
import Unity_logo from "@/Svgs/Unity_icon.svg";
import Functionality_logo from "@/Svgs/Functionality_icon.svg";
import Materiality_logo from "@/Svgs/Materiality_icon.svg";

function Seventh_Section() {
  return (
      <div className={styles.ourDesign_outer}>
        <div className={styles.seventh_Section_container}>
          <p className={styles.seventh_Section_content_text}>
            Our 
            design 
            Approach
          </p>
          <p className={styles.seventh_Section_content_text1}>
            We have an integrated process for
            <br />
            our products to ensure they reflect <br />
            our values, deliver on the targets,
            <br /> and meet our users' expectations.
          </p>
        </div>

        {/* table section */}
        <div className={styles.table_Section}>
          <div className={styles.table_content}>
            <Image
              className={styles.ourDesign_icons}
              src={Emphasis_logo}
              alt="image"
            />
            <div className={styles.table_section_content}>
              <p className={styles.table_Section_emphasis}>emphasis</p>
              <p className={styles.table_content_emphasis}>
                drawing attention to specific elements or areas to create visual
                interest and focal points.
              </p>
            </div>
          </div>
          <div className={styles.table_content}>
            <Image
              className={styles.ourDesign_icons}
              src={Variety_logo}
              alt="image"
            />
            <div className={styles.table_section_content}>
              <p className={styles.table_Section_emphasis}>Variety</p>
              <p className={styles.table_content_emphasis}>
                using different styles, colors, and textures for visual
                interest.
              </p>
            </div>
          </div>
          <div className={styles.table_content}>
            <Image
              className={styles.ourDesign_icons}
              src={Unity_logo}
              alt="image"
            />
            <div className={styles.table_section_content}>
              <p className={styles.table_Section_emphasis}>Unity</p>
              <p className={styles.table_content_emphasis}>
                work together—keeping a consistent theme or style for a cohesive
                and balanced look.
              </p>
            </div>
          </div>
          <div className={styles.table_content}>
            <Image
              className={styles.ourDesign_icons}
              src={Functionality_logo}
              alt="image"
            />
            <div className={styles.table_section_content}>
              <p className={styles.table_Section_emphasis}>Functionality</p>
              <p className={styles.table_content_emphasis}>
                efficient through smart layout and furniture choices.
              </p>
            </div>
          </div>
          <div className={styles.table_content}>
            <Image
              className={styles.ourDesign_icons}
              src={Materiality_logo}
              alt="image"
            />
            <div className={styles.table_section_content}>
              <p className={styles.table_Section_emphasis}>Materiality</p>
              <p className={styles.table_content_emphasis}>
                choosing and using materials—textures, finishes, and surfaces—to
                create a specific look and feel in a space.
              </p>
            </div>
          </div>
        </div>
      </div>
  );
}
export default Seventh_Section;
