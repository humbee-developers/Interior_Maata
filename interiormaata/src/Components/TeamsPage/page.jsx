'use client'
import React from 'react'
import Image from 'next/image';
import img1 from "@/Svgs/Team_image1.svg"
import img3 from "@/Svgs/Team_image2.svg"
import img4 from "@/Svgs/Team_image3.svg"
import img2 from "@/Svgs/Team_image4.svg"
import img5 from "@/Svgs/Team_image5.svg"
import img7 from "@/images/Team_image7.png"
import Marquee from "react-marquee-slider";
import styles from "@/Components/TeamsPage/teamsPage.module.css"
// import Card from '@/Components/TeamsPage/Card_stack'
import "./imx.css"
const TeamPage = () => {
    const photos = [img1, img2, img3, img4, img5];
    return (
        <>
            <div className={styles.TeamPage_Section}>
                <div className={styles.Header}>
                    <div className={styles.teamPage_content1}>Meet the Minds Behind the Magic</div>
                    <div className={styles.teamPage_content2}>Our Team, Your Success.</div>
                </div>
                <div className={styles.marquee_section} >
                    <Marquee>
                        {photos.map((photo, index) => (
                            <div key={`marquee-image-${index}`} className={styles.marquee_imageSection}>
                                <Image src={photo} alt={`image`} />
                            </div>
                        ))}
                    </Marquee>
                </div>
                <div className={styles.teamPage_content3}>
                    <div className={styles.teamPage_content3_Text}>United by Passion, Driven by Excellence: Get to Know the Faces Behind Our Success.</div>
                </div>
                <div className={styles.teamPage_content4}>
                    <div className={styles.teamPage_content4_Text}>
                        <div>
                            <p>And When It Stops, It’s Not Over - It’s In You Now, In Your Head, Your Heart, And Spirit.</p>
                            <p>You Have To Tell Someone, Right Now, ‘you Must See This’. You Share It, And They Get It. They’re In It With You, And It’s In Them Too.</p>
                            <p>You Shared The Wonder.</p>
                            <p>You Know The Feeling?</p>
                            <p>That’s What We’re After, Every Time We Make A Film.</p>
                        </div>
                    </div>
                </div>
                <div className={styles.card_stack_section}>
                    {/* <Image src={img6} alt={"img"} /> */}
                    {/* <Card /> */}

                </div>
                <div className={styles.teamPage_content3}>
                    <div className={styles.teamPage_content3_Text}>WE BELIEVE WONDERFUL WORK COMES FROM CREATIVE GENEROSITY.</div>
                </div>
                <div className={styles.teamPage_content4}>
                    <div className={styles.teamPage_content4_Text}>
                        <div>
                            <p>Step into the world of interiormaata, where design meets imagination. Our dedicated team of
                                architects and designers is driven by a shared commitment to elevate your spaces to new heights of
                                sophistication. With a blend of creativity and technical expertise, we turn dreams into reality. </p>
                            <p>Each team member brings a unique perspective, contributing to a harmonious fusion of style and functionality.
                                We believe in collaborative synergy, ensuring that every project reflects our client's vision. Meet the passionate
                                individuals who breathe life into spaces, as interiormaata continues to redefine the art of interior design with innovation,
                                precision, and a touch of elegance.</p>
                        </div>
                    </div>
                </div>
                <div className={styles.image_content5}>
                    <Image src={img7} alt={"img"} />
                </div>
            </div>
        </>
    )
}
export default TeamPage