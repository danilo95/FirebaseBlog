import React from 'react';
import { Layout } from 'antd';
import SideBar from './SideBar';

const { Header, Content, Footer } = Layout;

const BasicLayout = props => {
	return (
		<Layout style={{ minHeight: '100vh' }}>
			<SideBar />
			<Layout style={{ minHeight: '100vh' }}>
				<Header style={{ background: '#fff', padding: 0, height: 26 }}>

				</Header>
				<Content style={{ margin: '26px 16px' }}>
					{props.children}
				</Content>
				<Footer style={{ textAlign: 'center' }}>Donde reina la caridad, ahí está la felicidad.
</Footer>
			</Layout>
		</Layout>
	);
};

export default BasicLayout;
