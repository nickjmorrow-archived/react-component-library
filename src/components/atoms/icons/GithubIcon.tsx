import * as React from "react";
import styled from "styled-components";
import { ThemeContext } from "../../../styleConstants";
import { DefaultIconSvg, getColor, getIconSize } from "./iconServices";
import { IconProps } from "./types";

export const GithubIcon: React.SFC<IconProps> = ({
  sizeVariant,
  colorVariant = "primaryDark"
}) => {
  const {
    colors,
    icons: { iconSizes, defaultIconSizeVariant }
  } = React.useContext(ThemeContext);

  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      version="1.0"
      viewBox="0 0 120.000000 120.000000"
      size={iconSizes[getIconSize(sizeVariant || defaultIconSizeVariant)]}
      color={getColor(colorVariant, colors)}>
      <g
        transform="translate(0.000000,120.000000) scale(0.100000,-0.100000)"
        stroke="none">
        <path
          fill="currentColor"
          d="M441 1174 c-105 -28 -181 -73 -266 -159 -125 -124 -175 -246 -175 -425 0 -179 50 -300 175 -425 85 -85 185 -145 243 -145 36 0 42 13 42 89 l0 57 -57 -3 c-74 -5 -117 17 -150 78 -13 24 -37 56 -54 71 -34 33 -36 38 -9 38 12 0 20 -7 20 -16 0 -10 6 -14 14 -11 10 4 13 1 9 -9 -3 -10 2 -14 18 -14 18 0 20 -3 10 -9 -16 -11 -4 -34 14 -27 9 3 11 -2 7 -16 -4 -18 -2 -20 21 -14 20 5 25 3 21 -8 -9 -23 17 -31 33 -11 12 17 13 17 13 2 0 -11 8 -17 21 -17 15 0 19 5 15 15 -3 8 -1 15 4 15 6 0 10 -7 10 -15 0 -8 7 -15 15 -15 8 0 15 8 15 18 0 10 10 39 23 64 l23 46 -59 13 c-136 28 -210 123 -211 268 -1 66 3 82 27 124 23 39 27 55 22 86 -7 40 9 121 24 121 18 0 78 -25 113 -46 30 -19 42 -22 70 -14 18 6 71 10 118 10 47 0 100 -4 118 -10 28 -8 40 -5 70 14 35 21 95 46 113 46 15 0 31 -81 24 -121 -5 -31 -1 -47 22 -86 24 -42 28 -58 27 -123 -1 -147 -65 -231 -203 -266 l-68 -18 18 -30 c15 -25 19 -51 19 -138 0 -58 3 -113 6 -122 20 -52 166 16 279 129 125 125 175 246 175 425 0 179 -50 301 -175 425 -86 87 -161 131 -270 160 -75 19 -241 19 -314 -1z"
        />
      </g>
    </Svg>
  );
};

const Svg = styled(DefaultIconSvg)`
  position: relative;
  top: 2px;
`;
