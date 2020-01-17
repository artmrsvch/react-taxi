import React from 'react';
import './App.scss';
import Login from './login/Login';
import Profile from './profile/profile';
import Map from './map/map';
import SignIN from './signIn/signin';
import Header from './header/Header';



class App extends React.Component {
    state = {activePage: 'login'}

    handleClick = (page)=> {
        this.setState({
            activePage: page
        }) 
    }

    renderDynamicPage(page) {
        const obj = {
            profile: ()=><Profile />,
            login: ()=><Login handle={this.handleClick}/>,
            map: ()=><Map />,
            signin: ()=><SignIN handle={this.handleClick}/>
        }
        
        return obj[page]()
    }

    render() {
        return (
            <div className="App">
              <Header activePage={this.state.activePage} handle={this.handleClick} />
              {this.renderDynamicPage(this.state.activePage)}
            </div>
        );
    } 
}

export default App;
