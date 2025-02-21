import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Icon from "@mdi/react";
import { mdiMagnify, mdiAccountCircle, mdiMenu } from "@mdi/js";
import { AppBar, Toolbar, IconButton, Drawer, List, ListItemButton } from "@mui/material";
import headerlogo from "../assets/headerlogo.png";
import { useMediaQuery } from "react-responsive";
import "./Header.scss";

function Header() {
  const location = useLocation();
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  // 화면 크기에 따라 모바일 여부 체크
  const isMobile = useMediaQuery({ query: "(max-width: 700px)" });

  // Drawer 열기/닫기 함수
  const toggleDrawer = (open: boolean) => {
    setIsDrawerOpen(open);
  };

  return (
    <>
      {isMobile ? (
        // 모바일 헤더
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
                <IconButton onClick={() => toggleDrawer(!isDrawerOpen)} className={`mobile-header_icon ${isDrawerOpen ? "active" : ""}`}>
                  <Icon path={mdiMenu} size={1} />
                </IconButton>
              </div>
            </Toolbar>
          </AppBar>

          {/* 드로어 메뉴 */}
          <Drawer anchor="top" open={isDrawerOpen} onClose={() => toggleDrawer(false)} PaperProps={{ style: { boxShadow: "none", top: '60px' } }} ModalProps={{ keepMounted: true, BackdropProps: { style: { backgroundColor: "transparent" } } }} sx={{ position: 'relative', zIndex: '3' }}>
            <List sx={{ backgroundColor: "#FFFFFF", borderBottom: '1px solid #F8F8F8' }}>
              <ListItemButton disableTouchRipple component={Link} to="/AllDocuments" onClick={() => toggleDrawer(false)} selected={location.pathname === "/AllDocuments"} sx={{ height: '55px' }}>
                <p className={`mobile-header_text ${location.pathname === '/AllDocuments' ? 'active' : ''}`}>서류 모아보기</p>
              </ListItemButton>
              <ListItemButton disableTouchRipple component={Link} to="/Businesses" onClick={() => toggleDrawer(false)} selected={location.pathname === "/Businesses"} sx={{ height: '55px' }}>
                <p className={`mobile-header_text ${location.pathname === '/Businesses' ? 'active' : ''}`}>업무 처리</p>
              </ListItemButton>
              <ListItemButton disableTouchRipple component={Link} to="/TownCommunity" onClick={() => toggleDrawer(false)} selected={location.pathname === "/TownCommunity"} sx={{ height: '55px' }}>
                <p className={`mobile-header_text ${location.pathname === '/TownCommunity' ? 'active' : ''}`}>동네 소식</p>
              </ListItemButton>
              <ListItemButton disableTouchRipple component={Link} to="/MyDocuments" onClick={() => toggleDrawer(false)} selected={location.pathname === "/MyDocuments"} sx={{ height: '55px' }}>
                <p className={`mobile-header_text ${location.pathname === '/MyDocuments' ? 'active' : ''}`}>나의 서류</p>
              </ListItemButton>
            </List>
          </Drawer>
        </>
      ) : (
        // 데스크톱 헤더
        <header style={{ position: 'fixed', zIndex: '4', backgroundColor: '#FFFFFF', width: '100vw', height: '60px', display: 'flex', alignItems: 'center' }}>
          <div style={{ width: '1100px', margin: 'auto', display: 'flex', alignItems: 'center' }}>
            <Link to="/">
              <img src={headerlogo} style={{ width: '90px', marginLeft: '30px' }} />
            </Link>
            <Link to="/AllDocuments" className={`desktop-header_text ${location.pathname === '/AllDocuments' ? 'active' : ''}`}>서류 모아보기</Link>
            <Link to="/Businesses" className={`desktop-header_text ${location.pathname === '/Businesses' ? 'active' : ''}`}>업무 처리</Link>
            <Link to="/TownCommunity" className={`desktop-header_text ${location.pathname === '/TownCommunity' ? 'active' : ''}`}>동네 소식</Link>
            <Link to="/MyDocuments" className={`desktop-header_text ${location.pathname === '/MyDocuments' ? 'active' : ''}`}>나의 서류</Link>
            <div style={{ marginLeft: 'auto' }}>
              <Link to="/">
                <Icon path={mdiMagnify} size={1} className={`desktop-header_icon ${location.pathname === '/' ? 'active' : ''}`} />
              </Link>
              <Link to="/">
                <Icon path={mdiAccountCircle} size={1} className={`desktop-header_icon ${location.pathname === '/' ? 'active' : ''}`} />
              </Link>
            </div>
          </div>
        </header>
      )}
    </>
  );
}

export default Header;