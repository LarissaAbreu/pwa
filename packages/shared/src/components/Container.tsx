import { css } from "../theme";

export const Container = css`
  width: 100%;
  max-width: 1024px;
  margin: 0 auto;

  @media (max-width: 1024px) {
    padding-left: 15px;
    padding-right: 15px;
  }
`;
