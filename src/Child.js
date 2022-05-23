import React , {useContext} from 'react';
import SuperChild from './SuperChild';
import { GlobalContext } from './App1';
export default function App1()
{
  const {appColor} = useContext(GlobalContext)
  console.log("appColor", appColor);
  return(
 <div>
   <SuperChild/>
    <h1  style={{color:appColor}}> Child Component </h1> 
 </div>
  );
}