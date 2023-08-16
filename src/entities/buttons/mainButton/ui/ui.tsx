import { FC } from 'react';
import styled from 'styled-components';

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

export const MainButton: FC<MainButtonProps> = ({
  width,
  height,
  bgColor,
  textColor,
  onClick,
  children,
  isActive = true,
}) => {
  const StyledButton = styled.button`
    background-color: ${isActive ? bgColor : '#F6F6F6'};

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
    border: 'none';

    color: ${isActive && textColor === 'white' ? '#fff' : '#222'};
    font-family: 'Mont', sans-serif;
    font-size: 16px;
    font-weight: ${isActive ? '700' : '500'};
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

  return <StyledButton onClick={onClick}>{children}</StyledButton>;
};
