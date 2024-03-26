import Dashboard from "./scenes/dashboard";
import Team from "./scenes/team";
import Invoices from "./scenes/invoices";
import Contacts from "./scenes/contacts";
import Bar from "./scenes/bar";
import CreateUser from "./scenes/form";
import Line from "./scenes/line";
import Pie from "./scenes/pie";
import FAQ from "./scenes/faq";
import Geography from "./scenes/geography";
import Calendar from "./scenes/calendar";

// icons
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import HelpOutlinedIcon from "@mui/icons-material/HelpOutlined";
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import PieChartOutlineOutlinedIcon from "@mui/icons-material/PieChartOutlineOutlined";
import TimeLineOutlinedIcon from "@mui/icons-material/TimeLineOutlined";
import MapOutlinedIcon from "@mui/icons-material/MapOutlined";

export interface RoutesProps {
  name: string;
  key: string;
  path?: string;
  component?: React.ReactElement;
  title?: string;
  icon?: React.ReactElement;
  type?: string;
}

export const routes: RoutesProps[] = [
  {
    type: "menu",
    name: "Dashboard",
    key: "dashboard",
    path: "/",
    component: <Dashboard />,
    icon: <HomeOutlinedIcon />,
  },
  {
    type: "title",
    name: "Data",
    key: "title-data",
  },
  {
    type: "menu",
    name: "Manage Team",
    key: "team",
    path: "/team",
    component: <Team />,
    icon: <PeopleOutlinedIcon />,
  },
  {
    type: "menu",
    name: "Contacts Information",
    key: "contacts",
    path: "/contacts",
    component: <Contacts />,
    icon: <ContactsOutlinedIcon />,
  },
  {
    type: "menu",
    name: "Invoices balances",
    key: "invoices",
    path: "/invoices",
    component: <Invoices />,
    icon: <ReceiptOutlinedIcon />,
  },
  {
    type: "title",
    name: "Pages",
    key: "title-pages",
  },
  {
    type: "menu",
    name: "Profile Form",
    key: "form",
    path: "/form",
    component: <CreateUser />,
    icon: <PersonOutlinedIcon />,
  },
  {
    type: "menu",
    name: "Calendar",
    key: "calendar",
    path: "/calendar",
    component: <Calendar />,
    icon: <CalendarTodayOutlinedIcon />,
  },
  {
    type: "menu",
    name: "FAQ Page",
    key: "faq",
    path: "/faq",
    component: <FAQ />,
    icon: <HelpOutlinedIcon />,
  },
  {
    type: "title",
    name: "Charts",
    key: "title-charts",
  },
  {
    type: "menu",
    name: "Bar Chart",
    key: "bar",
    path: "/bar",
    component: <Bar />,
    icon: <BarChartOutlinedIcon />,
  },
  {
    type: "menu",
    name: "Pie Chart",
    key: "pie",
    path: "/pie",
    component: <Pie />,
    icon: <PieChartOutlineOutlinedIcon />,
  },
  {
    type: "menu",
    name: "Line Chart",
    key: "line",
    path: "/line",
    component: <Line />,
    icon: <TimeLineOutlinedIcon />,
  },
  {
    type: "menu",
    name: "Geography Chart",
    key: "geography",
    path: "/geography",
    component: <Geography />,
    icon: <MapOutlinedIcon />,
  },
];
