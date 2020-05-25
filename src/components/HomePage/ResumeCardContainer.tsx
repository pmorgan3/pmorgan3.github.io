import React from 'react'
import {Box,Text,Grid, ResponsiveContext } from 'grommet'
import _ from 'lodash'

export const ResumeCardContainer: React.FunctionComponent<{boxes: any[]}> = ({boxes}) => {
    const boxSizing: number = 100 / boxes.length
    const colorList = ['light-3', 'brand', 'graph-0', 'neutral-3', 'dark-3', 'accent-2', 'accent-3', 'accent-4']
    const dynamicPopulation = (list: any[]) => {
        let retList: any[] = []
        let shuffled_colors =  _.shuffle(colorList)
        list.forEach((element, ind) => {
            retList.push({value: boxSizing, color: shuffled_colors[ind], box: boxes[ind]})
        });
        list.map((val, ind) => {
            let box = boxes[ind]
            val = {...val, box: box}
            return val
        })
        return retList
    }
    let shuffled_colors =  _.shuffle(colorList)
    let gridAreas = [
                {name: 'gridTop', start: [0,0], end: [0,0]},
                {name: 'gridRight', start: [1,0], end: [1,0]},
                {name: 'gridLeft', start: [1,1], end: [1,1]},
                {name: 'gridBottom', start: [0,1], end: [0,1]}
            ]

    return (<>
        <div className="Grid">
            <div className="grid-wrapper">
            {boxes.map((val, ind) => {
                let rowOrCol = ind % 2 === 0 ? '' : ''
                return <div className={rowOrCol}><Box gridArea={gridAreas[ind].name} pad="large" round="large" fill background={shuffled_colors[ind]}>
                    {val}
                </Box></div>
            })}
        </div> 
        </div>
    </>)
}

