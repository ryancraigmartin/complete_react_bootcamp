function getNum() {
  return Math.floor(Math.random() * 10) + 1;
}
class NumPicker extends React.Component {
  render() {
    const num = getNum()
    let msg
    if (num == 7) {
      msg = "😃"
    } else {
      msg = "🙁"
    }
    return (
      <div>
        <h1>Your lucky number is: {num}</h1>
        <p>{num === 7 ? `Congratulations! ${msg}` : `Sorry, you lose! ${msg}`}</p>
        { num === 7 && <img src="https://picsum.photos/200/300"/> }
      </div>
    )
  }
}