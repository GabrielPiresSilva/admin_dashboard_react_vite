import { useTheme } from "@mui/material";
import { tokens } from "theme";

const SidebarStyles = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const styles = {
    root: {
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
    },
    menuTitleContainer: {
      margin: "10px 0 20px 0",
      color: colors.grey[100],
    },
    menuTitleBox: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      marginleft: "15px",
    },
    imageProfile: {
      cursor: "pointer",
      borderRadius: "50%",
      width: "100px",
      height: "100px",
    },
    imageProfileName: {
      color: colors.grey[100],
      fontWeight: "bold",
      margin: "10px 0 0 0",
    },
    imageProfileRole: {
      color: colors.greenAccent[400],
    },
    routeItemTitle: {
      color: colors.grey[300],
      margin: "15px 0 5px 20px",
    },
  };

  return styles;
};

export default SidebarStyles;
