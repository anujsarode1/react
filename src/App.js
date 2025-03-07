import React, { useState } from 'react';
import './App.css'
import './AllFile.css'
import './MovieHeader.css'
import './Sliderbar.css'
// import AllFile from './AllFile';
// import CoinCard from './CoinCard';
// import Dashboard from './Dashboard';
// import MovieHeader from './MovieHeader';
import NetlifyO from "./NetlifyO";
// import AllFile from './AllFile';

export default class app extends React.Component {
  render( ){
      return(
          <div className="App">
{/* <AllFile/> */}
<NetlifyO/>
          </div>
      )
      }}
