import { NavLink } from "react-router-dom"
import { Button } from "react-bootstrap"

const NavButton = ({ path, buttonValue, handleOpen }) => {
	return (
		<NavLink onClick={handleOpen} to={path} className="d-grid link-underline link-underline-opacity-0">
			<Button variant="light" size="lg">
				{buttonValue}
			</Button>
		</NavLink>
	)
}

export default NavButton
