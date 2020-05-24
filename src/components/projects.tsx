import React from "react";
import {Text} from 'grommet'

export const Project: React.FunctionComponent<{title: string, body: string, status: string}> = ({title, body, status}) => {

  return (
    <>
      <Text size="large">
        {title} 
      </Text>
      <Text size="medium">
        {body} 
      </Text>
      <Text size="small">
        {status} 
      </Text>
    </>
  );
}
