import React, { useState, useEffect } from "react";
import "../index.css";
import axios from "axios";
import DataComponent from "./DataComponent";
import Popup from "./Popup";
export default function SubNavBar() {
    const [isOpen, setIsOpen] = useState(false);
    const [img, setImg] = useState("")
    const [category_id, setCategoryId] = useState("")
    const [stay, setStay] = useState([])
    const [category_name, setCategoryName] = useState("")

    useEffect(()=> {
        //get category id from category name(class name)
        getCatgoryName("island")
    }, []);
    function getCatgoryName(cat_name){
      setCategoryName(cat_name)
      axios.post(`http://127.0.0.1:8000/api/admin/getCategoryIdByCategoryName`, {category_name: cat_name})
      .then(res => {
        console.log('id',res.data["category"][0].id);
       setCategoryId(res.data["category"][0].id);

      axios.post(`http://127.0.0.1:8000/api/admin/getStayByCategoryId`, {category_id: res.data["category"][0].id})
      .then(res => {
        setStay(res.data["stay"]);
        console.log(res.data["stay"]);
        
      });

      });
      
    }

    const togglePopup = () => {
      setIsOpen(!isOpen);
    }
    function HandleClick(){
      
      var min_price = document.getElementById('minimum_price');
      var max_price = document.getElementById('maximum_price');

              
     console.log('min price value = ', min_price.value)
     console.log('max price value = ', max_price.value)
    console.log('category id = ', category_id)
//API for price range filter 

      axios.post(`http://127.0.0.1:8000/api/admin/getStayByPriceRange`, {min: min_price.value, max: max_price.value, category_id: category_id})
      .then(res => {
        setStay(res.data)
      }).catch(err => {
        console.log(err);
    });

    }
  return (
    <div>
      <div className="sub-container">
        <div className="sub-item" onClick={()=> {
          getCatgoryName('island')
        }}>
          <img src="https://a0.muscache.com/pictures/8e507f16-4943-4be9-b707-59bd38d56309.jpg" alt="" />
        </div>
        <div className="sub-item" onClick={()=> {
          getCatgoryName('beach')
        }}>
          <img src="https://a0.muscache.com/pictures/10ce1091-c854-40f3-a2fb-defc2995bcaf.jpg" alt="" />
        </div>
        <div className="sub-item">
          <img src="https://a0.muscache.com/pictures/3fb523a0-b622-4368-8142-b5e03df7549b.jpg" alt="" />
        </div>
       <div className="sub-item">
        <img src="https://a0.muscache.com/pictures/c5a4f6fc-c92c-4ae8-87dd-57f1ff1b89a6.jpg" alt="" />
       </div>
       <div className="sub-item">
        <img src="https://a0.muscache.com/pictures/c0a24c04-ce1f-490c-833f-987613930eca.jpg" alt="" />
       </div>
       <div className="sub-item">
        <img src="https://a0.muscache.com/pictures/732edad8-3ae0-49a8-a451-29a8010dcc0c.jpg" alt="" />
       </div>
       <div className="sub-item">
        <img src="https://a0.muscache.com/pictures/677a041d-7264-4c45-bb72-52bff21eb6e8.jpg" alt="" />
       </div>
       <div className="sub-item">
        <img src="https://a0.muscache.com/pictures/ca25c7f3-0d1f-432b-9efa-b9f5dc6d8770.jpg" alt="" />
       </div>
       <div className="sub-item">
        <img src="https://a0.muscache.com/pictures/3b1eb541-46d9-4bef-abc4-c37d77e3c21b.jpg" alt="" />
       </div>
       <div className="sub-item">
        <img src="https://a0.muscache.com/pictures/4221e293-4770-4ea8-a4fa-9972158d4004.jpg" alt="" />
       </div>
       
        <button onClick={togglePopup}>Filters</button>
        {isOpen && <Popup content={<>
        <div>
          <input type="text" id="minimum_price" placeholder="minimum number"/>
          <input type="text" id="maximum_price" placeholder="maximum number"/>
        </div>
        <button onClick={()=> {
          HandleClick()
        }}>Search</button></>}
          handleClose={togglePopup}
    />}
      </div>
    <div>
      <DataComponent stay={stay}/>
    </div>
    </div>
  )
}
