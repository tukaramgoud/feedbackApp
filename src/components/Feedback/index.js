// Write your React code here.
import {Component} from 'react'
import './index.css'

class Feedback extends Component {
  state = {isTrue: false}

  sendFeedback = () => {
    this.setState({isTrue: true})
  }

  render() {
    const {resources} = this.props
    const {emojis, loveEmojiUrl} = resources
    const {isTrue} = this.state
    return (
      <div className="main-container">
        {!isTrue && (
          <div className="sub-container">
            <h1 className="main-heading">
              How satisfied are you with our customer support performance
            </h1>
            <ul className="list-style">
              {emojis.map(eachitem => (
                <li key={eachitem.id} className="list-item">
                  <img
                    src={eachitem.imageUrl}
                    alt={eachitem.name}
                    className="emoji-sizing"
                    onClick={this.sendFeedback}
                  />
                  <p className="style-para">{eachitem.name}</p>
                </li>
              ))}
            </ul>
          </div>
        )}
        {isTrue && (
          <div className="sub-container-2">
            <h1 className="main-heading">Thank You</h1>
            <img src={loveEmojiUrl} alt="love emoji" className="emoji-sizing" />
            <p className="style-para">
              we will use your feedback to improve our system
            </p>
          </div>
        )}
      </div>
    )
  }
}
export default Feedback
