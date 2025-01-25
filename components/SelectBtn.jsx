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

const SelectBtn = ({ label, options, name, handleChange, className }) => {
  return (
    <Select name={name} onValueChange={(value) => handleChange(name, value)}>
      <SelectTrigger className={cn("w-full select", className)}>
        <SelectValue placeholder={label} />
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
