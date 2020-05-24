import React from 'react'
import {Box,Text,  Distribution} from 'grommet'

export const ResumeCardContainer: React.FunctionComponent<{boxes: any[]}> = ({boxes}) => {
    const boxSizing: number = 100 / boxes.length
    const colorList = ['light-3', 'brand', 'graph-0']
    let colorPicker = (list) => {
        return list[Math.floor(Math.random() * list.length)]
    } 
    let dynamicPopulation = (list: any[]) => {
        let retList: any[] = []
        list.forEach((element, ind) => {
            retList.push({value: boxSizing, color: colorPicker(colorList), box: boxes[ind]})
        });
        list.map((val, ind) => {
            let box = boxes[ind]
            val = {...val, box: box}
            return val
        })
        return retList
    }
    return (<>
        <Distribution 
            values={dynamicPopulation(boxes)}
        >
            {value => (
                <Box pad="large" round="large" background={value.color} fill>
                    {value.box}
                </Box>
            )}
        </Distribution>
    </>)
}

