import React from 'react';
import './App.css';
import Navigation from './components/navbar';
import {HashRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Home from './pages/home';
import Profile from './pages/profile';
import 'bootstrap/dist/css/bootstrap.min.css';
import Registration from './pages/Registration';
import { ApolloClient, InMemoryCache, ApolloProvider, createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';



const httpLink = createHttpLink({
	uri: '/graphql',
  });
  

const authLink = setContext((_, { headers }) => {
	// get the authentication token from local storage if it exists
	const token = localStorage.getItem('id_token');
	// return the headers to the context so httpLink can read them
	return {
	  headers: {
		...headers,
		authorization: token ? `Bearer ${token}` : '',
	  },
	};
  });
  
  const client = new ApolloClient({
	link: authLink.concat(httpLink),
	cache: new InMemoryCache(),
  });
  


function App() {


	return (
		<ApolloProvider client={client}>
			<Router>
				<Navigation />
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/Registration' element={<Registration />} />
					<Route path='/profile' element={<Profile />} />
					<Route path='/login' element={<Login />} />

				</Routes>
			</Router>
		</ApolloProvider>
	);
}

export default App;
