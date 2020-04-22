import React, { useState, useEffect } from "react";
import { getFirebase } from "../../firebase";
import { Card, Col, Row, Button } from 'antd';
import History from '../../History'

const { Meta } = Card;

export default function Home() {
	const [loading, setLoading] = useState(true);
	const [blogPosts, setBlogPosts] = useState([]);

	useEffect(() => {
		if (loading && !blogPosts.length) {
			getFirebase().firestore()
				.collection(`posts`)
				.get()
				.then(function (querySnapshot) {
					let posts = []
					querySnapshot.forEach(function (doc) {
						let data = doc.data()
						posts.push({ ...data, id: doc.id })

					});
					setLoading(false)
					setBlogPosts(posts)
				})
				.catch(function (error) {
					console.log("Error getting documents: ", error);
				});
		}


	});

	const redirect = (slug, id) => {
		//History.push(`/post/${slug}`)
		History.push({
			pathname:
				'/post/' + slug,
			state: {
				id
			}
		});
	}

	return (
		<div>
			<Card title="Donaciones" bordered={false} style={{ width: 'auto' }} loading={loading}>
				<Row gutter={16}>
					{blogPosts.map((post, index) => {

						return (
							<Col span={8}>
								<Card title={post.title} bordered={false}
									key={index}
									cover={<img alt="Post-Cover" src={post.coverImage} />}
									key={index}>
									<Meta description={post.descripcion} />
									<p>{post.datePretty}</p>
									<Button onClick={e => redirect(post.slug, post.id)}>Ver</Button>
								</Card>
							</Col>

						)

					})}
				</Row>
			</Card>
		</div>
	)
}
