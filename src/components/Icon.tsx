import React from 'react'

import { styled } from "../theme";

type Props = {
  icon: string;
};

export const Icon = styled.span`
  font-family: 'icomoon' !important;
  speak: none;
  font-style: normal;
  font-weight: normal;
  font-variant: normal;
  text-transform: none;
  line-height: 1;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  &::before {
    content: "\\${(props: Props) => props.icon}";
  }
`;
