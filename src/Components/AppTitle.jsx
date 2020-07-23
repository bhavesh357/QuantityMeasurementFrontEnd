import React from 'react';

class AppTitle extends React.Component{
    render(){
        return (
            <div className="app-title">
                <div className="app-title-name">
                    {this.props.title}
                </div>
            </div>
        );
    }
}

export default AppTitle;