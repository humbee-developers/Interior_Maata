
"use client"
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';
import { EffectFade, Navigation } from 'swiper/modules';
import Image from 'next/image';
import AboutUs_carousal_image from "@/images/AboutUs_carousal_image1.png"
import styles from "@/Components/AboutUs_Carousal/AboutUs_Carousal.module.css"
export default function App() {
    return (
        <>
            <Swiper navigation={true}  modules={[Navigation,EffectFade]}  effect={'fade'} className={styles.mySwiper}>
                <SwiperSlide>
                    <div className={StyleSheet.third_section_content}>
                        <Image src={AboutUs_carousal_image} alt="carousal_image" className={styles.third_section_image} />       
                        <div className={styles.third_section_overlay}>
                            <p className={styles.third_section_overlay_text}>"Designing spaces, sparking joy:<span className={styles.third_section_overlay_span}>where elegance meets functionality effortlessly."</span>
                            </p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={StyleSheet.third_section_content}>
                        <Image src={AboutUs_carousal_image} alt="carousal_image" className={styles.third_section_image} />       
                        <div className={styles.third_section_overlay}>
                            <p className={styles.third_section_overlay_text}>"Designing spaces, sparking joy:<span className={styles.third_section_overlay_span}>where elegance meets functionality effortlessly."</span>
                            </p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={StyleSheet.third_section_content}>
                        <Image src={AboutUs_carousal_image} alt="carousal_image" className={styles.third_section_image} />       
                        <div className={styles.third_section_overlay}>
                            <p className={styles.third_section_overlay_text}>"Designing spaces, sparking joy:<span className={styles.third_section_overlay_span}>where elegance meets functionality effortlessly."</span>
                            </p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={StyleSheet.third_section_content}>
                        <Image src={AboutUs_carousal_image} alt="carousal_image" className={styles.third_section_image} />       
                        <div className={styles.third_section_overlay}>
                            <p className={styles.third_section_overlay_text}>"Designing spaces, sparking joy:<span className={styles.third_section_overlay_span}>where elegance meets functionality effortlessly."</span>
                            </p>
                        </div>
                    </div>
                </SwiperSlide>


            </Swiper>
        </>
    );
}
