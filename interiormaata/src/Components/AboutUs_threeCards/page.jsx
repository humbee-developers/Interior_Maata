import React from 'react'
import Image from 'next/image'
import AboutUs_Quality from "@/images/AboutUs_Quality_image.png" 
import AboutUs_Architectural from "@/images/AboutUs_Architectural _image.png"
import styles from "@/Components/AboutUs_threeCards/AboutUs_threeCards.module.css"
const page = () => {
  return (
    <div>
 <div className={styles.landing_page_second_container}>
            <div className={styles.landing_page_second_content}>
                <p className={styles.landing_page_second_content_text}>interiormaata: an estate agency with a conscience, selling beautiful homes across vadodara & beyond...</p>
            </div>
            <div className={styles.landing_page_second_images}>
                <div className={styles.Landing_image1}>
                    <Image src={AboutUs_Quality} alt="none" />
                    <div className={styles.overlay_text}>
                    <p className={styles.overlay_text_content}>Interior</p>
                    <p className={styles.overlay_text_content1}>Consultancy</p>
                    </div>
                </div>
                <div className={styles.Landing_image1}>
                    <Image src={AboutUs_Quality} alt="none" />
                    <div className={styles.overlay_text}>
                    <p className={styles.overlay_text_content}>BEST IN</p>
                    <p className={styles.overlay_text_content1}>CLASS QUALITY</p>
                    </div>
                </div>

                
                <div className={styles.Landing_image1}>
                    <Image src={AboutUs_Architectural} alt="none" />
                    <div className={styles.overlay_text}>
                    <p className={styles.overlay_text_content}>architectural</p>
                    <p className={styles.overlay_text_content1}>design</p>
                    </div>
                </div>


                {/* <div className="Landing_image2"></div>
                <div className="Landing_image3"></div> */}
                {/* <img src={Landing_image1}  alt="none"/> */}
                {/* <img src={Landing_image2}  alt="none"/> */}
                {/* <img src={Landing_image2}  alt="none"/> */}


            </div>
        </div>
    </div>
  )
}

export default page
