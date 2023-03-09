import * as React from "react";
import * as ScrollAreaPrimitive from "@radix-ui/react-scroll-area";

import { cn } from "src/lib/utils";

type ScrollAreaProps = {
  scrollBar?: boolean;
  classNameForView?: string;
} & React.ComponentPropsWithoutRef<typeof ScrollAreaPrimitive.Root>;

const ScrollArea = React.forwardRef<
  React.ElementRef<typeof ScrollAreaPrimitive.Root> & ScrollAreaProps,
  ScrollAreaProps
>(
  (
    { className, classNameForView, children, scrollBar = true, ...props },
    ref
  ) => (
    <ScrollAreaPrimitive.Root
      ref={ref}
      className={cn("relative overflow-hidden", className)}
      {...props}
    >
      <ScrollAreaPrimitive.Viewport
        className={cn(
          "flex h-full w-full snap-y snap-mandatory flex-col rounded-[inherit]",
          classNameForView
        )}
      >
        {children}
      </ScrollAreaPrimitive.Viewport>
      {scrollBar && <ScrollBar />}
      <ScrollAreaPrimitive.Corner />
    </ScrollAreaPrimitive.Root>
  )
);
ScrollArea.displayName = ScrollAreaPrimitive.Root.displayName;

type ScrollBarProps = {
  orientation?: "vertical" | "horizontal";
  scrollBar?: boolean;
} & React.ComponentPropsWithoutRef<
  typeof ScrollAreaPrimitive.ScrollAreaScrollbar
>;

const ScrollBar = React.forwardRef<
  React.ElementRef<typeof ScrollAreaPrimitive.ScrollAreaScrollbar> &
    ScrollBarProps,
  ScrollBarProps
>(({ className, orientation = "vertical", scrollBar, ...props }, ref) => (
  <ScrollAreaPrimitive.ScrollAreaScrollbar
    ref={ref}
    orientation={orientation}
    className={cn(
      "flex touch-none select-none transition-colors",
      orientation === "vertical" &&
        "h-full w-2.5 snap-x border-l border-l-transparent p-[1px]",
      orientation === "horizontal" &&
        "h-2.5 snap-y snap-mandatory border-t border-t-transparent p-[1px]",
      className
    )}
    {...props}
  >
    <ScrollAreaPrimitive.ScrollAreaThumb
      className={`relative flex-1 rounded-full ${
        scrollBar && "bg-slate-300  dark:bg-slate-700"
      }`}
    />
  </ScrollAreaPrimitive.ScrollAreaScrollbar>
));
ScrollBar.displayName = ScrollAreaPrimitive.ScrollAreaScrollbar.displayName;

export { ScrollArea, ScrollBar };
