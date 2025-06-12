import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../../utils';

const buttonVariants = cva(
  'inline-flex items-center justify-center rounded-md font-semibold ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        solid: '',
        outline: 'border bg-background',
        text: '',
        link: 'underline-offset-4 hover:underline',
      },
      intent: {
        primary: '',
        secondary: '',
        success: '',
        danger: '',
        warning: '',
      },
      tone: {
        filled: '',
        soft: '',
      },
      size: {
        md: 'h-10 px-4 py-2 text-sm',
        sm: 'h-9 rounded-md px-3 text-xs',
        lg: 'h-11 rounded-md px-8 text-base',
      },
    },
    compoundVariants: [
      // solid filled variants
      {
        variant: 'solid',
        intent: 'primary',
        tone: 'filled',
        className: 'bg-primary text-primary-foreground hover:bg-primary/90',
      },
      {
        variant: 'solid',
        intent: 'secondary',
        tone: 'filled',
        className: 'bg-secondary text-secondary-foreground hover:bg-secondary/90',
      },
      {
        variant: 'solid',
        intent: 'success',
        tone: 'filled',
        className: 'bg-success text-success-foreground hover:bg-success/90',
      },
      {
        variant: 'solid',
        intent: 'danger',
        tone: 'filled',
        className: 'bg-destructive text-destructive-foreground hover:bg-destructive/90',
      },
      {
        variant: 'solid',
        intent: 'warning',
        tone: 'filled',
        className: 'bg-warning text-warning-foreground hover:bg-warning/90',
      },
      // Solid Soft variants
      {
        variant: 'solid',
        intent: 'primary',
        tone: 'soft',
        className: 'text-primary bg-primary/10 hover:bg-primary/20 hover:text-primary',
      },
      {
        variant: 'solid',
        intent: 'secondary',
        tone: 'soft',
        className: 'text-secondary bg-secondary/10 hover:bg-secondary/20 hover:text-secondary',
      },
      {
        variant: 'solid',
        intent: 'success',
        tone: 'soft',
        className: 'text-success bg-success/10 hover:bg-success/20 hover:text-success',
      },
      {
        variant: 'solid',
        intent: 'danger',
        tone: 'soft',
        className:
          'text-destructive bg-destructive/10 hover:bg-destructive/20 hover:text-destructive',
      },
      {
        variant: 'solid',
        intent: 'warning',
        tone: 'soft',
        className: 'text-warning bg-warning/10 hover:bg-warning/20 hover:text-warning',
      },
      // Solid Soft variants
      {
        variant: 'outline',
        intent: 'primary',
        tone: 'filled',
        className: 'border-primary text-primary hover:bg-primary hover:text-primary-foreground',
      },
      {
        variant: 'outline',
        intent: 'secondary',
        tone: 'filled',
        className:
          'border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground',
      },
      {
        variant: 'outline',
        intent: 'success',
        tone: 'filled',
        className: 'border-success text-success hover:bg-success hover:text-success-foreground',
      },
      {
        variant: 'outline',
        intent: 'danger',
        tone: 'filled',
        className:
          'border-destructive text-destructive hover:bg-destructive hover:text-destructive-foreground',
      },
      {
        variant: 'outline',
        intent: 'warning',
        tone: 'filled',
        className: 'border-warning text-warning hover:bg-warning hover:text-warning-foreground',
      },
      // Outline Soft variants
      {
        variant: 'outline',
        intent: 'primary',
        tone: 'soft',
        className: 'border-primary text-primary hover:bg-primary/10',
      },
      {
        variant: 'outline',
        intent: 'secondary',
        tone: 'soft',
        className: 'border-secondary text-secondary hover:bg-secondary/10',
      },
      {
        variant: 'outline',
        intent: 'success',
        tone: 'soft',
        className: 'border-success text-success hover:bg-success/10',
      },
      {
        variant: 'outline',
        intent: 'danger',
        tone: 'soft',
        className: 'border-destructive text-destructive hover:bg-destructive/10',
      },
      {
        variant: 'outline',
        intent: 'warning',
        tone: 'soft',
        className: 'border-warning text-warning hover:bg-warning/10',
      },

      // Text filled variants
      {
        variant: 'text',
        intent: 'primary',
        tone: 'filled',
        className: 'text-primary hover:bg-primary hover:text-primary-foreground',
      },
      {
        variant: 'text',
        intent: 'secondary',
        tone: 'filled',
        className: 'text-secondary hover:bg-secondary hover:text-secondary-foreground',
      },
      {
        variant: 'text',
        intent: 'success',
        tone: 'filled',
        className: 'text-success hover:bg-success hover:text-success-foreground',
      },
      {
        variant: 'text',
        intent: 'danger',
        tone: 'filled',
        className: 'text-destructive hover:bg-destructive hover:text-destructive-foreground',
      },
      {
        variant: 'text',
        intent: 'warning',
        tone: 'filled',
        className: 'text-warning hover:bg-warning hover:text-warning-foreground',
      },
      {
        variant: 'text',
        intent: 'primary',
        tone: 'soft',
        className: 'text-primary hover:bg-primary/10',
      },
      {
        variant: 'text',
        intent: 'secondary',
        tone: 'soft',
        className: 'text-secondary hover:bg-secondary/10',
      },
      {
        variant: 'text',
        intent: 'success',
        tone: 'soft',
        className: 'text-success hover:bg-success/10',
      },
      {
        variant: 'text',
        intent: 'danger',
        tone: 'soft',
        className: 'text-destructive hover:bg-destructive/10',
      },
      {
        variant: 'text',
        intent: 'warning',
        tone: 'soft',
        className: 'text-warning hover:bg-warning/10',
      },

      // Link variants
      {
        variant: 'link',
        intent: 'primary',
        className: 'text-primary',
      },
      {
        variant: 'link',
        intent: 'secondary',
        className: 'text-secondary',
      },
      {
        variant: 'link',
        intent: 'success',
        className: 'text-success',
      },
      {
        variant: 'link',
        intent: 'danger',
        className: 'text-destructive',
      },
      {
        variant: 'link',
        intent: 'warning',
        className: 'text-warning',
      },
    ],
    defaultVariants: {
      variant: 'solid',
      intent: 'primary',
      tone: 'filled',
      size: 'md',
    },
  }
);

// 조건부 타입 정의
type ButtonTone<V extends string> = V extends 'link' ? undefined : 'filled' | 'soft';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'solid' | 'outline' | 'text' | 'link';
  intent?: 'primary' | 'secondary' | 'success' | 'danger' | 'warning';
  tone?: ButtonTone<NonNullable<ButtonProps['variant']>>;
  size?: 'md' | 'sm' | 'lg';
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { className, variant = 'solid', intent = 'primary', tone, size, asChild = false, ...props },
    ref
  ) => {
    // variant에 따른 기본 tone 설정
    const getDefaultTone = (
      variant: string,
      tone?: 'filled' | 'soft'
    ): 'filled' | 'soft' | undefined => {
      if (tone !== undefined) return tone; // tone이 명시적으로 제공되면 그대로 사용
      if (variant === 'link') return undefined; // link는 tone 없음
      return variant === 'solid' ? 'filled' : 'soft'; // solid는 filled, 나머지는 soft
    };

    tone = getDefaultTone(variant, tone);

    const Comp = asChild ? Slot : 'button';
    return (
      <Comp
        className={cn(buttonVariants({ variant, intent, tone, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = 'Button';

export { Button, buttonVariants };
