"use client"
import { React, useContext } from "react";
import Image from "next/image";
import Link from "next/link";
import facebook_logo from "@/Svgs/facebook.svg";
import Instagram_logo from "@/Svgs/instagram.svg";
import youtube_logo from "@/Svgs/youtube.svg";
import whatsapp_logo from "@/Svgs/whatsapp.svg";
import linkedin_logo from "@/Svgs/linkedin.svg";
import ScrollToTop from "react-scroll-to-top";
import styles from "@/Common/Footer/Footer.module.css";
import "./Scroll_To_Top.css";
const Footer = () => {
  return (
    <div>
      <div className={styles.Footer_Section}>
        <div className={styles.Footer_Content}>
          <div>
            <p className={styles.phone_no}>+917404040286</p>
            <p className={styles.footer_address}>
              Karamdham Complex
              <br /> Near Akota Atithi Gruh,
              <br /> Akota, Vadodara
            </p>
          </div>
          <div className={styles.footer_Second}>
            <ul className={styles.footerUl}>
              <li className={styles.footer_website}>website</li>
              <li className={styles.footer_home}>
                <Link href="">Home</Link>
              </li>
              <li className={styles.footer_Search}>
                <Link href="">Search</Link>
              </li>
            </ul>
            <ul className={styles.footerUl}>
              <li className={styles.footer_website}>others</li>
              <li className={styles.footer_home}>
                <Link href="">careers</Link>
              </li>
              <li className={styles.footer_Search}>
                <Link href="">contact</Link>
              </li>
            </ul>
            <ul className={styles.footerUl}>
              <li className={styles.footer_website}>Get Listed</li>
              <li className={styles.footer_home}>
                <Link href="">Blog</Link>
              </li>
              <li className={styles.footer_Search}>
                <Link href="">Know Us</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className={styles.footer_copyright}>
          <div>
            <p>
              Copyright &copy; 2023 Interiormaata, All Right Reserved. Designed
              & Developed by H/dS.
            </p>
          </div>
          {/* social media */}
          <div className={styles.footer_social_media}>
            <div className={styles.footer_Facebook}>
              <Image
                className={styles.footer_icons}
                src={facebook_logo}
                alt="none"
              />
              {/* <p to="https://www.youtube.com/">sasas</p> */}
            </div>
            <div className={styles.footer_insta}>
              <Image
                className={styles.footer_icons}
                src={Instagram_logo}
                alt="none"
              />
              {/* <p>sasas</p> */}
            </div>
            <div className={styles.footer_youtube}>
              {/* <p>sasas</p> */}
              <Image
                className={styles.footer_icons}
                src={whatsapp_logo}
                alt="none"
              />
            </div>
            <div className={styles.footer_whatsapp}>
              <Image
                className={styles.footer_icons}
                src={youtube_logo}
                alt="none"
              />
              {/* <p>sasas</p> */}
            </div>
            <div className={styles.footer_linkedin}>
              <Image
                className={styles.footer_icons}
                src={linkedin_logo}
                alt="none"
              />
              {/* <p>sasas</p> */}
            </div>
          </div>
        </div>

        <p className={styles.footer_last_Section}>interiormaata</p>
      </div>
      <div>
        <ScrollToTop smooth color="black"/>
      </div>
    </div>
  );
};
export default Footer;
