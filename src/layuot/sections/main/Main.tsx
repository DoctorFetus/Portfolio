import styled from 'styled-components';

import my_photo from '../../../assets/images/my_photo.png';
import { Container } from '../../../components/container/Container';
import { theme } from '../../../styles/Theme';

export const Main = () => {
  return (
    <StyledMain>
      <Container>
        <Wrapper>
          <TextWrapper>
            <BigText>
              Creating web solutions fueled by a strong passion for frontend development and design
            </BigText>
            <SmallText>
              I'm a frontend developer, specializing in crafting React-based Single Page
              Applications
            </SmallText>
          </TextWrapper>
          <Photo src={my_photo} alt={'author_photo'} />
        </Wrapper>
      </Container>
    </StyledMain>
  );
};

const StyledMain = styled.div`
  //height: 95vh;

  @media ${theme.media.tablet} {
    min-height: 100vh;
  }

  @media ${theme.media.tablet} {
    height: 100vh;
  }
`;

const Wrapper = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: end;
  justify-content: end;
  position: relative;
`;

const TextWrapper = styled.div`
  position: absolute;
  display: flex;
  left: 0;
  height: 100%;
  justify-content: center;
  flex-direction: column;
  max-width: 600px;
  gap: 35px;

  @media ${theme.media.tablet} {
    gap: 15px;
    align-items: start;
    justify-content: start;
    top: 10%;
  }
`;

const BigText = styled.span`
  font-size: 90px;
  font-weight: 900;
  line-height: 100%; /* 110px */
  letter-spacing: -4.4px;
  color: ${theme.colors.light};

  @media ${theme.media.tablet} {
    font-size: 35px;
    letter-spacing: -1px;
  }
`;

const SmallText = styled.span`
  color: ${theme.colors.light};
  font-size: 16px;
  font-weight: 400;
  line-height: 27px;
  max-width: 728px;

  @media ${theme.media.tablet} {
    font-size: 15px;
  }
`;

const Photo = styled.img`
  height: 100%;
  @media ${theme.media.tablet} {
    height: auto;
    width: 100%;
  }
`;
