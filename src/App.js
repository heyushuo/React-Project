import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Button, WhiteSpace, WingBlank } from 'antd-mobile';

import {  connect } from 'react-redux'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
          <Button>default</Button>
        </header>
        
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

//connect 可以传四个参数，常用的就两个

const mapStatetoProps = (state)=>{
    return { num : state }
}

const actionCreators = { addGun , removeGun ,addGunAsync }


//标准的装饰器模式
//这样放后react-redux会自动把这些action还有state放到props里
//这样之后就不用在dispath了，直接调用这些action就可以达到dispath的作用
App = connect(mapStatetoProps , actionCreators)(App);
export default App;
