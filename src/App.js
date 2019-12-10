import React from 'react';
import logo from './logo.svg';
import './App.css';
import Project from './projects'
import {Grid} from 'semantic-ui-react'
import "semantic-ui-css/semantic.min.css";

import {
  uicSchoolPageBody, uicSchoolPageTitle,
  legalDocketBody, legalDocketTitle, keyvBody, keyvTitle,
  androidNoteBody, androidNoteTitle
} from './text';
import SimpleHeader  from './components/SimpleHeader';

function App() {
  return (
    <>
      <div className="App">
        <SimpleHeader />
        <Grid columns={2} padded>
          <Grid.Row>
            <Grid.Column mobile={16} tablet={8} computer={4}>
              <Project title={keyvTitle} body={keyvBody} status={'Status: available on NPM'}/>
            </Grid.Column>
            <Grid.Column mobile={16} tablet={8} computer={4}>
              <Project title={legalDocketTitle} body={legalDocketBody} status={'Status: Taken offline'}/>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column mobile={16} tablet={8} computer={4}>
              <Project title={uicSchoolPageTitle} body={uicSchoolPageBody} status={'Status: Taken offline'} />
            </Grid.Column>
            <Grid.Column>
              <Project title={androidNoteTitle} body={androidNoteBody} status={'Status: Code available on github'}/>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    </>
  );
}

export default App;
