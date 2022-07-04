import React from 'react'
import Stay from "./Stay";

export default function DataComponent({stay}) {
  return (
      <div>
       {stay.map((e,index)=> 
          <Stay id={e.id} key={index} name={e.name} 
          description={e.description} 
          rate={e.rate} date={e.date} 
          price={e.price}/>
          )}
    </div>
  )
}
