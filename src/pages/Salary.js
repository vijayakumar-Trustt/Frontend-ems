import {React,useState,useEffect} from "react";
import './salary.css';
import Sidebar from "../components/Sidebar";
import axios from "axios";
import { Link } from "react-router-dom";
const Salary = (props) => {
	const [payroll,setPayroll]=useState([]);

	useEffect(()=>{
		fetchData();
	},[])
	
	const fetchData= async ()=>{
		try{
			const res = await axios.get("http://172.16.6.223:8080/payroll");
			console.log(res.data);
			setPayroll(res.data);
		}
		catch(error){
			console.log(error);
		}

	}

	return (
		<>
		<Sidebar/>
		<div className="Con">
			<table className="table">
				<thead>
					<tr>
                        <th scope="col">Payroll_id</th>
                        <th scope="col">Employee</th>
                        <th scope="col">Account_number</th>
                        <th scope="col">Department</th>
                        <th scope="col">Role</th>
						<th scope="col">Amount</th>
                    </tr>
				</thead>
				<tbody>
				{payroll.map((item) => (
              <tr key={item.payroll_id}>
                <td>
                  {item.payroll_id}
                </td>
                <td >
                  {item.employee.emp_name}
                </td>
				<td>
					{item.employee.account_number}
				</td>
				<td>
					{item.employee.department.name}
                </td>
				<td>
					{item.role ? item.employee.role.role_name : ''}
				</td>
                <td >
                  {item.amount}
                </td>
              </tr>
            ))}
                </tbody>
				
			</table>
			<Link to={'/AddPayroll'}
              style={{
                backgroundColor: "#1890ff",
                color: "white",
                padding: "8px 16px",
                borderRadius: "4px",
                textDecoration: "none",
              }}>
            
              Add Payroll
            </Link>
		</div>
		</>
	);
};

export default Salary;
