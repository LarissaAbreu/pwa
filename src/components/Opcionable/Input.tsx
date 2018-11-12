import { styled } from "../../theme";

export const Input = styled.input`
  display: none;

  &:checked ~ label {
    color: ${props => props.theme.colors.third};
  }

  &:checked ~ label span {
    color: ${props => props.theme.colors.third};
  }
`;
