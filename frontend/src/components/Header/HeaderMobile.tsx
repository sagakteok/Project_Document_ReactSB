import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Icon from "@mdi/react";
import { mdiMagnify, mdiAccountCircle, mdiMenu } from "@mdi/js";
import { AppBar, Toolbar, IconButton, Drawer, List, ListItemButton, ListItemText } from "@mui/material";
import headerlogo from "../../assets/headerlogo.png";
import "./HeaderMobileStyle.scss";

function MobileHeader() {
  const location = useLocation();
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const toggleDrawer = (open: boolean) => {
    setIsDrawerOpen(open);
  };

  return (
    <>
      <AppBar position="fixed" sx={{ backgroundColor: "#FFFFFF", boxShadow: "none", height: "60px", zIndex: 4 }}>
        <Toolbar sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", height: "60px" }}>
          <Link to="/"><img src={headerlogo} alt="Logo" style={{ width: "90px" }} /></Link>
          <div>
            <IconButton disableTouchRipple component={Link} to="/" className={`mobile-header_icon ${location.pathname === "/" ? "active" : ""}`}>
              <Icon path={mdiMagnify} size={1} />
            </IconButton>
            <IconButton disableTouchRipple component={Link} to="/" className={`mobile-header_icon ${location.pathname === "/" ? "active" : ""}`}>
              <Icon path={mdiAccountCircle} size={1} />
            </IconButton>
            <IconButton onClick={() => toggleDrawer(!isDrawerOpen)} sx={{ ripple: true }} className={`mobile-header_icon ${isDrawerOpen ? "active" : ""}`}>
              <Icon path={mdiMenu} size={1} />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      <Drawer anchor="top" open={isDrawerOpen} onClose={() => toggleDrawer(false)} PaperProps={{ style: { boxShadow: "none", top: '60px' } }} ModalProps={{ keepMounted: true, BackdropProps: { style: { backgroundColor: "transparent" } } }} sx={{ position: 'relative', zIndex: '3' }}>
        <List sx={{ backgroundColor: "#FFFFFF", borderBottom: '1px solid #F8F8F8' }}>
          <ListItemButton disableTouchRipple component={Link} to="/AllDocuments" onClick={() => toggleDrawer(false)} selected={location.pathname === "/AllDocuments"}>
            <p className={`mobile-header_text ${location.pathname === '/AllDocuments' ? 'active' : ''}`}>서류 모아보기</p>
          </ListItemButton>
          <ListItemButton disableTouchRipple component={Link} to="/Businesses" onClick={() => toggleDrawer(false)} selected={location.pathname === "/Businesses"}>
            <p className={`mobile-header_text ${location.pathname === '/AllDocuments' ? 'active' : ''}`}>업무 처리</p>
          </ListItemButton>
          <ListItemButton disableTouchRipple component={Link} to="/TownCommunity" onClick={() => toggleDrawer(false)} selected={location.pathname === "/TownCommunity"}>
            <p className={`mobile-header_text ${location.pathname === '/AllDocuments' ? 'active' : ''}`}>동네 소식</p>
          </ListItemButton>
          <ListItemButton disableTouchRipple component={Link} to="/MyDocuments" onClick={() => toggleDrawer(false)} selected={location.pathname === "/MyDocuments"}>
            <p className={`mobile-header_text ${location.pathname === '/AllDocuments' ? 'active' : ''}`}>나의 서류</p>
          </ListItemButton>
        </List>
      </Drawer>
    </>
  );
}

export default MobileHeader;