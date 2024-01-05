import styles from "@/Components/AboutUsInfo/AboutUsInfo.module.css"
import Project from "@/Components/AboutUsInfo/index"

export default function Home() {

  const projects = [
    {
      title1: "Crafting dreamy Interiors",
      title2: "",
      // src: "AboutUs_hoverImage1.png"
      src: "mambo_mambo.jpeg"
    },
    {
      title1: "that speak volumes,",
      title2: "merging style",
      // src: "AboutUs_hoverImage2.png"
      src: "jomor_design.jpeg"
    },
    {
      title1: "",
      title2: "with soul to redefine your",
      // src: "AboutUs_hoverImage3.png"
      src: "la_grange.jpeg"
    },
    {
      title1: "living experience.",
      title2: "Elevate your",
      // src: "AboutUs_hoverImage4.png"
      src: "deux_huit_huit.jpeg"
    },
    {
      title1: "",
      title2: "space with us!",
      // src: "AboutUs_hoverImage5.png"
      src: "nothing_design_studio.png"
    }
  ]

  return (
    <main className={styles.main}>
      <div className={styles.gallery}>
        {/* <p>Featured Work</p> */}
          {
            projects.map( project => {
              return <Project project={project}/>
            })
          }
      </div>
    </main>
  )
}
