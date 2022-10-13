import React, { useEffect, useState } from "react";
import { userServ } from "../../services/userService";
import UserTable from "./UserTable";
import UserAction from "./UserAction";

export default function UserManagement() {
  const [userList, setUserList] = useState([]);
  useEffect(() => {
    let fetchUserList = () => {
      //IIFE
      userServ
        .getUserList()
        .then((res) => {
          let data = res.data.content.map((item) => {
            // console.log("item.taiKhoan: ", item.taiKhoan);
            return {
              ...item,
              action: (
                <UserAction
                  //callback
                  onSuccess={fetchUserList}
                  taiKhoan={item.taiKhoan}
                />
              ),
            };
          });

          console.log(res);
          setUserList(data);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    fetchUserList();
  }, []);
  return (
    <div className="container mx-auto">
      <UserTable userList={userList} />
    </div>
  );
}
