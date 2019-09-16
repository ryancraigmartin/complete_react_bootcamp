class App extends React.Component {
  render(){
    return(
      <div>
        <h1>Slot Machines</h1>
        <hr/>
        <Machine
          s1="🍊"
          s2="🍓"
          s3="🍌"
          />
        <hr/>
        <Machine
          s1="🍊"
          s2="🍊"
          s3="🍊"
          />
        <hr/>
        <Machine
          s1="🍊"
          s2="🍓"
          s3="🍊"
          />
          <hr/>
      </div>
    )
  }
}

ReactDOM.render(<App/>, document.getElementById('root'))