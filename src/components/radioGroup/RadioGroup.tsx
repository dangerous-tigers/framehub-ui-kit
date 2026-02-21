import * as RadioGroup from "@radix-ui/react-radio-group";

import s from "./RadioGroup.module.scss";
import { RadioGroupItem } from "./RadioGroupItem/RadioGroupItem";
import { RadioGroupProps } from "./RadioGroup.types";

export const RadioButtonGroup = ({
  required = true,
  items,
  ariaLabel,
  ...rest
}: RadioGroupProps) => {
  return (
    <RadioGroup.Root
      className={s.radio}
      aria-label={ariaLabel}
      required={required}
      defaultValue={items[0]?.value}
      {...rest}
    >
      {items.map((item) => (
        <RadioGroupItem
          key={item.value}
          value={item.value}
          label={item.label}
          disabled={item.disabled}
        />
      ))}
    </RadioGroup.Root>
  );
};
