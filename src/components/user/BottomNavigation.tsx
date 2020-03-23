import React from 'react'
import { BottomNavigation, BottomNavigationAction } from '@material-ui/core'
import FolderIcon from '@material-ui/icons/Folder'
import RestoreIcon from '@material-ui/icons/Restore'
import FavoriteIcon from '@material-ui/icons/Favorite'
import LocationOnIcon from '@material-ui/icons/LocationOn'
import { Text } from './Text'
import { Container } from './Container'
import { useNode } from '@craftjs/core'
export const BottomBar = () => {

    const { connectors: {connect, drag}, selected, dragged, setProp } = useNode(
        (state) => ({
            selected: state.events.selected,
            dragged: state.events.dragged
        })
    )
    const [value, setValue] = React.useState('recents')
    const handleChange = (e, newValue) => {
        setValue(newValue);
    }
    return (
      <Container>
        <BottomNavigation value={value} onChange={handleChange}>
            <BottomNavigationAction label={<Text text="lorem" />} value="recents" icon={<RestoreIcon />} />
            <BottomNavigationAction label={<Text text="ipsum" />} value="favorites" icon={<FavoriteIcon />} />
            <BottomNavigationAction label={<Text text="dolor"/>} value="nearby" icon={<LocationOnIcon />} />
            <BottomNavigationAction label={<Text text="carrot"/>} value="folder" icon={<FolderIcon />} />
        </BottomNavigation>
    </Container>
    )
}

BottomBar.craft = {
    
}