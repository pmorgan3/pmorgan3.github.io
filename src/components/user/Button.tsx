import React from "react";
import { Button as MaterialButton, FormControlLabel, Radio, RadioGroup, FormLabel, FormControl } from "@material-ui/core";
import { useNode } from "@craftjs/core";
import { FormTextArea } from "semantic-ui-react";
import { Text } from "./Text";

type SizeType = "small" | "medium" | "large" | undefined
type VariantType = "text" | "outlined" | "contained" | undefined
type PrimaryType = "primary" | "inherit" | "secondary" | "default" | undefined
export const Button: any = ({ size, variant, color, text }) => {
  
  const {connectors: { connect, drag }} = useNode();
  return (
    <MaterialButton
      ref={ref => connect(drag(ref))}
      size={size}
      variant={variant}
      color={color}
      className={"button-gradient"}
    >
          <Text text={text} />
    </MaterialButton>
  );
};
const ButtonSettings = () => {
  const { setProp, variant, color, text, size } = useNode((node) => ({
    variant: node.data.props.variant,
    color: node.data.props.color,
    text: node.data.props.text,
    size: node.data.props.size,
  }));
  return (
    <div>
      <FormControl size="small" component="fieldset">
        <FormLabel component="legend">Size</FormLabel>
        <RadioGroup defaultValue={size} onChange={(e) => setProp(props => props.size = e.target.value )}>
          <FormControlLabel label="Small" value="small" control={<Radio size="small" color="primary" />} />
          <FormControlLabel label="Medium" value="medium" control={<Radio size="small" color="primary" />} />
          <FormControlLabel label="Large" value="large" control={<Radio size="small" color="primary" />} />
        </RadioGroup>
      </FormControl>
      <FormControl component="fieldset">
        <FormLabel component="legend">Variant</FormLabel>
        <RadioGroup defaultValue={variant} onChange={(e) => setProp(props => props.variant = e.target.value )}>
          <FormControlLabel label="Text" value="text" control={<Radio size="small" color="primary" />} />
          <FormControlLabel label="Outlined" value="outlined" control={<Radio size="small" color="primary" />} />
          <FormControlLabel label="Contained" value="contained" control={<Radio size="small" color="primary" />} />
        </RadioGroup>
      </FormControl>
      <FormControl component="fieldset">
        <FormLabel component="legend">Color</FormLabel>
        <RadioGroup defaultValue={color} onChange={(e) => setProp(props => props.color = e.target.value )}>
          <FormControlLabel label="Default" value="default" control={<Radio size="small" color="default" />} />
          <FormControlLabel label="Primary" value="primary" control={<Radio size="small" color="primary" />} />
          <FormControlLabel label="Seconday" value="secondary" control={<Radio size="small" color="primary" />} />
        </RadioGroup>
      </FormControl>

    </div>
  )
};
Button.craft = {
   defaultProps: { 
    size: "small", 
    variant: "outlined",
    color: "primary",
  },
  related: { 
    settings: ButtonSettings
  }
}