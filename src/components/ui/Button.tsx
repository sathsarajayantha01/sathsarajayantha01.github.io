import React from "react";
import { Slot } from "@radix-ui/react-slot";
import { clsx } from "clsx";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "outline" | "ghost";
  size?: "default" | "sm" | "lg";
  asChild?: boolean;
}

const buttonVariants = {
  base: "inline-flex items-center justify-center whitespace-nowrap rounded-full font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-foreground disabled:pointer-events-none disabled:opacity-50",
  variants: {
    default:
      "bg-foreground text-background hover:bg-foreground/90 hover:scale-[1.02] active:scale-[0.98] shadow-lg shadow-foreground/10",
    outline:
      "border border-border bg-transparent hover:bg-muted hover:border-muted-foreground/30 active:scale-[0.98]",
    ghost: "hover:bg-muted active:scale-[0.98]",
  },
  sizes: {
    default: "h-11 px-6 text-sm",
    sm: "h-9 px-4 text-xs",
    lg: "h-14 px-8 text-base",
  },
};

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { className, variant = "default", size = "default", asChild = false, ...props },
    ref
  ) => {
    const Comp = asChild ? Slot : "button";

    return (
      <Comp
        className={clsx(
          buttonVariants.base,
          buttonVariants.variants[variant],
          buttonVariants.sizes[size],
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);

Button.displayName = "Button";
