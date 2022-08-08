import "./App.css";
import { Routes, Route, Link, Navigate } from "react-router-dom";
import MainPage from "./pages/MainPage";
import LoginPage from "./pages/LoginPage";
import NewsPage from "./pages/NewsPage";
import ProfilePage from "./pages/ProfilePage";
import NotFoundPage from "./pages/NotFoundPage";
import Layout from "./components/Layout";
import NewsSinglePage from "./pages/NewsSinglePage";
import CountPage from "pages/CountPage";

function App() {
	return (
		<>
			<Routes>
				<Route path='/' element={<Layout />}>
					<Route index element={<MainPage />} />
					<Route path='login' element={<LoginPage />} />
					<Route path='news' element={<NewsPage />} />
					<Route path='news/:id' element={<NewsSinglePage />} />
					<Route path='profile' element={<ProfilePage />} />
					<Route path='count' element={<CountPage />} />
					<Route path='*' element={<NotFoundPage />} />
				</Route>
			</Routes>
		</>
	);
}

export default App;
