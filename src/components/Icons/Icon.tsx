import React from 'react'

const Icon: React.FC<{ iconPath: string; link: string }> = ({
  iconPath,
  link,
}) => {
  return (
    <a href={`${link}`} style={{ zIndex: 2 }}>
      <img
        src={iconPath}
        alt=''
        width='70'
        style={{ marginTop: 20, marginRight: 20 }}
      />
    </a>
  )
}

export const Github: React.FC = () => {
  return (
    <Icon
      link={'https://github.com/pmorgan3'}
      iconPath='no border/github.png'
    />
  )
}
export const LinkedIn: React.FC = () => {
  return (
    <Icon
      link={'https://www.linkedin.com/in/paulmorganiii'}
      iconPath='no border/linkedin.png'
    />
  )
}
export const Instagram: React.FC = () => {
  return (
    <Icon
      link={'https://www.instagram.com/thathalfblood'}
      iconPath='no border/instagram.png'
    />
  )
}
export default Icon
