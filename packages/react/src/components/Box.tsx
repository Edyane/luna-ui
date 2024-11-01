import { ComponentProps } from 'react';
import { styled } from '../styles';

export const Box = styled('div', {
    width: '420px',
    padding: '$6',
    backgroundColor: '$gray800',
    borderRadius: '$sm',
    border: '1px solid $gray600',
    margin: '25px',
});

export type BoxProps = ComponentProps<typeof Box>

Box.displayName = 'Box';