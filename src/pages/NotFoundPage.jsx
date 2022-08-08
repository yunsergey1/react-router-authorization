import { Link } from "react-router-dom";
function NotFoundPage() {
	return (
		<h2>
			Этой страницы не существует. Перейдите на <Link to='/'>Главную</Link>.
		</h2>
	);
}

export default NotFoundPage;
