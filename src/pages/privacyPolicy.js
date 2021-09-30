import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import * as policyStyles from "./privacyPolicy.module.css"

export default () => {
  return (
    <Layout isHome={false}>
      <div>
        <h1 className={policyStyles.heading}>
          Privacy {"  "}
          <span> Policy</span>
        </h1>
        <div className={policyStyles.policydiv}>
          <h1>1. Acknowledgement and Acceptance</h1>
          <p>
            This Privacy Policy is intended to explain how the clients’ personal
            information is used and processed at iPlex’s website. iPlex is
            committed to guard your privacy. You can browse through our website
            (www.iplex.pk) without giving away any of your personal information,
            but you may have to give it to us so that we are able to respond to
            your requests accurately. We assure you that our activities are
            within the limits of this policy. By visiting and using www.iplex.co
            you accept the terms described below. iPlex reserves the right to
            modify this statement and terms of use in the whole or in part at
            any time without any additional notifications, so please check this
            Policy periodically.
          </p>
          <h1>2. Site Usage Policy</h1>
          <p>
            No visitor of this web site may distribute exchange, modify, sell,
            or transmit any information published on this site, including but
            not limited to any text, images, audio or video, for any business or
            commercial purpose. The site cannot be used for or involved in
            illegal activity of any kind.
          </p>
          <h1>3. Assembling and Using Information</h1>
          <p>
            When a visitor requests a page from www.iplex.pk, our web servers
            automatically recognize that visitor’s domain name and IP address.
            This information may include the IP address of the site that
            directed you to http://www.iplex.co/, your IP address, operating
            system version and your web browser. This information reveals
            nothing personal about you and the practice of collecting such data
            is common for every web server on the Internet today. iPlex uses
            your IP address for the following purposes:
          </p>

          <ul>
            <li>
              Administer our site (this data gives us the idea which parts of
              our site users are visiting more frequently)
            </li>
            <li>Diagnose issues with our servers</li>
            <li>Investigate misuses of www.iplex.co</li>
          </ul>
          <p>
            We don’t link IP addresses to any personal data. This means that
            visitors of our site are tracked, but they remain anonymous. Contact
            forms at www.iplex.pk require your name, phone number, e-mail and
            company name. We collect this information and use it for getting in
            touch with you only. We do not sell, rent, or otherwise give your
            e-mail address or phone number to any third party without your
            consent.
          </p>
          <h1>4. Information Security</h1>
          <p>
            Our site has advanced security measures to prevent data loss, misuse
            or alteration. All your personal information resides behind a
            firewall, and access to it is restricted to most of iPlex personnel
          </p>
          <h1>5. Cookies</h1>
          <p>
            Our site uses cookies i.e. small files that contain identifiers sent
            from a web server to a browser and stored by the latter. The
            identifier is sent back to the server every time the browser
            requests a page from the server. Cookies allow us to enhance your
            user experience of our web site by helping us monitor which pages of
            our web site you find useful and which you do not. Plus cookies
            allow us to optimize and serve the content (including but not
            limited to ads by Google) based on your past visits to our website.
            Cookies do not ever give us the access to your computer or to any
            data about you, other than the information you want to share with
            us. Most web browsers automatically accept cookies by default, but
            you can modify your browser settings at any time to decline cookies.
            However, this may generally decrease your user experience and
            prevent you from taking full advantage of our web site.
          </p>
          <h1>6. Changes in Policy</h1>
          <p>
            iPlex reserves the right to change, modify or otherwise update this
            Privacy Statement at any time. So we encourage you to review this
            privacy statement periodically to track the changes.
          </p>
          <h1>7. Personal Information Revelation</h1>
          <p>
            iPlex may disclose your personal information when it is required by
            law or there are sufficient grounds to believe that this action is
            necessary to:
          </p>
          <ul>
            <li>
              Investigate unlawful activities or comply with legal process
              served on iPlex
            </li>
            <li>
              Protect and defend the rights or property of iPlex or visitors of
              www.iplex.pk
            </li>
            <li>
              Identify persons violating the law, iPlex Privacy Policy or the
              rights of third parties
            </li>
            <li>Reply to user requests.</li>
          </ul>
          <h1>8. Contact Information</h1>
          <p>
            iPlex welcomes your comments and questions on this statement. Feel
            free to contact us at www.iplex.co or via e-mail at hr@iplex.co
          </p>
        </div>
        <div className={policyStyles.lowercontent}>
          <h1>
            Want to know immediately where <br />
            your <span>opportunities</span> lie?
          </h1>
          <p>
            In the intake we tell you all the ins and outs of our approach,
            opportunities for your brand and success stories from previous{" "}
            projects. Everyone is welcome. Step inside. It can just change your
            life.
          </p>
          <Link className={policyStyles.linkitem} to="/contactUs">
            Get in touch
          </Link>
        </div>
      </div>
    </Layout>
  )
}
