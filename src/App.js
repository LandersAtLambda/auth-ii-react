import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import Login from './components/Login';
import Nav from './components/Nav';

function App() {
	const [users, setUsers] = useState([]);
	const [loggedIn, setLoggedIn] = useState(false);
	const token = localStorage.getItem('token');

	useEffect(() => {
		axios
			.get('https://lambda-auth-ii.herokuapp.com/api/users', {
				headers: {
					Authorization: token,
				},
			})
			.then(res => {
				setUsers(res.data.users);
			})
			.catch(err => console.log(err.message));
	}, []);

	return (
		<div>
			<Nav setLoggedIn={setLoggedIn} />
			<Login setLoggedIn={setLoggedIn} />
			{users.map(user => (
				<h1>{user.username}</h1>
			))}
		</div>
	);
}

export default App;
