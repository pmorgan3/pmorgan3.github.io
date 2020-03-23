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
import { BottomBar } from "./user/BottomNavigation";
import { Header } from "./user/Header/Header";

export const Toolbox = ({isVisible}) => {
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
            variant="outlined"
          >
            Button
          </MaterialButton>
        </Grid>
        <Grid container direction="column" item>
          <MaterialButton
            ref={ref => connectors.create(ref, <Text text="Hi world" />)}
            variant="outlined"
          >
            Text
          </MaterialButton>
        </Grid>
        <Grid container direction="column" item>
          <MaterialButton
            ref={ref =>
              connectors.create(ref, <Canvas is={Container} padding={20} />)
            }
            variant="outlined"
          >
            Container
          </MaterialButton>
        </Grid>
        <Grid container direction="column" item>
          <MaterialButton
            ref={ref => connectors.create(ref, <Card />)}
            variant="outlined"
          >
            Card
          </MaterialButton>
        </Grid>
        <Grid container direction="column" item>
          <MaterialButton
            ref={ref => connectors.create(ref, <Header headerType={1} text="Header" />)} variant="outlined">
              &lt;h1&#x2F;&gt;
            </MaterialButton>
        </Grid>
        <Grid container direction="column" item>
          <MaterialButton
            ref={ref => connectors.create(ref, <Header headerType={2} text="Header" />)} variant="outlined">
              &lt;h2&#x2F;&gt;
            </MaterialButton>
        </Grid>
        <Grid container direction="column" item>
          <MaterialButton
            ref={ref => connectors.create(ref, <Header headerType={3} text="Header" />)} variant="outlined">
              &lt;h3&#x2F;&gt;
            </MaterialButton>
        </Grid>
        <Grid container direction="column" item>
          <MaterialButton
            ref={ref => connectors.create(ref, <Header headerType={4} text="Header" />)} variant="outlined">
              &lt;h4&#x2F;&gt;
            </MaterialButton>
        </Grid>
        <Grid container direction="column" item>
          <MaterialButton
            ref={ref => connectors.create(ref, <Header headerType={5} text="Header" />)} variant="outlined">
             &lt;h5&#x2F;&gt;
            </MaterialButton>
        </Grid>
        <Grid container direction="column" item>
          <MaterialButton
            ref={ref => connectors.create(ref, <Header headerType={6} text="Header" />)} variant="outlined">
              &lt;h6&#x2F;&gt;
            </MaterialButton>
        </Grid>
        {/* <Grid container direction="column" item>
          <MaterialButton 
            ref={ref => connectors.create(ref, <BottomBar />)} varient="contained"
           >
            Bottom Nav
          </MaterialButton>
        </Grid> */}
      </Grid>
    </Box>
  );
};
