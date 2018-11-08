import React from "react";
import styled from "styled-components";
import { Button } from "./Button";
import { Icon } from "./Icon";

const Description = styled.p`
  color: ${props => props.theme.colors.secondary};
  margin-bottom: 20px;
`;

const Overlay = styled.div`
  width: 100%;
  height: calc(100vh - 50px);
  background: rgb(0, 0, 0, 0.8);
  position: relative;
  z-index: 1200;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  position: absolute;
`;

const Wrapper = styled.div`
  background: ${props => props.theme.colors.primary};
  border-radius: 5px;
  padding: 30px;
  text-align: center;
  left: 50%;
  top: 50%;
  position: absolute;
  transform: translate(-50%, -50%);
`;

const ConfirmButton = styled(Button)`
  margin-top: 10px;
`;

type Props = {
  buttonWasClicked: () => any;
  description: string;
};

export const Modal = ({ buttonWasClicked, description, ...props }: Props) => {
  return (
    <Overlay {...props}>
      <Wrapper>
        <Description>{description}</Description>

        <ConfirmButton onClick={buttonWasClicked} size="medium" color="primary">
          Ok
        </ConfirmButton>
      </Wrapper>
    </Overlay>
  );
};
