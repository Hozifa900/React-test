import "./App.css";
import { DataContext } from "./DataContext";
import { Table, Container, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Poup from "./Poup";
import { Item } from "./Item.js";
import { useContext } from "react";

function App() {
  const [itemList, setItem, show, setShow, check] = useContext(DataContext);

  //This function to remove a list of items.
  const removeHandler = () => {
    check.forEach((element) => {
      itemList.splice(itemList.indexOf(itemList[element]), 1);
    });
    setItem([...itemList]);
    itemList.forEach((e, index) => {
      document.getElementsByClassName("check")[index].checked = false;
    });
  };

  // comming function to show Poup
  const handleShow = () => setShow(true);

  return (
    <div>
      <Poup />
      <Container>
        <h1>Interview Question</h1>
        <Button onClick={handleShow}> Add New Item</Button>
        <Button className="float-end" onClick={removeHandler}>
          {" "}
          Remove Selected Items
        </Button>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Name</th>
              <th>Note</th>
              <th>status</th>
              <th>Select</th>
            </tr>
          </thead>
          <tbody>
            {itemList.map((item, index) => {
              return (
                <Item
                  key={index}
                  name={item.name}
                  note={item.note}
                  status={item.status}
                  index={index}
                />
              );
            })}
          </tbody>
        </Table>
      </Container>
    </div>
  );
}

export default App;
