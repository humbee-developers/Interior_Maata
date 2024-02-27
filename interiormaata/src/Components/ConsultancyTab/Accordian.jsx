
import React, { useState } from 'react';
import styles from "@/Components/ConsultancyTab/Accordian.module.css"


const CustomizedAccordions = () => {
    const [expanded, setExpanded] = useState(null);

    const toggleAccordion = (panel) => {
        setExpanded((prev) => (prev === panel ? null : panel));
    };

    const accordionData = [
        {
            id: 'panel1',
            heading: '15 Rs / Sqft',
            title: '2D Furniture Layout',
            text: 'Our team of excellent designers will help you build a design concept + furniture layout according to your need.',
            bgcolor: "#CC7D45", textcolor: "white",
        },
        {
            id: 'panel2',
            heading: '15 Rs / Sqft',
            title: '2D Furniture Layout',
            text: 'Our team of excellent designers will help you build a design concept + furniture layout according to your need.',
            bgcolor: "#7F7047", textcolor: "white",
        },
        {
            id: 'panel3',
            heading: '15 Rs / Sqft',
            title: '2D Furniture Layout',
            text: 'Our team of excellent designers will help you build a design concept + furniture layout according to your need.',
            bgcolor: "#FFF", textcolor: "black",
        },
    ];

    return (
        <div className={styles.customAccordion} >
            {accordionData.map(({ id, heading, title, text, bgcolor, textcolor }) => (
                <div key={id}>
                    <div
                        className={styles.customAccordionSummary}
                        role="button"
                        tabIndex={0}
                        onClick={() => toggleAccordion(id)}
                        onKeyDown={() => toggleAccordion(id)}
                        style={{ backgroundColor: bgcolor, color: textcolor }}
                    >
                        {heading}
                    </div>
                    <div className={`${styles.customAccordionDetails} ${expanded === id ? styles.open : ''}`}>
                        <div style={{ color: bgcolor }} className={styles.accordian_title}>{title}</div>
                        <div className={styles.accordian_text}>{text}</div>
                        <div style={{ color: bgcolor, borderColor: bgcolor }} className={styles.accordian_btn}>{'Exclusive GST'}</div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default CustomizedAccordions;