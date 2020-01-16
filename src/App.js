import React from 'react';
import './App.scss';
import Login from './login/Login';
import Profile from './profile/profile';
import Map from './map/map';
import SignIN from './signIn/signin';
import Header from './header/Header';



class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {setState: 'login'}
        this.handleClick = this.handleClick.bind(this);
    }
    
    handleClick(page) {
        this.setState({
            setState: page
        }) 
    }

    renderDynamicPage(page) {
        switch (page) {
            case 'profile': return <Profile />
            case 'login': return <Login handle={this.handleClick}/>
            case 'map': return <Map />
            case 'signin': return <SignIN handle={this.handleClick}/>

            default: return <div className="default"><h1 className="title">Страница пока не создана</h1></div>
        }   
    }

    render() {
        return (
            <div className="App">
              <Header setState={this.state.setState} handle={this.handleClick} />
              {this.renderDynamicPage(this.state.setState)}
            </div>
        );
    } 



}

export default App;
