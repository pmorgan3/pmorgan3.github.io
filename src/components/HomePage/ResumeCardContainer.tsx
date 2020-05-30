import React from 'react'
import {Box } from 'grommet'
import _ from 'lodash'
import { Row, Col, Container } from 'react-bootstrap'

export const ResumeCardContainer: React.FunctionComponent<{boxes: any[]}> = ({boxes}) => {
    const boxSizing: number = 100 / boxes.length
    const colorList = ['#845ec2', '#d65db1','#ff9671', '#ffc75f', '#f9f871' ]
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
        <div className="grid">
            <Row xs={1} md={2} lg={2}>
                <Col>
                    <Box 
                         pad="large" 
                         round="large" 
                         background={shuffled_colors[0]}>
                    {boxes[0]}
                    </Box>
                </Col>
                 <Col>
                    <Box  
                         pad="large" 
                         round="large" 
                         background={shuffled_colors[1]}>
                    {boxes[1]}
                    </Box>
                </Col>
            </Row>
             <Row xs={1} md={2} lg={2}>
                <Col>
                    <Box 
                         pad="large" 
                         round="large" 
                         background={shuffled_colors[2]}>
                    {boxes[2]}
                    </Box>
                </Col>
                 <Col>
                    <Box  
                         pad="large" 
                         round="large" 
                         background={shuffled_colors[3]}>
                    {boxes[3]}
                    </Box>
                </Col>
            </Row>
        </div>
        </>
     )
}

