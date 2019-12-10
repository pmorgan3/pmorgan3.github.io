import React, { Component } from 'react';

import { Menu } from 'semantic-ui-react';


export default class SimpleHeader extends Component {
    state = {}

    handleItemClick = (e, { name }) => this.setState({ activeItem: name })
    
    render() {
        const {activeItem} = this.state
        return (
            <Menu>
                <Menu.Item name='Home' active={activeItem === 'Home'} onClick={this.handleItemClick}>Home</Menu.Item>
                <Menu.Item name='Projects' active={activeItem === 'Projects'} onClick={this.handleItemClick}>Projects</Menu.Item>
                <Menu.Item name='Work Experience' active={activeItem === 'Work Experience'} onClick={this.handleItemClick}>Work Experience</Menu.Item>
            </Menu>
        )
    }
    
}