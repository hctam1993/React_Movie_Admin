import axios from "axios";
import { baseURL, https, TOKEN_CYBERSOFT } from "./configURL";
import { localService } from "./localService";

export const userServ = {
  postLogin: (dataLogin) => {
    return axios({
      url: `${baseURL}/api/QuanLyNguoiDung/DangNhap`,
      method: "POST",
      data: dataLogin,
      headers: {
        TokenCyberSoft: TOKEN_CYBERSOFT,
      },
    });
  },
  getUserList: () => {
    return axios({
      url: `${baseURL}/api/QuanLyNguoiDung/LayDanhSachNguoiDung?MaNhom=${
        localService.user.get()?.maNhom
      }`,
      method: "GET",
      headers: {
        TokenCyberSoft: TOKEN_CYBERSOFT,
      },
    });
  },
  deleteUser: (taiKhoan) => {
    return https.delete(
      `/api/QuanLyNguoiDung/XoaNguoiDung?TaiKhoan=${taiKhoan}`
    );
  },
};
