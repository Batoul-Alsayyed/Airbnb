import React from 'react'

import { FaStar } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";

export default function Stay() {
  return (
    <div className="content-stays">
            <div className="stays-item">
                <img src="https://a0.muscache.com/im/pictures/765acada-1030-4bf4-908d-1c9e8f0b95bf.jpg" alt=""
                />
                <span className='icon'><FaRegHeart/></span>
                <div>
                    <p>Name</p>
                    <span className='rate'>Rate
                    <FaStar/>
                    </span>
                    </div>

                <div>
                    <p>description</p>
                </div>

                <div>
                    <p>date</p>
                </div>

                <div>
                    <p>price per night</p>
                </div>

                </div>
        </div>
  )
}