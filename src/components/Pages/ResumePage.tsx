import React from 'react'
import * as projects from '../../text'
const ResumeHeader: React.FC<{ header: string }> = ({ header }) => {
  return <div className='ResumeHeader'>{header}</div>
}
const ResumeSubHeader: React.FC<{ subHeader: string }> = ({ subHeader }) => {
  return <div className='ResumeSubHeader'>{subHeader}</div>
}
const ResumeDate: React.FC<{ dateRange: string }> = ({ dateRange }) => {
  return <div className='ResumeDate'>{dateRange}</div>
}
const ResumeDescription: React.FC<{ description: string }> = ({
  description,
}) => {
  return <div className='ResumeDescription'>{description}</div>
}
const SkillList: React.FC<{ skills: string[] }> = ({ skills }) => {
  return (
    <>
      {skills.map((s) => (
        <div className='Skills'> - {s}</div>
      ))}
    </>
  )
}
const Experience: React.FC = () => {
  const skills = [
    'C# and the .Net platform',
    'Ruby',
    'JavaScript/TypeScript',
    'Reactjs and Redux.js',
    'C/C++',
    'Docker',
  ]
  return (
    <>
      <ResumeHeader header='Experience' />
      <ResumeSubHeader subHeader='Webitects: Software Developer Intern' />
      <ResumeDate dateRange='May 2019 - August 2020' />
      <ResumeDescription
        description='As a Software Development Intern, I created multiple client-facing features using C#, the .NET framework, and React. I also managed deployments and development environments using Docker, AWS ECS, and Bitbucket Pipelines
'
      />
      <br />
      <ResumeHeader header='Projects' />
      <ResumeSubHeader subHeader={projects.keyvTitle} />
      <ResumeDate dateRange={'Available via npm'} />
      <ResumeDescription description={projects.keyvBody} />

      <ResumeSubHeader subHeader={projects.legalDocketTitle} />
      <ResumeDate dateRange='Offline. Code available upon request' />
      <ResumeDescription description={projects.legalDocketBody} />

      <ResumeSubHeader subHeader={projects.uicSchoolPageTitle} />
      <ResumeDate dateRange='Offline. Code available upon request' />
      <ResumeDescription description={projects.uicSchoolPageBody} />

      <ResumeSubHeader subHeader={projects.androidNoteTitle} />
      <ResumeDate dateRange='Code available on github' />
      <ResumeDescription description={projects.androidNoteBody} />
      <br />
      <ResumeHeader header='Skills and Abilities' />
      <ResumeSubHeader subHeader={'Proficient in:'} />
      <SkillList skills={skills} />
    </>
  )
}
export const ResumePage: React.FC = () => {
  return (
    <>
      <div className='SectionHeader-Blue'>About me</div>
      <div className='ResumeContainer'>
        <Experience />
      </div>
    </>
  )
}
