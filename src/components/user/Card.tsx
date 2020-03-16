
import React from "react";
import { Text } from "./Text";
import { Button } from "./Button";
import { Container } from "./Container";
import { useNode, Canvas } from "@craftjs/core";
export const CardTop = ( children ) => {
  const {
    connectors: { connect }
  } = useNode();
  return (
    <div ref={connect} className="text-only">
      {children}
    </div>
  );
};
CardTop.craft = {
  rules: {
    // Only accept Text
    canMoveIn: (incomingNode: any) => incomingNode.data.type === Text
  }
};
export const CardBottom = ( children: any ) => {
  const {
    connectors: { connect }
  } = useNode();
  return <div ref={connect}>{children}</div>;
};
CardBottom.craft = {
  rules: {
    // Only accept Buttons
    canMoveIn: (incomingNode: any) => incomingNode.data.type === Button
  }
};
export const Card: React.FunctionComponent<{background?: any, padding?: number}> = ({ background, padding = 20 }) => {
  return (
    <Container background={background} padding={padding}>
      <Canvas id="text">
        <Text text="Title" fontSize={20} />
        <Text text="Subtitle" fontSize={15} />
      </Canvas>
      <Canvas id="buttons">
              <Button size="small" >
                Learn more
              </Button>
      </Canvas>
    </Container>
  );
};
