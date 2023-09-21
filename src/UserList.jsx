import { useEffect, useState } from "react";
import { User } from "./User";

export function UserList() {
  const [userlist, setUserList] = useState([]);
  useEffect(() => {
    fetch("https://650be2f547af3fd22f66a1ea.mockapi.io/users")
      .then((data) => data.json())
      .then((use) => setUserList(use));
  }, []);
  return (
    <div className="list">
      {userlist.map((list) => (
        <User key={list.id} id={list.id} user={list} />
      ))}
    </div>
  );
}
