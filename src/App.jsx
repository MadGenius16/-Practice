import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Modal from './components/Modal/Modal'
import Bar from './components/Bar/Bar'

function App() {
  const [count, setCount] = useState(0)
  const[isModalOpen,  setIsModalOpen] = useState(false)
  const onOpenModal= () =>{
    setIsModalOpen(true)
  }
  const onCloseModal= () =>{
    setIsModalOpen(false)
  }
  const handleClick = () =>{setCount(count+1)}
  const[alco, setAlco] = useState({beer:2, wine:1, gin:3})

  const onBarClick=(alcoName)=>{
   setAlco({...alco, [alcoName]: alco[alcoName]+1})
  }
  const total = alco.beer+alco.wine+alco.gin

  return (
    <div>
    
      <div>
        <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank" rel="noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={handleClick}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>

      <div title='bar'>
        <Bar beer={alco.beer} wine={alco.wine} gin={alco.gin} total={total} onBarClick={onBarClick}/>
      </div>
      
      <div className='btn'>
        <button onClick={onOpenModal} type='button'>Open modal</button>
        {isModalOpen && <Modal onCloseModal={onCloseModal}/>}
      </div>
    </div>
  )
}

export default App
