import styled from 'styled-components';
import { FlexWrapper } from '../../../components/FlexWrapper';
import { Container } from '../../../components/container/Container';
import { theme } from '../../../styles/Theme';

export const Contacts = () => {
  return (
    <StyledContacts>
      <Container>
        <FlexWrapper gap={'304px'} justifyContent={'center'}>
          <Text>
            <Phrase>
              I’m available for a exciting new project. <span>Let’s Talk</span>.
            </Phrase>
            <Information>
              You can send me a message here OR contact me on any social networks. We can grab a
              coffee and talk it over a phone.
            </Information>
          </Text>
          <StyledForm>
            <Field placeholder={'Name'} />
            <Field placeholder={'Email Address'} />
            <Field placeholder={'Address'} />
            <Field placeholder={'Phone'} />
            <Field placeholder={'Your message'} as={'textarea'} />
            <StyledButton>Submit</StyledButton>
          </StyledForm>
        </FlexWrapper>
      </Container>
    </StyledContacts>
  );
};

const StyledContacts = styled.section`
  //background-color: #8d5757;
  min-height: 700px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Text = styled.div`
  max-width: 464px;
`;

const Phrase = styled.h4`
  color: #fff;
  font-size: 48px;
  font-style: normal;
  font-weight: 900;
  line-height: normal;

  span {
    text-decoration: underline;
  }
`;

const Information = styled.p`
  color: #ccc;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 27px;
  margin-top: 30px;
  max-width: 421px;
`;

const StyledForm = styled.form`
  //display: flex;
  max-width: 470px;
  width: 100%;

  input {
    max-width: 229px;
    width: 100%;
    margin: 3px;
  }

  textarea {
    width: 100%;
    height: 135px;
  }
  button {
    width: 100%;
    background-color: ${theme.colors.accent};
    color: ${theme.colors.light};
  }
`;

const Field = styled.input``;

const StyledButton = styled.button``;
