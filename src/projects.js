import React from "react";
import { Card } from 'semantic-ui-react'

export default function Project({ title, body, status }) {
  
  return (
    <Card header={title} description={body} meta={status}/>
  );
}
