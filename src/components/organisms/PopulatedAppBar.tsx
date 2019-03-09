import * as React from "react";
import Media from "react-media";
import styled from "styled-components";
import { GetComponentProps } from "../../typeUtilities";
import { AppBar, Button, getFormattedTextNode, Link } from "../atoms";

type LinkProps = GetComponentProps<typeof Link>;

export const PopulatedAppBar: React.SFC<IOwnProps> = ({
  appName,
  links = [],
  isAuthenticated,
  authenticatedButtonProps = [],
  maxWidth = 800,
  titleLink,
  onSignInClick: handleSignInClick,
  onLogOutClick: handleLogOutClick
}) => {
  const renderLinks = (linksToRender: LinkProps[]) =>
    linksToRender.map((l, index) => (
      <Link key={index} route={l.route}>
        {l.children}
      </Link>
    ));
  const unauthenticatedButtonProps = [
    { children: "Sign In", onClick: handleSignInClick }
  ];
  const logOutButtonProps = {
    children: "Log Out",
    onClick: handleLogOutClick
  };

  const asRenderedButton = ({ children, ...other }: ButtonProps) => (
    <Button showBoxShadow={false} {...other}>
      {children}
    </Button>
  );
  const buttonProps = isAuthenticated
    ? [logOutButtonProps, ...authenticatedButtonProps]
    : unauthenticatedButtonProps;
  const renderedButtons = buttonProps.map(asRenderedButton);
  const formattedAppName = getFormattedTextNode(appName, {
    sizeVariant: 4,
    colorVariant: "primaryLight",
    weightVariant: 3
  });
  const appNameDisplay = titleLink ? (
    <Link route={titleLink}>{formattedAppName}</Link>
  ) : (
    formattedAppName
  );
  return (
    <Media query={`(max-width: ${maxWidth}px)`}>
      {matches =>
        matches ? (
          <AppBar>{appNameDisplay}</AppBar>
        ) : (
          <AppBar>
            <FlexWrapper>
              <TextContainer>
                {appNameDisplay}
                <LinkContainer>{renderLinks(links)}</LinkContainer>
              </TextContainer>
              <FlexRow>{renderedButtons}</FlexRow>
            </FlexWrapper>
          </AppBar>
        )
      }
    </Media>
  );
};

type ButtonProps = GetComponentProps<typeof Button>;

// types
interface IOwnProps {
  links?: LinkProps[];
  appName: React.ReactNode;
  authenticatedButtonProps?: ButtonProps[];
  isAuthenticated: boolean;
  currentRoute?: string;
  maxWidth?: number;
  titleLink?: string;
  // TODO: isTitleALink?: boolean
  onSignInClick(): void;
  onLogOutClick(): void;
}

// css
const FlexRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const FlexWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

const LinkContainer = styled(FlexRow)`
  justify-content: space-around;
  width: 200px;
  margin-left: 40px;
`;

const TextContainer = styled.div`
  display: flex;
  align-items: center;
`;
