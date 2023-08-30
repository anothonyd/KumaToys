import { Component } from "react";
import Slider from "react-slick";

export default class MultipleItems extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3000,
      cssEase: "linear",
      pauseOnHover: true,
      useCSS: true,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            className: "center",
            centerMode: true,
            slidesToShow: 2,
            slidesToScroll: 2,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            className: "center",
            centerMode: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 1
          }
        }
      ]
    };
    return (
      <div>
        <h1 className="title my-5"> Latest Releases </h1>
        <Slider {...settings} className="flex gap-5">
          <div className="h-[400px] p-5">
            <div className="p-3 bg-red-300 h-full rounded-3xl">1</div>
          </div>
          <div className="h-[400px] p-5">
            <h3 className="p-3 bg-red-300 h-full rounded-3xl">1</h3>
          </div>
          <div className="h-[400px] p-5">
            <h3 className="p-3 bg-red-300 h-full rounded-3xl">1</h3>
          </div>
          <div className="h-[400px] p-5">
            <h3 className="p-3 bg-red-300 h-full rounded-3xl">1</h3>
          </div>
          <div className="h-[400px] p-5">
            <h3 className="p-3 bg-red-300 h-full rounded-3xl">1</h3>
          </div>
          <div className="h-[400px] p-5">
            <h3 className="p-3 bg-red-300 h-full rounded-3xl">1</h3>
          </div>
          <div className="h-[400px] p-5">
            <h3 className="p-3 bg-red-300 h-full rounded-3xl">1</h3>
          </div>
          <div className="h-[400px] p-5">
            <h3 className="p-3 bg-red-300 h-full rounded-3xl">1</h3>
          </div>
        </Slider>
      </div>
    );
  }
}