import { useParams, Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

function NewsSinglePage() {
	const { id } = useParams();
	const [post, setPost] = useState(null);
	const navigate = useNavigate();

	const goBack = () => navigate(-1);

	useEffect(() => {
		fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
			.then((res) => res.json())
			.then((data) => setPost(data));
	}, [id]);

	return (
		<>
			{post && (
				<div>
					<h2>{post.title}</h2>
					<p>{post.body}</p>
				</div>
			)}
			<div className='button_inner'>
				{/* <button className={"goBack"} onClick={goBack}>
					назад
				</button> */}
				<Link to={"/news"}>Назад</Link>
			</div>
		</>
	);
}

export default NewsSinglePage;
