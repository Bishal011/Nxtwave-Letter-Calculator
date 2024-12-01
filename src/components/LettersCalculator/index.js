// Write your code here.
import {Component} from 'react'
import './index.css'

class LettersCalculator extends Component {
  state = {inputText: ''}

  onChangeSearchInput = event => {
    this.setState({inputText: event.target.value})
  }

  render() {
    const {inputText} = this.state

    return (
      <div className="bg-container">
        <div className="letters-callculator-container">
          <div className="calculator-container">
            <h1 className="head1">Calculate the Letters you enter</h1>

            <div className="input-phrase">
              <label className="label" htmlFor="phraseText">
                Enter the phrase
              </label>
              <input
                id="phraseText"
                className="input-letters"
                placeholder="Enter the phrase"
                type="text"
                value={inputText}
                onChange={this.onChangeSearchInput}
              />
            </div>

            <p className="para1">No.of letters: {inputText.length}</p>
          </div>

          <img
            src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
            alt="letters calculator"
            className="img1"
          />
        </div>
      </div>
    )
  }
}

export default LettersCalculator
