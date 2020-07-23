import React from 'react';

class SubUnit extends React.Component{
    render(){
        var list= this.props.subUnits.map(unit => {
            return (
                <option value={unit}>{unit}</option>
            );
        })
        return (
            <div className="quantity-type-sub">
            <div className="quantity-type-sub-message">
                {this.props.message}
            </div>
            <input className="quantity-type-sub-input" />
            <select id="subUnitOne" className="quantity-type-sub-dropdown">
                {list}
            </select>
            <div className="quantity-type-main-name">
            {this.props.name}
            </div>
            </div>
            );
        }
    }
    
    export default SubUnit;