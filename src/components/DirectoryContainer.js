import React from "react";
import { Component } from "react";
import EmployeeApi from "../utils/EmployeeApi"
import EmployeeList from "./EmployeeList";
import "./directoryStyling/style.css"

class DirectoryContainer extends Component {
    state = {
        employees: []
    }

    async componentDidMount() {
        await this.searchEmployees()
        console.log("employees after api call:")
        console.log(this.state.employees)
    }

    searchEmployees = () => {
        EmployeeApi.search()
            .then(res => {
                this.setState({ employees: res.data.data })
                console.log(res.data)
            })
            .catch(err => console.log(err));
    };

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-3">
                        <EmployeeList
                            employees={this.state.employees}
                            section="employee_name"
                        />
                    </div>

                    <div className="col-3">
                        <button>Employee Name</button>
                        <EmployeeList
                            employees={this.state.employees}
                            section="employee_name"
                        />
                    </div>

                    <div className="col-3">
                        <button>Salary</button>
                        <EmployeeList
                            employees={this.state.employees}
                            section="employee_salary"
                        />
                    </div>

                    <div className="col-3">
                        <button>Age</button>
                        <EmployeeList
                            employees={this.state.employees}
                            section="employee_age"
                        />
                    </div>
                </div>
            </div>
        );
    }

}

export default DirectoryContainer