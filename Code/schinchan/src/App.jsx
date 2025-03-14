import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="container mt-5 d-flex justify-content-center">
        <div className="card shadow-lg text-center" style={{ width: "18rem" }}>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRSSS81DNgGAwRQrPZ_DcPeYVNQb6_cN-0Vg&s" className="card-img-top" alt="Shinchan" />
          <div className="card-body">
            <h5 className="card-title">Shinchan</h5>
            <p className="card-text text-muted">
              A mischievous and funny character from the anime series.
            </p>
            <a href="#" className="btn btn-primary">
              Learn More
            </a>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
