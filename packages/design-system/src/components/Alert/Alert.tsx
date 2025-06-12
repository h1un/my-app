'use client';

import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { X, AlertCircle, CheckCircle2, Info, AlertTriangle } from 'lucide-react';
import { cn } from '../../utils';
import { Button } from '../Button/Button';

const alertVariants = cva(
  'fixed z-50 inset-0 m-auto h-fit w-full max-w-lg rounded-lg border bg-background p-6 shadow-lg',
  {
    variants: {
      intent: {
        primary: '',
        secondary: '',
        danger: '',
        warning: '',
        success: '',
      },
      size: {
        sm: 'max-w-sm',
        md: 'max-w-lg',
        lg: 'max-w-2xl',
        xl: 'max-w-4xl',
      },
    },
    defaultVariants: {
      intent: 'primary',
      size: 'md',
    },
  }
);

export interface AlertProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof alertVariants> {
  open?: boolean;
  onClose?: () => void;
  title?: string;
  description?: string;
  children?: React.ReactNode;
  cancelText?: string;
  confirmText?: string;
  onCancel?: () => void;
  onConfirm?: () => void;
}

const getIntentIcon = (intent: AlertProps['intent']) => {
  if (!intent) return Info;
  switch (intent) {
    case 'primary':
      return Info;
    case 'secondary':
      return Info;
    case 'success':
      return CheckCircle2;
    case 'danger':
      return AlertCircle;
    case 'warning':
      return AlertTriangle;
    default:
      return Info;
  }
};

function Alert({
  className,
  intent = 'primary',
  size = 'md',
  open = false,
  onClose,
  title,
  description,
  children,
  cancelText = '취소',
  confirmText = '확인',
  onCancel,
  onConfirm,
  ...props
}: AlertProps) {
  React.useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [open]);

  if (!open) return null;

  const Icon = getIntentIcon(intent);

  return (
    <>
      <div
        className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm animate-in fade-in-0 duration-200"
        onClick={onClose}
      />
      <div
        className={cn(
          alertVariants({ intent, size }),
          'animate-in fade-in-0 duration-200',
          'z-50',
          className
        )}
        {...props}
      >
        {onClose && (
          <button
            onClick={onClose}
            className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none"
          >
            <X className="h-4 w-4" />
            <span className="sr-only">닫기</span>
          </button>
        )}
        {title && (
          <div className="mb-4">
            <div
              className={cn(
                'flex items-center gap-2)',
                intent === 'primary' && 'text-primary',
                intent === 'secondary' && 'text-secondary',
                intent === 'danger' && 'text-destructive',
                intent === 'warning' && 'text-warning'
              )}
            >
              <Icon className="h-5 w-5 mr-1" />
              <h2 className="text-lg font-semibold leading-none tracking-tight"> {title}</h2>
            </div>
            {description && <p className="mt-2 text-sm text-muted-foreground">{description}</p>}
          </div>
        )}
        {children}{' '}
        {(onCancel || onConfirm) && (
          <div className="mt-6 flex justify-end gap-2">
            {onCancel && (
              <Button variant="outline" intent={intent || 'primary'} onClick={onCancel}>
                {cancelText}
              </Button>
            )}
            {onConfirm && (
              <Button variant="solid" intent={intent || 'primary'} onClick={onConfirm}>
                {confirmText}
              </Button>
            )}
          </div>
        )}
      </div>
    </>
  );
}

Alert.displayName = 'Alert';

export { Alert };
