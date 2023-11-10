import styled from 'styled-components';
import { Container } from '../../../components/container/Container';
import { theme } from '../../../styles/Theme';
import { Icon } from '../../../components/icon/Icon';
import emailjs from '@emailjs/browser';
import { ElementRef, FormEvent, useRef } from 'react';

export const Contacts = () => {
  const form = useRef<ElementRef<'form'>>(null);
  const sendEmail = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!form.current) return;
    emailjs.sendForm('service_1qvoyzi', 'template_0z0vt46', form.current, '0SSLacrgNc9FBBP7K').then(
      result => {
        console.log(result.text);
      },
      error => {
        console.log(error.text);
      }
    );
    if (e.currentTarget instanceof HTMLFormElement) {
      e.currentTarget.reset();
    }
  };

  return (
    <StyledContacts>
      <Container>
        <Wrapper>
          <Text>
            <Phrase>
              I’m available for a exciting new project. <br /> <span>Let’s Talk</span>.
            </Phrase>
            <Information>
              You can send me a message here OR contact me on any social networks.
            </Information>
          </Text>
          <StyledForm ref={form} onSubmit={sendEmail}>
            <Field required name={'user_name'} placeholder={'Name *'} />
            <Field required name={'user_email'} placeholder={'Email Address *'} />
            <Field required name={'user_phone'} placeholder={'Phone *'} />
            <Field required name={'message'} placeholder={'Your message'} as={'textarea'} />
            <StyledButton>
              Submit{' '}
              <Icon iconId={'submitArrow'} viewBox={'0 0 14 10'} width={'14'} height={'10'} />
            </StyledButton>
          </StyledForm>
        </Wrapper>
      </Container>
    </StyledContacts>
  );
};

const StyledContacts = styled.section`
  min-height: 700px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

const Wrapper = styled.div`
  display: flex;
  gap: 20%;
  justify-content: center;
  align-items: center;

  @media ${theme.media.tablet} {
    flex-direction: column;
    gap: 50px;
  }
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

  @media ${theme.media.tablet} {
    font-size: 30px;
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

  @media ${theme.media.tablet} {
    font-size: 15px;
    line-height: 21px;
    margin-top: 15px;
  }
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 6px;
  max-width: 470px;
  width: 100%;
  justify-content: center;

  textarea {
    resize: none;
    height: 135px;
  }
`;

const Field = styled.input`
  width: 100%;
  background-color: ${theme.colors.darkFont};
  border: none;
  padding: 15px;
  color: ${theme.colors.lightFont};
  font-family: Roboto, sans-serif;
  font-size: 15px;
  font-style: normal;
  font-weight: 400;
  line-height: 101.5%;
  border-radius: 0;

  &:focus-visible {
    outline: 1px solid;
  }
`;

const StyledButton = styled.button`
  width: 100%;
  background-color: ${theme.colors.accent};
  font-family: Roboto, sans-serif;
  color: ${theme.colors.light};
  font-size: 12px;
  font-weight: 700;
  line-height: 101.5%;
  letter-spacing: 1.2px;
  text-transform: uppercase;
  padding: 18px;
  display: flex;
  justify-content: space-between;
  cursor: pointer;
`;
