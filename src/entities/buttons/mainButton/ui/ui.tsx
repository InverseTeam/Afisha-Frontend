'use client';

import { FC, HTMLProps, useState } from 'react';
import { Button } from '@radix-ui/themes';
import styled, { css } from 'styled-components';

// IMPROVE: improve type for button props

interface MainButtonProps {
  width: 'small' | 'medium' | 'large' | 'fit-content';
  height: 'small' | 'medium' | 'large' | 'fit-content';
  color: string;
  isActive?: boolean;
  textColor: 'white' | 'black';
  onClick: () => void;
  children: React.ReactNode;
}


export const MainButton: FC<MainButtonProps> = ({
  width,
  height,
  color,
  textColor,
  onClick,
  children,
  isActive = true,
}) => {
  //   console.log(color)
  const StyledButton = styled.button`
    background-color: ${isActive ? color : '#F6F6F6'};

    width: ${
      width === 'small'
        ? '280px'
        : width === 'medium'
        ? '320px'
        : width === 'large'
        ? '438px'
        : width === 'fit-content'
        ? '100%'
        : '100%'
    };
    height: ${
      height === 'small'
        ? '32px'
        : height === 'medium'
        ? '40px'
        : height === 'large'
        ? '48px'
        : height === 'fit-content'
        ? '100%'
        : '100%'
    };

    cursor: ${isActive ? 'pointer' : 'not-allowed'};
    border-radius: 15px;
    border:  'none';

    color: ${isActive && textColor === 'white' ? '#fff' : '#191919'};
    font-family: 'Mont', sans-serif;
    font-size: 16px;
    font-weight: 700;
    line-height: 100%;

    padding: 16px 48px;

    transition: all 0.2s;
    button-disabled

    box-shadow: 0 2px 10px var(--black-a7);

    &:hover {
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