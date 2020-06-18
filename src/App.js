import React ,{ Component } from "react";
import Login from './components/Login';
import Daftar from './components/Daftar';
import Dashboard from './components/Dashboard';
import { Route,Switch } from 'react-router-dom';

function App() {
	return (
		<div className="App">
			<Switch>
				<Route exact path="/" component={Login}/>
				<Route exact path="/daftar" component={Daftar}/>
				<Route exact path="/dashboard" component={Dashboard}/>
			</Switch>
		</div>
	);
}

export default App;