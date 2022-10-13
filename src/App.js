import "./App.css";
import "antd/dist/antd.css";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import LoginPage from "./pages/LoginPage/LoginPage";
import UserManagement from "./pages/UserManagement/UserManagement";
import LayoutComponent from "./HOC/LayoutComponent";
import SecureView from "./HOC/SecureView";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route
            path="/management"
            element={
              <SecureView>
                <LayoutComponent Component={UserManagement} />
              </SecureView>
            }
          />
          <Route
            path="/login"
            element={<LayoutComponent Component={LoginPage} />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
