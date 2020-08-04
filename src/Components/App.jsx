import React from 'react';
import Header from './Header';
import AppTitle from './AppTitle';
import QuantityConverter from './QuantityConverter';
import History from './History';
import './../styles/style.css';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import {getMainUnits,getSubUnits} from './../Service/quantityservice';

var units=[{
  mainUnit:"Length",
  logo: "length",
  subUnits:["FEET", "INCH", "CM", "YARD"]
},{
  mainUnit:"Temperature",
  logo: "temperature",
  subUnits:["F", "C"]
},{
  mainUnit:"Volume",
  logo: "volume",
  subUnits:["ML", "LITRE", "GALLON"]
}]


class App extends React.Component{
  constructor(props){
    super(props);
    this.state={
      units: units,
    }
    this.handleConversion=this.handleConversion.bind(this);
  }
  
  capitalize = (s) => {
    if (typeof s !== 'string') return ''
    return s.charAt(0) + s.slice(1).toLowerCase();
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
      let subUnitList=await getSubUnits(element);
      console.log(subUnitList);
      newMainUnit.subUnits= subUnitList;
      newList.push(newMainUnit);
    }
    console.log(newList);
    return newList;
  }
  
  async componentDidMount(){
    console.log("Component did mount");
    let mainUnits = await getMainUnits();
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
    var newConversions=JSON.parse(localStorage.getItem("history")) || [];
    console.log(newConversions);
    newConversions.push(conversion);
    
    console.log(newConversions);
    localStorage.setItem('history',JSON.stringify(newConversions));
    localStorage.setItem('author',"Bhavesh");
    console.log(localStorage.getItem('history'));
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
          <History history={JSON.parse(localStorage.getItem("history")) || [] } />
        }>
        </Route>
        </Switch>
        </div>
        </Router>
        );
      }
    }
    
    export default App;
    