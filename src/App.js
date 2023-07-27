
import './App.css';

import React, { Component } from 'react'
import Navbar from './components/Navbar';
import NewsComponent from './components/NewsComponent';

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

export default class App extends Component {
  render() {
    let pagesize =12;
    return (
      <div>
        <Router>
          <Navbar />
          <Routes>
            <Route exact path="/" element = {<NewsComponent  key={"general"} pagesize={pagesize} country={"in"} category={"general"}/>}/>
            <Route exact path="/business" element = {<NewsComponent  key={"business"} pagesize={pagesize} country={"in"} category={"business"}/>}/>
            <Route exact path="/entertainment" element = {<NewsComponent  key={"entertainment"} pagesize={pagesize} country={"in"} category={"entertainment"}/>}/>
            <Route exact path="/health" element = {<NewsComponent  key={"health"} pagesize={pagesize} country={"in"} category={"health"}/>}/>
            <Route exact path="/science" element = {<NewsComponent  key={"science"} pagesize={pagesize} country={"in"} category={"science"}/>}/>
            <Route exact path="/sports" element = {<NewsComponent  key={"sports"} pagesize={pagesize} country={"in"} category={"sports"}/>}/>
            <Route exact path="/technology" element = {<NewsComponent  key={"technology"} pagesize={pagesize} country={"in"} category={"technology"}/>}/>
            
          </Routes>
        </Router>
      </div>
    )
  }
}



