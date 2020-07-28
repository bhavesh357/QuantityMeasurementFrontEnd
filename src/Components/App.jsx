import React from 'react';
import Header from './Header';
import AppTitle from './AppTitle';
import QuantityConverter from './QuantityConverter';
import History from './History';
import './../styles/style.css';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import api from './../Service/quantityconvrter'

var units=[{
  mainUnit:"Length",
  logo: "length",
  subUnits:["Meter","Centimeter","Feet","Yard"]
},{
  mainUnit:"Temperature",
  logo: "temperature",
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

  capitalize = (s) => {
    if (typeof s !== 'string') return ''
    return s.charAt(0) + s.slice(1).toLowerCase();
  }

  async getSubUnits(mainUnit){
    await api.get('/unit?mainUnit='+mainUnit)
        .then(res => {
          console.log(res.data.object);
          return res.data.object;
        });
  }
  
  async componentDidMount(){
    let unitsTwo=[];
    let mainUnits=[];
    await api.get('/')
    .then( res => {
      console.log(res.data.object);
      mainUnits=res.data.object;
    });
    
    console.log("I am mounted");
    console.log(mainUnits);
    let newMainUnits=mainUnits.map(mainUnit => {
      let newMainUnit={
        
        mainUnit: this.capitalize(mainUnit),
        logo: mainUnit.toLowerCase(),
        subUnits:this.getSubUnits(mainUnit)
      }
      return newMainUnit;
    });
    console.log(newMainUnits);
    console.log(unitsTwo);
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
    