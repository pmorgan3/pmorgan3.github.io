import React from 'react';
import { Box } from 'grommet';

export const Header: React.FunctionComponent =  (props) => {
    return (
            <Box
                tag='header'
                direction='row'
                align='center'
                justify='between'
                background='brand'
                pad={{left: 'medium', right: 'small', vertical: 'medium'}}
                elevation='medium'
                style={{zIndex: 1}}
                {...props}
                />
    )
}