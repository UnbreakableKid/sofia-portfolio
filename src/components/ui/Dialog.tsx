import React from "react";
import {
  Root,
  Trigger,
  Portal,
  type DialogPortalProps,
  Content,
  Overlay,
  Title,
  Description,
  Close,
} from "@radix-ui/react-dialog";
import { X } from "lucide-react";

import { cn } from "src/lib/utils";

const Dialog = Root;

const DialogTrigger = Trigger;

const DialogPortal = ({ className, children, ...props }: DialogPortalProps) => (
  <Portal className={cn(className)} {...props}>
    <div className="fixed inset-0 z-50 flex cursor-zoom-out items-start justify-center sm:items-center">
      {children}
    </div>
  </Portal>
);
DialogPortal.displayName = Portal.displayName;

const DialogOverlay = React.forwardRef<
  React.ElementRef<typeof Overlay>,
  React.ComponentPropsWithoutRef<typeof Overlay>
>(({ className, ...props }, ref) => (
  <Overlay
    className={cn(
      "fixed inset-0 z-50 bg-black/50 backdrop-blur-lg transition-all duration-100 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=open]:fade-in data-[state=closed]:fade-out",
      className
    )}
    {...props}
    ref={ref}
  />
));
DialogOverlay.displayName = Overlay.displayName;

const DialogContent = React.forwardRef<
  React.ElementRef<typeof Content>,
  React.ComponentPropsWithoutRef<typeof Content>
>(({ className, children, ...props }, ref) => (
  <DialogPortal>
    <DialogOverlay />
    <Content
      ref={ref}
      className={cn(
        "data-[state=closed]:animate-out-90 fixed z-50 grid w-full gap-4 rounded-b-lg bg-white p-6 animate-in data-[state=open]:fade-in-90 data-[state=open]:slide-in-from-bottom-10 sm:max-w-lg sm:rounded-lg sm:zoom-in-90 data-[state=closed]:sm:zoom-out-90 data-[state=open]:sm:slide-in-from-bottom-0 data-[state=closed]:sm:slide-out-to-bottom-0",
        "dark:bg-transparent ",
        className
      )}
      {...props}
    >
      {children}
      <Close className="absolute top-4 right-4 cursor-none rounded-sm opacity-70 transition-opacity hover:cursor-none hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-slate-100 dark:focus:ring-slate-400 dark:focus:ring-offset-slate-900 dark:data-[state=open]:bg-slate-800">
        <X className="h-4 w-4" />
        <span className="sr-only">Close</span>
      </Close>
    </Content>
  </DialogPortal>
));
DialogContent.displayName = Content.displayName;

const DialogHeader = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn(
      "flex flex-col space-y-2 text-center sm:text-left",
      className
    )}
    {...props}
  />
);
DialogHeader.displayName = "DialogHeader";

const DialogFooter = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn(
      "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",
      className
    )}
    {...props}
  />
);
DialogFooter.displayName = "DialogFooter";

const DialogTitle = React.forwardRef<
  React.ElementRef<typeof Title>,
  React.ComponentPropsWithoutRef<typeof Title>
>(({ className, ...props }, ref) => (
  <Title
    ref={ref}
    className={cn(
      "text-lg font-semibold text-slate-900",
      "dark:text-slate-50",
      className
    )}
    {...props}
  />
));
DialogTitle.displayName = Title.displayName;

const DialogDescription = React.forwardRef<
  React.ElementRef<typeof Description>,
  React.ComponentPropsWithoutRef<typeof Description>
>(({ className, ...props }, ref) => (
  <Description
    ref={ref}
    className={cn("text-sm text-slate-500", "dark:text-slate-400", className)}
    {...props}
  />
));
DialogDescription.displayName = Description.displayName;

export {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogFooter,
  DialogTitle,
  DialogDescription,
};
