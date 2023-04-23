import React from "react";
import {
  CssBaseline,
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  AppBar,
  Box,
  Badge,
  Toolbar,
  Button,
  IconButton,
  TextField,
  InputAdornment,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import {
  Notifications,
  Search,
  NewspaperOutlined,
  MovieOutlined,
  MusicNoteOutlined,
  FlightOutlined,
  AccountCircleOutlined,
  SettingsOutlined,
  HelpOutlined,
  LogoutOutlined,
} from "@mui/icons-material";

type Props = {
  window?: () => Window;
};

const drawerData = [
  { icon: <NewspaperOutlined />, text: "News" },
  { icon: <MovieOutlined />, text: "Movies" },
  { icon: <MusicNoteOutlined />, text: "Music" },
  { icon: <FlightOutlined />, text: "Travel" },
  { icon: <AccountCircleOutlined />, text: "Account" },
  { icon: <SettingsOutlined />, text: "Settings" },
  { icon: <HelpOutlined />, text: "Help & Support" },
  { icon: <LogoutOutlined />, text: "Logout" },
];

const drawer = (
  <div>
    <Toolbar />
    <List>
      {drawerData.splice(0, 4).map((item, index) => (
        <ListItem key={index}>
          <ListItemIcon>{item.icon}</ListItemIcon>
          <ListItemText primary={item.text} />
        </ListItem>
      ))}
    </List>
    <Divider />
    <List>
      {drawerData.splice(0, 5).map((item, index) => (
        <ListItem key={index}>
          <ListItemIcon>{item.icon}</ListItemIcon>
          <ListItemText primary={item.text} />
        </ListItem>
      ))}
    </List>
  </div>
);

const Navbar = (props: Props) => {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const pages = ["Latest News", "Business", "Sports", "Politics", "Tech"];
  const { window } = props;
  const drawerWidth = 320;

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
          background: "white",
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
            }}
          >
            {pages.map((page) => (
              <Button
                key={page}
                href={`/${page}`}
                sx={{
                  my: 2,
                  mx: 1.5,
                  color: "grey",
                  display: "block",
                  fontSize: "1.2rem",
                }}
              >
                {page}
              </Button>
            ))}
            <Button
              sx={{
                my: 2,
                mx: 1.5,
                color: "grey",
                display: "block",
                fontSize: "1.2rem",
              }}
            >
              MORE
            </Button>
            <Box
              sx={{
                m: "auto",
              }}
            >
              <Button>
                <Badge
                  badgeContent={4}
                  max={99}
                  color="primary"
                  sx={{
                    my: "1rem",
                    mx: 1.5,
                    color: "grey",
                    display: "block",
                  }}
                >
                  <Notifications sx={{ fontSize: "1.7rem" }} />
                </Badge>
              </Button>
              <TextField
                id="outlined-basic"
                // label="Type to search..."
                placeholder="Type to search..."
                variant="outlined"
                sx={{
                  mt: "0.9rem",
                  ml: "1.5rem",
                  width: "30rem",
                  borderRadius: "8px",
                  backgroundColor: "#fdfdfd",
                }}
                InputProps={{
                  style: {
                    height: "3rem",
                    borderRadius: "6px",
                  },
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton>
                        <Search />
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
            </Box>
          </Box>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
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
      </Box>
    </Box>
  );
};

export default Navbar;
