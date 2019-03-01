import React, { useState, useEffect } from 'react';
import requiresAuth from '../auth/requiresAuth';
import axios from 'axios';

function Users() {
	const [users, setUsers] = useState([]);
	const [filtered, setFiltered] = useState(null);
	const [dept, setDept] = useState([]);

	useEffect(() => {
		axios
			.get('/users')
			.then(res => {
				setUsers(res.data.users);
				setDept(res.data.depts);
			})
			.catch(err => console.log(err.message));
	}, []);

	const filterDept = (e, name) => {
		e.preventDefault();
		let filter = users.filter(user => user.department.includes(name));
		setFiltered(filter);
	};

	return (
		<div className="userWrapper">
			<div className="sidebar">
				<button
					onClick={() => {
						setFiltered(null);
					}}>
					All
				</button>
				{dept.map((dept, index) => (
					<button key={index} onClick={e => filterDept(e, dept.department)}>
						{dept.department}
					</button>
				))}
			</div>

			<div className="userList">
				{filtered
					? filtered.map(user => (
							<div className="user" key={user.id}>
								<h3>Username: {user.username}</h3>
								<p>Department: {user.department}</p>
							</div>
					  ))
					: users.map(user => (
							<div className="user" key={user.id}>
								<h3>Username: {user.username}</h3>
								<p>Department: {user.department}</p>
							</div>
					  ))}
			</div>
		</div>
	);
}

export default requiresAuth(Users);
