// Card.jsx
'use client'
import React from "react";
import Image from 'next/image';
import cardImage1 from "@/images/Team_cardimage1.png";
import cardImage2 from "@/images/Team_cardimage2.png";
import cardImage3 from "@/images/Team_cardimage3.png";
import styles from "@/Components/TeamsPage/Card_stack.module.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

const Card = () => {
    React.useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        const cards = gsap.utils.toArray(".c-project");

        cards.forEach((card, index) => {
            gsap.to(card, {
                scrollTrigger: {
                    trigger: card,
                    start: "top bottom-=100",
                    end: "top top+=40",
                    scrub: true,
                },
                ease: "none",
                scale: () => 1 - (cards.length - index) * 0.025,
            });

            ScrollTrigger.create({
                trigger: card,
                start: "top top",
                pin: false,
                pinSpacing: false,
                end: "max",
            });
        });
    }, []);

    return (
        <div>
            <section id="projects" className={styles.cSection}>
                <div className={styles.cContainer}>
                    <div className={styles.cProjectsLayout}>
                        <div className={styles.cProjectsWrapper}>
                            <div className={`${styles.cProject} ${styles.cc1}`}>
                                <Image
                                    src={cardImage1}
                                    alt=""
                                    className={styles.cImageContain}
                                />
                            </div>
                            <div className={`${styles.cProject} ${styles.cc2}`}>
                                <Image
                                    src={cardImage2}
                                    alt=""
                                    className={styles.cImageContain}
                                />
                            </div>
                            <div className={`${styles.cProject} ${styles.cc3}`}>
                                <Image
                                    src={cardImage3}
                                    alt=""
                                    className={styles.cImageContain}
                                />
                            </div>
                            <div className={`${styles.cProject} ${styles.cc3}`}>
                                <Image
                                    src={cardImage2}
                                    alt=""
                                    className={styles.cImageContain}
                                />
                            </div>
                            <div className={`${styles.cProject} ${styles.cc3}`}>
                                <Image
                                    src={cardImage1}
                                    alt=""
                                    className={styles.cImageContain}
                                />
                            </div>
                            <div className={`${styles.cProject} ${styles.cc3}`}>
                                <Image
                                    src={cardImage3}
                                    alt=""
                                    className={styles.cImageContain}
                                />
                            </div>

                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Card;
