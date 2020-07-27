import React from 'react';

class MainUnit extends React.Component{
    constructor(props){
        super(props);
        this.state={
            isSelected: this.props.selected, 
        }
    }

    componentDidMount(){
        if(this.props.selected){
            document.getElementById("quantity-type-main-"+this.props.name.toLowerCase()).classList.add("main-unit-active-"+this.props.name.toLowerCase());
            document.getElementById("quantity-type-main-"+this.props.name.toLowerCase()+"-logo").src=require('./../images/'+this.props.logo+'-color.svg');
        }
    }

    componentDidUpdate(){
        if(this.props.selected){
            console.log(this.props.name);
            document.getElementById("quantity-type-main-"+this.props.name.toLowerCase()).classList.add("main-unit-active-"+this.props.name.toLowerCase());
            document.getElementById("quantity-type-main-"+this.props.name.toLowerCase()+"-logo").src=require('./../images/'+this.props.logo+'-color.svg');
        }else{
            document.getElementById("quantity-type-main-"+this.props.name.toLowerCase()).classList.remove("main-unit-active-"+this.props.name.toLowerCase());
            document.getElementById("quantity-type-main-"+this.props.name.toLowerCase()+"-logo").src=require('./../images/'+this.props.logo+'.svg');
        }
    }

    handleMouseOver(){
        if(!this.props.selected){
            document.getElementById("quantity-type-main-"+this.props.name.toLowerCase()).classList.toggle("main-unit-active-"+this.props.name.toLowerCase());
            document.getElementById("quantity-type-main-"+this.props.name.toLowerCase()+"-logo").src=require('./../images/'+this.props.logo+'-color.svg');
        }
    }

    handleMouseOut(){
        if(!this.props.selected){
            document.getElementById("quantity-type-main-"+this.props.name.toLowerCase()).classList.toggle("main-unit-active-"+this.props.name.toLowerCase());
            document.getElementById("quantity-type-main-"+this.props.name.toLowerCase()+"-logo").src=require('./../images/'+this.props.logo+'.svg');
        }
    }

    handleChange(){
        this.props.handleMainUnitChange(this.props.name);
    }
    
    render(){

        var id="quantity-type-main-"+this.props.name.toLowerCase();
        return (
            <div onMouseOver={() => this.handleMouseOver()} onMouseOut={() => this.handleMouseOut()} onClick={()=> this.handleChange()} className="quantity-type-main" id={id}>
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