'use client';

import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { Eye, EyeOff, Search, AlertCircle, CheckCircle2, Upload, X, File } from 'lucide-react';
import { cn } from '../../utils';

const inputVariants = cva(
  'flex w-full rounded-md border bg-background text-sm transition-all duration-200 placeholder:text-muted-foreground focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 [&::-webkit-file-upload-button]:hidden [&::file-selector-button]:hidden',
  {
    variants: {
      variant: {
        outline:
          'border-input focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2',
        solid:
          'border-transparent bg-muted focus-visible:bg-background focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2',
        ghost:
          'border-transparent bg-transparent focus-visible:bg-muted focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2',
        underline:
          'border-0 border-b-2 border-input bg-transparent rounded-none focus-visible:border-ring focus-visible:ring-0 focus-visible:ring-offset-0',
      },
      size: {
        sm: 'h-8 px-3 text-xs',
        md: 'h-10 px-3',
        lg: 'h-12 px-4 text-base',
      },
      state: {
        default: '',
        error: 'border-destructive focus-visible:ring-destructive',
        success: 'border-primary focus-visible:ring-primary',
      },
    },
    defaultVariants: {
      variant: 'outline',
      size: 'md',
      state: 'default',
    },
  }
);

export interface InputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'>,
    VariantProps<typeof inputVariants> {
  label?: string;
  message?: string;
  state?: 'error' | 'success' | 'default';
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, variant, size, state, type, label, message, disabled, ...props }, ref) => {
    const [showPassword, setShowPassword] = React.useState(false);
    const [isFocused, setIsFocused] = React.useState(false);
    const [selectedFile, setSelectedFile] = React.useState<File | null>(null);
    const fileInputRef = React.useRef<HTMLInputElement>(null);

    const actualType = type === 'password' ? (showPassword ? 'text' : 'password') : type;

    const leftIcon =
      type === 'search' ? (
        <Search className="h-4 w-4" />
      ) : type === 'file' && selectedFile ? (
        <File className="h-4 w-4" />
      ) : type === 'file' ? (
        <Upload className="h-4 w-4" />
      ) : undefined;

    const rightIcon =
      type === 'file' && selectedFile ? (
        <button
          type="button"
          onClick={e => {
            e.stopPropagation();
            setSelectedFile(null);
            if (fileInputRef.current) {
              fileInputRef.current.value = '';
              const event = new Event('change', { bubbles: true });
              Object.defineProperty(event, 'target', {
                writable: false,
                value: fileInputRef.current,
              });
              props.onChange?.(event as any);
            }
          }}
          className="text-muted-foreground hover:text-foreground transition-colors"
          disabled={disabled}
        >
          <X className="h-4 w-4" />
        </button>
      ) : type === 'password' ? (
        <button
          type="button"
          onClick={() => setShowPassword(!showPassword)}
          className="text-muted-foreground hover:text-foreground transition-colors"
          disabled={disabled}
        >
          {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
        </button>
      ) : state === 'error' ? (
        <AlertCircle className="h-4 w-4 text-destructive" />
      ) : state === 'success' ? (
        <CheckCircle2 className="h-4 w-4 text-primary" />
      ) : undefined;

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const file = e.target.files?.[0];
      setSelectedFile(file || null);
      props.onChange?.(e);
    };

    const handleFileClick = () => {
      if (disabled) return;
      fileInputRef.current?.click();
    };

    const getFileDisplayValue = () => {
      if (selectedFile) {
        return selectedFile.name;
      }
      return props.placeholder || '파일을 선택하세요';
    };

    if (type === 'file') {
      return (
        <div className="w-full">
          {label && (
            <label
              className={cn(
                'block text-sm font-medium mb-2 transition-colors',
                state === 'error' && 'text-destructive',
                state === 'success' && 'text-primary',
                disabled && 'text-muted-foreground'
              )}
            >
              {label}
            </label>
          )}

          <div className="relative">
            <input
              type="file"
              ref={fileInputRef}
              className="sr-only"
              disabled={disabled}
              onChange={handleFileChange}
              {...props}
            />

            <div
              className={cn(
                inputVariants({ variant, size, state }),
                'cursor-pointer pl-10 pr-10 flex items-center justify-between',
                disabled && 'cursor-not-allowed',
                className
              )}
              onClick={handleFileClick}
              onFocus={() => setIsFocused(true)}
              onBlur={() => setIsFocused(false)}
            >
              <span className={cn('truncate', !selectedFile && 'text-muted-foreground')}>
                {getFileDisplayValue()}
              </span>
            </div>

            {leftIcon && (
              <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground pointer-events-none">
                {leftIcon}
              </div>
            )}

            {rightIcon && (
              <div className="absolute right-3 top-1/2 transform -translate-y-1/2">{rightIcon}</div>
            )}
          </div>

          {message && (
            <p
              className={cn(
                'mt-2 text-xs transition-colors',
                state === 'error' && 'text-destructive',
                state === 'success' && 'text-primary',
                !state && 'text-muted-foreground'
              )}
            >
              {message}
            </p>
          )}
        </div>
      );
    }

    return (
      <div className="w-full">
        {label && (
          <label
            className={cn(
              'block text-sm font-medium mb-2 transition-colors',
              state === 'error' && 'text-destructive',
              state === 'success' && 'text-primary',
              disabled && 'text-muted-foreground'
            )}
          >
            {label}
          </label>
        )}

        <div className="relative">
          {leftIcon && (
            <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground">
              {leftIcon}
            </div>
          )}

          <input
            type={actualType}
            className={cn(
              inputVariants({ variant, size, state }),
              leftIcon && 'pl-10',
              rightIcon && 'pr-10',
              isFocused && variant === 'solid' && 'shadow-sm',
              className
            )}
            ref={ref}
            disabled={disabled}
            onChange={props.onChange}
            onFocus={e => {
              setIsFocused(true);
              props.onFocus?.(e);
            }}
            onBlur={e => {
              setIsFocused(false);
              props.onBlur?.(e);
            }}
            {...props}
          />

          {rightIcon && (
            <div className="absolute right-3 top-1/2 transform -translate-y-1/2">{rightIcon}</div>
          )}
        </div>

        {message && (
          <p
            className={cn(
              'mt-2 text-xs transition-colors',
              state === 'error' && 'text-destructive',
              state === 'success' && 'text-primary',
              !state && 'text-muted-foreground'
            )}
          >
            <div></div>

            {message}
          </p>
        )}
      </div>
    );
  }
);

Input.displayName = 'Input';

export { Input, inputVariants };
