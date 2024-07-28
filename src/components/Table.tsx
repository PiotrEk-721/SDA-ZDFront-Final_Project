import { Employee } from "../App";

export interface TableProps {
    data: Employee[];
}

export function Table({data}: TableProps) {
  return (
    <>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Surname</th>
            <th>Salary</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.firstName}</td>
              <td>{item.surname}</td>
              <td>{item.salary}</td>
              <td>{item.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
