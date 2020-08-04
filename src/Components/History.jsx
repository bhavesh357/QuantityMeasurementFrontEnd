import React from 'react';

class History extends React.Component{

    constructor(props){
        super(props)

        this.state={
            history: this.props.history,
        }
    }
    
    componentDidMount(){
        console.log(this.state.history);
    }

    componentDidUpdate(){
        console.log(this.state.history);
    }

    handleClick(){
        localStorage.setItem("history",JSON.stringify([]));
        console.log(JSON.parse(localStorage.getItem("history")));
        var clearedHistory=[];
        this.setState({
            history: clearedHistory,
        });
    }
    render(){
        
        let conversionList= this.state.history.map((conversion,key) => {
            return (
                <div  key={key} className="history-list-item">
                <div className="history-list-item-column main-unit-column">
                {conversion.mainUnit}
                </div>
                <div className="history-list-item-column sub-unit-column">
                {conversion.unitOne}
                </div>
                <div className="history-list-item-column number-unit-column">
                {conversion.sizeOne}
                </div>
                <div className="history-list-item-column sub-unit-column">
                {conversion.unitTwo}
                </div>
                <div className="history-list-item-column number-unit-column">
                {conversion.sizeTwo}
                </div>
                </div>
                );
            })
            
            return (
                <div className="history">
                <div className="clear-history" >
                <div className="clear-history-btn" onClick={() => this.handleClick()}>
                Clear History
                </div>
                </div>
                <div className="history-title">
                History
                </div>
                <div className="history-list">
                <div className="history-list-head">
                <div className="history-list-item-column main-unit-column">
                Main Unit
                </div>
                <div className="history-list-item-column sub-unit-column">
                Sub Unit
                </div>
                <div className="history-list-item-column number-unit-column">
                Size
                </div>
                <div className="history-list-item-column sub-unit-column">
                Sub Unit
                </div>
                <div className="history-list-item-column number-unit-column">
                Size 
                </div>
                </div>
                <div className="history-list-items" >
                {conversionList}
                </div>
                </div>
                </div>
                );
            }
        }
        
        export default History;