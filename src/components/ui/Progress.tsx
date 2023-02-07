import * as React from "react";
import * as ProgressPrimitive from "@radix-ui/react-progress";

import { cn } from "src/lib/utils";

const Progress = React.forwardRef<
  React.ElementRef<typeof ProgressPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof ProgressPrimitive.Root>
>(({ className, value, ...props }, ref) => {
  // add animation to the progress bar so it fills up smoothly from 0 to the value
  const [progress, setProgress] = React.useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prevProgress) => {
        if (prevProgress >= value!) {
          clearInterval(interval);
          return value!;
        }
        return prevProgress + 1;
      });
    }, 20);
    return () => clearInterval(interval);
  }, []);

  return (
    <ProgressPrimitive.Root
      ref={ref}
      className={cn(
        "relative h-4 w-full overflow-hidden rounded-full bg-slate-200 dark:bg-slate-800",
        className
      )}
      {...props}
    >
      <ProgressPrimitive.Indicator
        className="h-full  flex-1 bg-slate-900  transition-all duration-75 ease-in-out dark:bg-slate-400"
        style={{ width: `${progress}%` }}
      />
    </ProgressPrimitive.Root>
  );
});
Progress.displayName = ProgressPrimitive.Root.displayName;

export { Progress };
