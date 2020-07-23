import React from 'react';
import Header from './Header';
import AppTitle from './AppTitle';
import QuantityConverter from './QuantityConverter';
import './../styles/style.css'

var units=[{
  mainUnit:"Length",
  logo: "#length",
  subUnits:["Meter","Centimeter","Feet","Yard"]
},{
  mainUnit:"Temperature",
  logo: "#temperature",
  subUnits:["Celcius","Farenheit"]
},{
  mainUnit:"Volume",
  logo: "#volume",
  subUnits:["Litre","Mililitre","Gallon"]
}]

class App extends React.Component{
  render(){
    return (
    <div className="App">
        <Header />
        <AppTitle title="Welcome to Quantity Measurement"/>
        <QuantityConverter units={units} />
    </div>
    );
  }
}

export default App;
