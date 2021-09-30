import React from "react"
import Header from "../components/Header"
import * as Style from "./contactUs.module.css"

export default () => {
  return (
    <div className={Style.container}>
      <Header ishome={true} isContact={true} />
      <div className={Style.formContainer}>
        <form>
          <h1>Contact Us</h1>
          <div className={Style.formCol}>
            <div className={Style.formElement}>
              <label>My name is</label>
              <input
                type="text"
                placeholder="Your name *"
                aria-required="true"
                aria-invalid="false"
              />
            </div>
            <div className={Style.formElement}>
              <label>What position are you looking for?</label>
              <select aria-required="true" aria-invalid="false">
                <option selected="selected">Your position as</option>
                <option value="Designer">Designer</option>
                <option value="Developer">Developer</option>
                <option value="Project Manager">Project Manager</option>
              </select>
            </div>
          </div>
          <div className={Style.formCol}>
            <div className={Style.formElement}>
              <label>My email is</label>
              <input
                type="text"
                placeholder="Your email *"
                aria-required="true"
                aria-invalid="false"
              />
            </div>
            <div className={Style.formElement}>
              <label>My Resume is</label>
              <input type="file" />
              <p>Support files word and pdf, max size to upload 5mb</p>
            </div>
          </div>
          <div className={Style.message}>
            <label className={Style.messageLabel}>Message</label>
            <input
              type="text"
              placeholder="Your typing here... *"
              aria-required="true"
              aria-invalid="false"
              className={Style.messageInput}
            />
          </div>
          <button className={Style.submitButton}>Submit</button>
        </form>
      </div>
      <div className={Style.contactInfoContainer}>
        <div>
          {" "}
          <h2>Prepare for a quick response</h2>
          <a href="mailto:hr@iplex.com">hr@iplex.co</a>
        </div>
        <div>
          <h2>Address</h2>
          <p>
            Bahria Town Civic Center,
            <br /> Phase 4 Plaza 75, Pakistan
          </p>
        </div>
        <div>
          <h2>Phone</h2>
          <a href="tel:+92515411278">+92 51 541 1278</a>
        </div>
        <div className={Style.social}>
          {" "}
          <a
            className={Style.link}
            href="https://www.facebook.com/iplex.co/"
            target="_blank"
          >
            FACEBOOK
          </a>
          <br />
          <a
            className={Style.link}
            href="https://www.instagram.com/iplexlife/"
            target="_blank"
          >
            INSTAGRAM
          </a>
          <br />
          <a
            className={Style.link}
            href="https://pk.linkedin.com/company/iplexco"
            target="_blank"
          >
            LINKDIN
          </a>
        </div>
      </div>
    </div>
  )
}
