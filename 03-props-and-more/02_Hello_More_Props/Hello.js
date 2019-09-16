class Hello extends React.Component {
  render() {
    const bangs = "!".repeat(this.props.bangs)
    return (
      <div>
        <p>{this.props.to} says "Hi!" to {this.props.from}{bangs}</p>
        <img src={this.props.img}/>
      </div>
    );
  }
}