import React from 'react';
import { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
import '../Swiperpost/SwiperPost.scss';
import Review from '../../assets/Review.webp';


  

function SwiperPost() {
  const [users, setUsers] = useState([]);

  const renderStars = (rating, userId) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      const starClass = i <= rating ? 'star filled' : 'star';
      stars.push(<span key={i} 
        className={starClass}
        onClick={() => handleStarClick(userId, i)}
      >&#9733;</span>);
    }
    return stars;
  };
  
  useEffect(() => {
    fetch('https://run.mocky.io/v3/9216489e-ea34-414b-bb23-ab11b38ec3b7')
      .then(res => res.json())
      .then(data =>{
        const usersData = data.users;
        setUsers(usersData);
      })
      .catch(error => {
        throw new Error('Error uploading data.json', error);
      });
  }, []);
  
  const handleStarClick = (userId, value) => {
    setUsers((prevUsers) => {
      return prevUsers.map((user) => {
        if (user.id === userId) {
          return { ...user, rating: value };
        }
        return user;
      });
    });
  };

  return (
    <>
      <div className="swiperPost_title">
        {/* <h5 className="h5_medium">for your business</h5> */}
        <div className="swiperPost_title_image" style={{backgroundImage:`url(${Review})`}}></div>
        <h5 className="h5_postlarge">Your protection is your success</h5>
        <div className="description">
          <h2 className="h2_postlarge">Our customers are saying</h2>
          <p className="p_postlarge">Ensured Compliance, guaranteed <span>customer satisfaction.</span></p>
        </div>
      </div>
      <div className="swiperPost_background">
        <div className="swiperPost_body">
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
            {users.map(user => (
              <SwiperSlide className="swiper_slidePost" key={user.id}>
                <div className="swiper_slide_main">
                  <div className="swiper_slide_image">
                    <img src={user.image} alt="Privacy Policy" />
                  </div>
                  <div className="swiper_slide_posts">
                    <h5>{user.name}</h5>
                    <p>{user.status}</p>
                  </div>
                </div>
                <div className="swiper_slide_post">
                  <h4>{user.review}</h4>
                  <div>
                    <div className="stars">
                      {renderStars(user.rating, user.id)}
                      <p>{user.rating}</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </>
  );
}

export default SwiperPost;
