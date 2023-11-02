import styled from 'styled-components';

import my_photo from '../../../assets/images/my_photo.png';
import { Container } from '../../../components/container/Container';
import { theme } from '../../../styles/Theme';
import { FlexWrapper } from '../../../components/FlexWrapper';

export const Main = () => {
  return (
    <StyledMain>
      <Container style={{ position: 'relative' }}>
        <TextWrapper>
          <BigText>
            Creating web solutions fueled by a strong passion for frontend development and design
          </BigText>
          <SmallText>
            I'm a frontend developer, specializing in crafting React-based Single Page Applications
          </SmallText>
        </TextWrapper>
        {/*<Photo src={my_photo} alt={'author_photo'} />*/}
      </Container>
    </StyledMain>
  );
};

const StyledMain = styled.div`
  height: 95vh;
  background-image: url(${my_photo});
  background-position: center; /* Центрируем изображение по горизонтали и вертикали */
  background-size: 40%; /* Устанавливаем размер изображения */
  background-repeat: no-repeat; /* Запрещаем повтор изображения */
  background-position-x: 80%;
  background-position-y: 100%;

  @media ${theme.media.tablet} {
    background-size: 100%; /* Устанавливаем размер изображения */
    background-position-x: 50%;
    background-position-y: 100%;
  }
`;

const TextWrapper = styled.div`
  display: flex;
  height: 100%;
  justify-content: center;
  flex-direction: column;
  max-width: 900px;
  gap: 35px;

  @media ${theme.media.tablet} {
    gap: 15px;
    align-items: start;
    justify-content: start;
    margin-top: 20%;
  }
`;

const BigText = styled.span`
  font-size: 90px;
  font-weight: 900;
  line-height: 100%; /* 110px */
  letter-spacing: -4.4px;
  color: ${theme.colors.light};

  @media ${theme.media.tablet} {
    font-size: 40px;
    letter-spacing: -1px;
  }
`;

const SmallText = styled.span`
  color: ${theme.colors.light};
  font-size: 18px;
  font-weight: 400;
  line-height: 27px;
  max-width: 728px;

  @media ${theme.media.tablet} {
    font-size: 15px;
  }
`;

const Photo = styled.img`
  height: 100%;
  //width: 100%;
  position: absolute;
  right: 0;
  z-index: -1;
  transform: translateX(20%);
`;
