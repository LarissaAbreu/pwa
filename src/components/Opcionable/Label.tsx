import { styled } from "../../theme";

export const Label = styled.label`
  width: 100%;
  display: block;
  text-align: left;
  position: relative;
  color: ${({theme}) =>theme.colors.third};
  cursor: pointer;
  font-size: 14px;
  border-bottom: 1px solid ${({theme}) =>theme.colors.fourth};
  padding: 10px 5px;
`;
