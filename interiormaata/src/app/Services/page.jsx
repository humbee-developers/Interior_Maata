"use client";
import React, { useEffect } from "react";
import Stairs from "@/Animations/Stairs"
import ServicesCards from "@/Components/ServicesCards/page";
import ServicesFlex from "@/Components/ServicesFlex/page";
const Page = () => {
  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      const locomotiveScroll = new LocomotiveScroll();
    })();
  }, []);
  
  return (
    <div>

    <Stairs>
      <ServicesCards />
      <ServicesFlex />
      </Stairs>
    </div>
  );
};

export default Page;
