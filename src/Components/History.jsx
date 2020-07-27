import React from 'react';

class History extends React.Component{
    render(){

        let conversionList= this.props.history.map((conversion,key) => {
            return (
                <div  key={key} className="history-list-item">
                    <div className="history-list-item-column main-unit-column">
                        {conversion.mainUnit}
                    </div>
                    <div className="history-list-item-column sub-unit-column">
                        {conversion.subUnitOne}
                    </div>
                    <div className="history-list-item-column number-unit-column">
                        {conversion.numberOne}
                    </div>
                    <div className="history-list-item-column sub-unit-column">
                        {conversion.subUnitTwo}
                    </div>
                    <div className="history-list-item-column number-unit-column">
                        {conversion.numberTwo}
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