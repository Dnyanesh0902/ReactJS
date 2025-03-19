import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap
import "./App.css";

function App() {
  const [na, setNA] = useState("Dnyanesh");
  const [count, setCount] = useState(0);
  const [length, setLength] = useState(0);

  const handleClick = () => {
    setNA((na) => na + " Kokate");
  };

  const handleChange = (value) => {
    setLength(value.length);
  };

  return (
    <div className="container mt-5">
      <div className="card p-4 shadow-lg">
        <p className="fw-bold text-center">Name: {na}</p>
        <p className="text-muted">No of characters: {length}</p>
        
        <input
          type="text"
          className="form-control mb-3"
          placeholder="Type something..."
          onChange={(e) => handleChange(e.target.value)}
        />

        <p className="fs-5">Count: {count}</p>
        
        <div className="d-flex gap-2">
          <button className="btn btn-success" onClick={() => setCount(count + 1)}>+</button>
          <button className="btn btn-danger" onClick={() => setCount(count - 1)}>-</button>
          <button className="btn btn-warning" onClick={() => setCount(0)}>Reset</button>
          <button className="btn btn-primary" onClick={handleClick}>Click Me</button>
        </div>
      </div>
    </div>
  );
}

export default App;
