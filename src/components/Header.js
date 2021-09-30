import React, { useState, useEffect } from "react"
import { Link } from "gatsby"
import * as headerStyle from "./header.module.css"
import Logo from "./Logo"
import SideMenu from "./HamburgerMenu"
import styled from "styled-components"

const IconBar = styled.div`
  width: 1.5rem;
  height: 0.3rem;
  background: white;
  border-radius: 3px;
  transform-origin: 1px;
  transition: transform 600ms, opacity 600ms;
  &:first-child {
    transform: ${({ nav }) => (nav ? "rotate(45deg)" : "rotate(0)")};
  }
  &:nth-child(2) {
    opacity: ${({ nav }) => (nav ? "0" : "1")};
  }
  &:nth-child(3) {
    transform: ${({ nav }) => (nav ? "rotate(-45deg)" : "rotate(0)")};
  }
`
const MenuIcon = styled.button`
  top: 2rem;
  right: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 1.5 rem;
  height: 1.5rem;
  background: transparent;
  border: none;
  cursor: pointer;
  z-index: 5;
  &:hover {
    ${IconBar} {
      background: yellow;
    }
  }
`

export default props => {
  const [isHeader, setIsHeader] = useState(false)
  const url = typeof window !== "undefined" ? window.location.href : ""
  const [nav, setNav] = useState(false)

  const changeBackground = () => {
    if (props.ishome == true) {
      if (window.scrollY >= 90) {
        setIsHeader(true)
      } else {
        setIsHeader(false)
      }
    }
  }

  if (typeof window !== "undefined") {
    window.addEventListener("scroll", changeBackground)
  }

  return (
    <>
      <header
        className={
          props.ishome
            ? isHeader
              ? headerStyle.headactive
              : headerStyle.head
            : headerStyle.headernonhome
        }
      >
        <div className={headerStyle.container}>
          <Link to="/">
            <Logo />
          </Link>
          <MenuIcon onClick={() => setNav(!nav)}>
            <IconBar nav={nav} />
            <IconBar nav={nav} />
            <IconBar nav={nav} />
          </MenuIcon>

          {props.isContact ? (
            <p className={headerStyle.jugarh}></p>
          ) : (
            <Link className={headerStyle.contactNav} to="/contactUs">
              Hi, can we talk?
            </Link>
          )}
        </div>
      </header>
      {nav ? <SideMenu nav={nav} /> : ""}
    </>
  )
}
