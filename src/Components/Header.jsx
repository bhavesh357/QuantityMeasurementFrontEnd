import React from 'react';

class Header extends React.Component{
    render(){
        return (
            <div className="navbar">
                <div className="sitename">
                    Quanment
                </div>
                <div className="navbar-button" >
                    History
                </div> 
            </div>
        );
    }
}

export default Header;