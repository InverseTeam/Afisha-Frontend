'use client';

import { FC, HTMLProps, useState } from 'react';
import styled, { css } from 'styled-components';

// IMPROVE: improve type for button props

interface MainButtonProps {
  isActive?: boolean;
  onClick: () => void;
  children: React.ReactNode;
}

export const LinkButton: FC<MainButtonProps> = ({ onClick, children, isActive = false }) => {
  const StyledButton = styled.button`
    background-color: transparent;

    cursor: pointer;

    color: ${isActive ? '#7AAC5C' : '#222'};
    font-family: 'Mont', sans-serif;
    font-size: 17px;
    font-weight: ${isActive ? '700' : '500'};
    line-height: 100%;

    transition: all 0.2s;
    button-disabled &:hover {
      filter: ${isActive ? 'brightness(90%)' : 'brightness(100%)'};
    }

    &:active {
      transform: ${isActive ? 'scale(0.99)' : 'scale(1)'};
      filter: ${isActive ? 'brightness(85%)' : 'brightness(100%)'};
    }
  `;

  return <StyledButton onClick={onClick}>{children}</StyledButton>;
};
