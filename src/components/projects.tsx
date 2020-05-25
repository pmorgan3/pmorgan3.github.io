import React from "react";
import {Text} from 'grommet'

export const Project: React.FunctionComponent<{title: string, body: string, status: string}> = ({title, body, status}) => {

  return (
    <>
      <Text size="large" className="box-title">
        {title} 
      </Text>
      <Text size="medium" className="box-body">
        {body} 
      </Text>
      <Text size="small" className="box-footer">
        Project status: {status} 
      </Text>
    </>
  );
}
