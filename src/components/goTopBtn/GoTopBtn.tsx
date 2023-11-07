import styled from 'styled-components';
import React, { useEffect, useState } from 'react';
import { FaRegArrowAltCircleUp } from '@react-icons/all-files/fa/FaRegArrowAltCircleUp';
import { theme } from '../../styles/Theme';
import { Link } from 'react-scroll';
import { CgArrowUpR } from '@react-icons/all-files/cg/CgArrowUpR';

export const GoTopBtn = () => {
  const [isVisible, setIsVisible] = useState(false);

  const onScrollHandler = () => {
    if (window.scrollY > 100) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', onScrollHandler);
    return () => {
      window.removeEventListener('scroll', onScrollHandler);
    };
  }, []);

  return (
    <StyledGoTopBtn>
      {isVisible && (
        <Link offset={-40} to={'header'} smooth={true}>
          <CgArrowUpR size={40} color={theme.colors.lightFont} />
        </Link>
      )}
    </StyledGoTopBtn>
  );
};

const StyledGoTopBtn = styled.button`
  position: fixed;
  bottom: 30px;
  right: 30px;
  z-index: 10;
  cursor: pointer;

  &:active {
    opacity: 0.7;
  }
`;
