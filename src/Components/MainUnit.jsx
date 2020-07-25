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
        if(this.state.isSelected){
            console.log("making it active");
            console.log(document.getElementById("quantity-type-main-"+this.props.name.toLowerCase()));
            document.getElementById("quantity-type-main-"+this.props.name.toLowerCase()).focus();
        }
    }
    
    render(){

        var id="quantity-type-main-"+this.props.name.toLowerCase();
        return (
            <div className="quantity-type-main" id={id}>
            <div className="quantity-type-main-logo">
            <img className="logo" src={require('./../images/'+this.props.logo+'.svg')} alt="logo"/>
            </div>
            <div className="quantity-type-main-name">
            {this.props.name}
            </div>
            </div>
            );
        }
    }
    
    export default MainUnit;