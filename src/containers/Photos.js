import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import styled from 'styled-components';
import '../App.css';
import '../carousel.css';
import logo from '../logo.svg';

const ImgCarousel = styled(Carousel)`
  margin: 0;
  ${({ isMobile, isWider }) => !isMobile ? `
    width: 95vw;
    max-height: 90vh;
  ` : `
    width: 100vw;
    height: calc(100vh - 80px);
  `}
`;

const Image = styled.img`
  // max-height: 60vh;
  height: 80vh;
  width: 100%;
  object-fit: scale-down;
`;

const Photos = (props) => {
  return (
    <div className='App'>
      <header className='App-header'>
        <ImgCarousel
          infiniteLoop
          autoPlay
          showArrows={false}
          interval={3000}
          transitionTime={900}
          showThumbs={!props.isMobile}
          isMobile={props.isMobile}
          isWider={props.isWider}
          stopOnHover={!props.isMobile}
        >
          {props.images.map(indivImage => <div>
            <Image alt='' src={indivImage} />
          </div>)}
        </ImgCarousel>
      </header>
    </div>
  );
};

export default Photos;