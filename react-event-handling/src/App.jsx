
import './App.css'

function App() {
 
  function handleClick(){
    alert("I am clicked");
  }

  function handleMouse(){

    alert("Para ke upar mouse le kar aaye ho!!")
  }

  function handleInputChange(e){
         console.log("Value til now : ",e.target.value);
  }

  function handleSubmit(e){
         e.preventDefault();
         // i am writing my custom behaviour write down
         alert("From Submit kr du kya");
  }


  return (
      <div>
        {/* immediate invocation when u do directly write the alert function in onlick whothout arrow function */}
        <button onClick={ ()=>{alert("Button Click hua hai")}}>
            Click me
        </button>
        
        {/* <form onSubmit={handleSubmit}>
              <input type ="text"  onChange= {handleInputChange} />
              <button type="submit">
                Submit
              </button>
        </form> */}

         {/* <p onMouseOver={ handleMouse} style ={{ color:"red" , border: "1px solid black"}}>
          I am a Para
         </p>
          <button onClick={handleClick}>
            Click me
          </button> */}
      </div>
  )
}

export default App
