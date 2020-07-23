import React from 'react';
import Header from './Header';
import AppTitle from './AppTitle';
import './../styles/style.css'

class App extends React.Component{
  render(){
    return (
    <div className="App">
        <Header />
        <AppTitle title="Welcome to Quantity Measurement"/>
    </div>
    );
  }
}

export default App;
