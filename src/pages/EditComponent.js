import React, { Component } from "react";
import axios from "axios";
import {Redirect} from "react-router-dom";

class EditComponent extends Component {
  state = {
    name: "",
    port: ""
  };
  onChangeHostName = e => {

    this.setState({ name: e.target.value });
  }

  onChangePort = e => {  
    this.setState({ port: e.target.value });
  }

  onSubmit = e =>{
    e.preventDefault();
    const serverport ={
      name: this.state.name,
      port: this.state.port
    }
    axios.put(`http://localhost:3000/servers/${this.props.match.params.id}`,serverport)
      .then(res =>{
          console.log(res);
      })
      .catch(err =>{
        console.log(err);
      });
  }

  componentDidMount() {
    axios.get(`http://localhost:3000/servers/${this.props.match.params.id}`)
      .then(res => {
        this.setState({
          name: res.data.name,
          port: res.data.port
        });
        // <Redirect to="/list" />
      }).catch((err) => {
        console.log(err);
      })
  }
  render() {
    return (
      <div style={{ margin: 50 }}>
        <h3>Edit Server </h3>
        <form>
          <div className="form-group">
            <label>Host Name</label>
            <input
              onChange={this.onChangeHostName}
              className="form-control"
              type="text"
              value={this.state.name}
            />
          </div>

          <div className="form-group">
            <label>Port Number</label>
            <input
              onChange={this.onChangePort}
              className="form-control"
              type="text"
              value={this.state.port}
            />
          </div>

          <div className="form-group">
            <input
              onClick={this.onSubmit}
              type="submit"
              className="btn btn-primary"
              value="Save Server"
            />
          </div>
        </form>
      </div>
    );
  }
}

export default EditComponent;
