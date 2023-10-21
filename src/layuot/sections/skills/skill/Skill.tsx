import { Icon } from '../../../../components/icon/Icon';
import { FlexWrapper } from '../../../../components/FlexWrapper';
import styled from 'styled-components';
import { theme } from '../../../../styles/Theme';

type Props = {
  title: string;
  icon?: string;
};
export const Skill = ({ title, icon }: Props) => {
  return (
    <StyledSkill>
      <FlexWrapper
        alignItems={'center'}
        justifyContent={'center'}
        direction={'column'}
        gap={'10px'}
      >
        <Icon iconId={icon || 'react'} />
        <SkillText>{title}</SkillText>
      </FlexWrapper>
    </StyledSkill>
  );
};

const SkillText = styled.p`
  color: ${theme.colors.dark};
  font-size: 13px;
  font-weight: 700;
  line-height: 27px;
  letter-spacing: 3px;
  text-transform: uppercase;
`;

const StyledSkill = styled.div`
  margin-top: 60px;
  width: 20%;
`;
