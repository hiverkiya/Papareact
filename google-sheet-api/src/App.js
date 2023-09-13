import axios from "axios";
import { Button, TextField } from "@material-ui/core";
import { useRef, useState } from "react";
function App() {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted");
    const tableData = {
      name: nameInputRef.current.value,
      age: ageInputRef.current.value,
      salary: salaryInputRef.current.value,
      hobby: hobbyInputRef.current.value,
    };
    console.log(tableData);
    axios
      .post(
        "https://sheet.best/api/sheets/4b65d61f-6899-4058-b3e6-9ec9e18c8774",
        tableData
      )
      .then((response) => {
        console.log(response);
      });
  };
  const nameInputRef = useRef(null);
  const ageInputRef = useRef(null);
  const salaryInputRef = useRef(null);
  const hobbyInputRef = useRef(null);
  return (
    <div>
      <div> Hello</div>

      <form onSubmit={handleSubmit}>
        <TextField inputRef={nameInputRef} variant="filled" label="Name" />{" "}
        <TextField inputRef={ageInputRef} variant="filled" label="Age" />{" "}
        <TextField variant="filled" inputRef={salaryInputRef} label="Salary" />{" "}
        <TextField variant="filled" inputRef={hobbyInputRef} label="Hobby" />{" "}
        <Button type="submit">Submit</Button>
      </form>
    </div>
  );
}

export default App;
