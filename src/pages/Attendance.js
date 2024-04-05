// import React, { useState, useEffect } from "react";
// import "./Attendance.css";
// import Legend from "./Legend";
// import presentIcon from "../assests/Present.png";
// import absentIcon from "../assests/Absent.png";
// import dayoffIcon from "../assests/Dayoff.png";
// import holidayIcon from "../assests/Holiday.png";
// import LeaveIcon from "../assests/Leave.png";
// import overtimeIcon from "../assests/Overtime.png";
// import regularizedIcon from "../assests/Regularized.png";
// import permissionIcon from "../assests/Permission.png";

// export const Attendance = () => {
//   return (
//     <div className="container " style={{ height: "100%", width: "85%" }}>
//       <div className="d-flex justify-content-between">
//         <h1>Attendance</h1>
//         <hr />
//         <button className="me-2 btn btn-primary btn-sm">My Regularization</button>
//       </div>
//       <div
//   className="me-2 container"
//   style={{ width: "200px", display: "flex", flexDirection: "column", }}
// >
//   <h1>Legends</h1>
//   <ul
//     style={{
//       display: "flex",
//       flexDirection: "column",
//       listStyle: "none",
//       padding: 0,
//       margin: 0,
//     }}
//   >
//     <Legend icon={presentIcon} text="Present" style={{ marginBottom: "10px" }} />
//     <Legend icon={absentIcon} text="Absent" style={{ marginBottom: "10px" }} />
//     <Legend icon={holidayIcon} text="Holiday" style={{ marginBottom: "10px" }} />
//     <Legend icon={dayoffIcon} text="Dayoff" style={{ marginBottom: "10px" }} />
//     <Legend icon={overtimeIcon} text="Overtime" style={{ marginBottom: "10px" }} />
//     <Legend icon={LeaveIcon} text="Leave" style={{ marginBottom: "10px" }} />
//     <Legend icon={regularizedIcon} text="Regularized" style={{ marginBottom: "10px" }} />
//     <Legend icon={permissionIcon} text="Permission" style={{ marginBottom: "10px" }} />
//   </ul>
// </div>
// <div className="container">
// 	<h1>Attendance Details</h1>
// 	<hr />
// 	<table className="table">
// 		<thead>
//             <tr>
//                 <th scope="col">First In</th>
//                 <th scope="col">Last Out</th>
//                 <th scope="col">Total Work Hrs</th>
//                 <th scope="col">Break Hrs</th>
//                 <th scope="col">Actual Work Hrs</th>
//                 <th scope="col">Work Hrs in Shift time</th>
//                 <th scope="col">Shortfall Hrs</th>
//                 <th scope="col">Excess Hrs</th>

//             </tr>
// 			<tr>
// 				<th scope="row">-</th>
//                 <td>-</td>
//                 <td>-</td>
//                 <td>-</td>
//                 <td>-</td>
//                 <td>-</td>
//                 <td>-</td>
//                 <td>-</td>
//             </tr>

//         </thead>

// 	</table>
// 	<h1>Status Details</h1>
// 		<hr />
// 	<table className="table table-striped mt-4">
// 	<thead>
//             <tr>
//                 <th scope="col">Status</th>
//                 <th scope="col">Remarks</th>

//             </tr>
// 			</thead>

// 	</table>
// </div>
//     </div>
//   );
// };
import React, { useState, useEffect } from "react";
import "./Attendance.css";
import Legend from "./Legend";
import presentIcon from "../assests/Present.png";
import absentIcon from "../assests/Absent.png";
import dayoffIcon from "../assests/Dayoff.png";
import holidayIcon from "../assests/Holiday.png";
import LeaveIcon from "../assests/Leave.png";
import overtimeIcon from "../assests/Overtime.png";
import regularizedIcon from "../assests/Regularized.png";
import permissionIcon from "../assests/Permission.png";
import Calendar from "react-calendar";
import "./calender.css";
import Sidebar from "../components/Sidebar";
import axios from "axios";

export const Attendance = (props) => {
  const [attendance, setAttendance] = useState([]);
  // const [leaves, setLeaves] = useState([]);
  const [selectedDate, setSelectedDate] = useState(new Date());

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  useEffect(() => {
    fetchData();

  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get("http://172.16.6.223:8080/attendance");
      console.log("this is you response", response.data);
      
      setAttendance(response?.data);
      console.log("this is your attendance", response.data);
      
      console.log(attendance);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <>
      <Sidebar />
      <div className="container " style={{ height: "100%", width: "85%" }}>
        <div className="d-flex justify-content-between">
          <h1>Attendance</h1>
          <button className="me-2 btn btn-primary btn-sm">
            My Regularizations
          </button>
        </div>
        <hr />
        <div className="p-3 d-flex justify-content-around mt-3">
          <div className="px-3 pt-2 p-3 border shadow-sm w-25">
            <div className="text-center pb-1">
              <h6>Avg.Work Hrs</h6>
            </div>
            <hr />
            <div className="">
              <h6>Total: </h6>
            </div>
          </div>
          <div className="px-3 pt-2 p-3 border shadow-sm w-25">
            <div className="text-center pb-1">
              <h6>Actual Work Hrs </h6>
            </div>
            <hr />
            <div className="">
              <h6>Total: </h6>
            </div>
          </div>
          <div className="px-3 pt-2 p-3 border shadow-sm w-25">
            <div className="text-center pb-1">
              <h6>Penalty</h6>
            </div>
            <hr />
            <div className="">
              <h6>Total: </h6>
            </div>
          </div>
        </div>
        <div className="p-3 d-flex justify-content-around mt-3">
          <div
            className="me-2 container"
            style={{ display: "flex", flexDirection: "column" }}
          >
            <div className="attendance-page">
              <h1>Calender</h1>
              <div className="calendar-container">
                <Calendar onChange={handleDateChange} value={selectedDate} />
              </div>
            </div>
          </div>
          <div
            className="me-2 container"
            style={{ width: "200px", display: "flex", flexDirection: "column" }}
          >
            <h1 className="H1">Legends</h1>
            <ul
              style={{
                display: "flex",
                flexDirection: "column",
                listStyle: "none",
                padding: 0,
                margin: 0,
                width: "Hug (113px)",
                height: "Hug (304px)px",
                gap: "16px",
                opacity: "0px",
              }}
            >
              <Legend
                icon={presentIcon}
                text="Present"
                style={{ marginBottom: "10px" }}
              />
              <Legend
                icon={absentIcon}
                text="Absent"
                style={{ marginBottom: "10px" }}
              />
              <Legend
                icon={holidayIcon}
                text="Holiday"
                style={{ marginBottom: "10px" }}
              />
              <Legend
                icon={dayoffIcon}
                text="Dayoff"
                style={{ marginBottom: "10px" }}
              />
              <Legend
                icon={overtimeIcon}
                text="Overtime"
                style={{ marginBottom: "10px" }}
              />
              <Legend
                icon={LeaveIcon}
                text="Leave"
                style={{ marginBottom: "10px" }}
              />
              <Legend
                icon={regularizedIcon}
                text="Regularized"
                style={{ marginBottom: "10px" }}
              />
              <Legend
                icon={permissionIcon}
                text="Permission"
                style={{ marginBottom: "10px" }}
              />
            </ul>
          </div>
        </div>

        <div className="container">
          <h1 className="H1">Attendance Details</h1>
          <hr />
          <table
            className="table"
            style={{
              fontSize: "12px",
            }}
          >
            <thead>
              <tr className="table-row">
                <th scope="col">id</th>
                <th scope="col">Presentdate</th>
                <th scope="col">check_in</th>
                <th scope="col">check_out</th>
              </tr>
            </thead>
            <tbody>
              {attendance &&
                attendance.map((item, index) => (
                  <tr key={index}>
                    <td>{item.id}</td>
                    <td>{item.presentdate}</td>
                    <td>{item.check_in}</td>
                    <td>{item.check_out}</td>
                  </tr>
                ))}
            </tbody>
          </table>
          {/* <h1 className="H1">Status Details</h1>
		<hr />
	<table className="table" style={{
border: '1px solid #D0DDFC',
gap: '0px',
border: '1px 0px 0px 0px',
opacity: '0px'
}}>
	<thead>
            <tr  style={{ display: "flex", justifyContent: "space-between" ,paddingRight: "5em" }}>
                <th scope="col">Status</th>
                <th scope="col">Remarks</th>
            </tr>
			</thead>


	</table> */}
        </div>
      </div>
    </>
  );
};
