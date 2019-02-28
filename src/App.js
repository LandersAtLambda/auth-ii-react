import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import Login from './components/Login';

function App() {
	const [users, setUsers] = useState([]);
	useEffect(() => {
		axios
			.get('https://lambda-auth-ii.herokuapp.com/api/users')
			.then(res => {
				console.log(res.message);
			})
			.catch(err => console.log(err.message));
	}, []);
	return (
		<div>
			<Login />
			{users.map(user => (
				<h1>{user.username}</h1>
			))}
		</div>
	);
}

export default App;
