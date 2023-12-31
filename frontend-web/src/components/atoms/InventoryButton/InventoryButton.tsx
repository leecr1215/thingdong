import React, { forwardRef } from 'react';
import type { ForwardedRef } from 'react';
import * as S from './InventoryButton.styles';

export interface InventoryButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  option?: 'activated' | 'deactivated';
  size?: 'large' | 'medium' | 'small' | 'extraSmall';
  $backgroundColor?: string;
  $fontWeight?: number;
  $isRoom: 'Y' | 'N';
}

const InventoryButton = forwardRef<HTMLButtonElement, InventoryButtonProps>(
  ({ option, size, $backgroundColor, $fontWeight, children, $isRoom, ...rest }, ref) => {
    return (
      <S.InventoryButton
        ref={ref}
        option={option}
        size={size}
        $backgroundColor={$backgroundColor}
        $fontWeight={$fontWeight}
        $isRoom={$isRoom}
        {...rest}
      >
        {children}
      </S.InventoryButton>
    );
  }
);

export default InventoryButton;