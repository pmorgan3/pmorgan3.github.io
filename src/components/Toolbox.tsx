import React from "react";
import {
  Box,
  Typography,
  Grid,
  Button as MaterialButton
} from "@material-ui/core";
import { useEditor, Canvas } from "@craftjs/core";
import { Button } from "./user/Button";

import { Text } from "./user/Text"
import { Container } from './user/Container';
import { Card } from './user/Card';

export const Toolbox = () => {
     const { connectors, query } = useEditor();
  return (
    <Box px={2} py={2}>
      <Grid
        container
        direction="column"
        alignItems="center"
        justify="center"
        spacing={1}
      >
        <Box pb={2}>
          <Typography>Drag to add</Typography>
        </Box>
        <Grid container direction="column" item>
          <MaterialButton
            ref={ref =>
              connectors.create(ref, <Button text="Click me" size="small" />)
            }
            variant="contained"
          >
            Button
          </MaterialButton>
        </Grid>
        <Grid container direction="column" item>
          <MaterialButton
            ref={ref => connectors.create(ref, <Text text="Hi world" />)}
            variant="contained"
          >
            Text
          </MaterialButton>
        </Grid>
        <Grid container direction="column" item>
          <MaterialButton
            ref={ref =>
              connectors.create(ref, <Canvas is={Container} padding={20} />)
            }
            variant="contained"
          >
            Container
          </MaterialButton>
        </Grid>
        <Grid container direction="column" item>
          <MaterialButton
            ref={ref => connectors.create(ref, <Card />)}
            variant="contained"
          >
            Card
          </MaterialButton>
        </Grid>
      </Grid>
    </Box>
  );
};