import React from 'react';

class History extends React.Component{

    componentDidMount(){
        console.log(JSON.parse(localStorage.getItem("history")) );
    }
    render(){

        let conversionList= this.props.history.map((conversion,key) => {
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