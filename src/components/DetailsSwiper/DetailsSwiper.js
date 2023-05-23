import React from 'react';
import { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import Privacy_Policy from '../../assets/Privacy_Policy.webp';
import Term_Condition from '../../assets/Terms_Conditions.webp';
import Cookie from '../../assets/Cookie.webp';
import Eula from '../../assets/Eula.webp';
import Disclaimer from '../../assets/Disclaimer.webp';
import Refund_Policy from '../../assets/Refund_Policy.webp';
import 'swiper/swiper-bundle.min.css';
import './DetailsSwiper.scss';
import 'swiper/css';
import 'swiper/css/navigation';

const DetailsSwiper = () => {
  return (
    <>
      <div className="swiper_title">
        <h5 className="h5_medium">for your business</h5>
        <h5 className="h5_large">Intuitively Made For Your Business</h5>
        <h2 className="h2_medium">Our Full Suite of Compliance Solutions</h2>
        <h2 className="h2_large">Explore iTerms Solutions </h2>
        <p className="p_medium">Create a free terms and conditions agreement 
          (aka terms of use or terms of service) for 
          your website or app.</p>
        <p className="p_large">Regardless of your requirements, iTerms has a solution ready for you to utilize.</p>
      </div>
      <div className="swiper_background">
        <div className="swiper_body">
          <div className="swiper-button">
            <div className="swiper-button-prev"></div>
            <div className="swiper-button-next"></div>
          </div>
          <Swiper
            className="swiper"
            modules={[Navigation]}
            spaceBetween={24}
            slidesPerView="auto"
            navigation={{
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
            }}
          >
            
            <SwiperSlide className="swiper_slide"><div>
              <img src={Privacy_Policy}></img>
              <h5>Privacy Policy</h5>
              <p>Statement or legal document that discloses some or all 
                  of the ways a party gathers, discloses a customer or clients 
                  data.</p>
              <a className="generate">Generate</a>
              <a className="learn_more">Learn more</a>
            </div></SwiperSlide>
            <SwiperSlide className="swiper_slide"><div>
              <img src={Term_Condition}></img>
              <h5>Terms & Conditions</h5>
              <p>Are the legal agreements between a service provider and a person 
                who wants to use that service.</p>
              <a className="generate">Generate</a>
              <a className="learn_more">Learn more</a>
            </div></SwiperSlide>
            <SwiperSlide className="swiper_slide"><div>
              <img src={Cookie}></img>
              <h5>Cookie Policy</h5>
              <p>Are the legal agreements between a service provider and a person
                who wants to use that service.</p>
              <a className="generate">Generate</a>
              <a className="learn_more">Learn more</a>
            </div></SwiperSlide>
            <SwiperSlide className="swiper_slide"><div>
              <img src={Eula}></img>
              <h5>Eula</h5>
              <p>Are the legal agreements between a service provider and a person 
                who wants to use that service</p>
              <a className="generate">Generate</a>
              <a className="learn_more">Learn more</a>
            </div></SwiperSlide>
            <SwiperSlide className="swiper_slide"><div>
              <img src={Disclaimer}></img>
              <h5>Disclaimer</h5>
              <p>Are the legal agreements between a service provider and a person
                who wants to use that service</p>
              <a className="generate">Generate</a>
              <a className="learn_more">Learn more</a>
            </div></SwiperSlide>
            <SwiperSlide className="swiper_slide"><div>
              <img src={Refund_Policy}></img>
              <h5>Refund Policy</h5>
              <p>Are the legal agreements between a service provider and a person who
                wants to use that service</p>
              <a className="generate">Generate</a>
              <a className="learn_more">Learn more</a>
            </div></SwiperSlide>
          </Swiper>
        </div>
      </div>
    </>);
};


export default DetailsSwiper;