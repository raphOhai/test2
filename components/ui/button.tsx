import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { Slot } from "radix-ui"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:aria-invalid:border-destructive/50 rounded-md border border-transparent bg-clip-padding text-sm font-medium focus-visible:ring-[3px] aria-invalid:ring-[3px] [&_svg:not([class*='size-'])]:size-4 inline-flex items-center justify-center whitespace-nowrap transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none shrink-0 [&_svg]:shrink-0 outline-none group/button select-none",
  {
    variants: {
      variant: {
        default: "bg-black text-white",
        link: "text-white underline-offset-4 hover:bg-gradient-to-r hover:from-[#B53EA4] hover:via-[#FC6F32] hover:to-[#FF4A59] hover:bg-clip-text hover:text-transparent",
      },
      size: {
        default: "px-6 py-2",
        lg: "px-8 py-3 text-lg",
        icon: "size-9",
        "icon-xs": "size-6 rounded-[min(var(--radius-md),8px)] in-data-[slot=button-group]:rounded-md [&_svg:not([class*='size-'])]:size-3",
        "icon-sm": "size-8 rounded-[min(var(--radius-md),10px)] in-data-[slot=button-group]:rounded-md",
        "icon-lg": "size-10",
      },
      borderStyle: {
        default: "",
        gradient: "border-2 border-gradient",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
      borderStyle: "default",
    },
  }
)

function Button({
  className,
  variant = "default",
  size = "default",
  borderStyle = "default",
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
  }) {
  const Comp = asChild ? Slot.Root : "button"

  // If gradient border, wrap in a gradient border container
  if (borderStyle === "gradient") {
    // Extract rounded class for wrapper
    const roundedMatch = className?.match(/rounded-[^\s]*/)?.[0] || "rounded-full"
    
    return (
      <div className={cn(
        "gradient-border-wrapper inline-block w-fit p-[0.5px] bg-gradient-to-r from-[#B53EA4] via-[#FC6F32] to-[#FF4A59] transition-all duration-300",
        "hover:bg-transparent",
        "has-[:hover]:bg-transparent",
        roundedMatch
      )}>
        <Comp
          data-slot="button"
          data-variant={variant}
          data-size={size}
          data-border-style={borderStyle}
          className={cn(
            buttonVariants({ variant, size, borderStyle: "default" }),
            "bg-black transition-all duration-300",
            "hover:bg-gradient-to-r hover:from-[#B53EA4] hover:via-[#FC6F32] hover:to-[#FF4A59]",
            "hover:text-white",
            className
          )}
          {...props}
        />
      </div>
    )
  }

  return (
    <Comp
      data-slot="button"
      data-variant={variant}
      data-size={size}
      data-border-style={borderStyle}
      className={cn(buttonVariants({ variant, size, borderStyle, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }
