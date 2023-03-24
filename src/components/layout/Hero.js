import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation, EffectFade } from "swiper";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import "./HeroStyles.css";
import slide1 from "../../images/slide1.jpg";
import slide2 from "../../images/slide2.jpg";
import slide3 from "../../images/slide3.jpg";
import slide4 from "../../images/slide4.jpg";
import bannerico from "../../images/bannerico.png";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="container">
      <Swiper
        modules={[Navigation, EffectFade]}
        navigation
        effect
        speed={800}
        slidesPerView={1}
        loop
        className="mySwiper"
      >
        <SwiperSlide className="swiperslide">
          <div className="hold-1">
            <img src={slide1} alt="" />
            <div className="card-text">
              <h1 className="heading-t1">Drive-thru</h1> <br />
              <h1 className="heading-t2">Coffee</h1>
              <h2>is just a sip away</h2>
              <i class="fa-solid fa-check check-mark">Superior Quality</i>
              <i class="fa-solid fa-check check-mark">Customer Service</i>
              <i class="fa-solid fa-check check-mark3">Convenience</i>
            </div>
            <button className="btn-location-slide">
              <Link className="btn-local" to="/locations">
                Find Our Locations
              </Link>
            </button>
          </div>
        </SwiperSlide>
        <SwiperSlide className="swiperslide">
          <div className="hold-2">
            <img src={slide2} alt="" />
            <div className="card-text">
              <h1 className="heading-t1-2">Premium</h1> <br />
              <h1 className="heading-t2-2">Coffee</h1>
              <h2 className="heading-t2-two">is just a sip away</h2>
              <i class="fa-solid fa-check check-mark">
                Roasted Coffee by the Pound
              </i>
              <i class="fa-solid fa-check check-mark">
                Delivered Right to your Door
              </i>
              <i class="fa-solid fa-check check-mark3-1">
                Coffee at the Speed of Life
              </i>
            </div>
            <button className="btn-location-slide">
              <Link className="btn-local" to="/coffee">
                Find Out More
              </Link>
            </button>
          </div>
        </SwiperSlide>
        <SwiperSlide className="swiperslide">
          <div className="hold-3">
            <img src={slide3} alt="" />
            <div className="card-text">
              <h1 className="heading-t1-3">Quality</h1> <br />
              <h1 className="heading-t2-3">Guarantee</h1>
              <h2 className="heading-t2-three">is just a sip away</h2>
              <img className="banner" src={bannerico} alt="" />
            </div>
            <button className="btn-location-slide">
              <Link className="btn-local" to="/coffee">
                Find Out More
              </Link>
            </button>
          </div>
        </SwiperSlide>
        <SwiperSlide className="swiperslide">
          <div className="hold-4">
            <img src={slide4} alt="" />
            <div className="card-text">
              <h1 className="heading-t1-4">Franchise</h1> <br />
              <h1 className="heading-t2-4">Opportunity</h1>
              <h2 className="heading-t2-four">is just a sip away</h2>
              <i class="fa-solid fa-check check-mark">Proven Business Model</i>
              <i class="fa-solid fa-check check-mark">Low Investment</i>
              <i class="fa-solid fa-check check-mark3-2">Flexible Floor Plan</i>
            </div>
            {/* <button className="btn-location-slide">
              <Link className="btn-local" to="/franchise">
                Find Out More
              </Link>
            </button> */}
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Hero;
