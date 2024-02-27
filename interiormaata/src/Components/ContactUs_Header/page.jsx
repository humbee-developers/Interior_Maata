import React from "react";
import Image from "next/image";
import Contact_us_header_img from "@/images/contact_header.png";
import styles from "@/Components/ContactUs_Header/contact.module.css";
const Page = () => (
  <>
    <div className={styles.Contact_Us_outer}>
      <Image
        src={Contact_us_header_img}
        alt="none"
        className={styles.Contact_Us_img}
      />
      <div className={styles.Contact_us_overlay}>
        <p className={styles.Contact_us_overlay_text}>
          Transforming Spaces, Inspiring Lives
        </p>
      </div>
    </div>
  </>
);

export default Page;
