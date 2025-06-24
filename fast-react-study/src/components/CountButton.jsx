function CountButton( { countDispatch }) {
  return (
    <div>
        <button onClick={ () => { countDispatch({type : "plus"}) }}>증가</button>
        <button onClick={ () => { countDispatch({type : "minus"}) }}>감소</button>
        <button onClick={ () => { countDispatch({type : "reset"}) }}>리셋</button>
    </div>
  )
}

export default CountButton