import "bootstrap/dist/css/bootstrap.min.css"
import { Route, Routes } from "react-router-dom"
import MainPage from "./pages/main/MainPage"
import UserPage from "./pages/user/UserPage"
import AboutPage from "./pages/about/AboutPage"
import Header from "./components/header/Header"

function App() {
	return (
		<>
			<Header />
			<Routes>
				<Route path="" element={<MainPage />} />
				<Route path="user" element={<UserPage />} />
				<Route path="about" element={<AboutPage />} />
			</Routes>
		</>
	)
}

export default App
