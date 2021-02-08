import React, { useState } from 'react'
import { Section } from './components/Layout/Section'
import { LandingSection, Navbar } from './components/Layout'
import { Canvas } from 'react-three-fiber'
import { Lights, Content } from './components/Shapes/ShapeContent'
import { Art, ContactPage, ProjectsPage } from './components/Pages'
import { BrowserRouter, Route } from 'react-router-dom'
import { ResumePage } from './components/Pages/ResumePage'
export default function App() {
  const [show, setShow] = useState(true)
  return (
    <>
      <BrowserRouter>
        <Section>
          <div hidden={!show}>
            <Canvas
              style={{ position: 'fixed', zIndex: -1, height: '100%' }}
              shadowMap
              camera={{
                position: [0, 0, 100],
                fov: 100,
                near: 0.1,
                far: 200000,
              }}
            >
              <Lights />
              <Content />
            </Canvas>
          </div>

            <Navbar onClick={() => setShow(!show)} />

          <LandingSection />
          <Route exact path='/' component={ResumePage} />
          <Route path='/Projects' component={ProjectsPage} />
          <Route path='/Art' component={Art} />
        </Section>
      </BrowserRouter>
    </>
  )
}
