import { FC } from 'react';
import styled from 'styled-components';

interface IconButtonProps {
  height: string;
  width: string;
  color: string;
  isActive?: boolean;
  onClick: () => void;
  iconSrc: string;
  rounded?: boolean;
}
export const IconButton: FC<IconButtonProps> = ({
  height,
  width,
  onClick,
  iconSrc,
  color,
  isActive = true,
  rounded = false,
}) => {
  const StyledIconButton = styled.button`
    display: flex;
    width: ${width};
    height: ${height};
    padding: 12px;
    justify-content: center;
    align-items: center;
    flex-shrink: 0;

    background: ${color};

    cursor: ${isActive ? 'pointer' : 'not-allowed'};
    border-radius: 15px;
    border-radius: ${rounded ? '100px' : '15px'}

    &:hover {
      filter: ${isActive ? 'brightness(90%)' : 'brightness(100%)'};
    }

    &:active {
      transform: ${isActive ? 'scale(0.97)' : 'scale(1)'};
      filter: ${isActive ? 'brightness(85%)' : 'brightness(100%)'};
    }
  `;

  const StyledIcon = styled.i`
    background-image: url(${iconSrc});
    background-position: center;
    background-size: contain;
    background-repeat: no-repeat;
    width: 24px;
    height: 24px;
    transition: 0.2s;
  `;

  return (
    <StyledIconButton onClick={onClick}>
      <StyledIcon />
    </StyledIconButton>
  );
};
