import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl text-sm font-medium ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline: "border border-border bg-transparent hover:bg-secondary hover:text-secondary-foreground",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-secondary hover:text-secondary-foreground",
        link: "text-primary underline-offset-4 hover:underline",
        gold: "bg-gold text-primary font-semibold hover:bg-gold-dark shadow-button btn-premium relative overflow-hidden",
        goldOutline: "bg-transparent text-gold border-2 border-gold hover:bg-gold hover:text-primary transition-colors font-semibold",
        hero: "bg-primary/90 backdrop-blur-sm text-primary-foreground border border-primary-foreground/20 hover:bg-primary hover:border-primary-foreground/40 shadow-elegant",
        heroOutline: "bg-transparent backdrop-blur-sm text-primary-foreground border-2 border-primary-foreground/40 hover:border-primary-foreground hover:bg-primary-foreground/10 font-medium",
        luxury: "bg-charcoal text-cream border border-gold/20 hover:border-gold hover:shadow-gold transition-all",
        cta: "bg-gradient-to-r from-gold to-gold-dark text-primary font-semibold hover:shadow-gold transition-shadow btn-premium relative overflow-hidden",
        glass: "glass hover:bg-card/90 text-foreground font-medium",
        premium: "bg-navy text-primary-foreground border border-gold/30 hover:border-gold hover:shadow-glow transition-all font-semibold",
        white: "bg-primary-foreground text-primary hover:bg-primary-foreground/90 shadow-elegant font-semibold",
        dark: "bg-primary text-primary-foreground hover:bg-navy transition-colors font-semibold",
      },
      size: {
        default: "h-11 px-5 py-2",
        sm: "h-9 rounded-lg px-4 text-xs",
        lg: "h-12 rounded-xl px-8 text-base",
        xl: "h-14 rounded-2xl px-10 text-lg",
        "2xl": "h-16 rounded-2xl px-12 text-xl",
        icon: "h-11 w-11",
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
    return <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />;
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };