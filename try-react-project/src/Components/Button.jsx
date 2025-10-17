import React from 'react'

const Button = (props) => {
  return (
    <div> 
         <button style = {{"height": "40px" 
         , "width" : "80px" , 
         "border-radius" : "15px" ,
          "backgroundColor":props.color}}>
            {props.name}
            </button>

    </div>
  )
}

export default Button