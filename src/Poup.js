import { DataContext } from "./DataContext";
import {
  Button,
  Modal,
  InputGroup,
  FormControl,
  FloatingLabel,
  Form,
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { useContext } from "react";

function Poup() {
  const [itemList, setItem, show, setShow] = useContext(DataContext);
  const handleClose = () => setShow(false);

  // To add new item to the list. get the veriables from modal and name is required.
  const addItem = () => {
    if (document.getElementById("name").value) {
      setItem([
        ...itemList,
        {
          name: document.getElementById("name").value,
          note: document.getElementById("note").value,
          status: document.getElementById("status").value,
        },
      ]);
      handleClose();
    } else alert("Name is mandatory");
  };

  return (
    <div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add new item to the table</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <InputGroup className="mb-3">
            <InputGroup.Text>Name</InputGroup.Text>
            <FormControl id="name" aria-label="Name" />
          </InputGroup>
          <Form.Select id="status" aria-label="Default select example">
            <option value="todo">todo</option>
            <option value="Done">Done</option>
          </Form.Select>
          <FloatingLabel label="Comments">
            <Form.Control
              id="note"
              as="textarea"
              placeholder="Leave a comment here"
              style={{ height: "100px" }}
            />
          </FloatingLabel>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={addItem}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default Poup;
