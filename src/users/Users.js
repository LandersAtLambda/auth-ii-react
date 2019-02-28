import React, { useState, useEffect } from 'react';
import requiresAuth from '../auth/requiresAuth';
import axios from 'axios';

function Users() {
	const [users, setUsers] = useState([]);

	useEffect(() => {
		axios
			.get('/users')
			.then(res => {
				setUsers(res.data.users);
			})
			.catch(err => console.log(err.message));
	}, []);

	return (
		<>
			<ul>
				{users.map(user => (
					<li key={user.id}>
						<h3>{user.username}</h3>
					</li>
				))}
			</ul>
		</>
	);
}

export default requiresAuth(Users);
