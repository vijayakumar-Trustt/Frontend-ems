import React, { useState } from "react";
import axios from "axios";
import './Add.css'
import { FcDepartment } from "react-icons/fc";
import { useNavigate } from "react-router-dom";
const AddEmployee = () => {
  const [username, setName] = useState("");
  const [email, setEmail] = useState("");
  const [department, setDepartment] = useState("");
  const [phoneNumber, setPhonenumber]=useState("");
  const [role,setRole] = useState("");
  const [gender,setGender] = useState("");
  const [address,setAddress] = useState("");
  const navigate = useNavigate();
  console.log("name " , username);
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`http://172.16.6.223:8080/add/${department}/${role}`, {
        emp_name:username,
        email,
        address,   
        phn_number:phoneNumber,
        gender,
      });
      console.log(response);
      alert("Employee added successfully!");
      setName("");
      setEmail("");
      setDepartment("");
      setRole("");
      setPhonenumber("");
      setGender("");
      navigate('/Admin')
    } catch (error) {
      console.error("Error adding employee:", error);
      alert("Failed to add employee. Please try again later.");
    }
  };
  return (
    <div
          className="con"
        >
      <h1>Add Employee</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
        
          <label>Employee:</label>
          <input
            type="text"
            value={username}
            class="form-control "
            onChange={(e) => setName(e.target.value)}
            required
          />
          </div>
        <div className="form-group">
          <label>Email:</label>
          <input
            type="email"
            value={email}
            class="form-control"
            onChange={(e) => setEmail(e.target.value)}
            required
          />
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
          <label>Phone Number:</label>
          <input 
          type="number"
          value={phoneNumber}
          class="form-control"
          onChange={(e) => setPhonenumber(e.target.value)}
          required/>
          </div>
          <div className="form-group">
            <label>Gender: </label>
            <input 
            type="text"
            value={gender}
            class="form-control"
            onChange={(e) => setGender(e.target.value)}
            required/>
          </div>
          <div className="form-group">
            <label>Address: </label>
            <input 
            type="text"
            value={address}
            class="form-control"
            onChange={(e) => setAddress(e.target.value)}
            required/>
          </div>
        
        <button className='btn btn-outline-primary w-100 align-content-end ' 
        onClick={handleSubmit}
        type="submit" >Add Employee</button>
        
      </form>
      
    </div>
    
  );
};

export default AddEmployee;






