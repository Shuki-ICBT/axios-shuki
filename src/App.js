import axios from "axios";
import "./styles.css";

export default function App() {
  const onclickUser = () => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((result) => {
        console.log(result.data);
      })
      .catch((err) => console.log(err));
  };

  const onclickUser1 = () => {
    axios
      .get("https://jsonplaceholder.typicode.com/users/3")
      .then((result) => {
        console.log(result.data);
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="App">
      <button onClick={onclickUser}>Users</button>
      <button onClick={onclickUser1}>id=1のUser</button>
    </div>
  );
}
