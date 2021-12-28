import React from "react";
import {useSelector,useDispatch} from "react-redux"



function App() {
  const dispatche=useDispatch()
  const cashe=useSelector(state => state.cash)
  console.log(cashe)

  const getCash=(cash)=>{
    dispatche({
      type:"GET_CASH",
       payload:cash
    })

  }


  const addCashe=(cash)=>{

    dispatche({
      type:"ADD_CASH",
       payload:cash
    })


  }


  return (
    <>

     {cashe}
    <button onClick={()=>addCashe(Number(prompt()))}>increment</button>
    <button onClick={()=>getCash(Number(prompt()))}>decreent</button>
    </>
  );
}

export default App;
