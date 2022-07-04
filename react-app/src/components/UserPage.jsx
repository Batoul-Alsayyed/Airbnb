import React, { useState, useEffect } from "react";
import Stay from "../components/Stay";
import "../index.css";
import axios from "axios";
import UserNavBar from './UserNavBar'
import SubNavBar from './SubNavBar'
export default function UserPage() {
  //loading stays from database:
  const [stays, setStays] = useState([]);
  useEffect(() => {
    const staysData = async ()=> { 

      const req = await fetch(`http://127.0.0.1:8000/api/admin/stays`)
      const formatData = await req.json()
      //console.log(formatData);
      setStays(formatData.stays)
    } 
    staysData()
  }, [])
  return (
<div>
  <UserNavBar/>
<SubNavBar/>
    {/* <div id="stays">
      <div className="content-container">
        {stays.map((stay,index)=> 
          <Stay id={stay.id} key={index} name={stay.name} 
          description={stay.description} 
          rate={stay.rate} date={stay.date} 
          price={stay.price}/>
          )}
      </div>
    </div> */}
    </div>
  );
}
