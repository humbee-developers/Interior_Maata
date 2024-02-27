import React, { useState } from "react";
import styles from "@/Components/AboutUs_Carousel2/AboutUS_Carousel2.module.css";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import img7 from "@/images/flow.png"; // Make sure this import is correct
import PrevArrow from "@/Components/AboutUs_Carousel2/Arrows/PrevArrow";
import NextArrow from "@/Components/AboutUs_Carousel2/Arrows/NextArrow";
import "@/Components/AboutUs_Carousel2/Inbuilt.css";

const imagesData = [
  {
    id: 1,
    src: img7,
    alt: "Description for image 1",
  },
  {
    id: 2,
    src: img7,
    alt: "Description for image 2",
  },
  {
    id: 3,
    src: img7,
    alt: "Description for image 3",
  },
  {
    id: 4,
    src: img7,
    alt: "Description for image 4",
  },
  {
    id: 5,
    src: img7,
    alt: "Description for image 5",
  },
];

const Page = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  var settings = {
    dots: false,
    centerMode: true,
    centerPadding: "0px",
    arrows: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    beforeChange: (oldIndex, newIndex) => {
      setCurrentSlide(newIndex);
    },

    responsive: [
      {
        breakpoint: 1025,
        settings: {
          // arrows: false,
        },
      },

      {
        breakpoint: 768,
        settings: {
          arrows: false,
          dots: true,
        },
      },
      {
        breakpoint: 476,
        settings: {
          arrows: false,
          dots: true,
        },
      },
    ],
  };

  const totalImages = imagesData.length;

  return (
    <div className={styles.main_carousel}>
      <div className={styles.wrapper}>
        <Slider {...settings}>
          {imagesData.map((image, index) => (
            <div key={image.id} className={styles.slide}>
              <div className={styles.slideContent}>
                <Image src={image.src} alt={image.alt} />
              </div>
            </div>
          ))}
        </Slider>
      </div>

      <div className={styles.imageNumbering}>
        <div className={styles.number}>
          <span>0{currentSlide + 1}</span>/0{totalImages}
        </div>
      </div>
    </div>
  );
};

export default Page;
