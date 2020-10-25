import React from "react";
import { GithubRepos } from "../GithubDisplay/GitRepos";

export const ProjectsPage: React.FC = () => {
  return (
    <>
      <div>{/*<TransitionImage/>*/}</div>
      <div className='SectionHeader-Blue'>Some projects I've worked on.</div>
      <GithubRepos/>
    </>
  );
};
