import React from 'react';
import ReactDOM from 'react-dom';
import Sdata from "./components/Sdata";

import App from './App';
import Card from './components/Cards';

function ncard(val){        //making a function for the map function in th code below..

  return(
    <Card 
    Sname={val.Sname}
    imgscr={val.imgscr}
    title={val.title}
    link={val.link}
    />
  );
}

ReactDOM.render(
  <>
    
    <App/>
    {Sdata.map(ncard)}
 
    


  </>,
  
  document.getElementById('root')
);


