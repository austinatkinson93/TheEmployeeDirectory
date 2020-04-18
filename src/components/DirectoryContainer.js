import React from "react";
import { Component } from "react";
import EmployeeApi from "../utils/EmployeeApi"
import EmployeeList from "./EmployeeList";
import "./directoryStyling/style.css"

class DirectoryContainer extends Component {
    state = {
        employees: [],
        search: "",
        sorted: false
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

    handleInputChange = (event) => {
        const search = event.target.value;

        this.setState({ search });
    };

    handleClick = (event) => {
        let employeesCopy = [...this.state.employees];
        let sortThing = event.target.name;
        if (this.state.sorted === false) {
            employeesCopy.sort((a, b) => {
                let nameA;
                let nameB;
                if (sortThing !== "employee_name") {
                    nameA = +a[sortThing];
                    nameB = +b[sortThing];
                } else {
                    nameA = a[sortThing].toUpperCase(); // ignore upper and lowercase
                    nameB = b[sortThing].toUpperCase(); // ignore upper and lowercase
                }
                if (nameA < nameB) {
                    return -1;
                }
                if (nameA > nameB) {
                    return 1;
                }

                // names must be equal
                return 0;
            })

            this.setState({ employees: employeesCopy, sorted: true });
        } else {
            employeesCopy.sort((a, b) => {
                let nameA;
                let nameB;
                if (sortThing !== "employee_name") {
                    nameA = +a[sortThing];
                    nameB = +b[sortThing];
                } else {
                    nameA = a[sortThing].toUpperCase(); // ignore upper and lowercase
                    nameB = b[sortThing].toUpperCase(); // ignore upper and lowercase
                }
                if (nameA < nameB) {
                    return 1;
                }
                if (nameA > nameB) {
                    return -1;
                }

                // names must be equal
                return 0;
            })

            this.setState({ employees: employeesCopy, sorted: false });
        }
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <form>
                        <input
                            value={this.state.search}
                            onChange={this.handleInputChange}
                            placeholder="type stuff here"
                        />
                    </form>
                </div>
                <div className="row">
                    <div className="col">
                        <EmployeeList
                            employees={this.state.employees}
                            search={this.state.search}
                            onClick={this.handleClick}
                        />
                    </div>

                </div>
            </div>
           
        );
    }

}

export default DirectoryContainer