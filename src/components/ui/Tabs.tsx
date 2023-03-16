import * as React from "react";
import * as TabsPrimitive from "@radix-ui/react-tabs";

import { cn } from "src/lib/utils";

const Tabs = TabsPrimitive.Root;

const TabsList = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.List>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.List>
>(({ className, ...props }, ref) => {
  return (
    <TabsPrimitive.List
      ref={ref}
      className={cn(
        "inline-flex items-center justify-center rounded-md p-1 ",
        className
      )}
      {...props}
    />
  );
});
TabsList.displayName = "TabsList";

const TabsTrigger = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Trigger>
>(({ className, ...props }, ref) => {
  return (
    <TabsPrimitive.Trigger
      className={cn(
        "inline-flex min-w-[100px] cursor-none items-center justify-center rounded-[0.185rem] px-3 py-1.5 text-sm font-medium text-slate-700 transition-all hover:cursor-none disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-white data-[state=active]:font-bold data-[state=active]:text-slate-900 data-[state=active]:shadow-sm data-[state=inactive]:hover:underline dark:text-slate-200 dark:data-[state=active]:bg-slate-900 dark:data-[state=active]:text-slate-100",
        className
      )}
      {...props}
      ref={ref}
    />
  );
});
TabsTrigger.displayName = "TabsTrigger";

const TabsContent = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Content>
>(({ className, ...props }, ref) => {
  return (
    <TabsPrimitive.Content
      className={cn("mt-7 rounded-md ", className)}
      {...props}
      ref={ref}
    />
  );
});
TabsContent.displayName = "TabsContent";

export { Tabs, TabsList, TabsTrigger, TabsContent };
