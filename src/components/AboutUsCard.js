import React from "react"
import styled from "styled-components"
import { useEffect } from "react"
import Aos from "aos"

const ContentWrapper = styled.div`
  background: black;
  color: white;
  width: calc(100%-25px);
  min-height: 390px;
  padding: 40px 20px 20px 20px;
  margin-left: 25px;
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  @media only screen and (max-width: 990px) {
    min-height: 304px;
  }
  @media only screen and (max-width: 600px) {
    min-height: 451px;
    margin-left: 0;
  }
  h3 {
    font-size: 27px;
    font-weight: bold;
    line-height: 1.3;
    text-align: left;
    margin-bottom: 15px;
    max-width: 179px;
    @media only screen and (max-width: 990px) {
      max-width: 100%;
    }
  }
  p {
    text-align: left;
    padding-bottom: 20px;
    font-size: 21px;
    line-height: 1.7;
    @media only screen and (max-width: 990px) {
      font-size: 18px;
      padding-bottom: 0;
      margin-bottom: 0;
    }
  }
`

export default props => {
  useEffect(() => {
    Aos.init()
  }, [])
  return (
    <ContentWrapper
      data-aos={props.aos}
      data-aos-offset={props.aosoffset}
      data-aos-duration={props.aosduration}
    >
      <h3>{props.heading}</h3>
      <p>{props.para}</p>
    </ContentWrapper>
  )
}
