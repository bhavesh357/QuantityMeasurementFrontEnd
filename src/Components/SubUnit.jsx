import React from 'react';

class SubUnit extends React.Component{
    constructor(props){
        super(props);
        this.state={
            isTriggered: false,
        }
    }

    handleClick(){
        console.log("tracking select");
        if(!this.state.isTriggered){
            var element= document.getElementById(this.props.message.toLowerCase());
            element.children[0].style={"display":"none"};
            console.log(element.children[0]);
            
        }
    }

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
            <div  onClick={() => this.handleClick()} id={this.props.message.toLowerCase()} className="quantity-subUnit-container">  
                {this.state.isTriggered ? 
                    <div className="arrow-up arrow"></div>:
                        <div className="arrow-down arrow"></div>
            }
            <select className="quantity-type-sub-dropdown">
                {list}
            </select>
            </div>
            <div className="quantity-type-main-name">
            {this.props.name}
            </div>
            </div>
            );
        }
    }
    
    export default SubUnit;