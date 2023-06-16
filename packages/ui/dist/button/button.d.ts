import React, { ReactNode } from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'default' | 'outlined' | 'text';
    color?: 'primary' | 'secondary' | 'danger';
    size?: 'sm' | 'md' | 'lg';
    classes?: React.ComponentProps<'button'>['className'];
    href?: string;
    fullWidth?: boolean;
    disabled?: boolean;
    startIcon?: ReactNode;
    endIcon?: ReactNode;
    children: ReactNode;
    onClick?: () => void;
}
declare const Button: React.FC<ButtonProps>;

export { Button, ButtonProps };
