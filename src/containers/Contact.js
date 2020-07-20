import React from 'react';
import styled from 'styled-components';

const Div = styled.div`
  position: fixed;
  margin: 0;
  background-color: rgba(0, 0, 0, .3);
  width: 90vw;
  min-width: 625px;
  min-height: 20vh;
  padding-top: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  ${({ mobile }) => mobile && 'line-height: 1.15;'}
`;

const MainText = styled.p`
  margin: 0;
  font-size: ${({ mobile }) => mobile ? '5vw' : '4vw'};
  width: ${({ mobile }) => mobile ? '100vw' : '100%'};
  font-weight: bolder;
`;

const SubText = styled.p`
  margin: 0;
  font-size: ${({ mobile }) => mobile ? '4vw' : '1em'};
  font-weight: bolder;
`;

const Email = styled.a`
  font-weight: bolder;
  color: white;
  cursor: pointer;
  font-size: ${({ mobile }) => mobile ? '7vw' : '30px'};
  margin: ${({ mobile }) => mobile ? '20px' : '0'};
`;

const Contact = (props) => {
  const { isMobile } = props;

  return (
    <div className="App">
      <header className="App-header">
        <Div mobile={isMobile}>
          <MainText mobile={isMobile}>Mid-South Concrete and Construction</MainText>
          <SubText mobile={isMobile}>2300 8th Avenue South</SubText>
          <SubText mobile={isMobile}>Apt 506</SubText>
          <SubText mobile={isMobile}>Nashville, TN 37204</SubText>
          <SubText mobile={isMobile}>(615) 414-8206</SubText>
          <Email href='mailto: shanecliddell@gmail.com' mobile={isMobile}>Email Us</Email>
        </Div>
      </header>
    </div>
  );
};

export default Contact;