import React from 'react';
import { Switch } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';
import Index from './components/admin/Index'
import Layout from './components/admin/Layout/Layout'

const DashboardRoutes = () => {
	return (
		<Layout>
			<Switch>
				<PrivateRoute exact path="/cms/index" component={Index} />
			</Switch>
		</Layout>
	);
};

export default DashboardRoutes;
