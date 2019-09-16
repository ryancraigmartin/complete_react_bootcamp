class App extends React.Component {
  render() {
    return (
      <div>
        <Friend
          name="Elton John"
          hobbies={["Piano", "Singing", "Dance"]}
        />
        <Friend
          name="Anderson Paak"
          hobbies={["Singing", "Drumming", "Rapping"]}
        />
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'))