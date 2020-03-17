import React from 'react'
import { Paper, FormControl, FormLabel, Slider } from '@material-ui/core';
import { useNode } from '@craftjs/core';
import ColorPicker from 'material-ui-color-picker';

export const Container: any = ({ background, padding = 0, children }) => {
  const { connectors: { connect, drag } } = useNode();
  const wrapper = (r: any) => connect(drag(r))
  return (
      <Paper
          ref={(ref) => wrapper(ref)}
          style={{ background, padding: `${padding}px` }
          }
      >
      {children}
    </Paper>
  );
};
export const ContainerSettings = () => {
  const { background, padding, setProp } = useNode(node => ({
    background: node.data.props.background,
    padding: node.data.props.padding
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