import React from "react";
import {
  Corner,
  Root,
  ScrollAreaScrollbar,
  ScrollAreaThumb,
  Viewport,
} from "@radix-ui/react-scroll-area";
import { cn } from "src/lib/utils";

type ScrollBarProps = {
  orientation?: "vertical" | "horizontal";
  scrollBar?: boolean;
} & React.ComponentPropsWithoutRef<typeof ScrollAreaScrollbar>;

const ScrollBar = React.forwardRef<
  React.ElementRef<typeof ScrollAreaScrollbar> & ScrollBarProps,
  ScrollBarProps
>(({ className, orientation = "vertical", scrollBar, ...props }, ref) => (
  <ScrollAreaScrollbar
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
    <ScrollAreaThumb
      className={`relative flex-1 rounded-full ${
        scrollBar && "bg-slate-300  dark:bg-slate-700"
      }`}
    />
  </ScrollAreaScrollbar>
));
ScrollBar.displayName = ScrollAreaScrollbar.displayName;

type ScrollAreaProps = {
  scrollBar?: boolean;
  classNameForView?: string;
} & React.ComponentPropsWithoutRef<typeof Root>;

const ScrollArea = React.forwardRef<
  React.ElementRef<typeof Root> & ScrollAreaProps,
  ScrollAreaProps
>(
  (
    { className, classNameForView, children, scrollBar = true, ...props },
    ref
  ) => (
    <Root
      ref={ref}
      className={cn("relative overflow-hidden", className)}
      {...props}
    >
      <Viewport
        className={cn(
          "flex h-full w-full snap-y snap-mandatory flex-col rounded-[inherit]",
          classNameForView
        )}
      >
        {children}
      </Viewport>
      {scrollBar && <ScrollBar />}
      <Corner />
    </Root>
  )
);
ScrollArea.displayName = Root.displayName;

export { ScrollArea, ScrollBar };
