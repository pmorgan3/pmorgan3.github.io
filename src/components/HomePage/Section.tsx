import React from 'react'

export const Section: React.FunctionComponent = ({children}) => {
    return <div className="Section">
        <div className="SectionWrapper">
             {children}
        </div>
       
    </div>
}