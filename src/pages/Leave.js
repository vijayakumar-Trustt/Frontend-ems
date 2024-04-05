import React, { useEffect, useState } from 'react';

import './Leave.css'
import axios from 'axios';
import { FcInfo } from "react-icons/fc";
import Sidebar from '../components/Sidebar';
import { Link } from 'react-router-dom';

const Leave = (props) => {
  const [employee, setEmployee]  = useState([]);
  const [leaveType, setLeaveType] = useState('');
  const [fromDate, setFromDate] = useState('');
  const [toDate, setToDate] = useState('');
  const [applyingTo, setApplyingTo] = useState('');
  const [reason,setReason] = useState('');
  const [ employeeID, setEmployeeID] = useState('');

  useEffect(() => {
    fetchData();
  },[]);

  const fetchData = async() => {
    
    try{
      const res = await axios.get(`http://172.16.6.223:8080/Leave_details`);
        console.log("response",res.data);
        setEmployee(res.data);
        
    }catch(err){
      console.log("error",err);
        
    }

  
  };


  const handleSumbit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`http://172.16.6.223:8080/addLeave/${employeeID}`, {
        leave_type: leaveType,
        from_date: fromDate,
        to_date: toDate,
        applying_to: applyingTo,
        reason,
      });
      console.log("response", res);
      alert("Leave Applied Successfully");
      setEmployeeID('');
      setApplyingTo('');
      setFromDate('');
      setToDate('');
      setLeaveType('');
      setReason('');
      fetchData(); 
    } catch (err) {
      console.log("error", err);
    }
  }

  

  const handleDateSelect = (selectedDate) => {
    if (leaveType === 'From Date') {
      setFromDate(selectedDate);
    } else {
      setToDate(selectedDate);
    }
  };

  

  return (
    <>
    <Sidebar />
	<div className='container' style={{ }}>
    
    <div className=''>
      <div className='d-flex justify-content-between'>
      <h1>Apply Leave</h1>
      <div>
      <button className='me-2 btn btn-outline border border-primary'>Cancel</button>
        <button className='btn btn-primary' onClick={handleSumbit}>Submit</button>
      </div>
      </div>
      <hr />
      <FcInfo /><p>Leave is earned by an employee and granted by the employer to take time off work. The employee is free to avail this leave in accordance with the company policy.</p>
      <form className='form'>
        <label>Employee ID</label>
        <input type="text" name="employeeId" 
        id="employeeId" onChange={(e) => setEmployeeID(e.target.value)}></input>
        <br/>
        <label htmlFor="leaveType">Leave Type:</label>
        <select name="leaveType" id="leaveType" onChange={(e) => setLeaveType(e.target.value)}>
          <option value="">Select type</option>
          <option value="maternity">Maternity Leave</option>
          <option value="sick">Sick Leave</option>
          <option value="earned">Earned Leave</option>
          <option value="compensatory">Compensatory Off</option>
          <option value="workFromHome">Work From Home</option>
        </select>
        <br />
        
        <label htmlFor="fromDate">From Date:</label>
        <input type="date" name="fromDate" id="fromDate" onChange={(e) => setFromDate(e.target.value)} />
        
        <label htmlFor="toDate">To Date:</label>
        <input type="date" name="toDate" id="toDate" onChange={(e) => setToDate(e.target.value)} />
        
        <label htmlFor="applyingTo">Applying To:</label>
        <input name="applyingTo" id="applyingTo" onChange={(e) => setApplyingTo(e.target.value)}>
        </input>
        <label htmlFor="reason">Reason</label>
        <input name="reason" id="reason" onChange={(e) => setReason(e.target.value)}></input>
        <br />
        
        <hr />
      </form>
    </div>
	</div>
  <div className="container">
			<table className="table">
				<thead>
					<tr>
                        <th scope="col">Id</th>
                        <th scope="col">Applying_to</th>
                        <th scope="col">From_date</th>
                        <th scope="col">To_date</th>
                        <th scope="col">Reason</th>
                        <th scope="col">Type</th>
                        <th scope="col">Emp_id</th>
                    </tr>
				</thead>
				<tbody>
				{employee.map((emp) => (
              <tr key={emp.emp_id}>
                <td>
                  {emp.leave_id}
                </td>
                <td >
                  {emp.applying_to}
                </td>
				<td>
					{emp.from_date}
				</td>
				<td>
					{emp.to_date}
                </td>
				<td>
					{emp.reason}
				</td>
        <td>
          {emp.leave_type}
        </td>
                <td >
                  {emp.employee.emp_id}
                </td>
              </tr>
            ))}
                </tbody>
				
			</table>
			
		</div>
  </>
  );
};

export default Leave;
