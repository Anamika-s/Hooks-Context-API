import React, {useState} from "react"

export default function Add (props)
{
  const [num , setNum] = useState(0)
  return(
         <div>
           <button onClick={()=> setNum(Number(props.num1) + Number(props.num2))}> Add  </button>
          <b> Sum : {num} </b>
         </div>
  );

}