import React from 'react'
import ReactDOM from 'react-dom'
import _ from 'lodash'
import { Row, Col, Container } from 'react-bootstrap'
import { useSpring, animated } from 'react-spring'

const calc = (x, y) => [-(y - window.innerHeight / 2) / 20, (x - window.innerWidth / 2) / 20, 1.1]
const trans = (x,y,s) => `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`
const t = (params: number[]) => trans(params[0],params[1],params[2])
export const ResumeCardContainer: React.FunctionComponent<{boxes: any[]}> = ({boxes}) => {
    const boxSizing: number = 100 / boxes.length
    //const colorList = ['#6FDAFF', '#73FAC9','#fcb1c1', '#a4abbd', '#fcfcd4' ]

    const colorList = ['#CA64F9', '#417DFF', '#007669', '#FF7093', '#FFCE58', '#7DFBE2']

    const [props, sets] = useSpring(() => ({ xys: [0, 0, 1], config: { mass: 5, tension: 350, friction: 40 } }))
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
                    <animated.div 
                    onMouseMove={({clientX: x, clientY: y}) => sets({xys: calc(x,y)})}
                    onMouseLeave={() => sets({xys: [0,0,1]})}
                    className="box-container"
                      style={{background: shuffled_colors[0], opacity: 0.8, transform: props.xys.interpolate(t)}}
                    >
                        <animated.span>
                            {boxes[0]}
                        </animated.span>
                    </animated.div>
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

