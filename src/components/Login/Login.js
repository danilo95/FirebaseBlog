import React, { useState } from 'react'
import { Button, Input, Tabs } from 'antd';
import { getFirebase } from "../../firebase";

const { TabPane } = Tabs;

export default function Login() {
	const [valueInput, setValue] = useState({ user: '', pass: '' });

	const onChangeHandler = (e) => {
		const { name, value } = e.target
		setValue({ ...valueInput, [name]: value })
	}
	const onSubmitRegister = () => {
		getFirebase().auth().createUserWithEmailAndPassword(valueInput.user, valueInput.pass).then(credential => {
			let newUser = {
				uid: credential.user.uid,
				email: credential.user.email,
				tipo: 'donante'
			}
			getFirebase()
				.database()
				.ref()
				.child(`users/${credential.user.email}`)
				.set(newUser)

		}).catch(function (error) {
			// Handle Errors here.
			var errorCode = error.code;
			var errorMessage = error.message;
			// ...
		});

	}

	return (
		<div>
			<Tabs defaultActiveKey="1">
				<TabPane tab="Ingresar" key="1">
					<Input placeholder="usuario"
						name='user'
						onChange={onChangeHandler}
						value={valueInput.user}
					/>
					<Input placeholder="Contraseña" name="pass" value={valueInput.pass} onChange={onChangeHandler}
					/>
					<Button type="primary">Ingresar</Button>
				</TabPane>
				<TabPane tab="Crear Cuenta" key="2">
					<Input placeholder="usuario"
						name='user'
						onChange={onChangeHandler}
						value={valueInput.user}
					/>
					<Input placeholder="Contraseña" name="pass" value={valueInput.pass} onChange={onChangeHandler}
					/>
					<Button type="primary" onClick={onSubmitRegister}>Crear Cuenta</Button>
				</TabPane>

			</Tabs>


		</div>
	)
}
