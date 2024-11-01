import React from 'react';
import { HeroData } from 'src/client/__mocks__/Main/MainHero';

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero__images">
        {HeroData.map((el) => {
          return (
            <div key={el.id}>
              <img src={el.img} alt="" />
            </div>
          );
        })}
      </div>

      <h2 className="hero__title">
        Создай свой <span className='hero__title_mod'>дизайн</span>
        <span>
          <svg
            width="38"
            height="16"
            viewBox="0 0 38 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M37.7071 8.70711C38.0976 8.31659 38.0976 7.68342 37.7071 7.2929L31.3431 0.928935C30.9526 0.538411 30.3195 0.53841 29.9289 0.928935C29.5384 1.31946 29.5384 1.95262 29.9289 2.34315L35.5858 8L29.9289 13.6569C29.5384 14.0474 29.5384 14.6805 29.9289 15.0711C30.3195 15.4616 30.9526 15.4616 31.3431 15.0711L37.7071 8.70711ZM-8.74228e-08 9L37 9L37 7L8.74228e-08 7L-8.74228e-08 9Z"
              fill="#057FC7"
            />
          </svg>
        </span>
      </h2>
    </div>
  );
};

export default Hero;
