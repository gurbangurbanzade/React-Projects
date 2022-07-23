import React, { Component } from "react";
import axios from "axios";

export class GetPost extends Component {
  constructor(props) {
    super(props);

    this.state = {
      apiCustom: [],
      item: "item1",
    };
  }
  componentDidMount() {
    axios.get("https://jsonplaceholder.typicode.com/posts").then((res) => {
      console.log(res.data);
      this.setState({
        apiCustom: res.data,
        item: "item2",
      });
    });
  }
  render() {
    return (
      <div>
        <h1>salam</h1>
        <h2>{this.state.item}</h2>

        <table>
          <tbody>
            <tr>
              <th>ID</th>
              <th>Title</th>
              <th>Body</th>
            </tr>
            {this.state.apiCustom.map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.title}</td>

                <td>{item.body}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default GetPost;
