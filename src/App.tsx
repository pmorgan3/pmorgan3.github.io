import React, { } from 'react';
import { Project } from './components/projects';
import { legalDocketTitle, legalDocketBody, keyvTitle, uicSchoolPageBody, androidNoteBody, uicSchoolPageTitle, keyvBody, androidNoteTitle } from './text';
import { ResumeCardContainer } from './components/HomePage/ResumeCardContainer';
import { Avatar } from './components/HomePage/Avatar';
import { Section } from './components/HomePage/Section';
import { TransitionImage } from './components/TransitionImage';
import { Footer } from './components/Footer/FooterBase';
import { LandingSection } from './components/HomePage/LandingSection'
import { Canvas } from 'react-three-fiber';
import { Lights, Content } from './components/Shapes/ShapeContent';
import { Home } from './components/HomePage/Home';
import { BrowserRouter , Route, Link, Switch  } from 'react-router-dom'
import { Art } from './components/Art/ArtPage';
import { Navbar } from './components/HomePage/Navbar';

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
      
        
          <Route exact path='/' component={Home}/>
          <Route path='/Art' component={Art}/>
        
      
      
      </Section>
      </BrowserRouter>
    </>
  );
} 
