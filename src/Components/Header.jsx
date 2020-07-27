import React from 'react';
import {Link} from 'react-router-dom';

class Header extends React.Component{
    render(){
        return (
            <div className="navbar">
                <Link to={'/'} className="sitename">
                    Quanment
                </Link>
                <Link to={'/history'} className="app-history">
                <div className="navbar-button" >
                    History
                </div> 
                </Link>
            </div>
        );
    }
}

export default Header;