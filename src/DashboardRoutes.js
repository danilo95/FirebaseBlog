import React from 'react';
import { Switch } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';
import Index from './components/admin/Index'


const DashboardRoutes = () => {
	return (
		<Switch>
			<PrivateRoute exact path="/cms/index" component={Index} />
		</Switch>
	);
};

export default DashboardRoutes;
