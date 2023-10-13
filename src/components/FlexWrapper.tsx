import styled from 'styled-components';

type Props = {
  direction?: 'row' | 'column';
  justifyContent?: 'flex-start' | 'center' | 'flex-end';
  alignItems?: 'flex-start' | 'center' | 'flex-end';
  wrap?: 'wrap' | 'nowrap';
};

export const FlexWrapper = styled.div<Props>`
  display: flex;
  flex-direction: ${props => props.direction || 'row'};
  justify-content: ${props => props.justifyContent || 'flex-start'};
  align-items: ${props => props.alignItems || 'stretch'};
  flex-wrap: ${props => props.wrap || 'nowrap'};
`;
