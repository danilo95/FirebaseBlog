import React, { useState } from 'react';
import { Layout, Menu } from 'antd';
import History from '../../../History';
import { SmileOutlined } from '@ant-design/icons';

const { Sider } = Layout;
const { SubMenu } = Menu;

const SideBar = (props) => {
	const [collapsed, setCollapsed] = useState(false);

	const onCollapse = (collapsed) => {
		setCollapsed(collapsed);
	};

	return (
		<Sider collapsible collapsed={collapsed} onCollapse={onCollapse}>
			<Menu theme="dark" mode="inline">
				<SubMenu
					key="dev"
					title={
						<span>
							<SmileOutlined />
							<span>Menu</span>
						</span>
					}
				>
					<Menu.Item
						key="1"
						onClick={() => History.push('/cms/newpost')}
					>
						Crear Post
					</Menu.Item>
					<Menu.Item
						key="2"
						onClick={() => History.push('/cms/trips')}
					>
						Trips
					</Menu.Item>
					<Menu.Item
						key="3"
						onClick={() => History.push('/cms/pricemodificator')}
					>
						Editar Resumen Donaciones
					</Menu.Item>
				</SubMenu>
			</Menu>
		</Sider>
	);
};

export default SideBar;
