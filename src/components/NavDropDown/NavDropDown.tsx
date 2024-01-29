const NavDropDown = () => {
    const [show, setShow] = useState(false);
    
    const handleShow = () => setShow(true);
    
    return (
        <>
        {/* <Nav.Link onClick={handleShow}>
            <i className="fas fa-user"></i>
        </Nav.Link>
    
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
            <Modal.Title>Profile</Modal.Title>
            </Modal.Header>
            <Modal.Body>
            <div className="d-flex flex-column align-items-center">
                <img
                src={user?.avatarUrl || "https://via.placeholder.com/150"}
                alt="avatar"
                className="rounded-circle"
                style={{ width: "150px", height: "150px" }}
                />
                <h3 className="mt-3">{user?.name}</h3>
                <p>{user?.email}</p>
            </div>
            </Modal.Body>
            <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
                Close
            </Button>
    
            <Button variant="danger" onClick={logout}>
                Logout
            </Button>
            </Modal.Footer>
        </Modal> */}
        </>
    );
    }
export default NavDropDown;