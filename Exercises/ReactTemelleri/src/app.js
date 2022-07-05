class TodoApp extends React.Component {
  constructor(probs) {
    super(probs);
    this.clearItems = this.clearItems.bind(this);
    this.addItem = this.addItem.bind(this);

    this.state = {
      items: ["item 1", "item 2", "item 3"],
    };
  }

  clearItems() {
    this.setState({
      items: [],
    });
  }

  addItem(item) {
    this.setState((prevState) => {
      return { items: prevState.items.concat(item) };
    });
    console.log("item");
  }

  render() {
    const app = {
      title: "Todo Application",
      description: "lorem ipsum dolar",
    };
    return (
      <div>
        <Header description={app.title} add={app.description} />
        <Todolist items={this.state.items} clearItems={this.clearItems} />
        <Action addItem={this.addItem} />
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
  render() {
    return (
      <div>
        <ul>
          {this.props.items.map((item, index) => {
            return <TodoItem key={index} item={item} />;
          })}
        </ul>
        <p>
          <button onClick={this.props.clearItems}>Clear Items</button>
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
  constructor(probs) {
    super(probs);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }
  onFormSubmit(e) {
    e.preventDefault();
    const item = e.target.elements.txtItem.value;
    if (item) {
      this.props.addItem(item);
    }
  }
  render() {
    return (
      <div>
        <form onSubmit={this.props.onFormSubmit}>
          <input type="text" name="txtItem" />
          <button onClick={this.props.addItem}>Add Item</button>
        </form>
      </div>
    );
  }
}

ReactDOM.render(<TodoApp />, document.getElementById("root"));
