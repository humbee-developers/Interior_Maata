"use client";
import React, { useEffect } from "react";
import ConsultancyHeader from "@/Components/ConsultancyHeader/page";
import ConsultancyTextFlex from "@/Components/ConsultancyTextFlex/page";
import ConsultancyTab  from "@/Components/ConsultancyTab/page";
const Page = () => {
  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      const locomotiveScroll = new LocomotiveScroll();
    })();
  }, []);

  return (
    <div>
      <ConsultancyHeader />
      <ConsultancyTextFlex />
      <ConsultancyTab/>
    </div>
  );
};

export default Page;
