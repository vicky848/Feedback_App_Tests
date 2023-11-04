// Write your React code here.
import {Component} from 'react'

import './index.css'

class Feedback extends Component {
  state = {
    isFeedbackSelected: false,
  }

  onClickEmoji = () => this.setState({isFeedbackSelected: true})

  feedbackQuestion = () => {
    const {resources} = this.props
    const {emojis} = resources

    return (
      <div className="feedback-question-container">
        <h1 className="feedback-container">
          How satisfied are you with our customer support performance?
        </h1>
        <ul className="list-container">
          {emojis.map(emoji => (
            <li key={emoji.id}>
              <button
                type="button"
                className="btn-action"
                onClick={this.onClickEmoji}
              >
                <img src={emoji.imageUrl} alt={emoji.name} className="emoji" />
                <br />

                <span className="emoji-name">{emoji.name}</span>
              </button>
            </li>
          ))}
        </ul>
      </div>
    )
  }

  thankYouScreen = () => {
    const {resources} = this.props
    const {loveEmojiUrl} = resources

    return (
      <div className="thanks-container">
        <img src={loveEmojiUrl} alt="love emoji" className="love-img" />
        <h1 className="thank-you-text">Thank you</h1>
        <p className="descriptioin">
          We willuse your feedback to improve our customer support performance.
        </p>
      </div>
    )
  }

  render() {
    const {isFeedbackSelected} = this.state
    return (
      <div className="app-container">
        <div className="feedback">
          {isFeedbackSelected ? this.thankYouScreen() : this.feedbackQuestion()}
        </div>
      </div>
    )
  }
}
export default Feedback
