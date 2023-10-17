import styled from 'styled-components';
import projectTemplate from '../../../assets/images/projects/social-network.png';

type Props = {
  title: string;
  img?: string;
  description?: string;
};
export const Project = ({ title, img, description }: Props) => {
  return (
    <StyledProject>
      <Image src={img || projectTemplate} alt={'project'} />
      <Title>{title || 'Social-network'}</Title>
      <Description>
        {description || 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'}
      </Description>
    </StyledProject>
  );
};

const StyledProject = styled.div`
  width: 30%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Image = styled.img`
  width: 552px;
  height: 388px;
  object-fit: contain;
`;

const Title = styled.h3`
  margin: 0 29px 0 0;
  font-size: 20px;
  font-weight: 600;
`;

const Description = styled.p`
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: 0.64px;
`;
