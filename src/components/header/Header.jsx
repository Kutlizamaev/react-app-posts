import { useState } from "react"
import { Button, Navbar, Offcanvas, Card, Row, Col, Image, Container } from "react-bootstrap"
import NavButton from "../nav-button/NavButton"
import MenuIcon from "../../assets/icons/MenuIcon.svg"

const Header = () => {
	const [isOpen, setIsOpen] = useState(false)

	const handleOpen = () => {
		setIsOpen(!isOpen)
	}

	return (
		<>
			<Navbar bg="light" className="p-2">
				<Button variant="light" onClick={handleOpen}>
					<img src={MenuIcon} alt="Menu Icon" />
				</Button>
				<Offcanvas show={isOpen} onHide={handleOpen} placement={"start"}>
					<Offcanvas.Header closeButton>
						<Offcanvas.Title>Nav Menu</Offcanvas.Title>
					</Offcanvas.Header>
					<Offcanvas.Body>
						<Card className="mb-3 p-3">
							<Row>
								<Col xs={4}>
									<Image
										src="http://www.zem.com.my/images/wp-content/global/uploads/2014/01/placeholders/90x90.gif"
										roundedCircle
									/>
								</Col>
								<Col xs={8}>
									<Row>
										<p className="fw-bold fs-4 m-0">Kutlizamaev Fanil</p>
									</Row>
									<Row>
										<p className="fw-light">kutlizamaevofc@gmail.com</p>
									</Row>
								</Col>
							</Row>
						</Card>

						<Container className="d-grid gap-2">
							<NavButton path={""} buttonValue={"List of Posts"} handleOpen={handleOpen}></NavButton>
							<NavButton path={"/about"} buttonValue={"About me"} handleOpen={handleOpen}></NavButton>
						</Container>
					</Offcanvas.Body>
				</Offcanvas>
			</Navbar>
		</>
	)
}

export default Header
