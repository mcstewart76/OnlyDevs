import React from 'react';
import './App.css';
import Navigation from './components/navbar';
import { HashRouter as Router, Routes, Route} from 'react-router-dom';
import Login from './pages/';
import Home from './pages/home';
import Profile from './pages/profile';
import 'bootstrap/dist/css/bootstrap.min.css';
import Registration from './pages/Registration';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

const client = new ApolloClient({
	uri: '/graphql',
	cache: new InMemoryCache(),
  });

function App() {
return (
	<ApolloProvider client={client}>
	<Router>
	<Navigation />
	<Routes>
		<Route exact path='/' element={<Login />} />
		<Route path='/Registration' element={<Registration />} />
		<Route path='/home' element={<Home/>} />
    	<Route path='/profile' element={<Profile/>} />
	</Routes>
	</Router>
	</ApolloProvider>
);
}

export default App;
