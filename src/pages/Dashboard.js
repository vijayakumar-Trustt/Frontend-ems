// import React from "react";

// export const DashBoard = () => {
// 	return (

// 		<div >
// 			<div className="row">
// 				<div className="col-lg-4">
// 				<div className="p-3 d-flex justify-content-around mt-3">

// 				<div className="px-3 pt-2 p-3 ms-5 border shadow-sm w-50 ">
// 					<div className="text-center pb-1">
// 						<h4>Today</h4>
// 					</div>
// 					<hr />
// 					<div className="">
// 						<button className="btn btn-primary">My Attendance</button>
// 					</div>
// 				</div>
// 				</div>
// 				</div>
// 				<div className="col-lg-8">
// 				<div className="p-3 d-flex justify-content-around mt-3">

// 			<div className="px-3 pt-2 p-3 border shadow-sm w-25">
// 				<div className="text-center pb-1">
// 					<h4>Total Employees</h4>
// 				</div>
// 				<hr />
// 				<div className="">
// 					<h5>Total: </h5>
// 				</div>
// 			</div>
// 			<div className="px-3 pt-2 p-3 border shadow-sm w-25">
// 				<div className="text-center pb-1">
// 					<h4>Employee</h4>
// 				</div>
// 				<hr />
// 				<div className="">
// 					<h5>Total: </h5>
// 				</div>
// 			</div>
// 			<div className="px-3 pt-2 p-3 border shadow-sm w-25">
// 				<div className="text-center pb-1">
// 					<h4>Salary</h4>
// 				</div>
// 				<hr />
// 				<div className="">
// 					<h5>Total: </h5>
// 				</div>

// 			</div>
// 		</div>
// 				</div>
// 			</div>
// 		</div>

// 	);
// };

// import React from 'react';
// import './Dashboard.css';

// export const DashBoard = () => {
//   return (
// 	<>

// 	<div className="chart">

// 	</div>
// 	</>

//   );
// };
import {React, useState,useEffect} from "react";
import { Link } from "react-router-dom";
import "./Dashboard.css";
import Sidebar from "../components/Sidebar";
import axios from "axios";

export const DashBoard = () => {
  const [attendance,setAttendance] = useState([]);
    
  useEffect(( )=>{
    fetchData();
  },[])

  const fetchData = async () => {
    try{
    const response = await axios.get("http://172.16.6.223:8080/attendance");
    setAttendance(response.data);
    }catch(error){
      console.log(error);
    }
  }
  return (
    <>
    <Sidebar/>
      <div className="row new-dashboard">
      <div className="col-lg-4">
      <div className="dashboard-section-1">
            <p>Today</p>
            <p>Date: </p>
            <Link
              to="/attendance"
              style={{
                backgroundColor: "#1890ff",
                color: "white",
                padding: "8px 16px",
                borderRadius: "4px",
                textDecoration: "none",
              }}
            >
              View Attendance
            </Link>
          </div>
        </div>
        <div className="dashboard col-lg-8 system">
          <div className="dashboard-section">
            <h2>Casual Leave</h2>
            <p>Remaining-</p>
            <p>Used-</p>
            <p>Total-</p>
          </div>

          <div className="dashboard-section">
            <h2>Sick Leave</h2>
            <p>Remaining-</p>
            <p>Used-</p>
            <p>Total-</p>
          </div>

          <div className="dashboard-section">
            <h2>
              Earned Leave
            </h2>
            <p>Remaining-</p>
            <p>Used-</p>
            <p>Total-</p>
          </div>

          <div className="dashboard-section">
            <h2>Work From Home</h2>
            <p>Remaining-</p>
            <p>Used-</p>
            <p>Total-</p>
          </div>

          <div className="dashboard-section">
            <h2>Unpaid Leave</h2>
            <p>Remaining-</p>
            <p>Used-</p>
            <p>Total-</p>
          </div>

          <div className="dashboard-section">
            <h2>Half Leave</h2>
            <p>Remaining-</p>
            <p>Used-</p>
            <p>Total-</p>
          </div>
        </div>
        
      </div>

      <div
        style={{
          padding: "24px",
          backgroundColor: "#f0f2f5",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "16px",
          }}
        >
          <h1 style={{ margin: 0 }}>Attendance Overview</h1>
          <div>
            <input
              style={{
                marginRight: "8px",
                padding: "8px",
                borderRadius: "4px",
                border: "1px solid #d9d9d9",
              }}
              type="text"
              placeholder="Quick Search..."
            />
            <input
              style={{
                marginRight: "8px",
                padding: "8px",
                borderRadius: "4px",
                border: "1px solid #d9d9d9",
              }}
              type="date"
            />
            <Link
              to="/attendance"
              style={{
                backgroundColor: "#1890ff",
                color: "white",
                padding: "8px 16px",
                borderRadius: "4px",
                textDecoration: "none",
              }}
            >
              View Attendance
            </Link>
          </div>
        </div>
        <table
          style={{
            width: "100%",
            borderCollapse: "collapse",
            backgroundColor: "white",
            borderRadius: "8px",
            boxShadow: "0 2px 3px rgba(0, 0, 0, 0.1)",
          }}
        >
          <thead
            style={{
              backgroundColor: "#fafafa",
            }}
          >
            <tr>
              <th
                style={{ padding: "16px", borderBottom: "1px solid #f0f0f0" }}
              >
                Date
              </th>
              <th
                style={{ padding: "16px", borderBottom: "1px solid #f0f0f0" }}
              >
                Day
              </th>
              <th
                style={{ padding: "16px", borderBottom: "1px solid #f0f0f0" }}
              >
                Check-in
              </th>
              <th
                style={{ padding: "16px", borderBottom: "1px solid #f0f0f0" }}
              >
                Check-out
              </th>
              
          
            </tr>
          </thead>
          <tbody>
            {attendance.map((item,index) => (
              <tr key={index}>
                <td
                  style={{ padding: "16px", borderBottom: "1px solid #f0f0f0" }}
                >
                  {item.id}
                </td>
                <td
                  style={{ padding: "16px", borderBottom: "1px solid #f0f0f0" }}
                >
                  {item.presentdate}
                </td>
                <td
                  style={{ padding: "16px", borderBottom: "1px solid #f0f0f0" }}
                >
                  {item.check_in}
                </td>
                <td
                  style={{ padding: "16px", borderBottom: "1px solid #f0f0f0" }}
                >
                  {item.check_out}
                </td>
               
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};
