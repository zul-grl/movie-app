import * as React from "react";

import { cn } from "@/lib/utils";

const Input = React.forwardRef<HTMLInputElement, React.ComponentProps<"input">>(
  ({ className, type, ...props }, ref) => {
    return (
      <div
        className={cn(
          "flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
          className
        )}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="25"
          height="25"
          viewBox="0 0 16 17"
          fill="none"
        >
          <g opacity="0.5">
            <path
              d="M13.711 14.2105L13.3575 13.8568C13.3444 13.8699 13.3232 13.8699 13.3101 13.8568L10.2834 10.83L9.96699 10.5136L9.61753 10.7932C8.88184 11.3817 7.94958 11.7333 6.93379 11.7333C4.55897 11.7333 2.63379 9.80812 2.63379 7.4333C2.63379 5.05848 4.55897 3.1333 6.93379 3.1333C9.30861 3.1333 11.2338 5.05848 11.2338 7.4333C11.2338 8.44909 10.8822 9.38136 10.2937 10.117L10.0141 10.4665L10.3305 10.783L13.3573 13.8096C13.3704 13.8227 13.3704 13.8439 13.3573 13.857L13.711 14.2105ZM13.711 14.2105C13.9192 14.0022 13.9192 13.6644 13.711 13.4561L12.9566 14.2105C13.1649 14.4187 13.5026 14.4187 13.711 14.2105ZM6.93379 11.6666C9.2718 11.6666 11.1671 9.77131 11.1671 7.4333C11.1671 5.09529 9.2718 3.19997 6.93379 3.19997C4.59578 3.19997 2.70046 5.09529 2.70046 7.4333C2.70046 9.77131 4.59578 11.6666 6.93379 11.6666Z"
              fill="#09090B"
              stroke="#09090B"
            />
          </g>
        </svg>{" "}
        <input className={cn("", className)} type={type} ref={ref} {...props} />
      </div>
    );
  }
);
Input.displayName = "Input";

export { Input };
