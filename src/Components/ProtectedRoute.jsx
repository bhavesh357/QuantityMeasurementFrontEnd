import React from 'react';
import {Route, Redirect} from 'react-router-dom';

export const ProtectedRoute = ({component: Component, ...rest}) => {
    console.log(rest);
    console.log();
    let historyArray=JSON.parse(localStorage.getItem("history")) || [] ;
    console.log(historyArray);

    if(historyArray.length===0){
        return (
            <Redirect to="/"/>
        );
    }

    return (
        <Route {...rest} render={ () =>{
            return <Component history={historyArray}/>
        }}/>
        );
    };