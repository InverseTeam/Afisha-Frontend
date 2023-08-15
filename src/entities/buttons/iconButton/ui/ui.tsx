'use client';

import { FC } from 'react';
import styled, { css } from 'styled-components';

interface IconButtonProps {
  height: string;
  width: string;
  color: string;
  onClick: () => void;
  iconSrc: string;
}

export const IconButton: FC<IconButtonProps> = ({ height, width, onClick, iconSrc, color }) => {
  const StyledIconButton = styled.button`
    display: flex;
    width: ${width};
    height: ${height};
    padding: 12px;
    justify-content: center;
    align-items: center;
    flex-shrink: 0;

    border-radius: 15px;
    background: ${color};

    cursor: pointer;

    &:hover {
      background: #528d3d;
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
    <StyledIconButton>
      <StyledIcon />
    </StyledIconButton>
  );
};
