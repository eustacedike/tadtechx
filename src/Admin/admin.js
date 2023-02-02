

import { useState, useEffect } from 'react';

import axios from 'axios';

import style from './admin.css';



function Admin () {


    const [students, setStudents] = useState([]);
    const [instructors, setInstructors] = useState([]);


    const getUsers = () => {
        axios.get("api/users/fetchusers")
            .then((response) => {
                // console.log(response.data);
                setStudents(response.data.filter(students => { return students.role === "student" }).reverse());
                setInstructors(response.data.filter(instructors => { return instructors.role === "instructor" }).reverse());
            });

    };



    // useEffect(() => {
    //     getUsers();
    // }, []);

    // console.log(students);

    
        return (
            <div className='Admin'>
                
                <h1>Admin</h1>
                <table className='std-table'>
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Date Registered</th>
                    <th>Class</th>
                    <th>Date Paid</th>
                    <th>Actions</th>
                    </tr>
                {students.map(student=>{
                    return(
                    <tr>
                    <td>{student.firstname} {student.lastname}</td>
                    <td>{student.email}</td>
                    <td>{student.date.slice(0,10)}</td>
                    <td>{student.class}</td>
                    <td>{student.date.slice(0,10)}</td>
                    <td><button>delete</button></td>
                    </tr>
                    )
                })
            }
            </table>
                <button onClick={getUsers}>view all students</button>
                <button onClick={getUsers}>view all instructors</button>

                <table className='std-table'>
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Date Registered</th>
                    <th>Class</th>
                    <th>Date Paid</th>
                    </tr>
                {instructors.map(instructor=>{
                    return(
                    <tr>
                    <td>{instructor.firstname} {instructor.lastname}</td>
                    <td>{instructor.email}</td>
                    <td>{instructor.date.slice(0,10)}</td>
                    <td>{instructor.class}</td>
                    <td>{instructor.date.slice(0,10)}</td>
                    <td><button>delete</button></td>
                    </tr>
                    )
                })
            }
            </table>
            </div>
        );
    
}

export default Admin;
