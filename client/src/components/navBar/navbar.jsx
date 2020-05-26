import React from 'react';
import { elastic as Menu } from 'react-burger-menu';
import './navbar.css';
import { Link } from 'react-router-dom';


const Navbar = () =>{
    return (
        <React.Fragment>
        <Menu pageWrapId={ "page-wrap" } 
                outerContainerId={ "outer-container" }
                isOpen={ true }
            >
            <Link to="/" className="bm-item d-flex justify-content-between" tabIndex="0">
                <i className="fas fa-list icon"></i>
                <span>Listes Meubles</span>
            </Link>
            <Link to="/ajouter" className="bm-item  d-flex justify-content-between" tabIndex="0">
            <i className="far fa-plus-square icon"></i>
                <span>Ajouter Meuble</span>
            </Link>
        </Menu>
        </React.Fragment>)
}

export default Navbar;