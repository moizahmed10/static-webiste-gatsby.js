import React from "react"
import { Link } from "gatsby"
import Layout from "../components/Layout"
import * as homeStyles from "./index.module.css"
import Slider from "../components/Slider"
import Aos from "aos"
import "aos/dist/aos.css"
import { useEffect } from "react"
import { AnchorLink } from "gatsby-plugin-anchor-links"

export default function Home() {
  useEffect(() => {
    Aos.init()
  }, [])
  return (
    <Layout isHome={true}>
      <div>
        <div className={homeStyles.backgroundContainer}>
          <div className={homeStyles.sologon} data-aos="fade-up">
            <h1 className={homeStyles.heading1}>
              Where your ideas{" "}
              <span className={homeStyles.headingspan}>evolve</span> into{" "}
              <span className={homeStyles.headingspan}>products</span>.
            </h1>
            <p className={homeStyles.p}>
              iPlex helps all kinds of ambitious businesses to improve their
              digital presence and make digital work for them commercially. Find
              out more about who we are.
            </p>
            <Link className={homeStyles.meetus} to="/meetOurTeam">
              Meet The Team.
            </Link>
          </div>
          <AnchorLink to="/#focus" className={homeStyles.scrollIcon}>
            <div className={homeStyles.scrollIconWheelOutter}>
              <span className={homeStyles.scrollIconWheelInner}></span>
            </div>
          </AnchorLink>
        </div>
        <div className={homeStyles.container2} id="focus">
          <h1 className={homeStyles.heading2}>
            Let’s talk about your{" "}
            <span className={homeStyles.span}>digital</span> future
          </h1>
          <p className={homeStyles.p2}>
            Do you like to work with us and shape your next digital product? Got
            an awesome idea of how to excite and delight your users? Or do you
            want to become a iPlexians? We’re curious - let’s talk!
          </p>
          <h2 className={homeStyles.heading3}>
            Feed designs and builds ambitious <br /> digital products and brands
          </h2>
          <Link className={homeStyles.serviceslink} to="/ourServices">
            Discover Your Focus
          </Link>
          <Slider aos="flip-right" aos_offset="200" aos_duration="1000" />
          <h1 className={homeStyles.heading3}>
            Want to know immediately where <br /> your{" "}
            <span className={homeStyles.span}>opportunities</span> lie?
          </h1>
          <p className={homeStyles.p2}>
            In the intake we tell you all the ins and outs of our approach,
            opportunities for your brand and success stories from previous
            projects. Everyone is welcome. Step inside. It can just change your
            life.
          </p>
          <Link className={homeStyles.serviceslink} to="/contactUs">
            {" "}
            Get in touch{" "}
          </Link>
        </div>
      </div>
    </Layout>
  )
}
