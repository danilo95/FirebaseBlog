import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { getFirebase } from './firebase';
let sesion = false
getFirebase().auth().onAuthStateChanged((user) => {
	if (user) {
		sesion = true
	}
});

const PrivateRoute = ({ component: Component, ...rest }) => {
	return (
		<Route
			{...rest}
			render={props =>
				sesion ? (
					<Component {...props} />
				) : (
						<Redirect
							to={{
								pathname: '/login',
								state: { from: props.location }
							}}
						/>
					)
			}
		/>
	);
};


export default PrivateRoute;