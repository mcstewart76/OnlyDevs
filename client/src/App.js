import React from 'react';
import './App.css';
import Navigation from './components/navbar';
import { HashRouter as Router, Routes, Route} from 'react-router-dom';
import Login from './pages/';
import Home from './pages/home';
import Profile from './pages/profile';
import Message from './pages/message';
import 'bootstrap/dist/css/bootstrap.min.css';
import Registration from './pages/Registration';


function App() {
return (
	<Router>
	<Navigation />
	<Routes>
		<Route exact path='/' element={<Login />} />
		<Route path='/Registration' element={<Registration />} />
		<Route path='/home' element={<Home/>} />
    	<Route path='/profile' element={<Profile/>} />
		<Route path='/message' element={<Message/>} />
	</Routes>
	</Router>
);
}

export default App;
