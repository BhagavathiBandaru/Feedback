// Write your React code here.

import {Component} from 'react'

import './index.css'

class Feedback extends Component {
  state = {isFeedbackSubmit: false}

  clickToSubmitFeedback = () => this.setState({isFeedbackSubmit: true})

  renderFeedbackQuestion = () => {
    const {resources} = this.props
    const {emojis} = resources

    return (
      <div className="feedback-question-container">
        <h1 className="question">
          How satisfied are you with our customer support performance?
        </h1>

        <ul className="emoji-list-container">
          {emojis.map(eachEmoji => (
            <li key={eachEmoji.id}>
              <button
                className="button"
                onClick={this.clickToSubmitFeedback}
                type="button"
              >
                <img
                  src={eachEmoji.imageUrl}
                  alt={eachEmoji.name}
                  className="emoji-image"
                />
                <br />
                <span className="emoji-name">{eachEmoji.name}</span>
              </button>
            </li>
          ))}
        </ul>
      </div>
    )
  }

  renderForThankyouDisplay = () => {
    const {resources} = this.props
    const {loveEmojiUrl} = resources

    return (
      <div className="thankyou-container">
        <img src={loveEmojiUrl} alt="love emoji" className="love-emoji-img" />
        <h1 className="thankyou-heading">Thank you!</h1>
        <p className="description">
          We will use your feedback to improve our customer support performance.
        </p>
      </div>
    )
  }

  render() {
    const {isFeedbackSubmit} = this.state

    return (
      <div className="app-container">
        <div className="feedback-card">
          {isFeedbackSubmit
            ? this.renderForThankyouDisplay()
            : this.renderFeedbackQuestion()}
        </div>
      </div>
    )
  }
}

export default Feedback
