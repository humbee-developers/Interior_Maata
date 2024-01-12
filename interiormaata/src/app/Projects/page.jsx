"use client"
import React from 'react'
import Stairs from "@/Animations/Stairs"
import ProjectPage from "@/Components/ProjectPage/page"
const Page = () => {
  return (
    <div>
    <Stairs>
      <ProjectPage/>
    </Stairs>
    </div>
  )
}

export default Page