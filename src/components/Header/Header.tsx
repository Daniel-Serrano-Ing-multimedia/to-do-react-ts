import React from 'react'
import { Navbar, Button, Alignment } from '@blueprintjs/core';
import './Header.css'
const Header = (): JSX.Element => {
    
    return(
        <Navbar>
            <Navbar.Group align={Alignment.LEFT}>
                <Navbar.Heading>To Do List</Navbar.Heading>
                <Navbar.Divider />
                <Button className="bp3-minimal" icon="home" text="Home" />
                <Button className="bp3-minimal" icon="document" text="Files" />
            </Navbar.Group>
        </Navbar>
    );
}

export default Header;