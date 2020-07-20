import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import styled from 'styled-components';
import '../App.css';
import '../carousel.css';
import logo from '../logo.svg';

const ImgCarousel = styled(Carousel)`
  margin: 0;
  width: 100vw;
  height: calc(100vh - 80px);
`;

const Image = styled.img`
  // max-height: 60vh;
  height: 80vh;
  width: 100%;
  object-fit: scale-down;
`;

const Photos = (props) => {
  console.warn({ props });
  console.warn(props.isMobile);
  const { isMobile, isWider } = props;
  const showThumbs = !isMobile;
  console.warn({ showThumbs });
  return (
    <div className='App'>
      <header className='App-header'>
        <Carousel
          className='carousel-main'
          infiniteLoop
          autoPlay
          showArrows={false}
          interval={3000}
          transitionTime={900}
          showThumbs={showThumbs}
          isMobile={isMobile}
          isWider={isWider}
          stopOnHover={showThumbs}
        >
          {props.images.map(indivImage => <img alt='' src={indivImage} />)}
        </Carousel>
      </header>
    </div>
  );
};

export default Photos;