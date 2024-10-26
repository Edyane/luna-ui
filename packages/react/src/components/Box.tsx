import { ComponentProps, ElementType } from 'react';
import { styled } from '../styles';

export const Box = styled('div', {
    width: '620px',
    padding: '$6',
    backgroundColor: '$gray800',
    borderRadius: '$md',
    border: '1px solid $luna600',
})

Box.displayName = 'Box'

export interface BoxProps extends ComponentProps<typeof Box> {
    as?: ElementType
};