import React, { useState } from "react";
import axios from "axios";
import './Add.css'

import { useNavigate } from "react-router-dom";
const AddPayroll = () => {
  const [employee, setEmployee] = useState("");
  const [acnumber, setAcnumber] = useState("");
  const [department, setDepartment]=useState("");
  const [role,setRole] = useState("");
  const [amount,setAmount] = useState("");
  
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`http://172.16.6.223:8080/addPayroll/${employee}`, {
        acnumber,   
        department,
        role,
        amount,
      });
      console.log(response);
      alert("Payroll added successfully!");
      setEmployee("");
      setAcnumber("");
      setDepartment("");
      setRole("");
      setAmount("");
      navigate('/Salary')
    } catch (error) {
      console.error("Error adding employee:", error);
      alert("Failed to add employee. Please try again later.");
    }
  };
  return (
    <div
          className="con"
        >
      <h1>Add Payroll</h1>
      <form onSubmit={handleSubmit}>
       
        <div className="form-group">
          <label>Employee_id:</label>
          <input
            type="number"
            value={employee}
            class="form-control"
            onChange={(e) => setEmployee(e.target.value)}
            required
          />
          </div>
          <div className="form-group">
          <label>Account_number: </label>
          <input 
          type="number"
          value={acnumber}
          class="form-control"
          onChange={(e) => setAcnumber(e.target.value)}
          required/>
          </div>
          <div className="form-group">
          <label>Department:</label>
          <input
            type="text"
            value={department}
            class="form-control"
            onChange={(e) => setDepartment(e.target.value)}
            required
          />
          </div>
          <div className="form-group">
          <label>Role: </label>
          <input
          type="text"
          value={role}
          class="form-control"
          onChange={(e) => setRole(e.target.value)}
          required/>
          </div>
          
          <div className="form-group">
            <label>Amount: </label>
            <input 
            type="text"
            value={amount}
            class="form-control"
            onChange={(e) => setAmount(e.target.value)}
            required/>
          </div>
          
        
        <button className='btn btn-outline-primary w-100 align-content-end ' 
        onClick={handleSubmit}
        type="submit" >Add Payroll</button>
        
      </form>
      
    </div>
    
  );
};

export default AddPayroll;






