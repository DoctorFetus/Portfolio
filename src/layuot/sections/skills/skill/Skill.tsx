import { Icon } from '../../../../components/icon/Icon';
import { FlexWrapper } from '../../../../components/FlexWrapper';
import styled from 'styled-components';
import React from 'react';
import { SkillText } from '../../../../components/SkillText';
import { theme } from '../../../../styles/Theme';
import { AttentionSeeker, Fade } from 'react-awesome-reveal';

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

const StyledSkill = styled.div`
  margin-top: 60px;
  width: 20%;

  @media ${theme.media.mobile} {
    margin-top: 40px;
    width: 50%;
  }
`;
