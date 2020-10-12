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
//import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

export default function App() {
  return (
    <>

      <Section>
      <Canvas style={{ position: 'fixed', zIndex: -1,height: '100%'}} shadowMap camera={{ position: [0, 0, 100], fov: 100, near: 0.1, far: 200000 }}>
        <Lights />
        <Content />
      </Canvas>

      <LandingSection />
        <div>
          {/*<TransitionImage/>*/}
        </div>
        <div className="SectionHeader-Blue">
          Some projects I've worked on.
        </div>
        <ResumeCardContainer boxes={[
          <Project title={legalDocketTitle}
            body={legalDocketBody}
            status={"Offline. Can show source code on request"}
          />,
          <Project title={keyvTitle}
            body={keyvBody}
            status={"Over 200 downloads on npm!"}
          />,
          <Project title={uicSchoolPageTitle}
            body={uicSchoolPageBody}
            status={"Offline. Can show source code on request"}
          />,
          <Project title={androidNoteTitle}
            body={androidNoteBody}
            status={"App code is available on my github"}
          />
        ]}>
        </ResumeCardContainer>
      </Section>
    </>
  );
} 
