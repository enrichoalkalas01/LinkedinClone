import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { selectUser } from './Components/App/userSlice'
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";

// Component CSS
import './assets/bootstrap/css/bootstrap.min.css'
import './assets/fontawesome/css/all.min.css'
import './assets/css/style.css'

// Component
import Headers from './Components/Headers'
import ContentBox from './Components/ContentBox'
import Login from './Components/Login'
import Register from './Components/Register';
import Logout from './Components/Logout'

const App = () => {
    const user = useSelector(selectUser)

    return(
        <section id="app">
            <div className="container-fluid main-content">
                <div className="row box-content">
                    <div className="col-12 content headers-box">
                        <Headers />
                    </div>
                    <div className="col-12 content content-box">
                        <Router>
                            <Switch>
                                <Route exact path="/" component={ 
                                    user !== null ? ContentBox : Login
                                } />
                                <Route exact path="/register" component={ Register } />
                                <Route exact path="/logout" component={ Logout } />
                                <Route exact path="*" component={ () => { window.location.href = "/" } } />
                            </Switch> 
                        </Router>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default App