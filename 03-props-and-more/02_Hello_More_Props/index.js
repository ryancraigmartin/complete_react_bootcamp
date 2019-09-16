class App extends React.Component {
  render(){
    return(
      <div>
        <Hello
          to="Ringo"
          from="Paul"
          bangs={3}
          data={[1,2,3,4,5]}
          isFunny
          img="https://picsum.photos/200/300"
          />
        <Hello
          to="George"
          from="John"
          bangs={3}
          data={[1,2,3,4,5]}
          isFunny={false}
          img="https://picsum.photos/200/300"
        />
        <Hello
          to="Ryan"
          from="Lauren"
          bangs={3}
          data={[1,2,3,4,5]}
          isFunny
          img="https://picsum.photos/200/300"
        />
      </div>
    )
  }
}

ReactDOM.render(<App/>, document.getElementById('root'))