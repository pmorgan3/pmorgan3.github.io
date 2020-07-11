import React, {  } from 'react';
import { Header  } from './components/HomePage/Header'
import { Project } from './components/projects';
import { legalDocketTitle, legalDocketBody, keyvTitle, uicSchoolPageBody, androidNoteBody, uicSchoolPageTitle, keyvBody, androidNoteTitle } from './text';
import { ResumeCardContainer } from './components/HomePage/ResumeCardContainer';
import { Container } from 'react-bootstrap'
import { Box } from 'grommet';
import { Avatar } from './components/HomePage/Avatar';
import { Section } from './components/HomePage/Section';
import {TransitionImage} from './components/TransitionImage';
export default function App() {
  return (
    <div>
          <div className="navbar-brand">
            <a className="navbar-item" href='/'>
              <img src="MyLogo.png" alt="Paul Morgan III | Web Dev" height="48"/>
            </a>
          </div>
          <div className="columns is-centered">
            <div className="column">
              <h1 className="title">
                Developer, student, and hobbyist
              </h1>
              <h2 className="subheader">I program solutions to problems, and I love what I do.</h2>
              
              <div className="avatar">
                <Avatar/>
              </div> 
                {/** this is how the pros do spacing */}
                <br/>
                <br/>
            </div> 
          </div>
            <Section>
              <div>
                <TransitionImage/>
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
    </div>
  ); 
} 
