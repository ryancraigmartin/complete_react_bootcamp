class Friend extends React.Component {
  render() {
    const {name, hobbies} = this.props
    const listItems = hobbies.map(hobby => <li>{hobby}</li>)
    return (
      <div>
        <h1>{name}</h1>
        <ul>
          {listItems}
        </ul>
      </div>
    )
  }
}