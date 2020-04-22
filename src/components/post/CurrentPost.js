import React, { useState, useEffect } from "react";
import { getFirebase } from "../../firebase";
import { Layout, Breadcrumb, Card } from 'antd';
import {
	FacebookShareButton,
	FacebookIcon,
	WhatsappShareButton,
	WhatsappIcon,
	TwitterShareButton,
	TwitterIcon
} from 'react-share';
const { Content } = Layout;

export default function CurrentPost(props) {
	const [loading, setLoading] = useState(true);
	const [currentPost, setCurrentPost] = useState();
	const [urlToShare] = useState(window.location.href);

	useEffect(() => {
		const slug = props.match.params.slug;
		const id = props.location.state.id;
		if (loading && !currentPost) {
			getFirebase().firestore()
				.collection(`posts`)
				.doc(`${id}`)
				.get()
				.then(function (querySnapshot) {
					setCurrentPost(querySnapshot.data())
					setLoading(false)

				})
				.catch(function (error) {
					console.log("Error getting documents: ", error);
				});
		}
	});

	return (
		<Layout style={{ minHeight: '100vh' }}>
			<Content style={{ padding: '0 50px' }}>
				<Breadcrumb style={{ margin: '16px 0' }}>
					<Breadcrumb.Item>Home</Breadcrumb.Item>
					<Breadcrumb.Item>{props.match.params.slug}</Breadcrumb.Item>
				</Breadcrumb>
				<Card bordered={true} style={{ width: 'auto' }} loading={loading}
					cover={<img alt="Post-Cover" src={currentPost ? currentPost.coverImage : null} />}
				>
					<h1>{currentPost ? currentPost.title : ''}</h1>
					<p>{currentPost ? currentPost.content : ''}</p>
					<p>Compartir: <FacebookShareButton url={urlToShare}>
						<FacebookIcon size={32} round={true} />
					</FacebookShareButton>
						<WhatsappShareButton url={urlToShare}>
							<WhatsappIcon size={32} round={true} />
						</WhatsappShareButton>
						<TwitterShareButton url={urlToShare}>
							<TwitterIcon size={32} round={true} />
						</TwitterShareButton></p>
				</Card>
			</Content>

		</Layout >
	)
}
