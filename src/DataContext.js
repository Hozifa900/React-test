import React, { createContext, useState } from "react";
import App from "./App";

export const DataContext = createContext();

export const DataProvider = (props) => {
  //This is list of items with initial vlaue.
  const [itemList, setItem] = useState([
    {
      name: "finish homework",
      note: "start at 2022-01-01 09:00:00",
      status: "Done",
    },
    { name: "cook dinner", note: "veg only", status: "todo" },
    { name: "buy milk", note: "", status: "Done" },
  ]);

  // this to show and hide Bootstrap Modal
  const [show, setShow] = useState(false);

  // this array of indexs of item that must remove when press (Remove selected items).
  const check = [];

  return (
    <DataContext.Provider value={[itemList, setItem, show, setShow, check]}>
      <App />
    </DataContext.Provider>
  );
};
