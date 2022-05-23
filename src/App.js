// import React , {useState} from 'react';
// import logo from './logo.svg';
// import './App.css';

// const App = () =>  {

// console.log(useState("Use State Demo"))
// // let inittvalue = useState("Use State Demo")[1]

// // console.log(inittvalue);
//  const [ value, setValue] = useState("Use State Demo");
  
// // var value  = "Use State Demo11"
//   const ChangeHeading = () =>
//   {

//     setValue('DEMO');

//   // value= "DEMO";
//   // console.log(value);
//   } 
//    return (
//     <div className="App">
//   <h1> {value} </h1>
//  <button onClick={ChangeHeading}> Click here </button> 
//      </div>
//   );
// }

// export default App;
import Add from './Add';
import React, {useState} from 'react';
export default function App ()
{
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
 
   return (
     <div>
       First Number :<input type="number" id="num1" onChange={(event)=>setNum1(event.target.value)}/> <br/>
       Second Number :<input type="number" id="num2" onChange={(event)=>setNum2(event.target.value)}/> <br/>
       <Add num1={num1} num2={num2}/>
     </div>        
   );
}