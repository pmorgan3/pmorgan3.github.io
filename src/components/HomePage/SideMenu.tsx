import React, { useEffect, useState } from 'react'
import { LogoButton } from './LogoButton';

export const SideMenu: React.FC<{width?; height?}> = ({width, height, children}) => {
    const [xPos, setX] = useState(-width)

    const toggleMenu = () => {
        if(xPos < 0){
            setX(0);
        } else {
            setX(-width);
        }
        console.log('hi')
    };
    useEffect(()=> {
        setX(0);
    },[])
    return <>
        <div className="side-bar"
            style={{
                transform: `translateX(${xPos}px)`,
                width: width,
                minHeight: height
            }}>
            <LogoButton style={{
                transform: `translate(${width}px, 20vh)`
            }} onClick={toggleMenu}/>
        </div>
    </>;
}