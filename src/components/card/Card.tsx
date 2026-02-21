import { ComponentProps, forwardRef } from "react";

import s from "./Card.module.scss";
import { clsx } from "clsx";

type CardProps = ComponentProps<"div">;

export const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ children, className, ...props }, ref) => {
    return (
      <div ref={ref} className={clsx(s.card, className)} {...props}>
        {children}
      </div>
    );
  },
);

Card.displayName = "Card";
