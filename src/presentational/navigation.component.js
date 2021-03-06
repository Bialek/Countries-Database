import React from 'react';
import { Link } from 'react-router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { Navbar, NavbarContainer, NavbarItem } from '../styled/navigation';
const Navigation = props => (
    <div>
        <Navbar>
            <NavbarContainer>
                <NavbarItem logo>
                    <Link to="/">Countries Database</Link>
                </NavbarItem>
                <ul className="nav navbar-nav">
                    <NavbarItem>
                        <Link to="/countries">Countries</Link>
                    </NavbarItem>
                    <NavbarItem>
                        <Link to="/continents">Continents</Link>
                    </NavbarItem>
                    <NavbarItem>
                        <Link to="/contact">Contact</Link>
                    </NavbarItem>
                    <NavbarItem>
                        <Link to="/favorite">
                            <FontAwesomeIcon icon='heart'/>
                        </Link>
                    </NavbarItem>
                </ul>
            </NavbarContainer>
        </Navbar>
        
        {props.children}
    </div>
);

export default Navigation;