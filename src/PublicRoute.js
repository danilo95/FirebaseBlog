import React from 'react';
import { Switch } from 'react-router-dom';
import PublicRoutes from './PublicRoutes'
import Home from './components/Home/Home'
import Login from './components/Login/Login'
import Post from './components/post/CurrentPost'
import Menu from './components/Menu'


const PublicRoute = () => {
	return (
		<>
		<Menu/>
		<Switch>
			<PublicRoutes exact path="/" component={Home} />
			<PublicRoutes exact path="/login" component={Login} />
			<PublicRoutes exact path="/post/:slug" component={Post} />
		</Switch>
		</>
	);
};

export default PublicRoute;
