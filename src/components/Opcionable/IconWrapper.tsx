import { Icon } from "../Icon";
import { styled } from "../../theme";

export const IconWrapper = styled(Icon)`
  top: 50%;
  transform: translateY(-50%);
  position: absolute;
  right: 10px;
  color: ${({theme}) =>theme.colors.primary};
`;
