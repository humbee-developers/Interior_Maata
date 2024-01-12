"use client"
import React from 'react'
import Stairs from "@/Animations/Stairs"
import HowWeWorkHeader from "@/Components/HowWeWorkHeader/page"
import HowWeWorkTimeline from "@/Components/HowWeWorkTimeline/page"
import HowWeWorkText from "@/Components/HowWeWorkText/page"
const Page = () => {
  return (
    <div>
      <Stairs>
       
          <HowWeWorkHeader/>
          <HowWeWorkTimeline/>
          <HowWeWorkText/>
      </Stairs>
    </div>
  )
}

export default Page