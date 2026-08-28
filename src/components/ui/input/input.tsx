import { Input as InputPrimitive } from "@base-ui/react/input";
import * as React from "react";

import { cn } from "@/shared/lib/tailwind-merge";

function Input({ className, type, ...props }: React.ComponentProps<"input">) {
  return (
    <InputPrimitive
      type={type}
      data-slot="input"
      className={cn(
        // 1. Layout & Sizing
        "h-11.5 w-full min-w-0 px-2.5 py-1",

        // 2. Base Appearance & Typography
        "bg-transparent text-base text-gray-950 transition-colors outline-none placeholder:text-gray-400 md:text-sm",

        // 3. Borders & Focus States
        "border border-gray-200 bg-white hover:border-blue-600 focus-visible:border-blue-600 focus-visible:ring-blue-100",

        // 4. Native File Input Styling
        "file:inline-flex file:h-6 file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground",

        // 5. Disabled State
        "disabled:pointer-events-none disabled:cursor-not-allowed disabled:border-gray-400 disabled:bg-gray-200 disabled:text-gray-400",

        // 6. Validation / Error States (  Accessibility)
        "aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20",

        // 7. Dark Mode Overrides
        "dark:bg-input/30 dark:disabled:bg-input/80 dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40",
        className,
      )}
      {...props}
    />
  );
}

export { Input };
