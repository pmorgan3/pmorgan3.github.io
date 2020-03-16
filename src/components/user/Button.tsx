import React from "react";
import { Button as MaterialButton } from "@material-ui/core";
import { useNode } from "@craftjs/core";

type SizeType = "small" | "medium" | "large" | undefined
type VariantType = "text" | "outlined" | "contained" | undefined
type PrimaryType = "primary" | "inherit" | "secondary" | "default" | undefined
export const Button: React.FunctionComponent<{size: SizeType, variant?: VariantType, color?: PrimaryType, text?: any}> = ({ size, variant, color, text, children }) => {
  
  const {connectors: { connect, drag }} = useNode();
  return (
    <MaterialButton
      ref={ref => connect(drag(ref))}
      size={size}
      variant={variant}
      color={color}
      className={"button-gradient"}
    >
          {text}{children}
    </MaterialButton>
  );
};
