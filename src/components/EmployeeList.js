import React from "react";


function EmployeeList(props) {
    let filteredArr = props.employees.filter(employee => employee.name.first.toUpperCase().includes(props.search.toUpperCase()))
    return <div>
        <div>
            <table className="table">
                <thead>
                    <tr>
                        <th>image</th>
                        <th scope="col"><button name="name" onClick={props.onClick}>Name</button></th>
                        <th scope="col"><button name="phone" onClick={props.onClick}>Phone</button></th>
                        <th scope="col"><button name="email" onClick={props.onClick}>Email</button></th>
                        <th scope="col"><button name="dob" onClick={props.onClick}>DOB</button></th>
                    </tr>
                </thead>
                <tbody>
                    {filteredArr.map((element, i) => {
                        return <tr key={i}>
                            <td><img src={element.picture.medium}></img></td>
                            <td>{element.name.first} {element.name.last}</td>
                            <td>{element.phone}</td>
                            <td>{element.email}</td>
                            <td>{element.dob.date.slice(0,10)}</td>
                        </tr>
                    })}
                </tbody>
            </table>
        </div>
    </div>
}

export default EmployeeList 