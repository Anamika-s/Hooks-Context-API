import Child from './Child';
import React , {createContext, useState} from 'react';

export const GlobalContext = createContext();

export default function App1()
{
  const [color , setColor]= useState("green");
  const [day , setDay] = useState("Monday");
 const getDay=(item)=>
 {
   console.log(item);
   setDay(item);
 }
 
  return(
    <GlobalContext.Provider value={{appColor:color, getDay:getDay}}>
  <div>
    <h1> Main Component {day} </h1> 
    <Child/>
 </div>
 </GlobalContext.Provider>
  );
}