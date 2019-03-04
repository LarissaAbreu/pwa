import { styled } from "../../theme";

export const Input = styled.input`
  display: none;

  &:checked ~ label {
    color: ${({theme}) =>theme.colors.third};
  }

  &:checked ~ label span {
    color: ${({theme}) =>theme.colors.third};
  }
`;
