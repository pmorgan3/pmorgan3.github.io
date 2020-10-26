import React from 'react'
import _ from 'lodash'
import { Row, Col } from 'react-bootstrap'

type Tup = { first?: any; second?: any }
export const ResumeCardContainer: React.FunctionComponent<{ boxes: any[] }> = ({
  boxes,
}) => {
  const groupByTwo = (b: any[]): Tup[] => {
    let retArray: Tup[] = []
    for (let i = 0; i < b.length - 1; i += 2) {
      retArray.push({ first: b[i], second: b[i + 1] })
    }
    return retArray
  }
  const colorList = [
    '#CA64F9',
    '#417DFF',
    '#007669',
    '#FF7093',
    '#FFCE58',
    '#7DFBE2',
  ]

  let shuffled_colors = _.shuffle(colorList)

  const list = groupByTwo(boxes)
  return (
    <>
      <div className='grid'>
        {list.map((v) => {
          shuffled_colors = _.shuffle(shuffled_colors)
          return (
            <Row xs={1} md={2} lg={2}>
              <Col>
                <div
                  className='box-container'
                  style={{ background: shuffled_colors[0], opacity: 0.8 }}
                >
                  {v.first}
                </div>
              </Col>
              <Col>
                <div
                  className='box-container'
                  style={{ background: shuffled_colors[1], opacity: 0.8 }}
                >
                  {v.second}
                </div>
              </Col>
            </Row>
          )
        })}
      </div>
    </>
  )
}
