/*import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Project} from './components/projects'
import {Grid} from 'semantic-ui-react'
import "semantic-ui-css/semantic.min.css";

import {
  uicSchoolPageBody, uicSchoolPageTitle,
  legalDocketBody, legalDocketTitle, keyvBody, keyvTitle,
  androidNoteBody, androidNoteTitle
} from './text';
import SimpleHeader from './components/SimpleHeader';


function App(this: any) {
  
  
  /*return (
    <>
      <div className="App">
        <SimpleHeader />
          <Project title={keyvTitle} body={keyvBody} status={'Status: available on NPM'}/>
          <Project title={legalDocketTitle} body={legalDocketBody} status={'Status: Taken offline'}/>
          <Project title={uicSchoolPageTitle} body={uicSchoolPageBody} status={'Status: Taken offline'} />
          <Project title={androidNoteTitle} body={androidNoteBody} status={'Status: Code available on github'}/>
      </div>
    </>
  );*/
//} */
// pages/index.js
// pages/index.js
import React from 'react';
import {Typography, Paper, Grid} from '@material-ui/core';
import { Toolbox } from './components/Toolbox';
import { SettingsPanel } from './components/Settings';
import { Container } from './components/user/Container';
import { Button } from './components/user/Button';
import { Card, CardTop, CardBottom } from './components/user/Card';
import { Text } from './components/user/Text';
import {Editor, Frame, Canvas} from "@craftjs/core";

export default function App() {
  return (
    <div>
      <Typography variant="h5" align="center">
        Paul Morgan III: Web Developer
      </Typography>
      <Editor resolver={{ Card, Button, Text, CardTop, CardBottom }}>
        <Grid container spacing={3}>
          <Grid item xs>
            <Frame>
              <Canvas is={Container} padding={5} background="#eee">
                <Card />
                <Button size="small" variant="outlined" text="CLick">
                  
                </Button>
                <Text fontSize="small" text="Hi world!" />
                <Canvas is={Container} padding={6} background="#999">
                  <Text fontSize="small" text="It's me again!" />
                </Canvas>
              </Canvas>
            </Frame>
          </Grid>
          <Grid item xs={3}>
            <Paper>
              <Toolbox />
              <SettingsPanel />
            </Paper>
          </Grid>
        </Grid>
      </Editor>
    </div>
  );
}


