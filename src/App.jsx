import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(20);
  return (
    <>
      <nav>
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Products</a>
          </li>
          <li>
            <a href="#">Hire Me</a>
          </li>
        </ul>
      </nav>
      <h1>Hello One</h1>

      <h1 onClick={() => setCount(count + 2)}>{count}</h1>

      <form action="">
        <input type="text" name="name" id="name" />
      </form>
    </>
  );
}

export default App;
