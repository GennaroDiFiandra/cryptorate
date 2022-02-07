import './AppBody.css'

function AppBody(props) {
  return (
    <main className="AppBody">
      {props.children}
    </main>
  );
}

export default AppBody;
