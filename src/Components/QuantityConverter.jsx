import React from 'react';
import MainUnit from './MainUnit';
import SubUnit from './SubUnit';

class QuantityConverter extends React.Component{
    constructor(props){
        super(props);
        this.state={
            currentUnit: this.props.units[0].mainUnit,
            selectedSubUnit: null,
        };
        this.disableSubUnit=this.disableSubUnit.bind(this);
        this.handleMainUnitChange=this.handleMainUnitChange.bind(this);
    }

    componentDidMount(){
        console.log(this.state.selectedSubUnit);
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
        console.log(this.state.currentUnit);
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
                    <SubUnit message="FROM" subUnits={unit[0].subUnits} handleSubUnit={this.disableSubUnit} disabledUnit=""/>
                    <SubUnit message="TO" subUnits={unit[0].subUnits} handleSubUnit={this.disableSubUnit} disabledUnit={this.state.selectedSubUnit} />
                </div>
                
            </div>
        );
    }
}

export default QuantityConverter;