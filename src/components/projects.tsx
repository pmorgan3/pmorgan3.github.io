import React from 'react'
import { Text } from 'grommet'

export const Project: React.FunctionComponent<{
  title: string
  body: string
  status: string
  url: string
}> = ({ title, body, status, url }) => {
  return (
    <div>
      <Text size='large' className='box-title'>
        <a href={url} style={{ textDecoration: 'none', color: 'black' }}>
          {title}
        </a>
      </Text>
      <br />
      <Text size='medium' className='box-body'>
        {body}
      </Text>
      <br />
      <Text size='small' className='box-footer'>
        {status}
      </Text>
    </div>
  )
}
