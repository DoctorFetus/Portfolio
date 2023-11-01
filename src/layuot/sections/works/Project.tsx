import styled from 'styled-components';
import projectTemplate from '../../../assets/images/projects/social-network.png';
import { theme } from '../../../styles/Theme';
import { FlexWrapper } from '../../../components/FlexWrapper';
import React from 'react';
import { BsLink45Deg } from '@react-icons/all-files/bs/BsLink45Deg';
import { AiFillGithub } from '@react-icons/all-files/ai/AiFillGithub';

type Props = {
  title: string;
  img?: string;
  description?: string;
  previewLink?: string;
  codeLink?: string;
};
export const Project = ({ title, img, description, previewLink, codeLink }: Props) => {
  return (
    <StyledProject>
      <FlexWrapper direction={'column'} alignItems={'center'}>
        <Image src={img || projectTemplate} alt={'project'} />
        <Title>{title}</Title>
        <Description>{description}</Description>
        <LinksWrapper gap={'48px'}>
          <StyledLink href={previewLink} target={'_blank'}>
            <BsLink45Deg size={20} />
            Live Preview
          </StyledLink>
          <StyledLink href={codeLink} target={'_blank'}>
            <AiFillGithub size={20} />
            View Code
          </StyledLink>
        </LinksWrapper>
      </FlexWrapper>
    </StyledProject>
  );
};

const StyledProject = styled.div`
  width: 45%;
  margin: 30px;
  min-height: 565px;
  position: relative;

  @media ${theme.media.mobile} {
    width: 100%;
  }
`;

const Image = styled.img`
  max-width: 552px;
  width: 100%;
  min-height: 320px;
  object-fit: contain;
  margin: 10px;
  border: 1px ${theme.colors.darkFont} solid;

  @media ${theme.media.mobile} {
    max-width: 376px;
    min-height: 0;
    object-fit: cover;
    border: none;
  }
`;

const Title = styled.h4`
  color: ${theme.colors.darkFont};
  font-size: 21px;
  font-style: normal;
  font-weight: 600;
  line-height: 27px;
  margin-top: 8px;
`;

const Description = styled.p`
  margin-top: 19px;
  text-align: justify;
  color: ${theme.colors.lightFont};
  font-size: 19px;
  font-style: normal;
  line-height: 27px;
  max-width: 600px;
`;

const LinksWrapper = styled(FlexWrapper)`
  margin-top: 20px;
  position: absolute;
  bottom: 5px;

  @media ${theme.media.mobile} {
    position: inherit;
    margin-top: 30px;
  }
`;

const StyledLink = styled.a`
  display: flex;
  align-items: center;
  gap: 6px;
  letter-spacing: 1px;
  text-decoration: underline;
  cursor: pointer;
`;
