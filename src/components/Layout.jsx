import { NavLink, Outlet } from "react-router-dom";

const setActive = ({ isActive }) => (isActive ? "active-link" : "");

const Layout = () => {
	return (
		<>
			<header>
				<NavLink to='/' className={setActive}>
					Главная
				</NavLink>
				{/* <NavLink to='/login' className={setActive}>
					Авторизация
				</NavLink> */}
				<NavLink to='/news' className={setActive}>
					Новости
				</NavLink>
				<NavLink to='/profile' className={setActive}>
					Профиль
				</NavLink>
				<NavLink to='/count' className={setActive}>
					Счетчик
				</NavLink>
			</header>
			<div className={"wrap"}>
				<Outlet />
			</div>

			<footer>
				<p>React Router Dom. 2022</p>
				<p>Сергей Юн: +7(962)587-91-42</p>
			</footer>
		</>
	);
};

export default Layout;
