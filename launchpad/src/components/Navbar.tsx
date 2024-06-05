import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Link, Outlet } from "react-router-dom";
import logo from "../assets/vhlaunch.png";
import { Avatar, Button, Menu, MenuItem, Tooltip } from "@mui/material";
import RadioButtonCheckedIcon from "@mui/icons-material/RadioButtonChecked";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import MonetizationOnOutlinedIcon from "@mui/icons-material/MonetizationOnOutlined";
import SendOutlinedIcon from "@mui/icons-material/SendOutlined";
import { CiBadgeDollar } from "react-icons/ci";
import { MdOutlineSettingsSuggest } from "react-icons/md";
import { TbBrandTelegram } from "react-icons/tb";

const drawerWidth = 240;

interface Props {
  window?: () => Window;
}
const pages = [
  "Create Token",
  "Manage Token",
  "Distribute Token",
  "Create Token Sale",
  "Manage Token Sale",
  "Create NFT",
  "Manage NFT",
  "Distribute NFT",
];
const settings = ["Profile", "Account", "Dashboard", "Logout"];
const links = [
  "createToken",
  "manageToken",
  "distributeToken",
  "createTokenSale",
  "manageTokenSale",
  "createNFT",
  "manageNFT",
  "distributeNFT",
];
const icons = [
  <RadioButtonCheckedIcon />,
  <SettingsOutlinedIcon />,
  <TbBrandTelegram size={24} fontWeight={900} />,
  <MonetizationOnOutlinedIcon />,
  <CiBadgeDollar size={24} fontWeight={900} />,
  <RadioButtonCheckedIcon />,
  <MdOutlineSettingsSuggest size={24} fontWeight={900} />,
  <SendOutlinedIcon />,
];

export default function ResponsiveDrawer(props: Props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [isClosing, setIsClosing] = React.useState(false);

  const handleDrawerClose = () => {
    setIsClosing(true);
    setMobileOpen(false);
  };

  const handleDrawerTransitionEnd = () => {
    setIsClosing(false);
  };

  const handleDrawerToggle = () => {
    if (!isClosing) {
      setMobileOpen(!mobileOpen);
    }
  };

  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null
  );

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  const drawer = (
    <div>
      <Link to="/">
        <img
          src={logo}
          alt="logo"
          style={{
            height: "57px",
          }}
        />
      </Link>
      <Divider sx={{ background: "#8e8c8c" }} />
      <List>
        {pages.map((text, index) => (
          <ListItem key={index} disablePadding>
            <Link to={links[index]} style={{ textDecoration: "none" }}>
              <ListItemButton>
                <ListItemIcon sx={{ color: "#8e8c8c" }}>
                  {icons[index]}
                </ListItemIcon>
                <ListItemText primary={text} sx={{ color: "#8e8c8c" }} />
              </ListItemButton>
            </Link>
          </ListItem>
        ))}
      </List>
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px`, background: "#fff", padding: "0px" },
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography component="div" sx={{ color: "#6b7483", flexGrow: 1 }}>
            <span
              style={{ color: "#03adf5", fontSize: "20px", fontWeight: "900" }}
            >
              Token Tool &nbsp;
            </span>
            by VirtualLaunch
          </Typography>
          
          <Button sx={{color:"#283240"}}>Pricing</Button>
          <Button sx={{color:"#283240"}}>Contact</Button>
          <w3m-button />
          <Box sx={{ flexGrow: 0, marginLeft: "10px" }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Ankit Patel" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{
          width: { sm: drawerWidth },
          flexShrink: { sm: 0 },
          background: "#283240",
        }}
        aria-label="mailbox folders"
      >
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onTransitionEnd={handleDrawerTransitionEnd}
          onClose={handleDrawerClose}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
              background: "#000000",
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Toolbar />
        <Box sx={{ flexGrow: 1 ,margin : "10px"}}>
        <Outlet />
        </Box>
      </Box>
    </Box>
  );
}
