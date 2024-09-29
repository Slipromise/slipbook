import { useState } from "react";
import Accordion from "react-bootstrap/Accordion";
import Alert from "react-bootstrap/Alert";
import Badge from "react-bootstrap/Badge";
import Stack from "react-bootstrap/Stack";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Card from "react-bootstrap/Card";
import Carousel from "react-bootstrap/Carousel";
import Dropdown from "react-bootstrap/Dropdown";
import Figure from "react-bootstrap/Figure";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
import ListGroup from "react-bootstrap/ListGroup";
import Modal from "react-bootstrap/Modal";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from "react-bootstrap/Offcanvas";
import OverlayTrigger, {
  OverlayTriggerProps,
} from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
import Pagination from "react-bootstrap/Pagination";
import Placeholder from "react-bootstrap/Placeholder";
import ProgressBar from "react-bootstrap/ProgressBar";
import Spinner from "react-bootstrap/Spinner";
import Table from "react-bootstrap/Table";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Toast from "react-bootstrap/Toast";

function BootstrapComponents() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [show2, setShow2] = useState(false);

  const handleClose2 = () => setShow2(false);
  const handleShow2 = () => setShow2(true);

  return (
    <div>
      <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey="0">
          <Accordion.Header>Accordion Item #1</Accordion.Header>
          <Accordion.Body>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>Accordion Item #2</Accordion.Header>
          <Accordion.Body>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
      {[
        "primary",
        "secondary",
        "success",
        "danger",
        "warning",
        "info",
        "light",
        "dark",
      ].map((variant) => (
        <Alert key={variant} variant={variant}>
          This is a {variant} alert—check it out!
        </Alert>
      ))}
      <Stack direction="horizontal" gap={2}>
        <Badge bg="primary">Primary</Badge>
        <Badge bg="secondary">Secondary</Badge>
        <Badge bg="success">Success</Badge>
        <Badge bg="danger">Danger</Badge>
        <Badge bg="warning" text="dark">
          Warning
        </Badge>
        <Badge bg="info">Info</Badge>
        <Badge bg="light" text="dark">
          Light
        </Badge>
        <Badge bg="dark">Dark</Badge>
      </Stack>
      <Breadcrumb>
        <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
        <Breadcrumb.Item href="https://getbootstrap.com/docs/4.0/components/breadcrumb/">
          Library
        </Breadcrumb.Item>
        <Breadcrumb.Item active>Data</Breadcrumb.Item>
      </Breadcrumb>
      <ButtonGroup aria-label="Basic example">
        <Button variant="secondary">Left</Button>
        <Button variant="secondary">Middle</Button>
        <Button variant="secondary">Right</Button>
      </ButtonGroup>
      <Button variant="primary">Primary</Button>{" "}
      <Button variant="secondary">Secondary</Button>{" "}
      <Button variant="success">Success</Button>{" "}
      <Button variant="warning">Warning</Button>{" "}
      <Button variant="danger">Danger</Button>{" "}
      <Button variant="info">Info</Button>{" "}
      <Button variant="light">Light</Button>{" "}
      <Button variant="dark">Dark</Button>
      <Button variant="link">Link</Button>
      <Button variant="outline-primary">Primary</Button>{" "}
      <Button variant="outline-secondary">Secondary</Button>{" "}
      <Button variant="outline-success">Success</Button>{" "}
      <Button variant="outline-warning">Warning</Button>{" "}
      <Button variant="outline-danger">Danger</Button>{" "}
      <Button variant="outline-info">Info</Button>{" "}
      <Button variant="outline-light">Light</Button>{" "}
      <Button variant="outline-dark">Dark</Button>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            {
              " Some quick example text to build on the card title and make up the bulk of the card's content."
            }
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
      <Carousel data-bs-theme="dark">
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="holder.js/800x400?text=First slide&bg=f5f5f5"
            alt="First slide"
          />
          <Carousel.Caption>
            <h5>First slide label</h5>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="holder.js/800x400?text=Second slide&bg=eee"
            alt="Second slide"
          />
          <Carousel.Caption>
            <h5>Second slide label</h5>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="holder.js/800x400?text=Third slide&bg=e5e5e5"
            alt="Third slide"
          />
          <Carousel.Caption>
            <h5>Third slide label</h5>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <Dropdown>
        <Dropdown.Toggle variant="success" id="dropdown-basic">
          Dropdown Button
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
          <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
          <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
      <Figure>
        <Figure.Image
          width={171}
          height={180}
          alt="171x180"
          src="holder.js/171x180"
        />
        <Figure.Caption>
          Nulla vitae elit libero, a pharetra augue mollis interdum.
        </Figure.Caption>
      </Figure>
      <Container>
        <Row>
          <Col xs={6} md={4}>
            <Image src="holder.js/171x180" rounded />
          </Col>
          <Col xs={6} md={4}>
            <Image src="holder.js/171x180" roundedCircle />
          </Col>
          <Col xs={6} md={4}>
            <Image src="holder.js/171x180" thumbnail />
          </Col>
        </Row>
      </Container>
      <ListGroup>
        <ListGroup.Item>Cras justo odio</ListGroup.Item>
        <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
        <ListGroup.Item>Morbi leo risus</ListGroup.Item>
        <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
        <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
      </ListGroup>
      <div
        className="modal show"
        style={{ display: "block", position: "initial" }}
      >
        <Modal.Dialog>
          <Modal.Header closeButton>
            <Modal.Title>Modal title</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <p>Modal body text goes here.</p>
          </Modal.Body>

          <Modal.Footer>
            <Button variant="secondary">Close</Button>
            <Button variant="primary">Save changes</Button>
          </Modal.Footer>
        </Modal.Dialog>
      </div>
      <Button variant="primary" onClick={handleShow}>
        Launch static backdrop modal
      </Button>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Modal title</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          I will not close if you click outside me. Do not even try to press
          escape key.
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary">Understood</Button>
        </Modal.Footer>
      </Modal>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">Link</Nav.Link>
              <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Button variant="primary" onClick={handleShow2}>
        Launch
      </Button>
      <Offcanvas show={show2} onHide={handleClose2}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Offcanvas</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          Some text as placeholder. In real life you can have the elements you
          have chosen. Like, text, images, lists, etc.
        </Offcanvas.Body>
      </Offcanvas>
      {["top", "right", "bottom", "left"].map((placement) => (
        <OverlayTrigger
          key={placement}
          placement={placement as OverlayTriggerProps["placement"]}
          overlay={
            <Tooltip id={`tooltip-${placement}`}>
              Tooltip on <strong>{placement}</strong>.
            </Tooltip>
          }
        >
          <Button variant="secondary">Tooltip on {placement}</Button>
        </OverlayTrigger>
      ))}
      <Pagination>
        <Pagination.First />
        <Pagination.Prev />
        <Pagination.Item>{1}</Pagination.Item>
        <Pagination.Ellipsis />

        <Pagination.Item>{10}</Pagination.Item>
        <Pagination.Item>{11}</Pagination.Item>
        <Pagination.Item active>{12}</Pagination.Item>
        <Pagination.Item>{13}</Pagination.Item>
        <Pagination.Item disabled>{14}</Pagination.Item>

        <Pagination.Ellipsis />
        <Pagination.Item>{20}</Pagination.Item>
        <Pagination.Next />
        <Pagination.Last />
      </Pagination>
      <div className="d-flex justify-content-around">
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src="holder.js/100px180" />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              {
                " Some quick example text to build on the card title and make up the bulk of the card's content."
              }
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>

        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src="holder.js/100px180" />
          <Card.Body>
            <Placeholder as={Card.Title} animation="glow">
              <Placeholder xs={6} />
            </Placeholder>
            <Placeholder as={Card.Text} animation="glow">
              <Placeholder xs={7} /> <Placeholder xs={4} />{" "}
              <Placeholder xs={4} /> <Placeholder xs={6} />{" "}
              <Placeholder xs={8} />
            </Placeholder>
            <Placeholder.Button variant="primary" xs={6} />
          </Card.Body>
        </Card>
      </div>
      <ProgressBar>
        <ProgressBar striped variant="success" now={35} key={1} />
        <ProgressBar variant="warning" now={20} key={2} />
        <ProgressBar striped variant="danger" now={10} key={3} />
      </ProgressBar>
      <Spinner animation="border" variant="primary" />
      <Spinner animation="border" variant="secondary" />
      <Spinner animation="border" variant="success" />
      <Spinner animation="border" variant="danger" />
      <Spinner animation="border" variant="warning" />
      <Spinner animation="border" variant="info" />
      <Spinner animation="border" variant="light" />
      <Spinner animation="border" variant="dark" />
      <Spinner animation="grow" variant="primary" />
      <Spinner animation="grow" variant="secondary" />
      <Spinner animation="grow" variant="success" />
      <Spinner animation="grow" variant="danger" />
      <Spinner animation="grow" variant="warning" />
      <Spinner animation="grow" variant="info" />
      <Spinner animation="grow" variant="light" />
      <Spinner animation="grow" variant="dark" />
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Username</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
          </tr>
          <tr>
            <td>3</td>
            <td colSpan={2}>Larry the Bird</td>
            <td>@twitter</td>
          </tr>
        </tbody>
      </Table>
      <Tabs
        defaultActiveKey="profile"
        id="uncontrolled-tab-example"
        className="mb-3"
      >
        <Tab eventKey="home" title="Home">
          Tab content for Home
        </Tab>
        <Tab eventKey="profile" title="Profile">
          Tab content for Profile
        </Tab>
        <Tab eventKey="contact" title="Contact" disabled>
          Tab content for Contact
        </Tab>
      </Tabs>
      <>
        {[
          "Primary",
          "Secondary",
          "Success",
          "Danger",
          "Warning",
          "Info",
          "Light",
          "Dark",
        ].map((variant, idx) => (
          <Toast
            className="d-inline-block m-1"
            bg={variant.toLowerCase()}
            key={idx}
          >
            <Toast.Header>
              <img
                src="holder.js/20x20?text=%20"
                className="rounded me-2"
                alt=""
              />
              <strong className="me-auto">Bootstrap</strong>
              <small>11 mins ago</small>
            </Toast.Header>
            <Toast.Body className={variant === "Dark" ? "text-white" : ""}>
              Hello, world! This is a toast message.
            </Toast.Body>
          </Toast>
        ))}
      </>
    </div>
  );
}

export default BootstrapComponents;
