import { useEffect, useState } from "react";
import { Box, IconButton, Typography, useTheme, Icon } from "@mui/material";
import { Link, useLocation } from "react-router-dom";

import { Sidebar, Menu, MenuItem } from "react-pro-sidebar";
import { tokens } from "../../theme";

import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";

import { routes } from "../../routes";

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
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [selected, setSelected] = useState("Dashboard");

  useEffect(
    () =>
      setSelected(
        routes.find((v) => v.path === local.pathname)?.name ?? "Dashboard"
      ),
    []
  );

  return (
    <Box
      sx={{
        "& .ps-sidebar-root": {
          background: `${colors.primary[400]} !important`,
          height: "100%",
          borderRightWidth: 0,
        },
        "& .ps-sidebar-container": {
          background: `transparent !important`,
        },
        "& .ps-menu-button": {
          padding: `5px 35px 5px 20px !important`,
        },
        "& .ps-menu-button:hover": {
          color: `#868dfb !important`,
          background: `transparent !important`,
        },
        "& .ps-menuitem-root .ps-active": {
          color: `#6870fa !important`,
        },
        "& .css-aat60w-MuiTypography-root": {
          color: "inherit",
        },
      }}
      display="flex"
      height="100%"
    >
      <Sidebar collapsed={isCollapsed}>
        <Menu>
          {/* LOGO AND MENU ICON */}
          <MenuItem
            onClick={() => setIsCollapsed(!isCollapsed)}
            icon={isCollapsed ? <MenuOutlinedIcon /> : undefined}
            style={{
              margin: "10px 0 20px 0",
              color: colors.grey[100],
            }}
          >
            {!isCollapsed && (
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                ml="15px"
              >
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
                  width="100px"
                  height="100px"
                  src="../../assets/user-default.svg"
                  style={{ cursor: "pointer", borderRadius: "50%" }}
                />
              </Box>
              <Box textAlign="center">
                <Typography
                  variant="h3"
                  color={colors.grey[100]}
                  fontWeight="bold"
                  sx={{ m: "10px 0 0 0" }}
                >
                  User name
                </Typography>
                <Typography variant="h6" color={colors.greenAccent[500]}>
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
                    color={colors.grey[300]}
                    sx={{ m: "15px 0 5px 20px" }}
                  >
                    {route.name}
                  </Typography>
                );

              return null;
            })}
          </Box>
        </Menu>
      </Sidebar>
    </Box>
  );
};

export default SidebarMenu;
