import React from 'react';
import { Route, NavLink, withRouter } from 'react-router-dom';
import './App.css';
import Login from './components/Login';
import Users from './users/Users';
import Register from './components/Register';

function App(props) {
	const handleLogout = () => {
		localStorage.removeItem('jwt');
		props.history.push('/login');
	};

	return (
		<>
			<header>
				<nav>
					<NavLink to="/login">Login</NavLink>
					&nbsp;|&nbsp;
					<NavLink to="/register">Register</NavLink>
					&nbsp;|&nbsp;
					<NavLink to="/users">Users</NavLink>
					&nbsp;|&nbsp;
					<button
						onClick={() => {
							handleLogout();
						}}>
						Logout
					</button>
				</nav>
			</header>
			<Route exact path="/login" component={Login} />
			<Route exact path="/register" component={Register} />
			<Route exact path="/users" component={Users} />
		</>
	);
}

export default withRouter(App);
