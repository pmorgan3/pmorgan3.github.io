import React from 'react'
import { Paper } from '@material-ui/core';
import { useNode } from '@craftjs/core';

export const Container: React.FunctionComponent<{ background?: string | number, padding?: string | number }> = ({ background, padding = 0, children }) => {
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
