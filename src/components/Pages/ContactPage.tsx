import React from 'react'
import { Button, Card, Image } from 'semantic-ui-react'
const ContactHeader: React.FC = ({}) => {
  return (
    <>
      <div className='SectionHeader-Blue'>Get in touch.</div>
    </>
  )
}
export const ContactCard: React.FC<{
  header: string
  url: string

  imageSource: string
}> = ({ header, url, imageSource }) => {
  return (
    <>
      <Card.Group>
        <Card>
          <Card.Content>
            <Image
              fluid
              rounded
              floated='right'
              size='tiny'
              src={imageSource}
            />
            <Card.Header>{header}</Card.Header>
          </Card.Content>
        </Card>
      </Card.Group>
    </>
  )
}
export const ContactPage: React.FC = ({}) => {
  return (
    <>
      <ContactHeader />
      <ContactCard
        header='Linkedin'
        url='https://www.linkedin.com/in/paulmorganiii/'
        imageSource='https://www.flaticon.com/svg/static/icons/svg/174/174857.svg'
      />
    </>
  )
}
