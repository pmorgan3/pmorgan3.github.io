import React from 'react'
import { Paper, FormControl, FormLabel, Slider } from '@material-ui/core';
import { useNode } from '@craftjs/core';
import ColorPicker from 'material-ui-color-picker';

export const Container: any = ({ background, padding = 0, children, width, margin }) => {
  const { connectors: { connect, drag } } = useNode();
  const wrapper = (r: any) => connect(drag(r))
  return (
      <Paper
          ref={(ref) => wrapper(ref)}
          style={{ background: `${background}`, padding: `${padding}px`, width: `${width}%`, margin: `${margin}%` }
          }
      >
      {children}
    </Paper>
  );
};
export const ContainerSettings = () => {
  const { background, padding, setProp, width, margin } = useNode((node) => ({
    background: node.data.props.background,
    padding: node.data.props.padding,
    width: node.data.props.width,
    margin: node.data.props.margin
  }));
  return (
    <div>
      <FormControl fullWidth={true} margin="normal" component="fieldset">
        <FormLabel component="legend">Background</FormLabel>
        <ColorPicker defaultValue={background || '#000'} onChange={color => {
          setProp(props => props.background = color)
        }} />
      </FormControl>
      <FormControl fullWidth={true} margin="normal" component="fieldset">
        <FormLabel component="legend">Padding</FormLabel>
        <Slider defaultValue={padding} onChange={(_, value) => setProp(props => props.padding = value)} />
        <FormLabel component="legend">Width</FormLabel>
        <Slider defaultValue={width} onChange={(_, value) => setProp(props => props.width = value)} />
        <FormLabel component="legend">Margin</FormLabel>
        <Slider defaultValue={margin} onChange={(_, value) => setProp(props => props.margin = value)} />
      </FormControl>
    </div>
  )
}
Container.craft = {
  related: {
    settings: ContainerSettings
  }
}
export const ContainerDefaultProps = {
  background : "#ffffff",
  padding: 3
};