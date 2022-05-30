import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import StoreIcon from "@mui/icons-material/Store";
import InsertChartIcon from "@mui/icons-material/InsertChart";
import SettingsApplicationsIcon from "@mui/icons-material/SettingsApplications";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import SettingsSystemDaydreamOutlinedIcon from "@mui/icons-material/SettingsSystemDaydreamOutlined";
import PsychologyOutlinedIcon from "@mui/icons-material/PsychologyOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import { Link } from "react-router-dom";
import IconSvg from "../svg/icon.svg";
import { useLocation } from "react-router-dom";

const Sidebar = () => {
  const location = useLocation();
  console.log(location.pathname);
  return (
    <div
      style={{ backgroundColor: "#242626" }}
      className="text-white text-sm cursor-pointer md:block hidden"
    >
      <div className="h-12 flex items-center justify-center">
        <img src={IconSvg} alt="BookMyShow" />
      </div>
      <div>
        <ul>
          <p className="pr-10 pl-5 py-4">MAIN</p>
          <Link to="/" style={{ textDecoration: "none" }}>
            <li
              className={[
                "flex",
                "items-center",
                "justify-start",
                "py-2",
                "pr-10",
                "pl-5",
                "hover:text-cyan-500",
                location.pathname === "/" ? "active" : "",
              ].join(" ")}
            >
              <DashboardIcon className="icon mr-3" />
              <span>Dashboard</span>
            </li>
          </Link>
          <p className="pr-10 pl-5 py-4">LISTS</p>
          <Link to="/users" style={{ textDecoration: "none" }}>
            <li
              className={[
                "flex",
                "items-center",
                "justify-start",
                "py-2",
                "pr-10",
                "pl-5",
                "mb-4",
                "hover:text-cyan-500",
                location.pathname === "/users" ? "active" : "",
              ].join(" ")}
            >
              <PersonOutlineIcon className="icon mr-3" />
              <span>Users</span>
            </li>
          </Link>
          {/* </Link> */}
          {/* <Link to="/products" style={{ textDecoration: "none" }}> */}
          <li className="flex items-center justify-start pr-10 pl-5 mb-4 hover:text-cyan-500">
            <StoreIcon className="icon mr-3" />
            <span>Products</span>
          </li>
          {/* </Link> */}
          <li className="flex items-center justify-start pr-10 pl-5 mb-4 hover:text-cyan-500">
            <CreditCardIcon className="icon mr-3" />
            <span>Bookings</span>
          </li>
          <li className="flex items-center justify-start pr-10 pl-5 hover:text-cyan-500">
            <LocalShippingIcon className="icon mr-3" />
            <span>Locations</span>
          </li>
          <p className="pr-10 pl-5 py-4">USEFUL</p>
          <li className="flex items-center justify-start pr-10 pl-5 mb-4 hover:text-cyan-500">
            <InsertChartIcon className="icon mr-3" />
            <span>Stats</span>
          </li>
          <li className="flex items-center justify-start pr-10 pl-5 hover:text-cyan-500">
            <NotificationsNoneIcon className="icon mr-3 " />
            <span>Notifications</span>
          </li>
          <p className="pr-10 pl-5 py-4">SERVICE</p>
          <li className="flex items-center justify-start pr-10 pl-5 mb-4 hover:text-cyan-500">
            <SettingsSystemDaydreamOutlinedIcon className="icon mr-3" />
            <span>System</span>
          </li>
          <li className="flex items-center justify-start pr-10 pl-5 mb-4 hover:text-cyan-500">
            <PsychologyOutlinedIcon className="icon mr-3 " />
            <span>Logs</span>
          </li>
          <li className="flex items-center justify-start pr-10 pl-5 hover:text-cyan-500">
            <SettingsApplicationsIcon className="icon mr-3" />
            <span>Settings</span>
          </li>
          <p className="pr-10 pl-5 py-4">USER</p>
          <li className="flex items-center justify-start pr-10 pl-5 mb-4 hover:text-cyan-500">
            <AccountCircleOutlinedIcon className="icon mr-3" />
            <span>Profile</span>
          </li>
          <li className="flex items-center justify-start pr-10 pl-5 mb-4 hover:text-cyan-500">
            <ExitToAppIcon className="icon mr-3" />
            <span>Logout</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
