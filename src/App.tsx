import {
  uicSchoolPageBody, uicSchoolPageTitle,
  legalDocketBody, legalDocketTitle, keyvBody, keyvTitle,
  androidNoteBody, androidNoteTitle
} from './text';
import React, { useState, useCallback } from 'react';
import {Typography, Paper, Grid, IconButton as MaterialButton} from '@material-ui/core';
import { Toolbox } from './components/Toolbox';
import { SettingsPanel } from './components/Settings';
import { Container } from './components/user/Container';
import { Button } from './components/user/Button';
import { Card, CardTop, CardBottom } from './components/user/Card';
import { Text } from './components/user/Text';
import {Editor, Frame, Canvas} from "@craftjs/core";
import { Topbar } from './components/Topbar';
import { SideDrawer } from './components/Drawer';

export default function App() {

  const [isVisible, setVisible] = useState(false)

  const handleMenuClick = useCallback(() => {
    setVisible(!isVisible);
  }, [isVisible])

  return (
    <div>
      <div style={{display: 'inline'}}>
        <Typography variant="h5" align="center">
          Paul Morgan III: Web Developer
          <br></br>
          Make your own damn website
        </Typography>
        <SideDrawer />
      </div>
      <Editor resolver={{ Card, Button, Text, CardTop, CardBottom }}>
        <Topbar />
        <Grid container spacing={3}>
          
          <Grid item xs>
            <Frame>
              <Canvas is={Container} padding={5} background="#eee">
                <Card />
                <Button size="small" variant="outlined" text="CLick">
                  
                </Button>
                <Canvas is={Container} padding={6} background="#eb9cd3">
                  <Text fontSize="36" text={keyvTitle}/>
                  <Text fontSize="small" text={keyvBody}/>
                </Canvas>
                <Canvas is={Container} padding={6} background="#ffb393">
                  <Text fontSize="36" text={legalDocketTitle} />
                  <Text fontSize="small" text={legalDocketBody} />
                </Canvas>
                <Canvas is={Container} padding={6} background="#ffd374">
                  <Text fontSize="36" text={uicSchoolPageTitle}/>
                  <Text fontSize="small" text={uicSchoolPageBody}/>
                </Canvas>
                <Canvas is={Container} padding={6} background="#b19cd9">
                  <Text fontSize="36" text={androidNoteTitle}/>
                  <Text fontSize="small" text={androidNoteBody}/>
                </Canvas>
              </Canvas>
            </Frame>
          </Grid>
          <Grid item xs={3}>
            <Paper>
              
              <SettingsPanel />
            </Paper>
          </Grid>
        </Grid>
      </Editor>
    </div>
  );
}


