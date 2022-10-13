import { Space, Table, Tag } from "antd";
import React from "react";
import { headColumns } from "./ulti.userManagement";

const UserTable = ({ userList }) => (
  <Table
    columns={headColumns}
    dataSource={userList}
    rowKey={(record) => record.taiKhoan}
  />
);

export default UserTable;
