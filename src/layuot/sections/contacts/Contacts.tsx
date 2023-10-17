import styled from 'styled-components';
import { FlexWrapper } from '../../../components/FlexWrapper';

export const Contacts = () => {
  return (
    <StyledContacts>
      <div>
        <Phrase>I’m available for a exciting new project. Let’s Talk.</Phrase>
        <Information>
          You can send me a message here OR contact me on any social networks. We can grab a coffee
          and talk it over a phone.
        </Information>
      </div>
      <StyledForm>
        <Field placeholder={'Name'} />
        <Field placeholder={'Email Address'} />
        <Field placeholder={'Address'} />
        <Field placeholder={'Phone'} />
        <Field placeholder={'Your message'} as={'textarea'} />
        <StyledButton>Submit</StyledButton>
      </StyledForm>
    </StyledContacts>
  );
};

const StyledContacts = styled.section`
  background-color: #8d5757;
  min-height: 700px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Phrase = styled.h4``;

const Information = styled.p``;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
`;

const Field = styled.input``;

const StyledButton = styled.button``;
