/* eslint-disable no-console */
import React from 'react';
import '../Generate/Generate.scss';
import translate from '../../../i18nProvider/translate';
import HeroImage from '../../../assets/HeroImage.webp';
import Lock from '../../../assets/Lock.webp';
import Book from '../../../assets/Document.webp';
import Cookie from '../../../assets/Cookies.webp';
import LineGray from '../../../assets/Line_gray.webp';
import LineViolet from '../../../assets/Line_violet.webp';
import PaperPlane from '../../../assets/Paper_plane.webp';
import Streamline from '../../../assets/Group821.png';
import Circle from '../../../assets/check_circle.webp'; 
import DetailsSwiper from '../../DetailsSwiper/DetailsSwiper';
import Lubenda from '../../../assets/Lubenda.webp';
import Privacy from '../../../assets/CardsPrivacy.png';
import GetTerms from '../../../assets/GetTerms.webp';
import Shopify from '../../../assets/Shopify.webp';
import cardCircle from '../../../assets/cardCircle.webp';
import Text_highlighter from '../../../assets/Text_highlighter.webp';
import SwiperPost from '../../Swiperpost/SwiperPost';
import Legal_Protection from '../../../assets/Legan_Protection.webp';
import TermsCondition from '../../../assets/TermsConditions.webp';
import Business from '../../../assets/Businesses.webp';
import Compliant from '../../../assets/Compliant.webp';
import Lineadd from '../../../assets/Rectangle_58.webp';

const Generate = ({handleClick}) => {

  return (
    <div className="main">
      <div className="main_background_lock" style={{ backgroundImage: `url(${Lock})`, width: '150px', position: 'absolute', height: '330px', left: '130px', top: '400px' }}></div>
      <div className="main_background_page" style={{ backgroundImage: `url(${HeroImage})`, position: 'absolute', width: '808px', height: '664px', left: '957px', top: '160px' }}></div>
      <div className="main_background_line_violet" style={{ backgroundImage: `url(${LineViolet})`, position: 'absolute', width: '1288px', height: '283px', left: '0px', top: '499px' }}></div>
      <div className="main_background_book" style={{ backgroundImage: `url(${Book})`, position: 'absolute', width: '430px', height: '320px', left: '805px', top: '530px' }}></div>
      <div className="main_background_line_gray" style={{ backgroundImage: `url(${LineGray})`, position: 'absolute', width: '1276.77px', height: '519.8px', left: '0.01px', top: '210px' }}></div>
      <div className="main_background_cookie" style={{ backgroundImage: `url(${Cookie})`, position: 'absolute', width: '300px', height: '250px', left: '338px', top: '670px', backgroundRepeat: 'no-repeat' }}></div>
      <div className="main_background_paperplane" style={{ backgroundImage: `url(${PaperPlane})`, position: 'absolute', width: '107px', height: '114px', left: '1285px', top: '498px' }}></div>
      <div className="main_tutorial">
        <p className="main_tutorial_text">Powered by AI</p>
        <p className="main_tutorial_aggrements">{translate('generate-tutorial-text')}</p>
        <p className="main_tutorial_aggrements_policy">Generate your <span className="main_tutorial_aggrements_policy_bolder">Privacy Policy, Terms of Use</span> or <span className="main_tutorial_aggrements_policy_bolder">Cookie Policy </span>for <span className="main_tutorial_aggrements_policy_color">free</span> </p>
        <div className="main_tutorial_generate-button">
          <button className="main_tutorial_generate-button-free" onClick={handleClick}>
            Generate for free
          </button>
          <button className="main_tutorial_generate-button-reveal" onClick={handleClick}>Learn more<span className="arrow"></span></button>
        </div>
      </div>
      <div className="main_tutorial-streamline">
        <p className="main_tutorial-streamline_text_gradient">AI</p>
        <div className="main_tutorial-streamline_background" style={{backgroundImage:`url(${Streamline})`, position: 'absolute', width: '884px', height: '680px', left: '0px', top: '1022px' }}></div>
        <div className="main_tutorial-streamline_description">
          <p className="main_tutorial-streamline_description_name">discover posibilities</p>
          <p className="main_tutorial-streamline_description_title">{translate('streamline-name')}</p>
          <p className="main_tutorial-streamline_description_more">{translate('streamline-more')}</p>
          <div className="main_tutorial-streamline_description_detail">
            <div className="main_tutorial-streamline_description_detail_firstPoint">
              <div className="main_tutorial-streamline_description_detail_background" style={{backgroundImage:`url(${Circle})`, width:'20px', height:'20px'}}></div>
              <div className="main_tutorial-streamline_description_detail_style">{translate('streamline-firstPoint')}</div>
            </div>
            <div className="main_tutorial-streamline_description_detail_secondPoint">
              <div className="main_tutorial-streamline_description_detail_background" style={{backgroundImage:`url(${Circle})`, width:'20px', height:'20px'}}></div>
              <div className="main_tutorial-streamline_description_detail_style">{translate('streamline-secondPoint')}</div>
            </div>
            <div className="main_tutorial-streamline_description_detail_thirdthPoint">
              <div className="main_tutorial-streamline_description_detail_background" style={{backgroundImage:`url(${Circle})`, width:'20px', height:'20px'}}></div>
              <div className="main_tutorial-streamline_description_detail_style">{translate('streamline-thirdPoint')}</div>
            </div>
            <div className="main_tutorial-streamline_description_detail_fourthPoint">
              <div className="main_tutorial-streamline_description_detail_background" style={{backgroundImage:`url(${Circle})`, width:'20px', height:'20px'}}></div>
              <div className="main_tutorial-streamline_description_detail_style">{translate('streamline-fourthPoint')}</div>
            </div>
            <div className="main_tutorial-streamline_description_detail_fifthPoint">
              <div className="main_tutorial-streamline_description_detail_background" style={{backgroundImage:`url(${Circle})`, width:'20px', height:'20px'}}></div>
              <div className="main_tutorial-streamline_description_detail_style">{translate('streamline-fifthPoint')}</div>
            </div>
            <div className="main_tutorial-streamline_description_detail_sixthPoint">
              <div className="main_tutorial-streamline_description_detail_background" style={{backgroundImage:`url(${Circle})`, width:'20px', height:'20px'}}></div>
              <div className="main_tutorial-streamline_description_detail_style">{translate('streamline-sixthPoint')}</div>
            </div>
            <div className="main_tutorial-streamline_description_detail_seventhPoint">
              <div className="main_tutorial-streamline_description_detail_background" style={{backgroundImage:`url(${Circle})`, width:'20px', height:'20px'}}></div>
              <div className="main_tutorial-streamline_description_detail_style">{translate('streamline-seventhPoint')}</div>
            </div>
            <div className="main_tutorial-streamline_description_detail_eigthPoint">
              <div className="main_tutorial-streamline_description_detail_background" style={{backgroundImage:`url(${Circle})`, width:'20px', height:'20px'}}></div>
              <div className="main_tutorial-streamline_description_detail_style">{translate('streamline-eigthPoint')}</div>
            </div>
          </div>
          <div className="main_tutorial_streamline_description_button">
            <button className="main_tutorial_streamline_description_button_free" onClick={handleClick}>
            Generate for free
            </button>
            <button className="main_tutorial_streamline_description_button_reveal" onClick={handleClick}>Learn more<span className="arrow"></span></button>
          </div>
        </div>
      </div>
      <div className="main_swiper_solution">
        <p className="main_swiper_solution_name">Solution</p>
      </div>
      <div className="main_swiper">
        <DetailsSwiper />
      </div> 
      <div className="main_cardPricing">
        <div className="main_cardPricing_detail">
          <p>Validate your credibility</p>
          <h2>Compare Industry Competitors</h2>
          <h4>iTerms offers industry-leading solutions for businesses for a fraction of the price, with no hidden fees.</h4>
        </div>
        <div className="main_cardPricing_acsess">
          <h2>Unlimited access</h2>
          <h5>for any documents</h5>
        </div>
        <div className="main_cardPricing_background" ></div>
        <div className="main_cardPricing_cardLubenda" style={{backgroundImage:`url(${Lubenda})`}}></div>
        <div className="main_cardPricing_cardGetPrivacy" style={{backgroundImage:`url(${Privacy})`}}></div>
        <div className="main_cardPricing_cardGetTerms" style={{backgroundImage:`url(${GetTerms})`}}></div>
        <div className="main_cardPricing_cardShopify" style={{backgroundImage:`url(${Shopify})`}}></div>
        <div className="main_cardPricing_cardPencil" style={{backgroundImage:`url(${Text_highlighter})`}}></div>
        <div className="main_cardPricing_cardCircle" style={{backgroundImage:`url(${cardCircle})`}}></div>
      </div>
      <div className="main_safeguards">
        <div className="main_safeguards_background" style={{backgroundImage:`url(${Legal_Protection})`}}></div>
        <div className="main_safeguards_text">
          <h3>Trusted Provisions</h3>
          <h1>Secure Legal Safeguards</h1>
          <h4>Attorney-certified compliance solutions for your convenience and protection.</h4>
        </div>
        <div className="main_safeguards_compliant" style={{backgroundImage:`url(${Compliant})`}}></div>
        <div className="main_safeguards_compliant_text">
          <h1>60 Million +</h1>
          <h4>Compliant Pageviews</h4>
        </div>
        <div className="main_safeguards_business" style={{backgroundImage:`url(${Business})`}}></div>
        <div className="main_safeguards_business_text">
          <h1>140,000 +</h1>
          <h4>Compliant Pageviews</h4>
        </div>
        <div className="main_safeguards_policies" style={{backgroundImage:`url(${TermsCondition})`}}></div>
        <div className="main_safeguards_policies_line" style={{backgroundImage:`url(${Lineadd})`}}></div>
        <div className="main_safeguards_policies_text">
          <h1>100,000 +</h1>
          <h4>Policies Created</h4>
        </div>
      </div>
      <div className="main_swiperPost">
        <SwiperPost/>
      </div>
    </div>
     
  );
};
export default Generate;