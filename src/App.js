import React from 'react';
import {BrowserRouter as Router, Link, Route, Switch} from 'react-router-dom'
import './App.css';
import Home from './pages/Home'
import Rooms from './pages/Rooms'
import SingleRoom from './pages/SingleRoom';
import Error from './pages/Error';
import Navbar from './components/Navbar';
import {RoomProvider} from './context'

function App() {
    return (
        <RoomProvider>
            <Router>
                <Navbar/>
                <Switch>


                    <Route exact path='/'
                        component={Home}/>
                    <Route exact path='/rooms'
                        component={Rooms}/>
                    <Route exact path='/rooms/:slug'
                        component={SingleRoom}/>
                    <Route component={Error}/>


                </Switch>
            </Router>
        </RoomProvider>
    );
}

export default App;
