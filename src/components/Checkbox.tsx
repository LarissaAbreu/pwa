import React from "react";

import { Label } from "./Opcionable/Label";
import { Group } from "./Opcionable/Group";
import { Input } from "./Opcionable/Input";
import { IconWrapper } from "./Opcionable/IconWrapper";

export const Checkbox = ({ id, text, ...props }) => {
  return (
    <Group>
      <Input id={id} name={id} {...props} type="checkbox" />

      <Label htmlFor={id}>
        {text}

        {/* <IconWrapper icon={icons.check} /> */}
      </Label>
    </Group>
  );
};
