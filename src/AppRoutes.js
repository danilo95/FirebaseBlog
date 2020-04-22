import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Post from './components/post/CurrentPost'
import Menu from './components/Menu'
import Login from './components/Login/Login'

const AppRoutes = () => {
	return (
		<>
			<Menu />
			<Switch>
				<Route exact path="/" component={Home} />
				<Route exact path="/login" component={Login} />
				<Route exact path="/post/:slug" component={Post} />
			</Switch>
		</>
	);
};

export default AppRoutes;
