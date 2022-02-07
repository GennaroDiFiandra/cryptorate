import './AppBody.css'

function AppBody(props) {
  return (
    <div className="AppBody">
      {console.log(props.children)}
      {props.children}
    </div>
  );
}

export default AppBody;
