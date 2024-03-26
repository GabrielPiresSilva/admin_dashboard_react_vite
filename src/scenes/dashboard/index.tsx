import {
  Box,
  Button,
  Grid,
  IconButton,
  Typography,
  useTheme,
} from "@mui/material";
import Header from "../../components/Header";
import { tokens } from "theme";
import { mockTransactions } from "data/mockData";

import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
import EmailIcon from "@mui/icons-material/Email";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import PointOfSaleIcon from "@mui/icons-material/PointOfSale";
import TrafficIcon from "@mui/icons-material/Traffic";

import LineChart from "components/charts/LineChart";
import BarChart from "components/charts/BarChart";
import GeographyChart from "components/charts/GeographyChart";
import StatBox from "components/StatBox";
import ProgressCircle from "components/ProgressCircle";

import styles from "./styles";

const Dashboard = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box m="20px">
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="Dashboard" subtitle="Welcome to yout dashboard" />
        <Box>
          <Button sx={styles().downloadReports}>
            <DownloadOutlinedIcon sx={{ mr: "10px" }} />
            Download Reports
          </Button>
        </Box>
      </Box>

      <Grid container spacing={2} mb="25px">
        <Grid item xs={12} sm={3}>
          <Box sx={styles().statBox}>
            <StatBox
              title="12,361"
              subtitle="Emails Sent"
              progress="0.75"
              increase="+14%"
              icon={<EmailIcon sx={styles().statBoxIcon} />}
            />
          </Box>
        </Grid>
        <Grid item xs={12} sm={3}>
          <Box sx={styles().statBox}>
            <StatBox
              title="431,225"
              subtitle="Sales Obtained"
              progress="0.50"
              increase="+21%"
              icon={<PointOfSaleIcon sx={styles().statBoxIcon} />}
            />
          </Box>
        </Grid>
        <Grid item xs={12} sm={3}>
          <Box sx={styles().statBox}>
            <StatBox
              title="32,441"
              subtitle="New Clients"
              progress="0.30"
              increase="+5%"
              icon={<PersonAddIcon sx={styles().statBoxIcon} />}
            />
          </Box>
        </Grid>
        <Grid item xs={12} sm={3}>
          <Box sx={styles().statBox}>
            <StatBox
              title="1,325,134"
              subtitle="Traffic Received"
              progress="0.80"
              increase="+43%"
              icon={<TrafficIcon sx={styles().statBoxIcon} />}
            />
          </Box>
        </Grid>
      </Grid>

      <Grid container spacing={2} mb="25px">
        <Grid item xs={12} sm={8}>
          <Box sx={styles().lineChartBox} p="30px">
            <Box display="flex" justifyContent="space-between" width="100%">
              <Box>
                <Typography
                  variant="h5"
                  fontWeight="600"
                  color={colors.grey[100]}
                >
                  Revenue Generated
                </Typography>
                <Typography
                  variant="h3"
                  fontWeight="bold"
                  color={colors.greenAccent[500]}
                >
                  $59,342.32
                </Typography>
              </Box>
              <Box>
                <IconButton>
                  <DownloadOutlinedIcon
                    sx={{ fontSize: "26px", color: colors.greenAccent[500] }}
                  />
                </IconButton>
              </Box>
            </Box>
            <Box height="200px" width="100%">
              <LineChart isDashboard={true} />
            </Box>
          </Box>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Box sx={styles().TransactionsBox} p="20px" overflow="auto">
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              borderBottom={`4px solid ${colors.primary[500]}`}
              color={colors.grey[100]}
              p="15px"
              width="100%"
            >
              <Typography
                color={colors.grey[100]}
                variant="h5"
                fontWeight="600"
                textAlign="center"
                width="100%"
              >
                Recent Transactions
              </Typography>
            </Box>
            {mockTransactions.map((transaction, i) => (
              <Box
                key={`${transaction.txId}-${i}`}
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                borderBottom={`4px solid ${colors.primary[500]}`}
                p="15px"
                width="100%"
              >
                <Box>
                  <Typography
                    color={colors.greenAccent[500]}
                    variant="h5"
                    fontWeight="600"
                  >
                    {transaction.txId}
                  </Typography>
                  <Typography color={colors.grey[100]}>
                    {transaction.user}
                  </Typography>
                </Box>
                <Box color={colors.grey[100]}>{transaction.date}</Box>
                <Box
                  bgcolor={colors.greenAccent[500]}
                  p="5px 10px"
                  borderRadius="4px"
                >
                  ${transaction.cost}
                </Box>
              </Box>
            ))}
          </Box>
        </Grid>
      </Grid>

      <Grid container spacing={2}>
        <Grid item xs={12} sm={4}>
          <Box sx={styles().campaignBox} p="30px">
            <Typography variant="h6" fontWeight="600">
              Campaign
            </Typography>
            <Box
              display="flex"
              flexDirection="column"
              alignItems="center"
              mt="25px"
              height="200px"
            >
              <ProgressCircle size="125" />
              <Typography
                variant="h5"
                color={colors.greenAccent[500]}
                sx={{ mt: "15px" }}
              >
                $48,352 revenue generated
              </Typography>
              <Typography>
                Includes extra misc expenditures and costs
              </Typography>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Box sx={styles().campaignBox} p="30px 0">
            <Typography variant="h6" fontWeight="600">
              Sales Quantity
            </Typography>
            <Box
              display="flex"
              flexDirection="column"
              alignItems="center"
              mt="25px"
              width="100%"
              height="200px"
            >
              <BarChart isDashbard={true} />
            </Box>
          </Box>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Box sx={styles().campaignBox} p="30px 0">
            <Typography variant="h6" fontWeight="600">
              Geography Based Traffic
            </Typography>
            <Box
              display="flex"
              flexDirection="column"
              alignItems="center"
              mt="25px"
              width="100%"
              height="200px"
            >
              <GeographyChart isDashboard />
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Dashboard;
