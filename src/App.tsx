import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import "./App.css";

function App() {
  return (
    <>
      <FontAwesomeIcon icon={faHouse} />
      <p className="text-3xl font-bold underline text-red-500">Hello World!</p>
    </>
  );
}

export default App;
