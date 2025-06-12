'use client';

import * as React from 'react';
import * as RadioGroupPrimitive from '@radix-ui/react-radio-group';
import { Circle } from 'lucide-react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../../utils';

const radioGroupItemVariants = cva(
  'aspect-square h-4 w-4 rounded-full border text-foreground ring-offset-background focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
  {
    variants: {
      intent: {
        primary: 'border-primary text-primary',
        secondary: 'border-secondary text-secondary',
        success: 'border-success text-success',
        danger: 'border-destructive text-destructive',
        warning: 'border-warning text-warning',
      },
      size: {
        sm: 'h-3.5 w-3.5',
        md: 'h-4 w-4',
        lg: 'h-5 w-5',
      },
    },
    defaultVariants: {
      intent: 'primary',
      size: 'md',
    },
  }
);

const RadioGroup = React.forwardRef<
  React.ElementRef<typeof RadioGroupPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Root>
>(({ className, ...props }, ref) => {
  return <RadioGroupPrimitive.Root className={cn('grid gap-2', className)} {...props} ref={ref} />;
});
RadioGroup.displayName = RadioGroupPrimitive.Root.displayName;

interface RadioGroupItemProps
  extends React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Item>,
    VariantProps<typeof radioGroupItemVariants> {
  label?: string;
  description?: string;
}

const RadioGroupItem = React.forwardRef<
  React.ElementRef<typeof RadioGroupPrimitive.Item>,
  RadioGroupItemProps
>(({ className, intent, size, label, description, ...props }, ref) => {
  if (label) {
    return (
      <div className="flex items-start space-x-2">
        <RadioGroupPrimitive.Item
          ref={ref}
          className={cn(radioGroupItemVariants({ intent, size }), className)}
          {...props}
        >
          <RadioGroupPrimitive.Indicator className="flex items-center justify-center">
            <Circle
              className={cn(
                'h-2.5 w-2.5 fill-current',
                size === 'sm' && 'h-2 w-2',
                size === 'lg' && 'h-3 w-3'
              )}
            />
          </RadioGroupPrimitive.Indicator>
        </RadioGroupPrimitive.Item>
        <div className="grid gap-0.5 leading-none">
          <label
            htmlFor={props.id}
            className={cn(
              'text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70',
              props.disabled && 'opacity-70 cursor-not-allowed'
            )}
          >
            {label}
          </label>
          {description && <p className="text-xs text-muted-foreground">{description}</p>}
        </div>
      </div>
    );
  }

  return (
    <RadioGroupPrimitive.Item
      ref={ref}
      className={cn(radioGroupItemVariants({ intent, size }), className)}
      {...props}
    >
      <RadioGroupPrimitive.Indicator className="flex items-center justify-center">
        <Circle
          className={cn(
            'h-2.5 w-2.5 fill-current',
            size === 'sm' && 'h-2 w-2',
            size === 'lg' && 'h-3 w-3'
          )}
        />
      </RadioGroupPrimitive.Indicator>
    </RadioGroupPrimitive.Item>
  );
});
RadioGroupItem.displayName = RadioGroupPrimitive.Item.displayName;

export { RadioGroup, RadioGroupItem };
