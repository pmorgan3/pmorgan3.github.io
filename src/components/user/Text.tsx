import React, {  useCallback, useState, useEffect } from "react";
import { Typography } from "@material-ui/core";
import { useNode } from "@craftjs/core";
import ContentEditable from "react-contenteditable"

export const Text = ( {text}: string, fontSize?: string | number ) => {
    const {
      connectors: { connect, drag }, selected, dragged, setProp
    } = useNode(state => ({
      selected: state.events.selected,
      dragged: state.events.dragged
    }));
    const [editable, setEditable] = useState(false);
      
    useEffect(() => {
      !selected && setEditable(false);
    }, [selected]);
    return (
      <div ref={ref => connect(drag(ref))}>
        <ContentEditable
          disabled={!editable}
          html={text}
          onChange={e => setProp(props => (props.text = e.target.value.replace(/<\/?[^>]+(>|$)/g, "")))}
          tagName="p"
          style={{ fontSize: `${fontSize}px` }}
        />
      </div>
    );
    
    
}
Text.craft = {

  rules: {
    canDrag: (node: any) => node.data.props.text != "Drag"
  }
}