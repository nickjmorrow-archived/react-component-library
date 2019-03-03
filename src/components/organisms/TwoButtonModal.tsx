import * as React from "react";
import styled from "styled-components";
import {
  formattedTextNode,
  Typography,
  IModalProps,
  PaperModal,
  Button
} from "../atoms";
import { GetComponentProps, StyleConstant } from "../../typeUtilities";
import { ThemeContext } from "../../styleConstants";

export const TwoButtonModal: React.SFC<IModalProps & IOwnProps> = ({
  isOpen,
  children,
  title,
  onRequestClose: handleRequestClose,
  primaryButtonElement,
  secondaryButtonElement,
  onPrimaryClick: handlePrimaryClick,
  onSecondaryClick: handleSecondaryClick
}) => {
  const modalTitle =
    title && typeof title === "string" ? (
      <Typography sizeVariant={5} weightVariant={2}>
        {title}
      </Typography>
    ) : (
      title
    );
  const handlePrimaryClickInternal = () => {
    handlePrimaryClick();
    handleRequestClose();
  };

  const handleSecondaryClickInternal = () => {
    handleSecondaryClick();
    handleRequestClose();
  };
  const { colors, spacing } = React.useContext(ThemeContext);
  return (
    <PaperModal isOpen={isOpen} onRequestClose={handleRequestClose}>
      <Wrapper>
        <TitleWrapper spacing={spacing}>{modalTitle}</TitleWrapper>
        <ChildrenContainer spacing={spacing}>
          {formattedTextNode(children, { colorVariant: "primaryDark" })}
        </ChildrenContainer>
        <ButtonsContainer spacing={spacing} colors={colors}>
          <Button
            onClick={handleSecondaryClickInternal}
            showBoxShadow={false}
            styleVariant={"tertiary"}
            textColorVariant={"core"}>
            {secondaryButtonElement}
          </Button>
          <Button onClick={handlePrimaryClickInternal} useMargin={false}>
            {primaryButtonElement}
          </Button>
        </ButtonsContainer>
      </Wrapper>
    </PaperModal>
  );
};

// css
const ButtonsContainer = styled("div")<{
  spacing: StyleConstant<"spacing">;
  colors: StyleConstant<"colors">;
}>`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  padding: 0.75rem ${p => p.spacing.ss2};
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
`;

const ChildrenContainer = styled("div")<{ spacing: StyleConstant<"spacing"> }>`
  margin: 2rem ${p => p.spacing.ss2};
`;

const TitleWrapper = styled("div")<{ spacing: StyleConstant<"spacing"> }>`
  margin-left: ${p => p.spacing.ss2};
`;

// types
interface IOwnProps {
  primaryButtonElement: React.ReactNode;
  secondaryButtonElement: React.ReactNode;
  secondaryButtonVariant?: GetComponentProps<typeof Button>["colorVariant"];
  title?: React.ReactNode;
  onPrimaryClick(): void;
  onSecondaryClick(): void;
}
