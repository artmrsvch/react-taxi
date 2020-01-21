import React, {useState} from 'react';
import './App.scss';
import Sign from './login/Login';
import Profile from './profile/profile';
import Map from './map/map';
import Header from './header/Header';

const Status = React.createContext();

function App () {
    const [apstate, setApstate] = useState({page:'login', isLoggedIn: false});

    const login = (email, pass) => () => {
        console.log(email, pass)
        setApstate({isLoggedIn: !apstate.isLoggedIn, page: 'profile'});
    }
    const renderDynamicPage = page => {
        const dynamicPage = {
            profile: ()=><Profile />,
            login: ()=><Sign type="login" handle={handleClick}/>,
            map: ()=><Map />,
            signin: ()=><Sign type="signin" handle={handleClick}/>
        }
        
        return dynamicPage[page]()
    }
    const renderHeader = page => {
        if (page === 'login' || page === 'signin') {
            return null
        } else {
            return <Header activePage={page} handle={handleClick} />
        } 
    }
    const handleClick = page => () => {
        setApstate({page: page})
    }

    return (
        <div className="App">
            <Status.Provider value={{
                login: login,
                logout: 'METHOD OUT',
                isLoggedIn: apstate.isLoggedIn
            }}>
                {renderHeader(apstate.page)}
                {renderDynamicPage(apstate.page)}
            </Status.Provider>
        </div>
    );
}
export {Status};
export default App;
