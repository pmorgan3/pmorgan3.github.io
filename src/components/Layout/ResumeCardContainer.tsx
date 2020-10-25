import React,{useState} from 'react'
import ReactDOM from 'react-dom'
import _ from 'lodash'
import { Row, Col, Container } from 'react-bootstrap'
import { useSpring, animated } from 'react-spring'

const calc = (x, y) => [-(y - window.innerHeight / 2) / 20, (x - window.innerWidth / 2) / 20, 1.1]
const trans = (x,y,s) => `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`
const t = (params: number[]) => trans(params[0],params[1],params[2])

type Tup = {first?: any, second?: any}
export const ResumeCardContainer: React.FunctionComponent<{boxes: any[]}> = ({boxes}) => {
    const groupByTwo = (b: any[]): Tup[] => {
        let retArray: Tup[] = [];
        for(let i = 0; i < b.length-1; i+=2){
            retArray.push({first: b[i], second: b[i+1]})
        }
        return retArray;
    }
    const colorList = ['#CA64F9', '#417DFF', '#007669', '#FF7093', '#FFCE58', '#7DFBE2']
    
    let shuffled_colors =  _.shuffle(colorList)

    const uniqueRandomColor = () => {
        const c = Math.floor(Math.random()*shuffled_colors.length)
        let temp_list = shuffled_colors;
        const retCol = shuffled_colors[c];
        shuffled_colors = temp_list.filter((v) => v === shuffled_colors[c] )

        return retCol;
    }

    const list = groupByTwo(boxes)
    return (<>
        <div className="grid">
            {list.map(v => {
                shuffled_colors = _.shuffle(shuffled_colors)
                return <Row xs={1} md={2} lg={2}>
                    <Col>
                    <div 
                    className="box-container"
                      style={{background: shuffled_colors[0], opacity: 0.8}}
                    >
                        {v.first}
                    </div>
                    </Col>
                    <Col>
                    <div 
                    className="box-container"
                      style={{background: shuffled_colors[1], opacity: 0.8}}
                    >
                        {v.second}
                    </div>
                    </Col>
                </Row>
            })}
            
        </div>
        </>
     )
}

