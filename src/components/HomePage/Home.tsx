import React from "react";
import {
  legalDocketTitle,
  legalDocketBody,
  keyvTitle,
  keyvBody,
  uicSchoolPageTitle,
  uicSchoolPageBody,
  androidNoteTitle,
  androidNoteBody,
} from "../../text";
import { Project } from "../projects";
import { ResumeCardContainer } from "./ResumeCardContainer";

export const Home: React.FC = () => {
  return (
    <>
      <div>{/*<TransitionImage/>*/}</div>
      <div className='SectionHeader-Blue'>Some projects I've worked on.</div>
      <ResumeCardContainer
        boxes={[
          <Project
            title={legalDocketTitle}
            body={legalDocketBody}
            status={"Offline. Can show source code on request"}
          />,
          <Project
            title={keyvTitle}
            body={keyvBody}
            status={"Over 200 downloads on npm!"}
          />,
          <Project
            title={uicSchoolPageTitle}
            body={uicSchoolPageBody}
            status={"Offline. Can show source code on request"}
          />,
          <Project
            title={androidNoteTitle}
            body={androidNoteBody}
            status={"App code is available on my github"}
          />,
        ]}
      ></ResumeCardContainer>
    </>
  );
};
