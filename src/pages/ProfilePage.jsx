import { Navigate, Link, useNavigate } from "react-router-dom";
import React, { useState } from "react";

let isAuth;
let check;

const changeIsAuth = () => {
	check = localStorage.getItem("isAuth");
	isAuth = JSON.parse(check);
};
function ProfilePage() {
	const navigate = useNavigate();
	const logout = () => {
		localStorage.setItem("isAuth", false);
		isAuth = JSON.parse(localStorage.getItem("isAuth"));
		console.log(isAuth);
		navigate("/login");
	};
	changeIsAuth();

	console.log(isAuth);
	console.log(typeof isAuth);
	if (isAuth === true) {
		return (
			<>
				<h1>Поздравляем! Вы находитесь на странице пользователя</h1>
				<p>Эта страница доступна только тем, кто верно ввел логин и пароль.</p>
				<button onClick={logout}>Назад</button>
			</>
		);
	} else {
		return <Navigate to='/login' />;
	}
}

export default ProfilePage;
