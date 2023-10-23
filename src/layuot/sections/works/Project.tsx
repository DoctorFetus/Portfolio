import styled from 'styled-components';
import projectTemplate from '../../../assets/images/projects/social-network.png';
import { SkillText } from '../../../components/SkillText';
import { theme } from '../../../styles/Theme';

type Props = {
  title: string;
  img?: string;
  description?: string;
};
export const Project = ({ title, img, description }: Props) => {
  return (
    <StyledProject>
      <Image src={img || projectTemplate} alt={'project'} />
      <Title>{title}</Title>
      <Description>{description}</Description>
    </StyledProject>
  );
};

const StyledProject = styled.div`
  width: 45%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 30px;
`;

const Image = styled.img`
  width: 552px;
  height: 320px;
  object-fit: contain;
  margin: 10px;
  border: 1px ${theme.colors.darkFont} solid;
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
