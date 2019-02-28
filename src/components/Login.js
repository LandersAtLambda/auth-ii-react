import React, { useState } from 'react';
import axios from 'axios';

function Login(props) {
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
				localStorage.setItem('jwt', res.data.token);
				props.history.push('/users');
			})
			.catch(err => console.log(err));
	};
	return (
		<div>
			<h1>{value.message}</h1>
			<form onSubmit={e => submitLogin(e)}>
				<input
					name="username"
					type="text"
					value={value.username}
					placeholder="username"
					onChange={e => handleChange(e)}
				/>
				<input
					name="password"
					type="password"
					value={value.password}
					placeholder="password"
					onChange={e => handleChange(e)}
				/>
				<button type="submit">Login</button>
			</form>
		</div>
	);
}

export default Login;
