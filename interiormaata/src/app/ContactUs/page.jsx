"use client"
import React from 'react'
import Stairs from "@/Animations/Stairs"
import ContactUsHeader from "@/Components/ContactUs_Header/page"
import ContactUsImage from "@/Components/ContactUs_Image/page"
const Page = () => {
  return (
    <div>
      <Stairs>
        <ContactUsHeader />
        <ContactUsImage />
      </Stairs>
    </div>
  )
}

export default Page