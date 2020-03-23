import React from 'react';
import { Text } from '../Text'
import { useNode } from '@craftjs/core';
export type HeaderType = 1 | 2 | 3 | 4 | 5 | 6;

export interface HeaderProps {
    HeaderType: HeaderType;
    Text: string;
}

export const HeaderChoice = ({header, children}) => {
    switch (header) {
        case 1:
            return <h1>{children}</h1>
        case 2:
            return <h2>{children}</h2>
        case 3:
            return <h3>{children}</h3>
        case 4:
            return <h4>{children}</h4>
        case 5:
            return <h5>{children}</h5>
        case 6:
            return <h6>{children}</h6>
        default:
            return <h1>{children}</h1>
    }
}

export const Header = ({headerType, text}) => {
    const { connectors: {connect, drag }, selected, dragged, setProp } = useNode((state) => ({
        selected: state.events.selected,
        dragged: state.events.dragged
    }));

    return (
        <HeaderChoice header={headerType}>
            <Text text={text}/>
        </HeaderChoice>
    )
}

Header.craft = {
    rules: {
        canDrag: (node: any) => node.data.props.text !== "Drag"
    }
}