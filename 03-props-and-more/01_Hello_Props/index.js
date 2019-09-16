class App extends React.Component {
  render(){
    return(
      <div>
        <Hello to="Ringo" from="Paul"/>
        <Hello to="George" from="John"/>
        <Hello to="Ryan" from="Lauren"/>
      </div>
    )
  }
}

ReactDOM.render(<App/>, document.getElementById('root'))