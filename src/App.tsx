import "./App.css";
import { Table } from "./components/Table";
import { Employee } from "./models/Employee";

function App() {
  const mockData: Employee[] = [
    {
      id: "1",
      firstName: "Tom",
      surname: "Smith",
      salary: 5000,
      status: "Holiday",
    },
    {
      id: "2",
      firstName: "Leny",
      surname: "Mark",
      salary: 6000,
      status: "Work",
    },
    {
      id: "3",
      firstName: "Gary",
      surname: "Oldman",
      salary: 9500,
      status: "Work",
    },
  ];
  return (
    <>
      <h1>Employees</h1>
      <Table data={mockData}></Table>
    </>
  );
}

export default App;
