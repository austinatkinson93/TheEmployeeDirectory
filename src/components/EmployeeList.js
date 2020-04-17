import React from "react";


function EmployeeList(props) {
    return <div>
            <ul >
                {props.employees.map((element) => {
                    const section = props.section
                    return <li key={element.id}>{element[section]}</li>
                })}
            </ul>
    </div>
}

export default EmployeeList 