import styled from 'styled-components';
import { FlexWrapper } from '../../../components/FlexWrapper';

export const Main = () => {
  return (
    <StyledMain>
      <FlexWrapper alignItems={'center'} justifyContent={'center'}>
        <FlexWrapper direction={'column'}>
          <span>Building designs that work purely driven by Passion for art and Design</span>
          <span>
            Labore accusam in modo compungi, iacentem substantiales um se sed esse haec. Possit
            facis qui a a a patriam Dianae sibi aperit honestate doctrinam
          </span>
        </FlexWrapper>
        <Photo />
      </FlexWrapper>
    </StyledMain>
  );
};

const StyledMain = styled.div`
  //min-height: 100vh;
  background-color: #e5c5c5;
`;

const Photo = styled.div`
  background-color: #934ece;
  width: 400px;
  height: 600px;
`;
