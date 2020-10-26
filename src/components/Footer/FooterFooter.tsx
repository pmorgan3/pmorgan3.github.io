import React from 'react'
import {
  Grommet as GrommetIcon,
  FacebookOption,
  Instagram,
  Twitter,
} from 'grommet-icons'
import { Footer, Text } from 'grommet'
// This is the footer of our footer.
export const FooterFooter: React.FC<{}> = () => {
  return (
    <>
      <Footer align='center' pad='medium'>
        <Text>
          This website was made with handcrafted, artisanal typescript/react and
          &lt;3.
        </Text>
      </Footer>
    </>
  )
}
