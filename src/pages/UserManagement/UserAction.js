import { message } from "antd";
import React from "react";
import { userServ } from "../../services/userService";

export default function UserAction({ taiKhoan, onSuccess }) {
  let handleDeleteUser = () => {
    // console.log("taiKhoan: ", taiKhoan);
    userServ
      .deleteUser(taiKhoan)
      .then((res) => {
        message.success("Xóa thành công!!!");
        onSuccess();
        // console.log(res);
      })
      .catch((err) => {
        message.error("Xóa thất bại!!!");
        console.log(err);
      });
  };
  return (
    <div className="space-x-2">
      <button
        className="px-5 py-2 rounded bg-red-500 text-white"
        onClick={handleDeleteUser}
      >
        Xóa
      </button>
      <button className="px-5 py-2 rounded bg-blue-500 text-white">Sửa</button>
    </div>
  );
}
