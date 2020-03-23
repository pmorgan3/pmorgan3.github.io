import React, { useState, useCallback } from 'react'
import {IconButton as MaterialButton, Drawer} from '@material-ui/core';
import { Toolbox } from './Toolbox';
export const SideDrawer = () => {
    const [isVisible, setVisible] = useState(false);
    const handleMenuClick = useCallback(() => {
        setVisible(!isVisible)
    }, [isVisible])


    return (
        <div>
            <MaterialButton onClick={handleMenuClick} aria-lable="menu" color="primary" style={{float: 'right'}}>
                <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0z" fill="none"/><path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"/></svg>
            </MaterialButton>

            <Drawer  anchor="right" open={isVisible} onClose={handleMenuClick}>
                <Toolbox isVisible={isVisible} />
            </Drawer>

        </div>
    
    )
    
}