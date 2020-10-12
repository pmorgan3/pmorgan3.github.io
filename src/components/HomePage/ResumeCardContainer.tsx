import React from 'react'
import {Box } from 'grommet'
import _ from 'lodash'
import { Row, Col, Container } from 'react-bootstrap'

export const ResumeCardContainer: React.FunctionComponent<{boxes: any[]}> = ({boxes}) => {
    const boxSizing: number = 100 / boxes.length
    const colorList = ['#6FDAFF', '#73FAC9','#fcb1c1', '#a4abbd', '#fcfcd4' ]
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
                    <div className="box-container"
                      style={{background: shuffled_colors[0], opacity: 0.8}}
                    >{boxes[0]}
                    </div>
                </Col>
                 <Col>
                    <div  className="box-container"
                         style={{background: shuffled_colors[1], opacity: 0.8}}>
                    {boxes[1]}
                    </div>
                </Col>
            </Row>
             <Row xs={1} md={2} lg={2}>
                <Col>
                    <div className="box-container"
                         style={{background: shuffled_colors[2], opacity: 0.8}}
                         >
                    {boxes[2]}
                    </div>
                </Col>
                 <Col>
                    <div   className="box-container"
                         style={{background: shuffled_colors[3], opacity: 0.8}}
                         >
                    {boxes[3]}
                    </div>
                </Col>
            </Row>
        </div>
        </>
     )
}

