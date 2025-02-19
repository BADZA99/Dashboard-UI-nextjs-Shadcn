"use client";
import * as React from "react";

import { cn } from "@/lib/utils";
import { Input } from "./ui/input";
import { EyeIcon, EyeOffIcon } from "lucide-react";

export interface PasswordInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const PasswordInput = React.forwardRef<HTMLInputElement, PasswordInputProps>(
  ({ className, type, ...props }, ref) => {
    const [isPasswordVisible, setIsPasswordVisible] = React.useState(false);

    return (
      <div className="relative">
        <Input
          {...props}
          type={isPasswordVisible ? "text" : "password"} 
          className={cn(
            "pr-10",
            className
          )}
          ref={ref}
        />
        <span className="absolute top-[7px] right-1 cursor-pointer select-none">
          {isPasswordVisible ? (
            <EyeIcon
              className="w-5 h-5"
              onClick={() => setIsPasswordVisible(false)} 
            />
          ) : (
            <EyeOffIcon
              className="w-5 h-5"
              onClick={() => setIsPasswordVisible(true)} 
            />
          )}
        </span>
      </div>
    );
  }
);

PasswordInput.displayName = "PasswordInput";

export { PasswordInput };
