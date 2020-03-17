import React from "react";
import { Card } from 'semantic-ui-react'


export const Project: React.FunctionComponent<{title: string, body: string, status: string}> = ({title, body, status}) => {

  return (
      <Card header={title} description={body} meta={status} />
  );
}
