import React, { Component } from "react"
import Slider from "react-slick"
import Card from "../components/AboutUsCard"

export default class Responsive extends Component {
  render() {
    var settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 2,
      slidesToScroll: 2,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 990,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 1,
          },
        },
      ],
    }
    return (
      <div style={{ marginTop: "20px" }}>
        <Slider {...settings}>
          <Card
            heading="React Development"
            para="Although we conduct a variety of tests throughout each phase, the big moment our testers shine in is when we produce a specific part of the project that needs a true user experience."
            aos={this.props.aos}
            aosoffset={this.props.aos_offset}
            aosduration={this.props.aos_duration}
          />
          <Card
            heading="Wordpress Development"
            para="A WordPress developer is one who can make custom plugins and modules for WordPress. WordPress designer (a true one) is able to develop a theme around WordPress."
            aos={this.props.aos}
            aosoffset={this.props.aos_offset}
            aosduration={this.props.aos_duration}
          />
          <Card
            heading="Angular Development"
            para=" The first people you’ll meet are our experts in business, UX and technology. They dig into your business, discuss the scope of the challenge and consult on the most suitable technological solutions."
            aos={this.props.aos}
            aosoffset={this.props.aos_offset}
            aosduration={this.props.aos_duration}
          />
          <Card
            heading="Node.js Development"
            para="Node. js is primarily used for non-blocking, event-driven servers, due to its single-threaded nature. It's used for traditional web sites and back-end API services, but was designed with real-time, push-based architectures in mind."
            aos={this.props.aos}
            aosoffset={this.props.aos_offset}
            aosduration={this.props.aos_duration}
          />
          <Card
            heading="PHP Development"
            para="PHP scripts can be used on most of the well-known operating systems like Linux, Unix, Solaris, Microsoft Windows, MAC OS and many others. It also supports most web servers including Apache and IIS. Using PHP affords web developers the freedom to choose their operating system and web server."
            aos={this.props.aos}
            aosoffset={this.props.aos_offset}
            aosduration={this.props.aos_duration}
          />
          <Card
            heading="UI/UX Design"
            para="We research, prototype, design, and test digital products, putting your customer in the center of the service, while creating a joyful and convenient experience."
            aos={this.props.aos}
            aosoffset={this.props.aos_offset}
            aosduration={this.props.aos_duration}
          />
        </Slider>
      </div>
    )
  }
}
