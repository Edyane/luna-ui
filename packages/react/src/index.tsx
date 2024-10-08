import { ComponentProps } from 'react';
import { styled } from './styles';

export const Button = styled('button', {
    fontFamily: '$default',
    fontSize: '$sm',
    fontWeight: '$medium',
    backgroundColor: '$luna600',
    borderRadius:'$xs',
    padding: '$4 $6',
    border: 0,
    color: '$white',
    width: 'auto',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease, color 0.3s ease',
    // '&:hover': {
    //     backgroundColor: '#4545457a'
    // },
    
    variants: {
        type: {
            second: {
                backgroundColor: '$luna400',
            },
            tertiary: {
                backgroundColor: '$white',
                color: '$luna800',
                border: '1px solid $luna800'
            },
            danger: {
                backgroundColor: '$lunaRed',
            },
            success: {
                backgroundColor: '$lunaGreen',
            },
            primaryRound: {
                borderRadius:'$xg',
            },
            round: {
                backgroundColor: '$luna100',
                borderRadius:'$xg',
                border: '1px solid $luna300',
                color: '$luna500'
            },
        },
        // size: {
        //     large: {
        //         fontSize: '$md',
        //         padding: '$4 $10', 
        //         fontWeight: '$bold',
        //     },
        //     small: {
        //         fontSize: '$xs',
        //         padding: '$3 $5',
        //     },
        // },
    },
    
    //quando não for setado nenhum tipo específico
    // defaultVariants: {
    //     size: 'small',
    // },
});

export type ButtonProps = ComponentProps<typeof Button>