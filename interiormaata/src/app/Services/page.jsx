"use client";
import React, { useEffect } from "react";
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
      <ServicesCards />
      <ServicesFlex />
    </div>
  );
};

export default Page;
