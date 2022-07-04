import React from 'react'
import axios from "axios";
import { FaStar } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { useState } from 'react';
import { useEffect } from 'react';

export default function Stay({rate,name,description,price, date, id}) {
    const [img, setImg] = useState("")
    useEffect(()=>{
        axios.post(`http://127.0.0.1:8000/api/admin/getImagesByStayId`, {stay_id: {id}})
        .then(res => {
    
          setImg(res.data['image'][0].image_link);
        });

    }, []);
    
  return (
    <div className="content-stays">
            <div className="stays-item">
                <img src={img} />

                <span className='icon'><FaRegHeart/></span>
                <div>
                    <p>{name}</p>
                    <span className='rate'>{rate}
                    <FaStar/>
                    </span>
                    </div>

                <div>
                    <p>{description}</p>
                </div>

                <div>
                    <p>{date}</p>
                </div>

                <div>
                    <p>{price}</p>
                </div>

                </div>
        </div>
  )
}