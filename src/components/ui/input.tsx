import * as React from "react";

import { cn } from "@/lib/utils";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  suffix?: React.ReactNode;
  clear?: boolean;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, suffix, clear = "true", ...props }, ref) => {
    return (
      <div
        className={cn(
          "flex h-[48px] dark:border dark:border-input dark:bg-transparent items-center rounded-lg border border-input bg-white pl-3 text-sm ring-offset-background focus-within:ring-1 focus-within:ring-primary focus-within:ring-offset-2",
          className
        )}
      >
        <input
          {...props}
          type={clear ? "search" : type}
          ref={ref}
          autoComplete="off"
          className="bg-transparent w-full p-2 placeholder:text-muted-foreground focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50"
        />
        {suffix}
      </div>
    );
  }
);
Input.displayName = "Input";

export { Input };
