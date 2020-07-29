import React from 'react';

class SubUnit extends React.Component{
    constructor(props){
        super(props);
        if(this.props.disabledUnit===null){
            this.props.handleSubUnit(this.props.subUnits[0]);
        }
        var random=this.props.subUnits.filter(unit => {
            return unit!==this.props.disabledUnit;
        })
        console.log("I am in constructor");
        console.log(random);
        this.state={
            isTriggered: false,
            selectedSubSubUnit: random[0],
        }
    }
    
    
    componentDidMount(){
        console.log("I am subunit component did mount");
        this.handleChange();
        console.log(this.props.disabledUnit); 
    }
    
    componentDidUpdate(){
        console.log("I am subunit component did update");
        console.log(this.props.disabledUnit);
        console.log(this.state.selectedSubSubUnit);
        console.log(this.props.message);
        if(this.props.disabledUnit!=="" && this.props.message==="TO" ){
            var dropdown=document.getElementById("quantity-type-sub-dropdown-"+this.props.message.toLowerCase());
            for(let i=0;i<this.props.subUnits.length;i++){
                if(this.props.subUnits[i]!==this.props.disabledUnit){
                    console.log(this.props.subUnits[i]);
                    dropdown.value=this.props.subUnits[i];
                    break;
                }
            }
        }
    }
    
    handleClick(){
        this.setState({
            isTriggered: !this.state.isTriggered,
        } );       
    }
    
    
    handleChange(){
        console.log(document.getElementById(this.props.message.toLowerCase()).children[1].value); 
        let selectedSubUnit= document.getElementById(this.props.message.toLowerCase()).children[1].value;
        if(this.props.message==="FROM"){
            console.log("I am in handle change of sub unit");
            this.props.handleSubUnit(selectedSubUnit);
        }
        document.getElementById("quantity-type-sub-input-"+this.props.message.toLowerCase()).value="";
    }
    
    handleInputChange(){
        var numberPattern=/^[0-9]{1,}$/;
        let inputNumber=document.getElementById("quantity-type-sub-input-"+this.props.message.toLowerCase());
        if(!numberPattern.test(inputNumber.value)){
            inputNumber.value="";
            inputNumber.placeholder="Enter Number";
        }else{
            console.log(document.getElementById("quantity-type-sub-dropdown-"+this.props.message.toLowerCase()).value);
            console.log(inputNumber.value);
            this.props.handleConversion();
        }
    }
    
    
    render(){
        
        var list= this.props.subUnits.map(unit => {
            return (
                this.props.disabledUnit===unit ? 
                <option className="sub-unit-option" disabled key={unit} value={unit}>{unit}</option>:
                <option className="sub-unit-option" key={unit} value={unit}>{unit}</option>
                );
            })
            return (
                <div className="quantity-type-sub">
                <div className="quantity-type-sub-message">
                {this.props.message}
                </div>
                <input onChange={()=>this.handleInputChange()} className="quantity-type-sub-input" id={"quantity-type-sub-input-"+this.props.message.toLowerCase()} />
                <div onClick={(time) => this.handleClick()} onChange={() => this.handleChange() } id={this.props.message.toLowerCase()} className="quantity-subUnit-container">  
                {this.state.isTriggered ? 
                    <div className="arrow-up arrow"></div>:
                    <div className="arrow-down arrow"></div>
                }
                <select className="quantity-type-sub-dropdown" id={"quantity-type-sub-dropdown-"+this.props.message.toLowerCase()}>
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