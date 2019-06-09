import * as React from "react";
import { DefaultIconSvg } from "./DefaultIconSvg";
import { IconProps } from "./types";

export const ShareIcon: React.SFC<IconProps> = ({
  sizeVariant,
  colorVariant = "primaryDark",
  ...svgProps
}) => (
  <DefaultIconSvg
    {...svgProps}
    colorVariant={colorVariant}
    sizeVariant={sizeVariant}
    fill="currentColor"
	transform="scale(1.3)"
  	xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" enable-background="new 0 0 50 50"><path d="M30.3 13.7L25 8.4l-5.3 5.3-1.4-1.4L25 5.6l6.7 6.7z"/><path d="M24 7h2v21h-2z"/><path d="M35 40H15c-1.7 0-3-1.3-3-3V19c0-1.7 1.3-3 3-3h7v2h-7c-.6 0-1 .4-1 1v18c0 .6.4 1 1 1h20c.6 0 1-.4 1-1V19c0-.6-.4-1-1-1h-7v-2h7c1.7 0 3 1.3 3 3v18c0 1.7-1.3 3-3 3z"/></DefaultIconSvg>
);


