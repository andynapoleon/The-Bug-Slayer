import Link from "next/link";
import Image from "next/image";
import { BsPlus, BsFillLightningFill, BsGearFill } from "react-icons/bs";
import { FaFire, FaPoo } from "react-icons/fa";
import { Divider } from "@mui/material";
import FlexBetween from "./components/FlexBetween";
import CustomTypography from "./components/CustomTypography";
import { Box, Typography, IconButton } from "@mui/material";

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
              <CustomTypography>THE BUG SLAYER</CustomTypography>
            </Box>
          </FlexBetween>
        </Box>
      </Box>
      <FlexBetween gap="0rem">
        <SideBarIcon icon={<FaFire size="28" />} />
        <p
          className="relative flex items-center justify-center 
    h-12 w-12 mx-auto"
        >
          Dashboard
        </p>
      </FlexBetween>
      <Divider />
      <FlexBetween>
        <SideBarIcon icon={<BsPlus size="32" />} />
        <p
          className="relative flex items-center justify-center 
    h-12 w-12 mt-2 mb-2 mx-auto"
        >
          Tickets
        </p>
      </FlexBetween>
      <Divider />
      <FlexBetween>
        <SideBarIcon icon={<BsGearFill size="22" />} />
        <p
          className="relative flex items-center justify-center 
    h-12 w-12 mt-2 mb-2 mx-auto"
        >
          Administration
        </p>
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
