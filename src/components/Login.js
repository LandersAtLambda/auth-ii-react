import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Login() {
	const [value, setValue] = useState({
		username: '',
		password: '',
	});

	const handleChange = e => {
		e.preventDefault();
		setValue({
			...value,
			[e.target.name]: e.target.value,
		});
	};
	const submitLogin = e => {
		e.preventDefault();
		let user = {
			username: value.username,
			password: value.password,
		};
		axios
			.post('https://lambda-auth-ii.herokuapp.com/api/login', user)
			.then(res => {
				console.log(res);
				localStorage.setItem('token', res.data.token);
			})
			.catch(err => console.log(err));
	};
	return (
		<form onSubmit={e => submitLogin(e)}>
			<input
				name="username"
				value={value.username}
				placeholder="username"
				onChange={e => handleChange(e)}
			/>
			<input
				name="password"
				value={value.password}
				placeholder="password"
				onChange={e => handleChange(e)}
			/>
			<button>Login</button>
		</form>
	);
}

export default Login;
