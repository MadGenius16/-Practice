import css from '../components/Bar.module.css'

const Bar = ({beer, wine, gin, total, onBarClick}) => {
  return (
    <div>
      <ul className={css.list}>
        <li>Beer: {beer}</li>
        <li>Wine: {wine}</li>
        <li>Gin: {gin}</li>
        <li><b>Total</b>:{total}</li>
      </ul>
      <button type='button' onClick={()=>onBarClick("beer")}>Beer</button>
      <button type='button' onClick={()=>onBarClick("wine")}>Wine</button>
      <button type='button' onClick={()=>onBarClick("gin")}>Gin</button>
    </div>
  ) 
}

export default Bar