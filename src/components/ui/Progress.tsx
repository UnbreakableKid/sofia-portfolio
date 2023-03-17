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
      if (!value) return clearInterval(interval);
      setProgress((prevProgress) => {
        if (prevProgress >= value) {
          clearInterval(interval);
          return value;
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
        "relative h-4 w-full overflow-hidden rounded-full border border-black bg-white dark:border-white dark:bg-black",
        className
      )}
      {...props}
    >
      <ProgressPrimitive.Indicator
        className="h-full flex-1 rounded-full bg-black transition-all duration-75 ease-linear dark:bg-white"
        style={{ width: `${progress}%` }}
      />
    </ProgressPrimitive.Root>
  );
});
Progress.displayName = ProgressPrimitive.Root.displayName;

export { Progress };
