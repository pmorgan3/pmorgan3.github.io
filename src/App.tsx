import React from 'react';
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
  return (
    <>
      <div className="App">
        <SimpleHeader />
       
              <Project title={keyvTitle} body={keyvBody} status={'Status: available on NPM'}/>
              <Project title={legalDocketTitle} body={legalDocketBody} status={'Status: Taken offline'}/>
              <Project title={uicSchoolPageTitle} body={uicSchoolPageBody} status={'Status: Taken offline'} />
              <Project title={androidNoteTitle} body={androidNoteBody} status={'Status: Code available on github'}/>
          

      </div>
    </>
  );
}

export default App;
