

import { useState, useEffect } from 'react';

import axios from 'axios';

import style from './admin.css';



function Admin () {


    const [students, setStudents] = useState([]);
    const [instructors, setInstructors] = useState([]);


    const getUsers = (a,b) => {
        axios.get("api/users/fetchusers")
            .then((response) => {
                // console.log(response.data);
                setStudents(response.data.filter(students => { return students.role === "student" }).reverse());
                setInstructors(response.data.filter(instructors => { return instructors.role === "instructor" }).reverse());
            });

            document.getElementById(a).style.display = "none";
            document.getElementById(b).style.display = "block";
    };

    const deleteUser = (a) => {



        axios
            .post("/api/users/deleteuser", { id: a })
            .then(res => {
                console.log(res);
            })
            .catch(err => {
                const errors = err.response.data;
                console.log(err.response.data)
            });

    }

    const [adminEdit, setAdminEdit] = useState(0)

    
        return (
            <div className='Admin'>
                
                
                <div id='student-data'>
                    <h1>Students</h1> 
                    {/* <button onClick={()=>{setStudents(students.filter(a => { return a.date.slice(0,4) === "2022" }).reverse())}}>filter</button> */}
                <table className='std-table'>
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Date Registered</th>
                    <th>Course</th>
                    <th>Course Duration</th>
                    <th>Student ID</th>
                    <th>Amount Paid</th>
                    <th>Year</th>
                    <th>Actions</th>
                    </tr>
                {students.map(student=>{
                    return(
                    <tr>
                    <td>{student.firstname} {student.lastname}
                    <input style={{display: adminEdit === students.indexOf(student)+1? "": "none"}} className='admin-edit' type='text' placeholder='first name'/>
                    <input style={{display: adminEdit === students.indexOf(student)+1? "": "none"}} className='admin-edit' type='text' placeholder='last name'/>
                    </td>
                    <td>{student.email}
                    {students.indexOf(student)}
                    <input style={{display: adminEdit === students.indexOf(student)+1? "": "none"}} className='admin-edit' type='email' placeholder='email'/>
                    </td>
                    <td>{student.date.slice(0,10)}</td>
                    <td>{student.class} </td>
                    <td>{5} weeks 
                    <input style={{display: adminEdit === students.indexOf(student)+1? "": "none"}} className='admin-edit' type='number' placeholder='duration'/>
                    </td>
                    <td>Student ID 
                    <input style={{display: adminEdit === students.indexOf(student)+1? "": "none"}} className='admin-edit' type='text' placeholder='student id'/>
                    </td>
                    <td>10000
                    <input style={{display: adminEdit === students.indexOf(student)+1? "": "none"}} className='admin-edit' type='number' placeholder='amount'/>
                         </td>
                    <td>{student.date.slice(0,4)}</td>
                    <td>
                        <button style={{display: adminEdit === students.indexOf(student)+1? "none": ""}} onClick={()=>{deleteUser(student._id)}}>delete</button>
                        {
                            adminEdit === students.indexOf(student)+1? <>
                            <button onClick={()=>{}}>Update</button>
                            <button onClick={()=>{setAdminEdit(0)}}>Cancel</button>
                            </> : <button onClick={()=>{setAdminEdit(students.indexOf(student)+1)}}>Edit</button>
                            
                        }
                        
                        
                        </td>
                    </tr>
                    )
                })
            }
            </table>
                </div>
                <div id='instructor-data'>
                <h1>Instructors</h1>
<table className='std-table'>
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Date Registered</th>
                    <th>Class</th>
                    <th>Actions</th>
                    </tr>
                {instructors.map(instructor=>{
                    return(
                    <tr>
                    <td>{instructor.firstname} {instructor.lastname}</td>
                    <td>{instructor.email}</td>
                    <td>{instructor.date.slice(0,10)}</td>
                    <td>{instructor.class}  <button>change</button></td>
                    <td><button onClick={()=>{deleteUser(instructor._id)}}>delete</button></td>
                    </tr>
                    )
                })
            }
            </table>
                </div>


               
                <button onClick={()=>{getUsers('instructor-data', 'student-data')}}>view all students</button>
                <button onClick={()=>{getUsers('student-data', 'instructor-data')}}>view all instructors</button>

                
            </div>
        );
    
}

export default Admin;
