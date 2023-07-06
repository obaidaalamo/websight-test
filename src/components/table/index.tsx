import { useEffect, useState } from "react";
import { User } from "./config";

export const Table = ({ data }: { data: User[] }) => {
  const [datalist, setDataList] = useState<User[]>(data);
  useEffect(() => {
    setDataList(data);
  }, [data]);
  const sortTable = (type: number) => {
    switch (type) {
      case 1:
        data.sort((a, b) => {
          if (a.name < b.name) {
            return -1;
          }
          if (a.name > b.name) {
            return 1;
          }
          return 0;
        });
        break;
      case 2:
        data.sort((a, b) => {
          if (a.lastName < b.lastName) {
            return -1;
          }
          if (a.lastName > b.lastName) {
            return 1;
          }
          return 0;
        });

        break;
      case 3:
        data.sort((a, b) => {
          if (a.age < b.age) {
            return 1;
          }
          if (a.age > b.age) {
            return -1;
          }
          return 0;
        });
        break;
    }
    setDataList(() => [...data]);
  };

  const TableHead = (): React.ReactElement => {
    return (
      <tbody>
        <th onClick={() => sortTable(1)}>Name</th>
        <th onClick={() => sortTable(2)}>Last Name</th>
        <th onClick={() => sortTable(3)}>Age</th>
      </tbody>
    );
  };

  const TableBody = (): React.ReactElement => {
    return (
      <>
        {datalist.map((data, index) => {
          return (
            <tbody key={index}>
              <td>{data.name}</td>
              <td>{data.lastName}</td>
              <td>{data.age}</td>
            </tbody>
          );
        })}
      </>
    );
  };

  return (
    <table id="myTable">
      <TableHead />
      <TableBody />
    </table>
  );
};
