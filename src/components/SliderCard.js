import React from "react"
import styled from "styled-components"
import { useEffect } from "react"
import Aos from "aos"

const ContentWrapper = styled.div`
  box-shadow: 0px 10px 14px rgb(0 0 0 / 16%);
  background: #ffffff;
  width: 95%;
  margin-left: 10px;
  min-height: 460px;
  padding: 40px 20px 20px 20px;
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;

  @media only screen and (max-width: 600px) {
    min-height: 384px;
    padding: 35px 20px 80px;
    padding-bottom: 20px;
    margin-left: 0;
  }
  @media only screen and (max-width: 990px) {
    min-height: 384px;
    padding: 35px 20px 80px;
    padding-bottom: 20px;
  }
  @media only screen and (max-width: 1024px) {
    min-height: 420px;
  }
  h3 {
    font-size: 25px;
    font-weight: 600;
    line-height: 1.3;
    text-align: left;
    padding-bottom: 20px;
    @media only screen and (max-width: 1024px) {
      font-size: 23px;
      padding-bottom: 17px;
      margin-bottom: 0;
    }
  }
  p {
    text-align: left;
    padding-bottom: 20px;
    font-size: 21px;
    line-height: 1.7;
    color: #716f6f;

    @media only screen and (max-width: 1024px) {
      font-size: 18px;
      line-height: 1.6;
      margin-bottom: 0;
      padding-bottom: 0;
    }
  }
  div {
    font-size: 120px;
    color: rgba(0, 0, 0, 0.1);
    font-weight: 200;
    line-height: 1;
    text-align: right;
    margin-top: auto;
    line-height: 0.75;

    @media only screen and (max-width: 990px) {
      font-size: 90px;
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
      <div>{props.count}</div>
    </ContentWrapper>
  )
}
