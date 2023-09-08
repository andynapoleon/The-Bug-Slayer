import Link from "next/link";
import Image from "next/image";
import { BsPlus, BsFillLightningFill, BsGearFill } from "react-icons/bs";
import { FaFire, FaPoo } from "react-icons/fa";
import { Divider } from "@mui/material";
import FlexBetween from "./components/FlexBetween";
import CustomTypography from "./components/CustomTypography";
import { Box, Typography, IconButton } from "@mui/material";
import DashboardIcon from "@mui/icons-material/Dashboard";
import BugReportIcon from "@mui/icons-material/BugReport";
import LogoutIcon from "@mui/icons-material/Logout";

export default function NavMenu() {
  return (
    <div
      className="fixed top-0 left-0 h-screen w-64 flex flex-col
                  bg-white dark:bg-gray-900 shadow-lg"
    >
      <Box width="100%">
        <Box m="1.5rem 2rem 2rem 3rem">
          <FlexBetween>
            <Box display="flex" alignItems="center" gap="0.5rem">
              <CustomTypography>🐞 THE BUG SLAYER</CustomTypography>
            </Box>
          </FlexBetween>
        </Box>
      </Box>
      <FlexBetween gap="0rem">
        <SideBarIcon icon={<DashboardIcon />} />
        <p className="mx-auto">Dashboard</p>
      </FlexBetween>
      <Divider />
      <FlexBetween gap="0rem">
        <SideBarIcon icon={<BugReportIcon />} />
        <p className="mx-auto">Tickets</p>
      </FlexBetween>
      <Divider />
      <FlexBetween gap="0rem">
        <SideBarIcon icon={<BsGearFill size="22" />} />
        <p className="mx-auto">Administration</p>
      </FlexBetween>
      <FlexBetween gap="0rem">
        {/* <SideBarIcon icon={<LogoutIcon />} /> */}
        <p className="mx-auto mt-10 text-green-500	">Log Out</p>
      </FlexBetween>
    </div>
  );
}

const SideBarIcon = ({ icon, text = "tooltip 💡" }: any) => (
  <div className="sidebar-icon group">
    {icon}
    <span className="sidebar-tooltip">{text}</span>
  </div>
);
