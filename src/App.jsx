import { Route, Routes, NavLink } from "react-router-dom"
import MainPage from "./pages/main/MainPage"
import UserPage from "./pages/user/UserPage"
import AboutPage from "./pages/about/AboutPage"

function App() {
	return (
		<div className="App">
			<header>
				<NavLink to={""}>Main</NavLink>
				<NavLink to={"user"}>User</NavLink>
				<NavLink to={"about"}>About</NavLink>
			</header>
			<Routes>
				<Route path="" element={<MainPage />} />
				<Route path="user" element={<UserPage />} />
				<Route path="about" element={<AboutPage />} />
			</Routes>
		</div>
	)
}

export default App
