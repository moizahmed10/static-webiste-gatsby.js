import React, { Component } from "react"
import Slider from "react-slick"
import Card from "../components/SliderCard"

export default class Responsive extends Component {
  render() {
    var settings = {
      dots: true,
      arrows: false,
      infinite: false,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 990,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    }
    return (
      <div style={{ paddingTop: "20px", maxWidth: "90%", margin: "0 auto" }}>
        <Slider {...settings}>
          <Card
            heading="Discovery"
            para=" The first people you’ll meet are our experts in business, UX and technology. They dig into your business, discuss the scope of the challenge and consult on the most suitable technological solutions."
            count="01"
            aos={this.props.aos}
            aosoffset={this.props.aos_offset}
            aosduration={this.props.aos_duration}
          />
          <Card
            heading="Strategy"
            para="This is where we validate your future users and define the project backbone. It consists of a working plan in which the users’ needs are met with a solution that fulfils the business goals."
            count="02"
            aos={this.props.aos}
            aosoffset={this.props.aos_offset}
            aosduration={this.props.aos_duration}
          />
          <Card
            heading="Design"
            para="The user is the foundation on which we build all of the visual communication. It is intuitive, attractive and easy to use on any platform, to ensure an impressive experience in the interaction between the brand and the user."
            count="03"
            aos={this.props.aos}
            aosoffset={this.props.aos_offset}
            aosduration={this.props.aos_duration}
          />
          <Card
            heading="Development"
            para="Our code crafters plan for progressive solutions placed on the right platforms to enhance the user experience. They focus on building top-quality, high-performing custom solutions that are easily scalable."
            count="04"
            aos={this.props.aos}
            aosoffset={this.props.aos_offset}
            aosduration={this.props.aos_duration}
          />
          <Card
            heading="Testing"
            para="Although we conduct a variety of tests throughout each phase, the big moment our testers shine in is when we produce a specific part of the project that needs a true user experience."
            count="05"
            aos={this.props.aos}
            aosoffset={this.props.aos_offset}
            aosduration={this.props.aos_duration}
          />
          <Card
            heading="Launch"
            para="Here is where we present your custom project. Upon approval, your custom project will be launched and promoted. Then sit back and watch the momentum!"
            count="06"
            aos={this.props.aos}
            aosoffset={this.props.aos_offset}
            aosduration={this.props.aos_duration}
          />
        </Slider>
      </div>
    )
  }
}
