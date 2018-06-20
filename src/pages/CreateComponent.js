import React, { Component } from "react";
import axios from 'axios';

class CreateComponent extends Component {
  state = {
    name: "",
    port: ""
  };
  onSubmit = e => {
    // e.preventDefault();
    const serverport = {
      name: this.state.name,
      port: this.state.port
    }
    axios.post('http://localhost:3000/servers', serverport)
      .then(res => {
        this.setState({
          name: "",
          port: ""
        });
      })
      .catch(function(err){
        console.log(err);

      });
  };
  onChangeHostName = e => {
    this.setState({
      name: e.target.value
    });
  };
  onChangePort = e => {
    this.setState({
      port: e.target.value
    });
  };
  render() {
    return (
      <div style={{ margin: 50 }}>
        <h3>Add New Server </h3>
        <form>
          <div className="form-group">
            <label>Host Name</label>
            <input
              onChange={this.onChangeHostName}
              className="form-control"
              type="text"
            />
          </div>

          <div className="form-group">
            <label>Port Number</label>
            <input
              onChange={this.onChangePort}
              className="form-control"
              type="text"
            />
          </div>

          <div className="form-group">
            <input
              onClick={this.onSubmit}
              type="submit"
              className="btn btn-primary"
              value="Add Node Server"
            />
          </div>
        </form>
      </div>
    );
  }
}

export default CreateComponent;
