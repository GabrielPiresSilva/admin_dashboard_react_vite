import { useTheme } from "@mui/material";
import { tokens } from "theme";

const DashboardStyles = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const styles = {
    downloadReports: {
      backgroundColor: colors.blueAccent[700],
      color: colors.grey[100],
      fontSize: "14px",
      fontWeight: "bold",
      padding: "10px 20px",
    },
    statBox: {
      backgroundColor: colors.primary[400],
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    statBoxIcon: {
      color: colors.greenAccent[600],
      fontSize: "26px",
    },
    lineChartBox: {
      backgroundColor: colors.primary[400],
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexDirection: "column",
    },
    TransactionsBox: {
      backgroundColor: colors.primary[400],
      display: "flex",
      alignItems: "center",
      flexDirection: "column",
      maxHeight: "309px",
    },
    campaignBox: {
      backgroundColor: colors.primary[400],
      display: "flex",
      alignItems: "center",
      flexDirection: "column",
      maxHeight: "309px",
    },
  };

  return styles;
};

export default DashboardStyles;
