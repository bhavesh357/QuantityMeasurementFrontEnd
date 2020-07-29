import React from 'react';
import MainUnit from './MainUnit';
import SubUnit from './SubUnit';
import api from '../Service/quantityservice'

class QuantityConverter extends React.Component{
    constructor(props){
        super(props);
        console.log(this.props.units);
        this.state={
            currentUnit: this.props.units[0].mainUnit,
            selectedSubUnit: null,
        };
        this.disableSubUnit=this.disableSubUnit.bind(this);
        this.handleMainUnitChange=this.handleMainUnitChange.bind(this);
        this.handleConversion=this.handleConversion.bind(this);
    }
    
    async componentDidMount(){
        console.log(this.state.selectedSubUnit);
        var quantity={
            mainUnit:"LENGTH",
            unitOne: "FEET",
            sizeOne:1,
            unitTwo:"INCH",
            sizeTwo: 0
        };
        var test=await api.post('/unit',quantity).then( res => {
            return res;
        });
        console.log(test);
    }

    componentDidUpdate(){
        console.log(this.state.currentUnit);
    }
    
    disableSubUnit(value){
        console.log(this.state.selectedSubUnit);
        console.log(value);
        this.setState({
            selectedSubUnit: value,
        }); 
        
        console.log(this.state.selectedSubUnit);
    }
    
    handleMainUnitChange(mainUnit){
        console.log(this.state.currentUnit);
        this.setState({
            currentUnit: mainUnit,
        });
        var unit=this.props.units.filter( e => {
            return e.mainUnit===mainUnit
        });
        console.log(unit[0].subUnits[0]);
        this.setState({
            selectedSubUnit: unit[0].subUnits[0],
        });
        console.log(this.state.selectedSubUnit);
        console.log(this.state.currentUnit);
    }
    
    handleConversion(){
        let inputNumberOne=document.getElementById("quantity-type-sub-input-from").value;
        let inputUnitOne=document.getElementById("quantity-type-sub-dropdown-from").value;
        let inputNumberTwo=document.getElementById("quantity-type-sub-input-to").value;
        let inputUnitTwo=document.getElementById("quantity-type-sub-dropdown-to").value;
        if(inputNumberOne !== "" && inputNumberTwo !== ""){
            var conversion={
                mainUnit: this.state.currentUnit,
                subUnitOne: inputUnitOne,
                numberOne: inputNumberOne,
                subUnitTwo: inputUnitTwo,
                numberTwo: inputNumberTwo
            }
            this.props.sendConversion(conversion);
        }
    }
    
    render(){
        
        var units= this.props.units.map(unit => {
            
            return (
                this.state.currentUnit=== unit.mainUnit ? 
                <MainUnit selected={true} key={unit.mainUnit} name={unit.mainUnit} logo={unit.logo} handleMainUnitChange={this.handleMainUnitChange}/>:
                <MainUnit selected={false} key={unit.mainUnit} name={unit.mainUnit} logo={unit.logo} handleMainUnitChange={this.handleMainUnitChange}/>
                );
            })
            
            var unit=this.props.units.filter( e => {
                return e.mainUnit===this.state.currentUnit
            });

            
            
            return (
                <div className="quantity-converter">
                <div className="quantity-type">
                CHOOSE TYPE
                </div>
                <div className="quantity-units">
                {units}
                </div>
                <div className="quantity-sub-units">
                <SubUnit message="FROM" subUnits={unit[0].subUnits} handleSubUnit={this.disableSubUnit} disabledUnit="" handleConversion={this.handleConversion}/>
                <SubUnit message="TO" subUnits={unit[0].subUnits} handleSubUnit={this.disableSubUnit} disabledUnit={this.state.selectedSubUnit} handleConversion={this.handleConversion}/>
                </div>
                
                </div>
                );
            }
        }
        
        export default QuantityConverter;