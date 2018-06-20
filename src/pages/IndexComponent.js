import React, { Component } from "react";
import axios from "axios";
import TableRow from "../components/TableRow"

class IndexComponent extends Component {

  state = {serverports:[]};

  componentDidMount() {
    axios.get("http://localhost:3000/servers")
      .then(res => {
        this.setState({
          serverports: res.data
        });
        //console.log(this.state.serverports);
      }).catch(function(err){
        console.log(err);
      })
  }
  tabRow() {
    return this.state.serverports.map(function (object, i) {
      return <TableRow obj={object} key={i} />
    });
  }
  render() {
    return (
      <div style={{margin: 50}} className="container">
        <table className="table table-striped">
          <thead>
            <tr>
              <td>ID</td>
              <td>Name</td>
              <td>Port</td>
            </tr>
          </thead>
          <tbody>
            {this.tabRow()}
          </tbody>
        </table>
      </div>
    );
  }
}
export default IndexComponent;
