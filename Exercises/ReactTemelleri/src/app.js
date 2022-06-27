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
  render() {
    return (
      <ul>
        {this.props.items.map((item, index) => {
          return <TodoItem key={index} item={item} />;
        })}
      </ul>
    );
  }
}
class TodoItem extends React.Component {
  render() {
    return <li>{this.props.item}</li>;
  }
}
class Action extends React.Component {
  render() {
    return (
      <div>
        <p>
          <button>Clear Items</button>
        </p>
        <form action="">
          <input type="text" />
          <button>Add Item</button>
        </form>
      </div>
    );
  }
}

ReactDOM.render(<TodoApp />, document.getElementById("root"));
