import React from 'react';
import { Router } from 'react-router-dom';
import History from './History';
import AppRoutes from './AppRoutes';

import 'antd/dist/antd.css';

function App() {
	return (
		<div>
			<Router history={History}>
				<AppRoutes />
			</Router>
		</div>
	);
}

export default App;
