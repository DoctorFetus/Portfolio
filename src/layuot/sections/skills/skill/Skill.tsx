import { Icon } from '../../../../components/icon/Icon';
import { FlexWrapper } from '../../../../components/FlexWrapper';
import styled from 'styled-components';

type Props = {
  title: string;
  icon?: string;
};
export const Skill = ({ title, icon }: Props) => {
  return (
    <StyledSkill>
      <FlexWrapper alignItems={'center'} justifyContent={'center'} direction={'column'}>
        <Icon iconId={icon || 'react'} />
        <SkillText>{title}</SkillText>
      </FlexWrapper>
    </StyledSkill>
  );
};

const SkillText = styled.p`
  margin: 0;
`;

const StyledSkill = styled.div`
  margin-top: 60px;
  width: 30%;
`;
