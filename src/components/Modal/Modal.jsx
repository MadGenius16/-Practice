import css from './Modal.module.css'
import { useEffect, useState } from 'react'

const Modal = ({onCloseModal}) => {
const[counter, setCounter] = useState(0)

useEffect(()=>{
 const handleKeyDown = (event)=>{
  if(event.code==="Escape") {
    onCloseModal()
  } 
}
window.addEventListener("keydown", handleKeyDown)

  return ()=>{
    window.removeEventListener("keydown", handleKeyDown)
  }
},[onCloseModal])

const handleBackDropClick=(event)=> {
  if(event.target === event.currentTarget) {
    onCloseModal();
  }

}

  return (
    <div onClick={handleBackDropClick} className={css.backdrop}>
      <div className={css.modal}>
        <button 
        onClick={onCloseModal}
        className={css.closeModalBtn} 
        type='button' 
        aria-label='button close modal'>&times;
        </button>

        <h3 className={css.title}>Modal</h3>

        <p className={css.text}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, asperiores possimus, blanditiis sit doloremque assumenda at eius eos quas cupiditate ipsum. Ullam minima error debitis corporis atque hic cum ipsam.
        </p>
        <button type='button' onClick={()=> setCounter(counter+1)}>click counter: {counter}</button>
      </div>
    </div>
  )
}

export default Modal