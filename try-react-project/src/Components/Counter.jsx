import React from 'react'

const Counter = (props) => {
  return (
    <div>
        <button onClick={() => {
           props.independentCount( props.count + 1) // we can also add the ( prevCount => prevCount + 1 )  instead of (props.count+1)
        }}>{props.name}</button>
    </div>
  )
}

export default Counter