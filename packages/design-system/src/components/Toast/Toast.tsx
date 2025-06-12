'use client';

import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { AlertCircle, CheckCircle2, Info, AlertTriangle, X } from 'lucide-react';
import { cn } from '../../utils';

const toastVariants = cva(
  'relative pointer-events-auto flex w-[400px] min-h-[64px] rounded-lg border shadow-lg transition-all duration-300',
  {
    variants: {
      variant: {
        solid: 'border-transparent',
        outline: 'border',
      },
      intent: {
        primary: '',
        secondary: '',
        success: '',
        danger: '',
        warning: '',
      },
      size: {
        sm: 'p-3',
        md: 'p-4',
        lg: 'p-5',
      },
    },
    compoundVariants: [
      // Solid variants
      {
        variant: 'solid',
        intent: 'primary',
        className: 'bg-primary text-primary-foreground',
      },
      {
        variant: 'solid',
        intent: 'secondary',
        className: 'bg-secondary text-secondary-foreground',
      },
      {
        variant: 'solid',
        intent: 'success',
        className: 'bg-success text-success-foreground',
      },
      {
        variant: 'solid',
        intent: 'danger',
        className: 'bg-destructive text-destructive-foreground',
      },
      {
        variant: 'solid',
        intent: 'warning',
        className: 'bg-warning text-warning-foreground',
      },
      // Outline variants
      {
        variant: 'outline',
        intent: 'primary',
        className: 'border-primary text-primary',
      },
      {
        variant: 'outline',
        intent: 'secondary',
        className: 'border-secondary text-secondary',
      },
      {
        variant: 'outline',
        intent: 'success',
        className: 'border-success text-success',
      },
      {
        variant: 'outline',
        intent: 'danger',
        className: 'border-destructive text-destructive',
      },
      {
        variant: 'outline',
        intent: 'warning',
        className: 'border-warning text-warning',
      },
    ],
    defaultVariants: {
      variant: 'solid',
      intent: 'primary',
      size: 'md',
    },
  }
);

const getIntentIcon = (intent: string) => {
  switch (intent) {
    case 'success':
      return CheckCircle2;
    case 'danger':
      return AlertCircle;
    case 'warning':
      return AlertTriangle;
    case 'primary':
      return CheckCircle2;
    case 'secondary':
      return Info;
    default:
      return Info;
  }
};

export interface ToastProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof toastVariants> {
  id: string;
  title?: string;
  description?: string;
  duration?: number;
  onDismiss?: (id: string) => void;
}

const Toast = React.forwardRef<HTMLDivElement, ToastProps>(
  (
    {
      className,
      variant,
      intent = 'primary',
      size,
      id,
      title,
      description,
      duration = 5000,
      onDismiss,
      children,
      ...props
    },
    ref
  ) => {
    const IconComponent = getIntentIcon(intent || 'primary');

    React.useEffect(() => {
      if (duration && onDismiss) {
        const timer = setTimeout(() => {
          onDismiss(id);
        }, duration);
        return () => clearTimeout(timer);
      }
    }, [duration, onDismiss, id]);

    return (
      <div ref={ref} className={cn(toastVariants({ variant, intent, size }), className)} {...props}>
        <div className="flex w-full">
          <div className="flex-shrink-0">
            <div className="flex items-center justify-center">
              <IconComponent className="h-4 w-4" />
            </div>
          </div>

          <div className="flex-1 ml-3">
            {title && (
              <ToastTitle
                className={cn(
                  'font-extrabold leading-none tracking-tight',
                  size === 'sm' && 'text-sm',
                  size === 'md' && 'text-sm',
                  size === 'lg' && 'text-base',
                  description && 'mb-1'
                )}
              >
                {title}
              </ToastTitle>
            )}

            {description && (
              <ToastDescription
                className={cn(
                  'text-sm opacity-90',
                  size === 'sm' && 'text-xs',
                  size === 'lg' && 'text-sm'
                )}
              >
                {description}
              </ToastDescription>
            )}

            {children && (
              <div className={cn('mt-2', !title && !description && 'mt-0')}>{children}</div>
            )}
          </div>

          {onDismiss && (
            <div className="flex-shrink-0 ml-3">
              <button
                type="button"
                onClick={() => onDismiss(id)}
                className={cn(
                  'inline-flex rounded-md p-1.5 transition-colors',
                  variant === 'solid' &&
                    intent === 'primary' &&
                    'text-primary-foreground/70 hover:text-primary-foreground',
                  variant === 'solid' &&
                    intent === 'secondary' &&
                    'text-secondary-foreground/70 hover:text-secondary-foreground',
                  variant === 'solid' &&
                    intent === 'success' &&
                    'text-success-foreground/70 hover:text-success-foreground',
                  variant === 'solid' &&
                    intent === 'danger' &&
                    'text-destructive-foreground/70 hover:text-destructive-foreground',
                  variant === 'solid' &&
                    intent === 'warning' &&
                    'text-warning-foreground/70 hover:text-warning-foreground',
                  variant !== 'solid' &&
                    intent === 'primary' &&
                    'text-primary/70 hover:text-primary',
                  variant !== 'solid' &&
                    intent === 'secondary' &&
                    'text-secondary/70 hover:text-secondary',
                  variant !== 'solid' &&
                    intent === 'success' &&
                    'text-success/70 hover:text-success',
                  variant !== 'solid' &&
                    intent === 'danger' &&
                    'text-destructive/70 hover:text-destructive',
                  variant !== 'solid' &&
                    intent === 'warning' &&
                    'text-warning/70 hover:text-warning'
                )}
              >
                <span className="sr-only">닫기</span>
                <X className="h-4 w-4" />
              </button>
            </div>
          )}
        </div>
      </div>
    );
  }
);

Toast.displayName = 'Toast';

const ToastTitle = React.forwardRef<HTMLHeadingElement, React.HTMLAttributes<HTMLHeadingElement>>(
  ({ className, ...props }, ref) => (
    <h5
      ref={ref}
      className={cn('text-sm font-semibold leading-none tracking-tight', className)}
      {...props}
    />
  )
);
ToastTitle.displayName = 'ToastTitle';

const ToastDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn('text-sm opacity-80', className)} {...props} />
));
ToastDescription.displayName = 'ToastDescription';

export { Toast, toastVariants, ToastTitle, ToastDescription };
