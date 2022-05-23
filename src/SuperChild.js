import React , {useContext} from 'react';
import { GlobalContext } from './App1';
export default function App1()
{
  const {appColor,getDay} = useContext(GlobalContext)
  const day="Sunday";
  console.log("appColor", appColor);
  return(
 <div>
    <h1  style={{color:appColor}}> Super Child Component </h1>
    <button onClick={()=>getDay(day)}> Click Me </button>
 </div>
  );
}