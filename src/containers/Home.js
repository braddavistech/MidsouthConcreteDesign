import React from 'react';
import { Image } from 'react-bootstrap';
import '../App.css';
import styled from 'styled-components';

const Wrapper = styled.div`
`;

const ImageWrapper = styled.div`
  height: calc(100vh - 80px);
`;

const HomeImage = styled(Image)`
  border: none;
  border-radius: 0;
  ${({ mobile, isWider }) => mobile && !isWider ? `
      height: calc(100vh - 80px);
    `
    : `
      width: 100vw;
    `}
`;

const Div = styled.div`
  position: fixed;
  margin: 0;
  background-color: rgba(0, 0, 0, .3);
  width: 100%;
  height: calc(100% - 80px);
  min-width: 625px;
  min-height: 20vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const MainText = styled.p`
  margin: 0;
  font-size: ${({ mobile }) => mobile ? '6.5vw' : '45px'};
  font-weight: bolder;
`;

const SubText = styled.p`
  margin: 0;
  font-size: ${({ mobile }) => mobile ? '5.5vw' : '25px'};
  font-weight: bolder;
`;

const List = styled.ul`
  margin: 0;
  font-size: ${({ mobile }) => mobile ? '4.5vw' : '20px'};
  font-weight: bold;
  padding: 0;
  display: flex;
  flex-direction: ${({ mobile }) => mobile ? 'column' : 'row'};
  justify-content: space-evenly;
  ${({ mobile }) => !mobile && 'width: 100%;'}
`;

const ListItem = styled.li`
`;

const Home = (props) => {
  const { HomeImg, isMobile, isWider } = props;

  return (
    <Wrapper className="App" mobile={isMobile}>
      <header className="App-header">
        <ImageWrapper mobile={isMobile}>
          <HomeImage src={HomeImg} className="navbar-img" alt="Mid-South Concrete" mobile={isMobile} isWider={isWider}/>
        </ImageWrapper>
        <Div mobile={isMobile}>
          <MainText mobile={isMobile}>Mid-South Concrete Design</MainText>
          <SubText mobile={isMobile}>Specializing In:</SubText>
          <List mobile={isMobile}>
            <ListItem>Residential</ListItem>
            <ListItem>Commercial</ListItem>
            <ListItem>New Construction</ListItem>
            <ListItem>Additions</ListItem>
          </List>
        </Div>
      </header>
    </Wrapper>
  );
};

export default Home;