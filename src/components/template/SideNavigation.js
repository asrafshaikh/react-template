import { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { FaGem, FaHeart } from "react-icons/fa";
import {
  Menu,
  MenuItem,
  ProSidebar,
  SidebarHeader,
  SubMenu,
} from "react-pro-sidebar";
import "react-pro-sidebar/dist/css/styles.css";
import { Route, Link, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import RouteRoster from "../pages/RouteRoster";

const SideNavigation = () => {
  const [collapsed, setCollapsed] = useState(true);

  // added styles 
  const styles = {
    sideBarHeight: {
      height: "100vh",
    },
    menuIcon: {
      float: "right",
      margin: "10px",
    },
  };
  const onClickMenuIcon = () => {
    //alert(collapsed);
    setCollapsed(!collapsed);
  };
  return (
    <Router>
      <ProSidebar style={styles.sideBarHeight} collapsed={collapsed}>
        <SidebarHeader>
          <div style={styles.menuIcon} onClick={onClickMenuIcon}>
            <AiOutlineMenu />
          </div>
        </SidebarHeader>
        <Menu iconShape="square">
          <MenuItem icon={<FaGem />}>  <Link to="/">Home</Link>
          </MenuItem>
          <MenuItem icon={<FaGem />}>
          <Link to="/Login">Login</Link>
          </MenuItem>
          <SubMenu title="Reports" icon={<FaHeart />}>
            <MenuItem> <Link to="/Route-Roster">RouteRoster</Link></MenuItem>
            <MenuItem>Inventory Report</MenuItem>
            <MenuItem>Customer Report</MenuItem>
          </SubMenu>
          <SubMenu title="Account" icon={<FaHeart />}>
            <MenuItem>Permissions</MenuItem>
            <MenuItem>Settings</MenuItem>
          </SubMenu>
          <SubMenu title="Email" icon={<FaHeart />}>
            <MenuItem>Notification</MenuItem>
          </SubMenu>
        </Menu>
      </ProSidebar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Route-Roster" element={<RouteRoster/>} />
      </Routes>
    </Router>
  );
};

export default SideNavigation;