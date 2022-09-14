import React, { Component } from "react";
import Slider from "react-slick";

export default class SliderImage extends Component {
    constructor(props) {
        super(props);
      }
    render() {
        console.log('Slick')
        console.log(this.props.listImages)
      const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 2,
        autoplay: true,
        speed: 6000,
        autoplaySpeed: 100,
        cssEase: "linear",
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 800,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true,
              dots: true
            }
          },
        ]
      };
      return (
        <div>
          <Slider {...settings}>
            {
                this.props.listImages.map((image)=>(
                    <img src={image} className="shadow-lg p-2 mb-2 bg-body rounded"/>
                ))
            }
          </Slider>
        </div>
      );
    }
  }