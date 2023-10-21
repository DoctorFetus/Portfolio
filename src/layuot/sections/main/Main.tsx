import styled from 'styled-components';
import { FlexWrapper } from '../../../components/FlexWrapper';

import my_photo from '../../../assets/images/my_photo.png';
import { Container } from '../../../components/container/Container';
import { theme } from '../../../styles/Theme';

export const Main = () => {
  return (
    <StyledMain>
      <Container style={{ position: 'relative' }}>
        <TextWrapper>
          <BigText>Building designs that work purely driven by Passion for art and Design</BigText>
          <SmallText>
            Labore accusam in modo compungi, iacentem substantiales um se sed esse haec. Possit
            facis qui a a a patriam Dianae sibi aperit honestate doctrinam
          </SmallText>
        </TextWrapper>
        <Photo src={my_photo} alt={'author_photo'} />
      </Container>
    </StyledMain>
  );
};

const StyledMain = styled.div`
  //position: relative;
  min-height: 867px;
  width: 100%;
  display: flex;
  align-items: center;
`;

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 829px;
  gap: 35px;
`;

const BigText = styled.span`
  font-size: 110px;
  //font-style: normal;
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
  position: absolute;
  //height: 876px;
  right: 0;
  z-index: -1;
  bottom: -200px;
  left: 700px;
  //top: -10px;
`;
