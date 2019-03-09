import * as React from "react";
import { Typography } from ".";
import { GetComponentProps } from "~/typeUtilities";

export const getFormattedTextNode = (
  textNode: React.ReactNode,
  props: GetComponentProps<typeof Typography> = {}
): React.ReactNode =>
  typeof textNode === "string" ? (
    <Typography {...props}>{textNode}</Typography>
  ) : (
    textNode
  );
