import React from 'react';
import { useState,useEffect } from 'react';


const DataTable = () => {
    const initDataForStudent = [
        {id: "1", firstname:"Samaar", lastname: "Ahmed",age:"35",
    birthdate:"851119",country:"Sweden",city:"Växjö"},
    {id: "2", firstname:"Arib", lastname: "Ahmed",
    age:"5",birthdate:"171119",country:"Sweden",city:"Växjö"}

];

    const [students,setStudent]= useState(initDataForStudent);

    const TableHeader = () => {
        return(            
        <thead>
            <tr>
                <th>ID</th>
                <th>FirstName</th>
                <th>LastName</th>
                <th>Age</th>
                <th>BirthDate</th>
                <th>Country</th>
                <th>City</th>
    
                <th>ACTION</th>
            </tr>
        </thead>
        );
    }
    
    const TableAction = () =>{
        return(
            <div>
                <button type = 'button'className='btn btn-primary'>Details</button>
            </div>
    
        );
    }
    const TableRow = () =>{
        return(
    <tbody>
        {
          students.map(student=>
        <tr key={student.id}>
            <td>{student.id}</td>
            <td>{student.firstname}</td>
            <td>{student.lastname}</td>
            <td>{student.age}</td>
            <td>{student.birthdate}</td>
            <td>{student.country}</td>
            <td>{student.city}</td>
    
    
            <td>
                <TableAction/>
            </td>
        </tr>)}
    </tbody>
    
        );
    }
    
    return (
        <div className='container'>
            <span>Student list</span>
            <table className='table table-striped'>

            <TableHeader/>
            <TableRow/>

</table>

        </div>
    );
};

export default DataTable;