import React from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Cls from './componet/Cls'
function App ()
{
 let a1 = 23, a2 = 24;
  return (
    <div className='container text-center mt-5'>
      <Cls n="Dnyaneshwar" a={a1} />
      <Cls n="Vaibhav" a={a2} />
    </div>
  )
}

export default App