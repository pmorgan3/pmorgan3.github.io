import React, { } from 'react';
import { Section } from './components/Layout/Section';
import { LandingSection } from './components/Layout/LandingSection'
import { Canvas } from 'react-three-fiber';
import { Lights, Content } from './components/Shapes/ShapeContent';
import {  ProjectsPage, Art }  from './components/Pages'
import { BrowserRouter , Route  } from 'react-router-dom'
import { Navbar } from './components/Layout/Navbar';

export default function App() {
  return (
    <>
<BrowserRouter>
      <Section>
      <Canvas style={{ position: 'fixed', zIndex: -1,height: '100%'}} shadowMap camera={{ position: [0, 0, 100], fov: 100, near: 0.1, far: 200000 }}>
        <Lights />
        <Content />
      </Canvas>
      <Navbar/>
      
      <LandingSection />
          <Route exact path='/' component={ProjectsPage}/>
          <Route path='/Art' component={Art}/>
      </Section>
      </BrowserRouter>
    </>
  );
} 
