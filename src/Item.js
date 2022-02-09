import { Button } from "react-bootstrap";
import { useContext } from "react";
import { DataContext } from "./DataContext";

export const Item = (props) => {
  const { index, name, note, status } = props;
  const [itemList, setItem, show, setShow, check] = useContext(DataContext);

  // function to change from "todo" to "Done" and from "Done" to disappear.
  const nextStatuse = (index) => {
    //here to change from "Done" to disappear if statuse is "Done".
    if (itemList[index].status == "Done") {
      itemList.splice(index, 1);
      setItem([...itemList]);
    }
    //and here to be "Done" in other cases.
    else {
      itemList[index].status = "Done";
      setItem([...itemList]);
    }
  };

  // Add and remove item index to the array. that we will remove it later when press (Remove selected items)
  const addCheck = (index) => {
    if (check.includes(index)) {
      check.splice(check.indexOf(index), 1);
    } else {
      check.push(index);
    }
  };

  return (
    <tr>
      <td>{name}</td>
      <td>{note}</td>
      <td>
        <Button onClick={() => nextStatuse(index)}>{status}</Button>
      </td>
      <td>
        <input
          type="checkbox"
          className="check"
          value="of"
          onChange={() => addCheck(index)}
        />
      </td>
    </tr>
  );
};
