class Car extends React.Component {
  constructor(props) {
    super(props);
    this.changeColor = this.changeColor.bind(this);
    this.state = {
      brand: "opel",
      model: "astra",
      color: "qirmizi",
      year: "2000",
    };
  }
  changeColor() {
    this.setState({
      color: "blue",
    });
  }

  render() {
    return (
      <div>
        <h1>{this.state.brand}</h1>
        <p>{this.state.color}</p>
        <button onClick={this.changeColor}>Chage Color</button>
      </div>
    );
  }
}

ReactDOM.render(<Car />, document.getElementById("root"));
