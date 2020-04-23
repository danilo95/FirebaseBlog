import React, { useState } from 'react'
import { Form, Input, InputNumber, Button } from 'antd';

const layout = {
	labelCol: { span: 8 },
	wrapperCol: { span: 16 },
};

export default function NewPost() {
	const validateMessages = {
		required: '${label} is required!',

	};


	const onFinish = values => {
		let slug = values.form.titulo.replace(/ /g, "-");
		console.log(slug)
		console.log(values);
	};


	return (
		<Form {...layout} name="posts" onFinish={onFinish} validateMessages={validateMessages}>
			<Form.Item name={['form', 'titulo']} label="Titulo" rules={[{ required: true }]}>
				<Input />
			</Form.Item>
			<Form.Item name={['form', 'descripcion']} label="descripcion" rules={[{ required: true }]}>
				<Input />
			</Form.Item>
			<Form.Item name={['form', 'contenido']} label="Contenido" rules={[{ required: true }]}>
				<Input.TextArea />
			</Form.Item>
			<Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
				<Button type="primary" htmlType="submit">
					Crear
        </Button>
			</Form.Item>
		</Form>
	)
}
