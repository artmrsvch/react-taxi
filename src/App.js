import React from 'react';
import './App.scss';
import Login from './login/Login';
import Header from './header/Header';

class App extends React.Component {
    constructor(props) {
      super(props);
      this.state = {}
    }
    
    nowState(e) {
      console.log(e)
    }
    componentDidMount() {
    }
    render() {
      return (
        <div className="App">
          <Header setState={'login'} onLoad={this.nowState(Header.props)} />
          <Login />
        </div>
      );
    } 



}

export default App;
