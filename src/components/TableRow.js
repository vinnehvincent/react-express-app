import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";


class TableRow extends Component {

    delete = () => {
        axios.delete(`http://localhost:3000/servers/${this.props.obj.id}`)
            .then(res=> console.log("Deleted",res.data))
            .catch(err => console.log(err));

    }
    render() {
        return (
            <tr className="container">
                <td>
                    {this.props.obj.id}
                </td>
                <td>
                    {this.props.obj.name}
                </td>
                <td>
                    {this.props.obj.port}
                </td>
                <td>
                    <Link to={"/edit/" + this.props.obj.id} className="btn btn-primary">Edit</Link>
                </td>
                <td>
                    <button onClick={this.delete} className="btn btn-danger">Delete</button>
                </td>

            </tr>
        );
    }

}
export default TableRow;