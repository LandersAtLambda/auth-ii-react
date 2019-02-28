import React from 'react';

function Nav(props) {
	const handleLogout = () => {
		localStorage.clear();
		props.setLoggedIn(false);
		window.location.reload();
	};

	return (
		<button
			onClick={() => {
				handleLogout();
			}}>
			Logout
		</button>
	);
}

export default Nav;
