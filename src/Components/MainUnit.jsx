import React from 'react';

class MainUnit extends React.Component{
    constructor(props){
        super(props);
        this.state={
            isSelected: this.props.selected, 
        }
    }
    
    toggle(){
        if(!this.props.selected){
            this.setState({
                isSelected: !this.state.isSelected,
            });
        }
    }

    componentDidMount(){
        console.log(document.getElementsByClassName("quantity-type-main"));
    }
    
    render(){

        var id="quantity-type-main-"+this.props.name.toLowerCase();
        return (
            <div className="quantity-type-main" id={id}>
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