import React, { useEffect } from "react"
import Layout from "../components/Layout"
import * as meetTeam from "./meetOurTeam.module.css"
import Aos from "aos"
import { graphql, Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

export default ({ data }) => {
  useEffect(() => {
    Aos.init()
  }, [])
  return (
    <Layout>
      <div className={meetTeam.container}>
        <h1 className={meetTeam.heading}>
          The Creative <span>Crew</span> <br />
          Behind iPlex
        </h1>
        <div className={meetTeam.cardHolder}>
          <div
            className={meetTeam.card}
            data-aos="zoom-in"
            data-aos-duration="3000"
          >
            <GatsbyImage
              className={meetTeam.image}
              image={getImage(data.haris)}
              alt="Haris"
            />
            <h2>Haris Siddiqui</h2>
            <p>Creative Department</p>
          </div>
          <div
            className={meetTeam.card}
            data-aos="zoom-in"
            data-aos-duration="3000"
          >
            <GatsbyImage image={getImage(data.shahid)} alt="Haris" />
            <h2>Shahid Maqsood</h2>
            <p>Senior WordPress Developer</p>
          </div>
          <div
            className={meetTeam.card}
            data-aos="zoom-in"
            data-aos-duration="3000"
          >
            <GatsbyImage image={getImage(data.aneem)} alt="Haris" />
            <h2>Aneem Khalid</h2>
            <p>Senior Frontend Developer</p>
          </div>
          <div
            className={meetTeam.card}
            data-aos="zoom-in"
            data-aos-duration="3000"
          >
            <GatsbyImage image={getImage(data.kamran)} alt="Haris" />
            <h2>Kamran Arshad</h2>
            <p>Head of Frontend</p>
          </div>
          <div
            className={meetTeam.card}
            data-aos="zoom-in"
            data-aos-duration="3000"
          >
            <GatsbyImage image={getImage(data.saqib)} alt="Haris" />
            <h2>Saqib</h2>
            <p>Senior Backend Developer</p>
          </div>
          <div
            className={meetTeam.card}
            data-aos="zoom-in"
            data-aos-duration="3000"
          >
            <GatsbyImage image={getImage(data.maira)} alt="Haris" />
            <h2>Maria kanwal</h2>
            <p>HR Team</p>
          </div>
          <div
            className={meetTeam.card}
            data-aos="zoom-in"
            data-aos-duration="3000"
          >
            <GatsbyImage image={getImage(data.osman)} alt="Haris" />
            <h2>Osman Mirza</h2>
            <p>Head of HR and Admin</p>
          </div>
          <div
            className={meetTeam.card}
            data-aos="zoom-in"
            data-aos-duration="3000"
          >
            <GatsbyImage image={getImage(data.osama)} alt="Haris" />
            <h2>Osama Mohad</h2>
            <p>Head of Sales</p>
          </div>
        </div>
        <div className={meetTeam.lowercontent}>
          {/* <div styles={{maxWidth:'1407px'}}> */}
          <h1>
            Want to know immediately where your <span>opportunities</span> lie?
          </h1>
          <p>
            In the intake we tell you all the ins and outs of our approach,
            opportunities for your brand and success stories from previous
            projects. Everyone is welcome. Step inside. It can just change your
            life.
          </p>
          <Link className={meetTeam.linkitem} to="/contactUs">
            Get in touch
          </Link>
        </div>
        {/* </div> */}
      </div>
    </Layout>
  )
}

export const pageQuery = graphql`
  {
    haris: file(relativePath: { eq: "haris.jpg" }) {
      id
      childImageSharp {
        gatsbyImageData(
          width: 330
          transformOptions: { fit: COVER }
          blurredOptions: { width: 300 }
          placeholder: BLURRED
          height: 360
        )
      }
    }
    aneem: file(relativePath: { eq: "aneem.jpg" }) {
      id
      childImageSharp {
        gatsbyImageData(
          width: 330
          transformOptions: { fit: COVER }
          blurredOptions: { width: 300 }
          placeholder: BLURRED
          height: 360
        )
      }
    }
    kamran: file(relativePath: { eq: "kamran.jpg" }) {
      id
      childImageSharp {
        gatsbyImageData(
          width: 330
          transformOptions: { fit: COVER }
          blurredOptions: { width: 300 }
          placeholder: BLURRED
          height: 360
        )
      }
    }
    maira: file(relativePath: { eq: "maira.jpg" }) {
      id
      childImageSharp {
        gatsbyImageData(
          width: 330
          transformOptions: { fit: COVER }
          blurredOptions: { width: 300 }
          placeholder: BLURRED
          height: 360
        )
      }
    }
    osman: file(relativePath: { eq: "osman.jpg" }) {
      id
      childImageSharp {
        gatsbyImageData(
          width: 330
          transformOptions: { fit: COVER }
          blurredOptions: { width: 300 }
          placeholder: BLURRED
          height: 360
        )
      }
    }
    saqib: file(relativePath: { eq: "saqib.jpg" }) {
      id
      childImageSharp {
        gatsbyImageData(
          width: 330
          transformOptions: { fit: COVER }
          blurredOptions: { width: 300 }
          placeholder: BLURRED
          height: 360
        )
      }
    }
    shahid: file(relativePath: { eq: "shahid.jpg" }) {
      id
      childImageSharp {
        gatsbyImageData(
          width: 330
          transformOptions: { fit: COVER }
          blurredOptions: { width: 300 }
          placeholder: BLURRED
          height: 360
        )
      }
    }
    osama: file(relativePath: { eq: "osama.jpg" }) {
      id
      childImageSharp {
        gatsbyImageData(
          width: 330
          transformOptions: { fit: COVER }
          blurredOptions: { width: 300 }
          placeholder: BLURRED
          height: 360
        )
      }
    }
  }
`
