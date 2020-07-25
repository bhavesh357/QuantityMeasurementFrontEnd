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
            document.getElementById("quantity-type-main-"+this.props.name.toLowerCase()).classList.add("main-unit-active-"+this.props.name.toLowerCase());
            document.getElementById("quantity-type-main-"+this.props.name.toLowerCase()+"-logo").src=require('./../images/'+this.props.logo+'-color.svg');
        }
    }

    handleMouseOver(){
        if(!this.state.isSelected){
            document.getElementById("quantity-type-main-"+this.props.name.toLowerCase()).classList.toggle("main-unit-active-"+this.props.name.toLowerCase());
            document.getElementById("quantity-type-main-"+this.props.name.toLowerCase()+"-logo").src=require('./../images/'+this.props.logo+'-color.svg');
        }
    }

    handleMouseOut(){
        if(!this.state.isSelected){
            document.getElementById("quantity-type-main-"+this.props.name.toLowerCase()).classList.toggle("main-unit-active-"+this.props.name.toLowerCase());
            document.getElementById("quantity-type-main-"+this.props.name.toLowerCase()+"-logo").src=require('./../images/'+this.props.logo+'.svg');
        }
    }
    
    render(){

        var id="quantity-type-main-"+this.props.name.toLowerCase();
        return (
            <div onMouseOver={() => this.handleMouseOver()} onMouseOut={() => this.handleMouseOut()}className="quantity-type-main" id={id}>
            <div className="quantity-type-main-logo">
            <img id={id+"-logo"} className="logo" src={require('./../images/'+this.props.logo+'.svg')} alt="logo"/>
            </div>
            <div className="quantity-type-main-name">
            {this.props.name}
            </div>
            </div>
            );
        }
    }
    
    export default MainUnit;