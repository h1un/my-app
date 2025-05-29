import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../../utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
          default:
              "bg-primary text-primary-foreground shadow hover:bg-primary/90",
          dark:
              "bg-slate-800 text-slate-100 shadow hover:bg-slate-900",
          destructive:
              "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
          secondary:
              "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
          outline:
              "border border-primary text-primary bg-background shadow-sm hover:bg-accent",
          outlineHoverFill:
              "border border-primary text-primary bg-background shadow-sm hover:bg-primary hover:text-white",
          outlineDark:
              "border border-slate-800 bg-background text-slate-800 shadow-sm hover:bg-accent dark:border-slate-200 dark:text-slate-200 dark:hover:bg-slate-800",
          outlineMute:
              "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
          ghost: "hover:bg-accent hover:text-accent-foreground",
          hover: "hover:text-primary",
          link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
