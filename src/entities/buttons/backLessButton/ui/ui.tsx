'use client';

import { FC, HTMLProps, useState } from 'react';
import { Button } from '@radix-ui/themes';
import styled, { css } from 'styled-components';

// IMPROVE: improve type for button props

interface MainButtonProps {
  width: 'small' | 'medium' | 'large' | 'fit-content';
  height: 'small' | 'medium' | 'large' | 'fit-content';
  bgColor: string;
  isActive?: boolean;
  textColor: 'white' | 'black';
  onClick: () => void;
  children: React.ReactNode;
}

export const BackLessButton: FC<MainButtonProps> = ({
  width,
  height,
  bgColor,
  textColor,
  onClick,
  children,
  isActive = true,
}) => {
  //   console.log(color)
  const StyledButton = styled.button`
    background-color: transparent;

    width: ${width === 'small'
      ? '280px'
      : width === 'medium'
      ? '320px'
      : width === 'large'
      ? '438px'
      : width === 'fit-content'
      ? '100%'
      : '100%'};
    height: ${height === 'small'
      ? '32px'
      : height === 'medium'
      ? '40px'
      : height === 'large'
      ? '48px'
      : height === 'fit-content'
      ? '100%'
      : '100%'};

    cursor: ${isActive ? 'pointer' : 'not-allowed'};
    border-radius: 15px;
    border: 2px solid #7AAC5C;

    color: ${isActive && textColor === 'white' ? '#7AAC5C' : '#fff'};
    font-family: 'Mont', sans-serif;
    font-size: 16px;
    font-weight: ${isActive ? '500' : '500'};
    line-height: 100%;

    padding: 16px 48px;

    transition: all 0.2s;
    button-disabled &:hover {
      filter: ${isActive ? 'brightness(90%)' : 'brightness(100%)'};
    }

    &:active {
      transform: ${isActive ? 'scale(0.99)' : 'scale(1)'};
      filter: ${isActive ? 'brightness(85%)' : 'brightness(100%)'};
    }
  `;

  //   return <StyledButton style={{backgroundColor: color}}> Publish</StyledButton>;
  return <StyledButton onClick={onClick}>{children}</StyledButton>;
};
