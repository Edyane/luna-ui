import { ComponentProps } from 'react';
import { styled } from './styles';

export const Button = styled('button', {
    fontFamily: '$default',
    fontSize: '$sm',
    fontWeight: '$semibold',
    backgroundColor: '$luna600',
    borderRadius:'$md',
    padding: '$4 $6',
    border: 0,
    color: '$white',
    width: 'auto',
    radii: '$xs',
    
    variants: {
        type: {
            danger: {
                backgroundColor: '#C21700',
            },
            success: {
                backgroundColor: '#44C13C',
            },
        },
        size: {
            large: {
                fontSize: '$md',
                padding: '$4 $10', 
                fontWeight: '$bold',
            },
            small: {
                fontSize: '$xs',
                padding: '$3 $5',
            },
        },
    },
    
    //quando não for setado nenhum tipo específico
    // defaultVariants: {
    //     size: 'small',
    // },
});

export type ButtonProps = ComponentProps<typeof Button>