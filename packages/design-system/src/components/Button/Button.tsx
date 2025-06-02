import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../../utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-md font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        solid: "",
        outline: "border bg-background",
        outlineMuted: "border bg-background",
        outlineSoft: "border bg-background",
        soft: "",
        link: "underline-offset-4 hover:underline",
      },
      intent: {
        primary: "",
        secondary: "",
        danger: "",
        warning: "",
      },
      size: {
        md: "h-10 px-4 py-2 text-sm",
        sm: "h-9 rounded-md px-3 text-xs",
        lg: "h-11 rounded-md px-8 text-base",
      },
    },
    compoundVariants: [
      {
        variant: "solid",
        intent: "primary",
        className: "bg-primary text-primary-foreground hover:bg-primary/90",
      },
      {
        variant: "solid",
        intent: "secondary",
        className: "bg-secondary text-secondary-foreground hover:bg-secondary/90",
      },
      {
        variant: "solid",
        intent: "danger",
        className: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
      },
      {
        variant: "solid",
        intent: "warning",
        className: "bg-warning text-warning-foreground hover:bg-warning/90",
      },{
        variant: "outline",
        intent: "primary",
        className: "border-primary text-primary hover:bg-primary hover:text-primary-foreground",
      },
      {
        variant: "outline",
        intent: "secondary",
        className: "border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground",
      },
      {
        variant: "outline",
        intent: "danger",
        className: "border-destructive text-destructive hover:bg-destructive hover:text-destructive-foreground",
      },
      {
        variant: "outline",
        intent: "warning",
        className: "border-warning text-warning hover:bg-warning hover:text-warning-foreground",
      },
      {
        variant: "outlineMuted",
        intent: "primary",
        className: "border-primary text-primary hover:bg-muted",
      },
      {
        variant: "outlineMuted",
        intent: "secondary",
        className: "border-secondary text-secondary hover:bg-muted",
      },
      {
        variant: "outlineMuted",
        intent: "danger",
        className: "border-destructive text-destructive hover:bg-muted",
      },
      {
        variant: "outlineMuted",
        intent: "warning",
        className: "border-warning text-warning hover:bg-muted",
      },
      {
        variant: "outlineSoft",
        intent: "primary",
        className: "border-primary text-primary hover:bg-primary/10",
      },
      {
        variant: "outlineSoft",
        intent: "secondary",
        className: "border-secondary text-secondary hover:bg-secondary/10",
      },
      {
        variant: "outlineSoft",
        intent: "danger",
        className: "border-destructive text-destructive hover:bg-destructive/10",
      },
      {
        variant: "outlineSoft",
        intent: "warning",
        className: "border-warning text-warning hover:bg-warning/10",
      },
      
      {
        variant: "soft",
        intent: "primary",
        className: "text-primary hover:bg-primary/10 hover:text-primary",
      },
      {
        variant: "soft",
        intent: "secondary",
        className: "text-secondary hover:bg-secondary/10 hover:text-secondary",
      },
      {
        variant: "soft",
        intent: "danger",
        className: "text-destructive hover:bg-destructive/10 hover:text-destructive",
      },
      {
        variant: "soft",
        intent: "warning",
        className: "text-warning hover:bg-warning/10 hover:text-warning",
      },
      {
        variant: "link",
        intent: "primary",
        className: "text-primary",
      },
      {
        variant: "link",
        intent: "secondary",
        className: "text-secondary",
      },
      {
        variant: "link",
        intent: "danger",
        className: "text-destructive",
      },
      {
        variant: "link",
        intent: "warning",
        className: "text-warning",
      },
    ],
    defaultVariants: {
      variant: "solid",
      intent: "primary",
      size: "md",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, intent, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, intent, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
