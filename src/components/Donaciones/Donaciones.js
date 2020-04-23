import React, { useState,useEffect } from 'react';
import { getFirebase } from "../../firebase";

import { Statistic, Row, Col } from 'antd';
import { DollarCircleOutlined,UsergroupAddOutlined } from '@ant-design/icons';

export default function Donaciones() {
	const [total, setTotal] = useState(0);
	const [donadores, setDonadores] = useState(0);
	useEffect(() => {
		if (!total.length) {
			getFirebase().firestore()
				.collection(`donacionesResumen`)
				.get()
				.then(function (querySnapshot) {
					let data={}
					querySnapshot.forEach(function (doc) {
						 data = doc.data()
					});
					setTotal(data.total)
					setDonadores(data.donadores)
				})
				.catch(function (error) {
					console.log("Error getting documents: ", error);
				});
		}


	})
	return (
    <Row gutter={16}>
    <Col span={12}>
      <Statistic title="Total Donado" value={'$'+total} prefix={<DollarCircleOutlined />} />
    </Col>
    <Col span={12}>
      <Statistic title="Contribuyentes" value={donadores} prefix={<UsergroupAddOutlined />} />
    </Col>
  </Row>
   
  );
}