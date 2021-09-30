import React, { useState, useEffect } from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import Aos from "aos"

const Wrapper = styled.div`
  background: black;
  width: 100vw;
  height: 100vh;
  position: fixed;
  padding: 140px 60px 100px;
  top: 0px;
  left: 0;
  z-index: 5;
  text-align: left;
  @media (max-width: 600px) {
    align-items: center;
    padding: 0 15px;
  }
  @media (max-width: 1024px) {
    padding: 0 15px;
  }
  li {
    margin-top: 1.5rem;
    padding-bottom: 10px;
    @media (max-width: 600px) {
      margin-top: 0;
      padding-bottom: 20px;
    }
    a {
      text-transform: uppercase;
      font-weight: bold;
      font-size: 54px;
      line-height: 1.1;
      @media (max-width: 600px) {
        font-size: 35px;
      }
      @media (max-width: 990px) {
        font-size: 35px;
      }
    }
  }
  a {
    font-size: 22px;
    line-height: 40px;
    transition: color 600ms;
  }

  p {
    font-size: 22px;
    @media (max-width: 600px) {
      font-size: 18px;
      line-height: 1.7;
      font-weight: 500;
    }
    @media (max-width: 990px) {
      font-size: 19px;
    }
  }
`
const MenuContent = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 0px 200px;
  padding-top: 20px;
  @media (max-width: 1024px) {
    padding: 140px 60px 100px;
  }
  @media (max-width: 600px) {
    align-items: flex-start;
    padding: 90px 15px;
    flex-direction: column;
    text-align: left;
  }

  p {
    color: white;
  }
  a {
    color: white;
    text-decoration: none;
  }
  a:hover {
    color: #f9d633;
  }
`
const LinkHolder = styled.div`
  @media (max-width: 600px) {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
  }
  a {
    @media (max-width: 600px) {
      font-size: 18px;
    }
  }
  h1 {
    @media (max-width: 600px) {
      display: none;
    }
  }
`

export default ({ nav }) => {
  useEffect(() => {
    Aos.init()
  }, [])

  return (
    <div>
      <Wrapper nav={nav}>
        <MenuContent>
          <ul data-aos="fade-up" data-aos-duration="1500">
            <li>
              <Link to="/aboutUs">ABOUT</Link>
            </li>
            <li>
              <Link to="/ourServices">SERVICES</Link>
            </li>
            <li>
              <Link to="/meetOurTeam">TEAM</Link>
            </li>
            <li>
              <Link to="/contactUs">CONTACT</Link>
            </li>
          </ul>
          <div data-aos="fade-up" data-aos-duration="1500">
            <p>
              Bahria Town Civic Center,
              <br /> Phase 4 Plaza 75, Pakistan
            </p>
            <LinkHolder>
              <a href="mailto:hr@iplex.com">hr@iplex.co</a>
              <br />
              <a href="tel:+92515411278">+92 51 541 1278</a>
            </LinkHolder>
          </div>

          <LinkHolder data-aos="fade-up" data-aos-duration="1500">
            <h1>Follow Us</h1>
            <a href="https://www.facebook.com/iplex.co/" target="_blank">
              FACEBOOK
            </a>
            <br />
            <a href="https://www.instagram.com/iplexlife/" target="_blank">
              INSTAGRAM
            </a>
            <br />
            <a href="https://pk.linkedin.com/company/iplexco" target="_blank">
              LINKDIN
            </a>
          </LinkHolder>
        </MenuContent>
      </Wrapper>
    </div>
  )
}
