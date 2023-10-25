import styled from 'styled-components';

import my_photo from '../../../assets/images/my_photo.png';
import { Container } from '../../../components/container/Container';
import { theme } from '../../../styles/Theme';
import { FlexWrapper } from '../../../components/FlexWrapper';

export const Main = () => {
  return (
    <StyledMain>
      <Container style={{ position: 'relative' }}>
        <FlexWrapper alignItems={'center'} style={{ height: '100%' }}>
          <TextWrapper>
            <BigText>
              Creating web solutions fueled by a strong passion for frontend development and design
            </BigText>
            <SmallText>
              I'm a frontend developer, specializing in crafting React-based Single Page
              Applications
            </SmallText>
          </TextWrapper>
          {/*<Photo src={my_photo} alt={'author_photo'} />*/}
        </FlexWrapper>
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
`;

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  //max-width: 829px;
  max-width: 900px;
  gap: 35px;
`;

const BigText = styled.span`
  font-size: 110px;
  font-weight: 900;
  line-height: 100%; /* 110px */
  letter-spacing: -4.4px;
  color: ${theme.colors.light};
`;

const SmallText = styled.span`
  color: ${theme.colors.light};
  font-size: 18px;
  font-weight: 400;
  line-height: 27px;
  max-width: 728px;
`;

const Photo = styled.img`
  height: 100%;
  //width: 100%;
  position: absolute;
  right: 0;
  z-index: -1;
  transform: translateX(20%);
`;
