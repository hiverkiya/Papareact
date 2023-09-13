import axios from "axios";
import { Button, TextField } from "@material-ui/core";
import { useRef, useState } from "react";
import { useForm } from "react-hook-form";
function App() {
  const { register, handleSubmit, watch, errors } = useForm();

  const submitFormToGoogle = (data) => {
    console.log(data);
    console.log("Submitted");
    const { name, age, salary, hobby } = data;
    const tableData = {
      name,
      age,
      salary,
      hobby,
    };
    axios
      .post(
        "https://sheet.best/api/sheets/4b65d61f-6899-4058-b3e6-9ec9e18c8774",
        tableData
      )
      .then((response) => {
        alert("Row added");
        console.log(response);
      });
  };
  // const nameInputRef = useRef(null);
  // const ageInputRef = useRef(null);
  // const salaryInputRef = useRef(null);
  // const hobbyInputRef = useRef(null);
  return (
    <div>
      <div> Hello</div>

      <form onSubmit={handleSubmit(submitFormToGoogle)}>
        <TextField
          name="name"
          {...register("name")}
          variant="filled"
          label="Name"
        />{" "}
        <TextField
          name="age"
          {...register("age")}
          variant="filled"
          label="Age"
        />{" "}
        <TextField
          name="salary"
          variant="filled"
          {...register("salary")}
          label="Salary"
        />{" "}
        <TextField
          name="hobby"
          variant="filled"
          {...register("hobby")}
          label="Hobby"
        />{" "}
        <Button type="submit">Submit</Button>
      </form>
    </div>
  );
}

export default App;
