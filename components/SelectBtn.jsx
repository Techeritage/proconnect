import * as React from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";

const SelectBtn = ({
  label,
  options,
  name,
  handleChange,
  className,
  value,
}) => {
  return (
    <Select
      value={value || ""}
      onValueChange={(selectedValue) => handleChange(name, selectedValue)}
    >
      <SelectTrigger className={cn("w-full select", className)}>
        <SelectValue placeholder={value ? value : label}>
          {options.find((opt) => opt.value === value)?.item || label}
        </SelectValue>
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          {options.map((opt, i) => (
            <SelectItem key={i} value={opt.value}>
              {opt.item}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};

export default SelectBtn;
