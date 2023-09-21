import "./App.css";
import { Routes, Route, useNavigate } from "react-router-dom";
import { UserDetails } from "./UserDetails";
import { Home } from "./Home";
import { UserList } from "./UserList";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import AppBar from "@mui/material/AppBar";
import { AddUser } from "./AddUser";
import { Edit } from "./Edit";
export default function App() {
  const navigate = useNavigate();
  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Button onClick={() => navigate("/")} color="inherit">
            HOME
          </Button>
          <Button onClick={() => navigate("/userlist")} color="inherit">
            USERS
          </Button>
          <Button onClick={() => navigate("/adduser")} color="inherit">
            ADD USER
          </Button>
        </Toolbar>
      </AppBar>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/userlist" element={<UserList />} />
        <Route path="/userlist/:id" element={<UserDetails />} />
        <Route path="/adduser" element={<AddUser />} />
        <Route path="/user/edit/:id" element={<Edit />} />
      </Routes>
    </div>
  );
}
