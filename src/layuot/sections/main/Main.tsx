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
              Building designs that work purely driven by Passion for art and Design
            </BigText>
            <SmallText>
              Labore accusam in modo compungi, iacentem substantiales um se sed esse haec. Possit
              facis qui a a a patriam Dianae sibi aperit honestate doctrinam
            </SmallText>
          </TextWrapper>
          <Photo src={my_photo} alt={'author_photo'} />
        </FlexWrapper>
      </Container>
    </StyledMain>
  );
};

const StyledMain = styled.div`
  //min-height: 882px;
  height: 95vh;
  width: 100%;
  //display: flex;
  //align-items: center;
`;

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 829px;
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
  position: absolute;
  right: 0;
  z-index: -1;
  transform: translateX(30%);
`;
