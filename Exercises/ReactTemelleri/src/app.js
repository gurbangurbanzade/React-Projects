class TodoApp extends React.Component {
  render() {
    const app = {
      title: "Todo Application",
      description: "lorem ipsum dolar",
      items: ["item1", "item2", "item3", "item4"],
    };
    return (
      <div>
        <Header description={app.title} add={app.description} />
        <Todolist items={app.items} />
        <Action />
      </div>
    );
  }
}

class Header extends React.Component {
  render() {
    return (
      <div>
        <h1>{this.props.description}</h1>
        <div>{this.props.add}</div>
      </div>
    );
  }
}

class Todolist extends React.Component {
  constructor(props) {
    super(props);
    this.clearItems = this.clearItems.bind(this);
  }
  clearItems() {
    console.log(this.props.items);
    console.log("salam");
  }
  render() {
    return (
      <div>
        <ul>
          {this.props.items.map((item, index) => {
            return <TodoItem key={index} item={item} />;
          })}
        </ul>
        <p>
          <button onClick={this.clearItems}>Clear Items</button>
        </p>
      </div>
    );
  }
}
class TodoItem extends React.Component {
  render() {
    return <li>{this.props.item}</li>;
  }
}
class Action extends React.Component {
  onFormSubmit(e) {
    e.preventDefault();
    const item = e.target.elements.txtItem.value;
    console.log(e.target.elements.txtItem.value);
  }
  render() {
    return (
      <div>
        <form onSubmit={this.onFormSubmit}>
          <input type="text" name="txtItem" />
          <button onClick={this.addItems}>Add Item</button>
        </form>
      </div>
    );
  }
}

ReactDOM.render(<TodoApp />, document.getElementById("root"));
