import React, { useState } from "react";
import { Input } from "./input.tsx";
import { Button } from "../button/button.tsx";
import { Eye, EyeOff } from "lucide-react";
import { cn } from "@/shared/lib/tailwind-merge.ts";

interface PasswordInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  ref?: React.Ref<HTMLInputElement>;
}

export default function PasswordInput({
  className,
  ref,
  ...props
}: PasswordInputProps) {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <>
      {/* Field */}
      <div className="relative flex justify-end">
        <Input
          ref={ref}
          type={showPassword ? "text" : "password"}
          className={cn("pr-10", className)}
          {...props}
        />
        <Button
          type="button"
          variant="link"
          className="absolute cursor-pointer text-gray-400"
          onClick={() => setShowPassword((prev) => !prev)}
        >
          {showPassword ? (
            <Eye className="size-4.5" />
          ) : (
            <EyeOff className="size-4.5" />
          )}
        </Button>
      </div>
    </>
  );
}
