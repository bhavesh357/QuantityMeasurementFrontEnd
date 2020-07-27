import React from 'react';
import Header from './Header';
import AppTitle from './AppTitle';
import QuantityConverter from './QuantityConverter';
import History from './History';
import './../styles/style.css';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';

var units=[{
  mainUnit:"Length",
  logo: "length",
  subUnits:["Meter","Centimeter","Feet","Yard"]
},{
  mainUnit:"Temperature",
  logo: "temp",
  subUnits:["Celcius","Farenheit"]
},{
  mainUnit:"Volume",
  logo: "volume",
  subUnits:["Litre","Mililitre","Gallon"]
}]

class App extends React.Component{
  constructor(props){
    super(props);
    this.state={
      conversions: [],
    }
    this.handleConversion=this.handleConversion.bind(this);
  }
  
  handleConversion(conversion){
    var newConversions=this.state.conversions;
    console.log(newConversions);
    newConversions.push(conversion);
    
    console.log(newConversions);
    this.setState({
      conversions: newConversions,
    });
    console.log(this.state.conversions);
  }
  
  
  render(){
    return (
      <Router>
      <div className="App">
      <Header />
      <Switch>
      <Route path="/" exact render={() =>
          <div className="conversion-app"> 
              <AppTitle title="Welcome to Quantity Measurement"/>
              <QuantityConverter units={units} sendConversion={this.handleConversion}/>
          </div>}>
      </Route>
      <Route path="/history" exact render={() =>
          <History history={this.state.conversions} />
          }>
      </Route>
      </Switch>
      </div>
      </Router>
      );
    }
  }
  
  export default App;
  