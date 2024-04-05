import React from "react";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import * as RiIcons from "react-icons/ri";
import { FaRegClock } from "react-icons/fa6";
import { GiTakeMyMoney } from "react-icons/gi";

export const SidebarData = [
	{
		title: "DashBoard" ,
		path: "/Dashboard",
		icon: <AiIcons.AiFillHome />,
		iconClosed: <RiIcons.RiArrowDownSFill />,
		iconOpened: <RiIcons.RiArrowUpSFill />,

		
	},
	{
		title: "Attendance",
		path: "/Attendance",
		icon: <IoIcons.IoIosPaper />,
		iconClosed: <RiIcons.RiArrowDownSFill />,
		iconOpened: <RiIcons.RiArrowUpSFill />,

		
	},
	{
		title: "Leave",
		path: "/leave",
		icon: <FaRegClock />,
	},
	
	{
		title: "Payroll",
		path: "/Salary",
		icon: <GiTakeMyMoney />,
	},
];
