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
		<div className="userList">
			{users.map(user => (
				<div className="user" key={user.id}>
					<h3>Username: {user.username}</h3>
					<p>Department: {user.department}</p>
				</div>
			))}
		</div>
	);
}

export default requiresAuth(Users);
