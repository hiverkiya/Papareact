import axios from "axios";
import "./App.css";
import { Button, TextField } from "@material-ui/core";
import { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
function App() {
  const { register, handleSubmit, watch, errors } = useForm();
  const [tableData, setTableData] = useState([]);
  const [totSal, setTotSal] = useState(0);
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
        // fetchData();
        setTableData([...tableData, data]);
        console.log(response);
      });
  };
  // const nameInputRef = useRef(null);
  // const ageInputRef = useRef(null);
  // const salaryInputRef = useRef(null);
  // const hobbyInputRef = useRef(null);
  useEffect(() => {
    fetchData();
    const total = tableData.reduce(
      (total, row) => (total = total + Number(row.salary)),
      0
    );
    setTotSal(total);
  }, [tableData]);

  const fetchData = () => {
    axios
      .get("https://sheet.best/api/sheets/4b65d61f-6899-4058-b3e6-9ec9e18c8774")
      .then((response) => {
        console.log("Google sheets data>>>", response);
        setTableData(response.data);
      });
  };

  ////////////////////////////////////////////////////

  return (
    <div className="app">
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
      <div>
        <table>
          {tableData.map(({ age, hobby, name, salary }) => (
            <tr>
              <td>{name}</td>
              <td>{age}</td>
              <td>${salary}</td>
              <td>{hobby}</td>
            </tr>
          ))}
        </table>
      </div>
      <div>
        <h2> Grand Total of salaries : ${totSal}</h2>
      </div>
    </div>
  );
}

export default App;
