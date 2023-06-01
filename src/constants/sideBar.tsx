import React from 'react';
import MapOutlinedIcon from "@mui/icons-material/MapOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
import PieChartOutlineOutlinedIcon from "@mui/icons-material/PieChartOutlineOutlined";

export const SIDE_BAR_PAGES = [
  {
    title: "Contacts Information",
    path: "/s7/contacts",
    icon: <ContactsOutlinedIcon />
  },
  {
    title: "Profile Form",
    path: "/s7/form",
    icon: <PersonOutlinedIcon />
  },
  {
    title: "Bar Chart",
    path: "/s7/bar",
    icon: <BarChartOutlinedIcon />
  },
  {
    title: "Pie Chart",
    path: "/s7/pie",
    icon: <PieChartOutlineOutlinedIcon />
  },
  {
    title: "Geography Chart",
    path: "/s7/geography",
    icon: <MapOutlinedIcon />
  },
];
