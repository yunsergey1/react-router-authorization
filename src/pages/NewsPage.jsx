import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function NewsPage() {
	const [posts, setPosts] = useState([]);

	useEffect(() => {
		fetch("https://jsonplaceholder.typicode.com/posts")
			.then((res) => res.json())
			.then((data) => setPosts(data));
	}, []);
	return (
		<>
			<h1>Новости</h1>
			{posts.map((post) => (
				<Link className={"newslist"} key={post.id} to={`/news/${post.id}`}>
					<li>{post.title}</li>
				</Link>
			))}
		</>
	);
}

export default NewsPage;
