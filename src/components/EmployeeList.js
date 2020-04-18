import React from "react";


function EmployeeList(props) {
    let filteredArr = props.employees.filter(employee => employee.employee_name.toUpperCase().includes(props.search.toUpperCase()))
    return <div>
        {filteredArr.map((element) => {
           return <div>
            <table>
                <thead>
                    <th><button name="employee_name" onClick={props.onClick}>Name</button></th>
                    <th><button name="employee_salary" onClick={props.onClick}>Salary</button></th>
                    <th><button name="employee_age" onClick={props.onClick}>Age</button></th>
                </thead>
                <tbody>
                    <tr>
                        <td>{element.employee_name}</td>
                        <td>{element.employee_salary}</td>
                        <td>{element.employee_age}</td>
                    </tr>
                </tbody>
            </table>
            </div>
        })}
    </div>
}

export default EmployeeList 