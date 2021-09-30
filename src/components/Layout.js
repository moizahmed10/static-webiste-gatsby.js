import React from "react"
import Header from "./Header"
import Footer from "./Footer"
import styled from "styled-components"
import * as LayoutStyle from "./Layout.module.css"
const ContainerDiv = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`

export default ({ children, isHome }) => {
  return (
    <ContainerDiv>
      <Header ishome={isHome} style={{ background: "black" }} />
      <div className={LayoutStyle.contentHolder}>{children}</div>
      <Footer />
    </ContainerDiv>
  )
}
