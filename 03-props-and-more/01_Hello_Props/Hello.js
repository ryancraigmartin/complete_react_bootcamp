class Hello extends React.Component {
  render() {
    const props = this.props
    return <p>{props.to} says "Hi!" to {props.from}</p>;
  }
}