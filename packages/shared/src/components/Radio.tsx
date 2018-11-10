import React from "react";

import { icons } from "../icons";

import { Label } from "./Opcionable/Label";
import { Group } from "./Opcionable/Group";
import { Input } from "./Opcionable/Input";
import { IconWrapper } from "./Opcionable/IconWrapper";

type Props = {
  id: string;
  name: string;
  text: string;
  defaultChecked: boolean
};

export const Radio: React.SFC<Props> = ({ id, name, text, ...props }: Props) => {
  return (
    <Group>
      <Input id={id} name={name} {...props} type="radio" />

      <Label htmlFor={id}>
        {text}

        <IconWrapper icon={icons.check} />
      </Label>
    </Group>
  );
};
