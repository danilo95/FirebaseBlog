import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Post from './components/post/CurrentPost'
import Login from './components/Login/Login'
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';
import DashboardRoutes from './DashboardRoutes'
import PublicRoutes from './PublicRoutes';

const AppRoutes = () => {
	return (
		<>
			<Switch>
				<PrivateRoute path="/cms" component={DashboardRoutes} />
				<PublicRoutes path="/" component={PublicRoute}/>
			</Switch>
		</>
	);
};

export default AppRoutes;
