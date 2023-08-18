// Write your React code here.
import {Component} from 'react'
import './index.css'

class Feedback extends Component {
  state = {
    isFeedbackSelected: false,
  }

  onClickEmoji = () => this.setState({isFeedbackSelected: true})

  render() {
    const {resources} = this.props
    const {isFeedbackSelected} = this.state
    const {emojis, loveEmojiUrl} = resources
    if (isFeedbackSelected) {
      return (
        <div className="feedback-app-container">
          <div className="feedback-container">
            <img src={loveEmojiUrl} className="love-emoji" alt="love emoji" />
            <h1 className="thankyou-text">Thank You!</h1>
            <p className="thankyou-description">
              We will use your feedback to improve our customer support
              performance.
            </p>
          </div>
        </div>
      )
    }
    return (
      <div className="feedback-app-container">
        <div className="feedback-container">
          <h1 className="feedback-heading">
            How satisfied are you with our customer support performance?
          </h1>
          <ul className="emojis-list">
            {emojis.map(eachEmoji => (
              <li key={eachEmoji.id}>
                <button
                  className="emoji-button"
                  onClick={this.onClickEmoji}
                  type="button"
                >
                  <img
                    src={eachEmoji.imageUrl}
                    className="emoji"
                    alt={eachEmoji.name}
                  />
                  <br />
                  <span className="emoji-name">{eachEmoji.name}</span>
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default Feedback
