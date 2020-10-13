import React from "react";
import { Text } from 'grommet'

import { useSpring, animated } from 'react-spring'
export const Project: React.FunctionComponent<{ title: string, body: string, status: string }> = ({ title, body, status }) => {

  return (
    <div
    >
        <Text size="large" className="box-title">
          {title}
        </Text>
        <br />
        <Text size="medium" className="box-body">
          {body}
        </Text>
        <br />
        <Text size="small" className="box-footer">
          Project status: {status}
        </Text>

    </div>
  );
}
