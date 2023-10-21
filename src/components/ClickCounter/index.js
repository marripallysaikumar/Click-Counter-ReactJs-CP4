import {Component} from 'react'

import './index.css'

class ClickCounter extends Component {
  state = {count: 0}

  onIncrementCount = () => {
    this.setState(prevState => ({
      count: prevState.count + 1,
    }))
  }

  render() {
    const {count} = this.state

    return (
      <div className="container">
        <div className="sub-container">
          <h1>
            The Button has been clicked
            <span className="counter-value"> {count} </span> times
          </h1>
        </div>
        <div>
          <p>click the button to increase the count!</p>
          <button type="submit" onClick={this.onIncrementCount}>
            Click Me!
          </button>
        </div>
      </div>
    )
  }
}

export default ClickCounter
