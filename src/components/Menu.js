import React from 'react'
import { Layout, Menu } from 'antd';
import History from '../History'

const { Header } = Layout;

export default function NavBar() {
	return (
		<Header>
			<div className="logo" />
			<Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
				<Menu.Item key="1" onClick={() => { History.push('/') }}>Home</Menu.Item>
				<Menu.Item key="2">¿Como Donar?</Menu.Item>
				<Menu.Item key="3">Sobre Nosotros</Menu.Item>
			</Menu>
		</Header>
	)
}
