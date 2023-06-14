import TweetInput from "./TweetInput"
import "./TweetBox.css"

//[...tweets, newTweet].forEach(
 // element => console.log(element)
 // );
export default function TweetBox(props) {
  const {userProfile, setTweets, tweets, tweetText, setTweetText} = props
  const handleOnTweetTextChange = (event) => {
    setTweetText(event.target.value);
  }
  const onSubmit = () => {
    const newTweet = {
      name: userProfile.name,
      handle: userProfile.handle,
      text: "",
      comments: 0,
      likes: 0,
      retweets: 0,
      id: 0
    };
    //console.log([...tweets, newTweet])
    setTweets(oldTweets => [...oldTweets, {... newTweet, id: oldTweets.length()}]);
  }
  return (
    <div className="tweet-box">
      <TweetInput value={tweetText}/>

      <div className="tweet-box-footer">
        <TweetBoxIcons />
        <TweetCharacterCount />
        <TweetSubmitButton handleOnSubmit={onSubmit}/>
      </div>
    </div>
  )
}

export function TweetBoxIcons() {
  return (
    <div className="tweet-box-icons">
      <i className="fas fa-image"></i>
      <i className="icon-gif">GIF</i>
      <i className="far fa-chart-bar"></i>
      <i className="fas fa-map-marker-alt"></i>
    </div>
  )
}

export function TweetCharacterCount(props) {
  // ADD CODE HERE
  return <span></span>
}

export function TweetSubmitButton(props) {
  return (
    <div className="tweet-submit">
      <i className="fas fa-plus-circle"></i>
      <button className="tweet-submit-button" onClick={props.handleOnSubmit}>Tweet</button>
    </div>
  )
}
