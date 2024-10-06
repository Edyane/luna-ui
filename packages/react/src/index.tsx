import { ComponentProps } from 'react';
import { styled } from './styles';


export const Button = styled('button', {
    fontFamily: '$default',
    fontSize: '$md',
    fontWeight: '$medium',
    backgroundColor: '$luna600',
    borderRadius:'$md',
    padding: '$8 $12',
    border: 0,
    color: '$white',
    width: 'auto',
    radii: '$md',
    
    variants: {
        type: {
            primary: {
                padding: '$4 $12',   
            },
            danger: {
                backgroundColor: '#C21700'
            },
            success: {
                backgroundColor: '#44C13C'
            },
        },
        size: {
            large: {
                fontSize: '$1.125rem',
                padding: '$4 $16', 
                fontWeight: '$bold',
            },
            small: {
                fontSize: '$sm',
                padding: '$2 $4',
                fontWeight: '$medium',
            },
        },
    },
    
    //quando não for setado nenhum tipo específico
    // defaultVariants: {
    //     size: 'small',
    // },
});

export type ButtonProps = ComponentProps<typeof Button>