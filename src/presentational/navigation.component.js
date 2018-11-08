import React from 'react';
import { Link } from 'react-router';
import '../../node_modules/bootstrap/dist/css/bootstrap.css';
import '../../node_modules/bootstrap/dist/css/bootstrap-theme.css';
import { Navbar } from '../styled/navigation'
const Navigation = props => (
    <div>
        <Navbar>
            <div className="container-fluid">
                <div className="navbar-header">
                    <Link className="navbar-brand" to="/">Countries Database</Link>
                </div>
                <div className=" navbar-collapse">
                    <ul className="nav navbar-nav">
                        <li><Link to="/countries">Countries</Link></li>
                        <li><Link to="/continents">Continents</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                    </ul>
                </div>
            </div>
        </Navbar>
        <div>
            {props.children}
        </div>
    </div>
);

export default Navigation;