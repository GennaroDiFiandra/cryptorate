import "./Message.css";

function Message({ content }) {
  return (
    <div className='Message__wrapper'>
      <div className='Message'>{content}</div>
    </div>
  );
}

export default Message;
