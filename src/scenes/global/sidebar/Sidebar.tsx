import { useEffect, useState } from "react";
import {
  Box,
  IconButton,
  Typography,
  useTheme,
  Icon,
  useMediaQuery,
} from "@mui/material";
import { Link, useLocation } from "react-router-dom";

import { Sidebar, Menu, MenuItem } from "react-pro-sidebar";
import { tokens } from "theme";

import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import userDefault from "../../../../public/assets/default-user.png";
import { routes } from "routes";

import styles from "./styles";
import { useCustomMaterialTheme } from "contexts/theme-context";

interface ItemProps {
  title: string;
  to: string;
  icon: React.ReactElement;
  selected: string;
  setSelected: React.Dispatch<React.SetStateAction<string>>;
}

const Item: React.FC<ItemProps> = ({
  title,
  to,
  icon,
  selected,
  setSelected,
}) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <MenuItem
      active={selected === title}
      style={{
        color: colors.grey[100],
      }}
      onClick={() => setSelected(title)}
      icon={icon}
      component={<Link to={to} />}
    >
      <Typography>{title}</Typography>
    </MenuItem>
  );
};

const SidebarMenu = () => {
  const local = useLocation();
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [selected, setSelected] = useState("Dashboard");

  const [isCollapsed, setIsCollapsed] = useState(false);

  const { menuToggleMode, toggleMenu } = useCustomMaterialTheme();
  const isNonMobile: boolean = useMediaQuery("(min-width:600px)");

  useEffect(() => {
    setSelected(
      routes.find((v) => v.path === local.pathname)?.name ?? "Dashboard"
    );
  }, []);

  useEffect(() => {
    console.log(toggleMenu);
  }, [toggleMenu]);

  return (
    <Box sx={styles().root}>
      {isNonMobile ? (
        <Sidebar collapsed={isCollapsed}>
          <Menu>
            {/* LOGO AND MENU ICON */}
            <MenuItem
              onClick={() => setIsCollapsed(!isCollapsed)}
              icon={isCollapsed ? <MenuOutlinedIcon /> : undefined}
              style={styles().menuTitleContainer}
            >
              {!isCollapsed && (
                <Box style={styles().menuTitleBox}>
                  <Typography variant="h3" color={colors.grey[100]}>
                    ADMINS
                  </Typography>
                  <IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
                    <MenuOutlinedIcon />
                  </IconButton>
                </Box>
              )}
            </MenuItem>

            {!isCollapsed && (
              <Box mb="25px">
                <Box display="flex" justifyContent="center" alignItems="center">
                  <img
                    alt="profile-user"
                    style={styles().imageProfile}
                    src={userDefault}
                  />
                </Box>
                <Box textAlign="center">
                  <Typography variant="h3" style={styles().imageProfileName}>
                    User name
                  </Typography>
                  <Typography variant="h6" style={styles().imageProfileRole}>
                    User role
                  </Typography>
                </Box>
              </Box>
            )}

            {/* menu items */}
            <Box paddingLeft={isCollapsed ? undefined : "10px"}>
              {routes.map((route) => {
                if (route.type === "menu" && route.path)
                  return (
                    <Item
                      key={route.key}
                      title={route.name}
                      to={route.path}
                      icon={
                        route.icon ?? (
                          <Icon fontSize="large">{route?.name?.charAt(0)}</Icon>
                        )
                      }
                      selected={selected}
                      setSelected={setSelected}
                    />
                  );

                if (route.type === "title")
                  return (
                    <Typography
                      key={route.key}
                      variant="h6"
                      style={styles().routeItemTitle}
                    >
                      {route.name}
                    </Typography>
                  );

                return null;
              })}
            </Box>
          </Menu>
        </Sidebar>
      ) : (
        <Sidebar
          onBackdropClick={() => menuToggleMode()}
          toggled={toggleMenu}
          breakPoint="always"
        >
          <Menu>
            {/* LOGO AND MENU ICON */}
            <MenuItem
              onClick={() => menuToggleMode()}
              icon={<MenuOutlinedIcon />}
              style={styles().menuTitleContainer}
            >
              <Box style={styles().menuTitleBox}>
                <Typography variant="h3" color={colors.grey[100]}>
                  ADMINS
                </Typography>
              </Box>
            </MenuItem>

            <Box mb="25px">
              <Box display="flex" justifyContent="center" alignItems="center">
                <img
                  alt="profile-user"
                  style={styles().imageProfile}
                  src={userDefault}
                />
              </Box>
              <Box textAlign="center">
                <Typography variant="h3" style={styles().imageProfileName}>
                  User name
                </Typography>
                <Typography variant="h6" style={styles().imageProfileRole}>
                  User role
                </Typography>
              </Box>
            </Box>

            {/* menu items */}
            <Box>
              {routes.map((route) => {
                if (route.type === "menu" && route.path)
                  return (
                    <Item
                      key={route.key}
                      title={route.name}
                      to={route.path}
                      icon={
                        route.icon ?? (
                          <Icon fontSize="large">{route?.name?.charAt(0)}</Icon>
                        )
                      }
                      selected={selected}
                      setSelected={setSelected}
                    />
                  );

                if (route.type === "title")
                  return (
                    <Typography
                      key={route.key}
                      variant="h6"
                      style={styles().routeItemTitle}
                    >
                      {route.name}
                    </Typography>
                  );

                return null;
              })}
            </Box>
          </Menu>
        </Sidebar>
      )}
    </Box>
  );
};

export default SidebarMenu;
