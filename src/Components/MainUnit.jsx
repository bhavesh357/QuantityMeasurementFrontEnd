import React from 'react';

class MainUnit extends React.Component{
    render(){
        return (
            <div className="quantity-type-main-">
                <div className="quantity-type-main-logo">
                    <svg className="icon">
                        <use xlinkHref={this.props.logo} />
                    </svg>
                </div>
                <div className="quantity-type-main-name">
                    {this.props.name}
                </div>
            </div>
        );
    }
}

export default MainUnit;