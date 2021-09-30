import React from "react"
import Layout from "../components/Layout"
import * as Servicestyles from "./ourServices.module.css"
import Card from "../components/Card"
import { Link } from "gatsby"
export default () => {
  return (
    <Layout isHome={false}>
      <div style={{ padding: "25px 15px" }}>
        <h1 className={Servicestyles.heading}>
          Services that <span>meet</span> your need
        </h1>
        <p className={Servicestyles.content}>
          Experience deep knowledge of your industry paired with service <br />{" "}
          specilization to bring you high quality digital services.
        </p>
        <div className={Servicestyles.cardHolder}>
          <div className={Servicestyles.divcard}>
            {" "}
            <Card
              heading="React Development"
              para="We create large web applications that can change data, without reloading the page. The main purpose of React is to be fast, scalable, and simple. It works only on user interfaces in the application."
              aos="flip-right"
              aos_offset="200"
              aos_duration="1000"
            />
          </div>
          <div className={Servicestyles.divcard}>
            <Card
              heading="Wordpress Development"
              para="A WordPress developer is one who can make custom plugins and modules for WordPress. WordPress designer (a true one) is able to develop a theme around WordPress."
              aos="flip-right"
              aos_offset="200"
              aos_duration="1000"
            />
          </div>
          <div className={Servicestyles.divcard}>
            <Card
              heading="Angular Development"
              para="Angular JS has become one of the most popular JavaScript frameworks so far as it is easy to use, provides high simplification to the entire development process as well as supports the latest standards of JavaScript (ES6)."
              aos="flip-right"
              aos_offset="200"
              aos_duration="1000"
            />
          </div>
          <div className={Servicestyles.divcard}>
            <Card
              Development
              heading="Node.js Development"
              para="Node. js is primarily used for non-blocking, event-driven servers, due to its single-threaded nature. It's used for traditional web sites and back-end API services, but was designed with real-time, push-based architectures in mind."
              aos="flip-right"
              aosoffset="200"
              aosduration="1000"
            />
          </div>
          <div className={Servicestyles.divcard}>
            <Card
              heading="PHP Development"
              para="PHP scripts can be used on most of the well-known operating systems like Linux, Unix, Solaris, Microsoft Windows, MAC OS and many others. It also supports most web servers including Apache and IIS. Using PHP affords web developers the freedom to choose their operating system and web server."
              aos="flip-right"
              aosoffset="200"
              aosduration="1000"
            />
          </div>
          <div className={Servicestyles.divcard}>
            <Card
              heading="UI/UX Design"
              para="We research, prototype, design, and test digital products, putting your customer in the center of the service, while creating a joyful and convenient experience."
              aos="flip-right"
              aosoffset="200"
              aosduration="1000"
            />
          </div>
        </div>
        <div className={Servicestyles.lowerContent}>
          <h1 className={Servicestyles.heading2}>
            Want to know immediately where <br />
            your <span>opportunities</span> lie?
          </h1>
          <p className={Servicestyles.content2}>
            In the intake we tell you all the ins and outs of our approach,
            opportunities for your brand and success stories from previous
            projects. Everyone is welcome. Step inside. It can just change your
            life.
          </p>
          <Link className={Servicestyles.link} to="/contactUs">
            {" "}
            Get in touch
          </Link>
        </div>
      </div>
    </Layout>
  )
}
