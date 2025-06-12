'use client';

import * as React from 'react';
import * as CheckboxPrimitive from '@radix-ui/react-checkbox';
import { Check, Minus } from 'lucide-react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../../utils';

const checkboxVariants = cva(
  'peer h-4 w-4 shrink-0 rounded-[3px] border ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:text-primary-foreground',
  {
    variants: {
      intent: {
        primary:
          'border-primary data-[state=checked]:bg-primary data-[state=checked]:border-primary',
        secondary:
          'border-secondary data-[state=checked]:bg-secondary data-[state=checked]:border-secondary',
        success:
          'border-success data-[state=checked]:bg-success data-[state=checked]:border-success',
        danger:
          'border-destructive data-[state=checked]:bg-destructive data-[state=checked]:border-destructive',
        warning:
          'border-warning data-[state=checked]:bg-warning data-[state=checked]:border-warning',
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

interface CheckboxProps
  extends React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root>,
    VariantProps<typeof checkboxVariants> {
  label?: string;
  description?: string;
}

const Checkbox = React.forwardRef<React.ElementRef<typeof CheckboxPrimitive.Root>, CheckboxProps>(
  ({ className, intent, size, label, description, ...props }, ref) => {
    if (label) {
      return (
        <div className="flex items-start space-x-2">
          <CheckboxPrimitive.Root
            ref={ref}
            className={cn(checkboxVariants({ intent, size }), className)}
            {...props}
          >
            <CheckboxPrimitive.Indicator className="flex items-center justify-center text-current">
              {props.checked === 'indeterminate' ? (
                <Minus
                  className={cn(
                    'h-3 w-3',
                    size === 'sm' && 'h-2.5 w-2.5',
                    size === 'lg' && 'h-3.5 w-3.5'
                  )}
                />
              ) : (
                <Check
                  className={cn(
                    'h-3 w-3',
                    size === 'sm' && 'h-2.5 w-2.5',
                    size === 'lg' && 'h-3.5 w-3.5'
                  )}
                />
              )}
            </CheckboxPrimitive.Indicator>
          </CheckboxPrimitive.Root>
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
      <CheckboxPrimitive.Root
        ref={ref}
        className={cn(checkboxVariants({ intent, size }), className)}
        {...props}
      >
        <CheckboxPrimitive.Indicator className="flex items-center justify-center text-current">
          {props.checked === 'indeterminate' ? (
            <Minus
              className={cn(
                'h-3 w-3',
                size === 'sm' && 'h-2.5 w-2.5',
                size === 'lg' && 'h-3.5 w-3.5'
              )}
            />
          ) : (
            <Check
              className={cn(
                'h-3 w-3',
                size === 'sm' && 'h-2.5 w-2.5',
                size === 'lg' && 'h-3.5 w-3.5'
              )}
            />
          )}
        </CheckboxPrimitive.Indicator>
      </CheckboxPrimitive.Root>
    );
  }
);
Checkbox.displayName = CheckboxPrimitive.Root.displayName;

export { Checkbox };
