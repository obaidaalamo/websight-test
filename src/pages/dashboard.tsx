import { useState } from "react";
import { Table } from "../components/table";
import { User, fakeData } from "../components/table/config";
import { ModelSpaceship } from "../utils/ModelSpaceShip";

export const Dashboard = () => {
  const [userList, setUserList] = useState<User[]>(fakeData);

  const searchList = (type: any) => {
    if (type === "") {
      setUserList(() => [...fakeData]);
      return;
    }
    if (isNaN(parseInt(type))) {
      const result: User[] = [];
      fakeData.map((user: User) => {
        if (
          user.name.toLocaleLowerCase().startsWith(type.toLocaleLowerCase())
        ) {
          result.push(user);
        } else if (
          user.lastName.toLocaleLowerCase().startsWith(type.toLocaleLowerCase())
        ) {
          result.push(user);
        }
        setUserList(() => [...result]);
      });
    } else {
      const result: any = fakeData.find(
        (user: User) => user.age === parseInt(type)
      );
      const returnData: User[] = [];
      if (result) {
        returnData.push(result);
        setUserList(() => [...returnData]);
      } else {
        const list: User[] = [];
        setUserList(() => [...list]);
      }
    }
  };
  return (
    <div className="Container">
      <ModelSpaceship />
      <div className="Card z-1">
        <div className="Search">
          <div className="Title">Search :</div>
          <div className="SearchBar">
            <input onChange={(e) => searchList(e.target.value)} />
            <button>Search</button>
          </div>
        </div>
        <Table data={userList} />
      </div>
    </div>
  );
};
