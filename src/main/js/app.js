'use strict'

import React from 'react';
import  ReactDOM from'react-dom';
import $ from 'jquery'


class App extends React.Component {

    constructor(props){
        super(props);
        this.state = {employees: []};
    }

    componentDidMount() {
        $.ajax({
            url: '/api/employees',
            type: 'GET',
            success: (response) => {
                this.setState({
                    employees: response._embedded.employees
                })
            }
        })
    }

    render() {
        return (
            <EmployeeList employees={this.state.employees}/>
    )
    }
}

class EmployeeList extends React.Component{
    render() {
        var employees = this.props.employees.map(employee =>
            <Employee key={employee._links.self.href} employee={employee}/>
    );
        return (
            <table>
            <tbody>
            <tr>
            <th>First Name</th>
        <th>Last Name</th>
        <th>Description</th>
        </tr>
        {employees}
    </tbody>
        </table>
    )
    }
}

class Employee extends React.Component{
    render() {
        return (
            <tr>
            <td>{this.props.employee.firstName}</td>
        <td>{this.props.employee.lastName}</td>
        <td>{this.props.employee.description}</td>
        </tr>
    )
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('react')
)
// end::render[]