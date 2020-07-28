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
      units: units,
    }
    this.handleConversion=this.handleConversion.bind(this);
  }
  
  capitalize = (s) => {
    if (typeof s !== 'string') return ''
    return s.charAt(0) + s.slice(1).toLowerCase();
  }
  
  async getSubUnits(mainUnit){
    
  }

  async getAllUnits(mainUnits){
    let newList=[];
    for(let i=0;i<mainUnits.length;i++){
      let element=mainUnits[i];
      console.log(element);
      let newMainUnit={
        mainUnit: this.capitalize(element),
        logo: element.toLowerCase(),
        subUnits: []
      }
      var subUnitList=await api.get('/unit?mainUnit='+element)
      .then(res => {
        console.log(res.data.object);
        return res.data.object;
      });
      newMainUnit.subUnits= subUnitList;
      newList.push(newMainUnit);
    }
    console.log(newList);
    return newList;
  }
  
  async componentDidMount(){
    console.log("Component did mount");
    let mainUnits = await api.get('/')
    .then( res => {
      console.log("getting data");
      return res.data.object
     });
    console.log(mainUnits);
    let newMainUnits= await this.getAllUnits(mainUnits).then( res=> {
      console.log(res);
      return res;
    });
    console.log(newMainUnits);
    console.log("Component did mount");
    this.setState({
      units: newMainUnits,
    })
  }
  
  componentDidUpdate(){
    console.log(this.state.units);
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
        <QuantityConverter units={this.state.units} sendConversion={this.handleConversion}/>
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
    