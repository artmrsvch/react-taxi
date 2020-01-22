import React, {useState} from 'react';
import './App.scss';
import Sign from './Components/Login/Login';
import Profile from './Components/Profile/Profile';
import Map from './Components/Map/Map';
import Header from './Components/Header/Header';

const Status = React.createContext();

function App () {
    const [apstate, setApstate] = useState({page:'login', isLoggedIn: false});

    const login = (form)  => { 
        /*Метод получает форму при сабмите*/
        
        if (form.getAttribute('name') === 'login') {
            /*Если это форма авторизации, то меняем статус авторизации и рендерим профиль*/
            if (form.elements.loginName.value !== '' && form.elements.loginPass.value !== '') {
                setApstate({isLoggedIn: !apstate.isLoggedIn, page: 'profile'});
            } else {
                alert('Поля должны быть заполнены')
            }  
        }  
    }

    const logout = (page) => {
        /*Метод меняет статус авторизации (разлогинивает) и рендерит страницу с логином*/

        setApstate({isLoggedIn: !apstate.isLoggedIn, page: 'login'})
    }

    const renderDynamicPage = page => {
        /*Метод отрисовки страниц*/

        const dynamicPage = {
            profile: ()=><Profile />,
            login: ()=><Sign type="login" handle={handleClick}/>,
            map: ()=><Map />,
            signin: ()=><Sign type="signin" handle={handleClick}/>
        }
        
        return dynamicPage[page]()
    }
    const renderHeader = page => {
        /* Метод отрисовывает хедер если юзер авторизован */

        if (page === 'login' || page === 'signin') {
            return null
        } else {
            return <Header activePage={page} handle={handleClick} />
        } 
    }
    const handleClick = page => () => {
        /*Метод запускает рендер страниц*/

        if (page !== 'exit') {
            setApstate({page: page})
        } else {
            logout(page)
        }
        
    }

    return (
        <div className="App">
            <Status.Provider value={{
                login: login,
                logout: logout,
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
