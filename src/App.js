import React from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import Login from './container/admin/login/login';
import Dash from './container/admin/admin';
import Logout from './container/admin/logout';
function App() {
	return (
		<div classNameName="App">
			<Route path="/admin/login" component={Login} />
			<Route path="/admin/dash" component={Dash} />
			<Route path="/admin/logout" component={Logout} />
		</div>
	);
}

export default App;
