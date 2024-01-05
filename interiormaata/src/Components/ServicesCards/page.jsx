import React from "react";
import Image from "next/image";
import ServiceCard_img1 from "@/images/serviceCard_silver.png";
import ServiceCard_img2 from "@/images/serviceCard_gold.png";
import ServiceCard_img3 from "@/images/serviceCard_platinum.png";
import styles from "@/Components/ServicesCards/servicesCards.module.css"
const Services_Header = () => (
  <>
    <div className={styles.Services_Header_Container}>
      <div className={styles.Services_Header_Outer}>

        <div className={styles.Services_header_img_outer}>
          <div className={styles.Services_header_card}>
            <Image
              src={ServiceCard_img1}
              className={styles.Services_header_img}
            />
            <div className={styles.Services_header_overlay_text}>
              <p className={styles.service_silver_text}>silver</p>
              <p className={styles.service_Package_text}>Package</p>
            </div>
          </div>
          <div className={styles.Services_header_img1_description}>
            <div className={styles.Services_header_info}>
              <p className={styles.Services_header_info_text}>
                Full Interior Project keeping
                your Basic requirements in mind.

              </p>
            </div>
            <div className={styles.Services_header_info__range}>
              <p className={styles.Services_header_price_range}>
                starting from:
              </p>
              <p className={styles.Services_header_price}>₹1500/Sq.ft</p>
            </div>
            <div className={styles.Service_header_button_outer}>
              <button className={styles.Service_header_button}>Book Now</button>
            </div>
          </div>
        </div>
        <div className={styles.Services_header_img_outer}>
          <div className={styles.Services_header_card}>
            <Image
              src={ServiceCard_img2}
              className={styles.Services_header_img}
            />
            <div className={styles.Services_header_overlay_text}>
              <p className={styles.service_silver_text}>Gold</p>
              <p className={styles.service_Package_text}>Package</p>
            </div>
          </div>
          <div className={styles.Services_header_img1_description}>
            <div className={styles.Services_header_info}>
              <p className={styles.Services_header_info_text}>
                Full Interior Project's including
                soft furnishing and customised
                design for you.
              </p>
            </div>
            <div className={styles.Services_header_info__range}>
              <p className={styles.Services_header_price_range}>
                starting from:
              </p>
              <p className={styles.Services_header_price}>₹2200/Sq.ft</p>
            </div>
            <div className={styles.Service_header_button_outer}>
              <button className={styles.Service_header_button}>Book Now</button>
            </div>
          </div>
        </div>
        <div className={styles.Services_header_img_outer}>
          <div className={styles.Services_header_card}>
            <Image
              src={ServiceCard_img3}
              className={styles.Services_header_img}
            />
            <div className={styles.Services_header_overlay_text}>
              <p className={styles.service_silver_text}>Platinum</p>
              <p className={styles.service_Package_text}>Package</p>
            </div>
          </div>
          <div className={styles.Services_header_img1_description}>
            <div className={styles.Services_header_info}>
              <p className={styles.Services_header_info_text}>
                Fully customised projects keeping all the
                requirements in mind of a luxury lifestyle .
                Edit and reviewed by Ananya.
              </p>
            </div>
            <div className={styles.Services_header_info__range}>
              <p className={styles.Services_header_price_range}>
                starting from:
              </p>
              <p className={styles.Services_header_price}>₹1500/Sq.ft</p>
            </div>
            <div className={styles.Service_header_button_outer}>
              <button className={styles.Service_header_button}>Book Now</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
);

export default Services_Header;