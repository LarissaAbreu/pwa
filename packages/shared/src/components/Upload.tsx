import * as React from "react";
import { Group } from "./Opcionable/Group";
import { Label } from "./Opcionable/Label";
import { Input } from "./Opcionable/Input";

type Props = {
  id: string;
  text: string;
};

export const Upload = ({ id, text, ...props }: Props) => {
  return (
    <Group>
      <Input
        id={id}
        multiple={true}
        accept="image/png, image/jpeg"
        type={`file`}
        {...props}
      />

      <Label htmlFor={id}>{text}</Label>
    </Group>
  );
};
