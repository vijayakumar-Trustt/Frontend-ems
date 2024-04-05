
import {React , useEffect, useState} from "react";
import { Link } from "react-router-dom";
import "./Dashboard.css";
import AdminSidebar  from "./AdminSidebar";

import { Button } from "react-bootstrap";

import axios from "axios";
const Admin = (props) => {
  const [employee, setEmployee] = useState([]);
  const [editFormVisible, setEditFormVisible] = useState(false);
  const [selectedEmployee, setSelectedEmployee] = useState(null);
  useEffect(()=>{
    fetchData();

  },[]);

  const fetchData = async () => {
    try{
    const response = await axios.get("http://172.16.6.223:8080/employees");
    console.log("response",response.data);
    setEmployee(response.data);
    }catch(error){
      console.log(error);
    }
  };
  
  const handleDelete = async (emp_id) => {
    try {
      console.log("Deleted Success");
      const response = await axios.delete(`http://172.16.6.223:8080/employees/${emp_id}`);
      console.log("Delete response", response);
      
      setEmployee(employee.filter(emp => emp.emp_id !== emp_id));
    } catch (error) {
      console.log(error);
    }
  };
  const handleEdit = (employeeId) => {
    const selectedEmployee = employee.find(emp => emp.emp_id === employeeId);
    setSelectedEmployee(selectedEmployee);
    setEditFormVisible(true);
  };
  return (
    <>
    <AdminSidebar/>
      <div className="row new-dashboard">
      <div className="col-lg-3">
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
            <h1>452</h1>
            <h2>Total Employees</h2>
            <p>2 new employees added</p>
            
          </div>

          <div className="dashboard-section">
            <h1>360</h1>
            <h2>On Time</h2>
            <p>-10% Less than yesterday</p>
            
          </div>

          <div className="dashboard-section">
            <h1>30</h1>
            <h2>Absent</h2>
            <p>
              +3% Increase than yesterday
            </p>
            
          </div>

          <div className="dashboard-section">
            <h1>62</h1>
            <h2>Late Arrival</h2>
            <p>+3% Increase than yesterday</p>
            
          </div>

          <div className="dashboard-section">
            <h1>6</h1>
            <h2>Early Depatures</h2>
            <p>-10% Less than yesterday</p>
          </div>

          <div className="dashboard-section">
            <h1>42</h1>
            <h2>Time-off</h2>
            <p>2% Increase than yesterday</p>
            
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
          <h1 style={{ margin: 0 }}>Employee Overview</h1>
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
            <Link to={'/AddEmployee'}
              style={{
                backgroundColor: "#1890ff",
                color: "white",
                padding: "8px 16px",
                borderRadius: "4px",
                textDecoration: "none",
              }}>
            
              Add employee
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
                ID
              </th>
              <th
                style={{ padding: "16px", borderBottom: "1px solid #f0f0f0" }}
              >
                Employee
              </th>
              <th
                style={{ padding: "16px", borderBottom: "1px solid #f0f0f0" }}
              >
                Role
              </th>
              <th
                style={{ padding: "16px", borderBottom: "1px solid #f0f0f0" }}
              >
                Department
              </th>
              <th
                style={{ padding: "16px", borderBottom: "1px solid #f0f0f0" }}
              >
                Gender
              </th>
              <th
                style={{ padding: "16px", borderBottom: "1px solid #f0f0f0" }}
              >
                Email
              </th>
              <th
                style={{ padding: "16px", borderBottom: "1px solid #f0f0f0" }}
              >
                Phne_number
              </th>
              <th
                style={{ padding: "16px", borderBottom: "1px solid #f0f0f0" }}
              >
                Address
              </th>
              <th
                style={{ padding: "16px", borderBottom: "1px solid #f0f0f0" }}
              >
                Edit
              </th>
              <th
                style={{ padding: "16px", borderBottom: "1px solid #f0f0f0" }}
              >
                Delete
              </th>
              
            </tr>
          </thead>
          
          <tbody>
  {employee.map((emp) => (
    <tr key={emp.emp_id}> 
      <td style={{ padding: "16px", borderBottom: "1px solid #f0f0f0" }}>
        {emp.emp_id}
      </td>
      <td style={{ padding: "16px", borderBottom: "1px solid #f0f0f0" }}>
        {emp.emp_name}
      </td>
      <td style={{ padding: "16px", borderBottom: "1px solid #f0f0f0" }}>
        {emp.role ? emp.role.role_name : ''} 
      </td>
      <td style={{ padding: "16px", borderBottom: "1px solid #f0f0f0" }}>
        {emp.department ? emp.department.name : ''} 
      </td>
      <td style={{ padding: "16px", borderBottom: "1px solid #f0f0f0" }}>
        {emp.gender}
      </td>
      <td style={{ padding: "16px", borderBottom: "1px solid #f0f0f0" }}>
        {emp.email}
      </td>
      <td style={{ padding: "16px", borderBottom: "1px solid #f0f0f0" }}>
        {emp.phn_number}
      </td>
      <td style={{ padding: "16px", borderBottom: "1px solid #f0f0f0" }}>
        {emp.address} 
      </td>
      <td style={{ textAlign:"center",padding:"8px",borderBottom: "1px solid #f0f0f0"}}>
      <Button onClick={() => handleEdit(employee.id)}>Edit</Button>
      <Button onClick={() => handleDelete(emp.emp_id)}>Delete</Button>
      </td>
    </tr>
  ))}
</tbody>

        </table>
        
      </div>
      
    </>
  );
};
export default Admin;
