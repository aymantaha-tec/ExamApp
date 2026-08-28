import { cn } from "../lib/tailwind-merge.ts";
import { CircleX } from "lucide-react";

export default function FormFeedback({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  if (!children) return null;
  return (
    <div
      className={cn(
        "relative flex h-9.5 items-center justify-center border border-red-500 bg-red-50 text-sm text-red-500",
        className,
      )}
      {...props}
    >
      {/* icon */}
      <CircleX
        size={16}
        className="absolute top-0 translate-x-1/2 -translate-y-1/2 rounded-full bg-white"
      />

      {/* message */}
      {children}
    </div>
  );
}
