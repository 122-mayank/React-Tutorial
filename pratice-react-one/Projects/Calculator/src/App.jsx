import './App.css'
import Calculator from './components/calculator';

function App() {

  let operands = ['+ ','- ','% ','/ ','* '];

  return (
    <>
       <Calculator operands ={operands}>
            <h1>Welcome to my App</h1>
            <p>This content is passed as children to the Container component.</p>
       </Calculator>
    </>
  )
}

export default App
