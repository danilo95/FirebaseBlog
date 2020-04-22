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
			/*		getFirebase()
						.database()
						.ref("/posts")
						.orderByChild("dateFormatted")
						.once("value")
						.then(snapshot => {
							let posts = [];
							const snapshotVal = snapshot.val();
							for (let slug in snapshotVal) {
								posts.push(snapshotVal[slug]);
							}
		
							const newestFirst = posts.reverse();
							setBlogPosts(newestFirst);
							setLoading(false);
						})*/

			//otra funcion
			getFirebase().firestore()
				.collection(`posts`)
				.get()
				.then(function (querySnapshot) {
					querySnapshot.forEach(function (doc) {
						// doc.data() is never undefined for query doc snapshots
						console.log(doc.id, " => ", doc.data());
					});
				})
				.catch(function (error) {
					console.log("Error getting documents: ", error);
				});


		}


	});

	const redirect = (slug) => {
		History.push(`/post/${slug}`)
	}

	return (
		<div>
			<Card title="Donaciones" bordered={false} style={{ width: 'auto' }} loading={loading}>
				<Row gutter={16}>
					{blogPosts.map((post, index) => {

						return (
							<Col span={8}>
								<Card title={post.title} bordered={false}
									cover={<img alt="Post-Cover" src={post.coverImage} />}
									key={index}>
									<Meta description={post.descripcion} />
									<p>{post.datePretty}</p>
									<Button onClick={e => redirect(post.slug)}>Ver</Button>
								</Card>
							</Col>

						)

					})}
				</Row>
			</Card>
		</div>
	)
}
