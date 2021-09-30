import React, { useEffect } from "react"
import Layout from "../components/Layout"
import Slider from "../components/AboutUsSlider"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { graphql } from "gatsby"
import Aos from "aos"
import * as AboutStyles from "./aboutUs.module.css"

export default ({ data }) => {
  useEffect(() => {
    Aos.init()
  }, [])
  return (
    <Layout>
      <div className={AboutStyles.container}>
        <h1 className={AboutStyles.heading}>
          Let's tell the <span>stories</span> that matter
        </h1>
        <div className={AboutStyles.imgContainer}>
          <div data-aos="flip-left" data-aos-duration="3000">
            <GatsbyImage image={getImage(data.aboutus1)} alt="Haris" />
          </div>
          <div
            className={AboutStyles.imgcomp}
            data-aos="flip-left"
            data-aos-duration="3000"
          >
            <GatsbyImage image={getImage(data.aboutus2)} alt="Haris" />
          </div>
          <div data-aos="flip-left" data-aos-duration="3000">
            <GatsbyImage image={getImage(data.aboutus3)} alt="Haris" />
          </div>
        </div>
        <div className={AboutStyles.contentContainer2}>
          <h1 className={AboutStyles.heading2}>
            Building a brand new category
          </h1>
          <div className={AboutStyles.para}>
            <p>
              We do much more than simply deliver technology or provide managed
              services. At iPlex, we offer clients the unique skill we’ve gained
              from our one-of-a-kind experience with our partners and clients
            </p>
            <p>
              Our solutions come from a process of perception, leading edge, and
              profound knowledge of various technologies.
            </p>
          </div>
        </div>
        <div className={AboutStyles.contentContainer3}>
          <div data-aos="flip-left" data-aos-duration="3000">
            <GatsbyImage image={getImage(data.aboutus4)} alt="Haris" />
          </div>
          <div className={AboutStyles.textholder}>
            <h1>About Us</h1>
            <p>
              Since our inception in 2009, we are growing into an organization
              that rivals any modern day software company.
            </p>
            <p>
              Our credo is to keep our communication with clients at an
              exceptional level, increasing our productivity and fulfilling the
              needs of our clients.
            </p>
          </div>
        </div>
        <h1 className={AboutStyles.techHeading}>
          Technologies we <br />
          <span>work </span> with
        </h1>
        <Slider aos="flip-right" aos_offset="200" aos_duration="1000" />
      </div>
    </Layout>
  )
}

export const pageQuery = graphql`
  {
    aboutus1: file(relativePath: { eq: "aboutimg1.png" }) {
      id
      childImageSharp {
        gatsbyImageData(
          width: 420
          transformOptions: { fit: COVER }
          blurredOptions: { width: 300 }
          placeholder: BLURRED
          height: 460
        )
      }
    }
    aboutus2: file(relativePath: { eq: "aboutimg2.png" }) {
      id
      childImageSharp {
        gatsbyImageData(
          width: 420
          transformOptions: { fit: COVER }
          blurredOptions: { width: 300 }
          placeholder: BLURRED
          height: 460
        )
      }
    }
    aboutus3: file(relativePath: { eq: "aboutimg3.png" }) {
      id
      childImageSharp {
        gatsbyImageData(
          width: 420
          transformOptions: { fit: COVER }
          blurredOptions: { width: 300 }
          placeholder: BLURRED
          height: 460
        )
      }
    }
    aboutus4: file(relativePath: { eq: "aboutimg4.png" }) {
      id
      childImageSharp {
        gatsbyImageData(
          width: 550
          transformOptions: { fit: COVER }
          blurredOptions: { width: 300 }
          placeholder: BLURRED
          height: 590
        )
      }
    }
  }
`
