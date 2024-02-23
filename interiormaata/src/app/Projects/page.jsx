"use client"
import React from 'react'
import Stairs from "@/Animations/Stairs"
import ProjectPage from "@/Components/ProjectPage/page"
import Project_Flex from "@/Components/Projects_Flex/page"
const Page = () => {
  return (
    <div>
    <Stairs>
      <ProjectPage/>
      <Project_Flex />  
    </Stairs>
    </div>
  )
}

export default Page