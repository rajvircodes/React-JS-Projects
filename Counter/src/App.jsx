import { useState } from "react" //Import useState

const App = () => {
  const [num, setNum] = useState(0) //Set values 


  // Create function for incrasing value
  const  increaseVal =()=>{ 
    setNum(num+1)
  }

    // Create function for decreases value

  const decreaseVal = ()=>{
    setNum(num-1)
  }

  const resetVal = ()=> {
    setNum(0)
  }

  return (
    <div className='container'>
      <h2>Counter</h2>
      <h1>{num}</h1>
      <button id='increase' onClick={increaseVal}>increase</button>
      <button id='decrease' onClick={decreaseVal}>decrease</button>
      <button id='reset' onClick={resetVal}>Reset</button>
    </div>
  )
}

export default App