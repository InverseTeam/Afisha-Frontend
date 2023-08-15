
'use client';

import { FC, HTMLProps, useState } from 'react';
import { Button } from '@radix-ui/themes';
import styled, { css } from 'styled-components';

// IMPROVE: improve type for button props

interface MainButtonProps {
  width: 'small' | 'medium' | 'large' | 'fit-content';
  height: 'small' | 'medium' | 'large' | 'fit-content';
  color: string;
  isActive?: boolean,
  textColor: 'white' | 'black';
  onClick: () => void;
  children: React.ReactNode;
}


// TODO: добавить hover эффект

export const MainButton: FC<MainButtonProps> = ({ width, height, color, textColor, onClick, children }) => {
  //   console.log(color)
  const StyledButton = styled.button`
    background-color: ${color};
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

    border-radius: 15px;
    border: none;

    color: ${textColor === 'white' ? '#fff' : '#191919'};
    font-family: 'Mont', sans-serif;
    font-size: 16px;
    font-weight: 700;
    line-height: 100%;

    padding: 16px 48px;
    cursor: pointer;

    transition: all 0.2s;

    
  `;

  //   return <StyledButton style={{backgroundColor: color}}> Publish</StyledButton>;
  return <StyledButton onClick={() => onClick}>{children}</StyledButton>;
};
