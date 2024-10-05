import { ComponentProps } from 'react';
import { styled } from './styles';


export const Button = styled('button', {
    fontFamily: '$default',
    fontSize: '$md',
    fontWeight: '$medium',
    backgroundColor: '$luna600',
    borderRadius:'$md',
    padding: '$4',
    border: 0,
    color: '$white',
    width: '100px',
    radii: '$md',
    
    variants: {
        size: {
            small: {
                fontSize: '$sm',
                padding: '$2 $4',
            },
            big: {
                fontSize: '16',
                padding: '$3 $6', 
            },
        },
    },
    
    //quando não for setado nenhum tipo específico
    defaultVariants: {
        size: 'small',
    },
});

export type ButtonProps = ComponentProps<typeof Button>