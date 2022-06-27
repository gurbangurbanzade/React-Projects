class TodoApp extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Todolist />
        <Action />
      </div>
    );
  }
}
class Header extends React.Component {
  render() {
    return (
      <div>
        <h1>Todo Application</h1>
        <div>lorem ipsum dolar</div>
      </div>
    );
  }
}
class Todolist extends React.Component {
  render() {
    return (
      <ul>
        <li>item 1</li>
        <li>item 2</li>
        <li>item 3</li>
      </ul>
    );
  }
}
class TodoItem extends React.Component {
  render() {
    return <li>Item</li>;
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
