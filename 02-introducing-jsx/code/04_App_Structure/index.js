class App extends React.Component {
  render() {
    return(
      <div>
        <Hello />
        <br/>
        <NumPicker />
      </div>
    )
  }
}

ReactDOM.render(<App/>, document.getElementById('root'))