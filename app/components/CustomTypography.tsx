"use client";

import { Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

const CustomTypography = styled(Typography)({
  size: "large",
  fontWeight: "bold",
}) as typeof Typography;

export default CustomTypography;
