import { Navigate } from "react-router-dom";
import React from "react";

let isAuth;
let setAuth = () => (isAuth = JSON.parse(localStorage.getItem("isAuth")));

function LoginPage() {
	let login = React.createRef();
	let password = React.createRef();
	console.log(login);

	setAuth();
	const showInput = (e) => {
		if (login.current.value == "Admin" && password.current.value == "12345") {
			localStorage.setItem("isAuth", true);
			return <Navigate to='/profile' />;
		} else {
			localStorage.setItem("isAuth", false);
		}
	};
	if (isAuth === true) {
		return <Navigate to='/profile' />;
	} else {
		return (
			<>
				<h1>Авторизация пользователя</h1>
				<div className='form__wrap'>
					<form>
						<input
							type='text'
							placeholder='Введите логин'
							id='login'
							ref={login}
							// onInput={showInput}
						/>
						<input
							type='password'
							placeholder='Введите пароль'
							id='password'
							ref={password}
							// onInput={showInput}
						/>
						<button id='check' onClick={showInput}>
							Войти
						</button>
					</form>
				</div>
			</>
		);
	}
}
export default LoginPage;
