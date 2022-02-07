import './AppBody.css'

function AppBody(props) {
  return (
    <div className="AppBody">
      {props.children}
    </div>
  );
}

export default AppBody;
