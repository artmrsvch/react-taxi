import React, {useState} from 'react';
import PropTypes from 'prop-types';
import './App.scss';
import Sign from './login/Login';
import Profile from './profile/profile';
import Map from './map/map';
import SignIN from './signIn/signin';
import Header from './header/Header';


function App () {
    const [page, setPage] = useState('login');
    const renderDynamicPage = page => {
        const dynamicPage = {
            profile: ()=><Profile />,
            login: ()=><Sign type="login" handle={handleClick}/>,
            map: ()=><Map />,
            signin: ()=><Sign type="signin" handle={handleClick}/>
        }
        
        return dynamicPage[page]()
    }
    const handleClick = page => event => {
        setPage(page)
    }

    return (
        <div className="App">
          <Header activePage={page} handle={handleClick} />
          {renderDynamicPage(page)}
        </div>
    );
}

export default App;
