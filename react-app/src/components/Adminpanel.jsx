import React, {useState}  from "react";
import "../index.css";
import logo from "../airbnb_logo_detail.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
// import e from "cors";

function Adminpanel() {

  const [name, setName] = useState("");
  
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [date, setDate] = useState("");
  const [rate, setRate] = useState("");
  const [image_link, setImageLink] = useState("");
  const [category_id, setCategoryId] = useState("");
  const [stay_id_test, setStayId] = useState("");
  const [category_name, setCategoryName] = useState("");

  console.log("test");
  console.log(stay_id_test)
 
  function addCategory(){
    console.log("click");
    alert('add category clicked')
    console.log('add stay clicked');
    axios.post(`http://127.0.0.1:8000/api/admin/add_category`, {name: category_name}
    ).then(res => {
      console.log(res.data.category);
      // console.log('stayidtest ', stay_id_testt);

    }, );
  }

  function addStay(){
    axios.post(`http://127.0.0.1:8000/api/admin/add_stay`, {name: name, description: description, price: price, date: date, rate: rate, category_id: category_id}
    ).then(res => {
      //console.log(res.data.stay.id);
      const stay_id_testt = res.data.stay.id;
      
      setStayId(stay_id_testt);
      console.log('stayidtest ', stay_id_testt);

    },    );
    axios.post(`http://127.0.0.1:8000/api/admin/add_image`, {image_link: image_link, stay_id: stay_id_test+1}
    ).then(res => {
      console.log(res);
    });
  }


  function staysOnClick() {
    //console.log("stays clicked");
    //Add stays form
    document.getElementById('stays_table').classList.remove('hide');
    document.getElementById('stays_table2').classList.add('hide');

    document.getElementById('add_stay_btn').classList.remove('hide');
    document.getElementById('add_category_btn').classList.add('hide');
  }
  function categoriesOnClick() {
    //console.log("categories clicked");
    document.getElementById('stays_table2').classList.remove('hide');
    document.getElementById('stays_table').classList.add('hide');

    document.getElementById('add_stay_btn').classList.add('hide');
    document.getElementById('add_category_btn').classList.remove('hide');
    //document.getElementById('add_category_btn').addEventListener('click',addCategory);
  }

  function dashboardOnClick() {

    document.getElementById('stays_table2').classList.add('hide');
    document.getElementById('stays_table').classList.add('hide');

    document.getElementById('add_stay_btn').classList.add('hide');
    document.getElementById('add_category_btn').classList.add('hide');
  }

  return (
    <div className="admin-panel">
      {/* Admin panel */}
      <div class="container2">
        <div class="navigation">
          <ul>
            <li id="logo">
              <a href="#">
                <span class="icon">
                  <img src={logo} />
                </span>
              </a>
            </li>
            <li id="dashboard">
              <a href="#">
                <span class="icon">
                  <i class="fa-solid fa-house-chimney"></i>
                </span>
                <span class="title" onClick={dashboardOnClick}>
                  Dashboard
                </span>
              </a>
            </li>
            <li id="stays">
              <a href="#">
                <span class="icon">
                  <i class="fa-solid fa-cart-shopping"></i>
                </span>
                <span class="title" onClick={staysOnClick}>
                  stays
                </span>
              </a>
            </li>
            <li id="categories">
              <a href="#">
                <span class="icon">
                  <i class="fa-solid fa-basket-shopping"></i>
                </span>
                <span class="title" onClick={categoriesOnClick}>
                  Categories
                </span>
              </a>
            </li>
          </ul>
        </div>
        <div className=""></div>
      </div>
      <div className="container3">
        {/*displaying stays and categories tables  */}
        <div class="stays-table">

          <form id="stays_table" className='hide'>

          <div className='form-inner'>
            <h2>Add Stay</h2>

            <div className='form-group'>
                <label htmlFor='name'>Name: </label>
                <input type="text" name="name1" id="name1"
                 onChange={e => setName(e.target.value)} value={name}/>
            </div>
            <div className='form-group'>
                <label htmlFor='description'>Description: </label>
                <input type="text" name="description" id="description"
                 onChange={e => setDescription(e.target.value)} value={description}
                 />
            </div>
            <div className='form-group'>
                <label htmlFor='description'>Price: </label>
                <input type="text" name="description" id="description"
                 onChange={e => setPrice(e.target.value)} value={price}
                 />
            </div>
            <div className='form-group'>
                <label htmlFor='description'>Date: </label>
                <input type="text" name="description" id="description"
                 onChange={e => setDate(e.target.value)} value={date}
                 />
            </div>
            <div className='form-group'>
                <label htmlFor='description'>Rate: </label>
                <input type="text" name="description" id="description"
                 onChange={e => setRate(e.target.value)} value={rate}
                 />
            </div>
            
            <div className='form-group'>
                <label htmlFor='description'>Image link: </label>
                <input type="text" name="description" id="description"
                 onChange={e => setImageLink(e.target.value)} value={image_link}
                 />
            </div>



            <div className='form-group'>
                <label htmlFor='description'>Category id: </label>
                <input type="text" name="description" id="description"
                 onChange={e => setCategoryId(e.target.value)} value={category_id}
                 />
            </div>



            </div>
          </form>
          <button onClick={addStay} id="add_stay_btn" className="hide">Add stay</button>

            {/* <input type="submit" value="Add stay" id="add_stay" onClick={addStay}></input> */}

          {/* Adding add category form */}


          <form id="stays_table2" className='hide'>

          <div className='form-inner'>
            <h2>Add Category</h2>

            <div className='form-group'>
                <label htmlFor='name'>Category Name: </label>
                <input type="text" name="category-name" id="category_name"
                 onChange={e => setCategoryName(e.target.value)} value={category_name}/>
            </div>
            {/* <input type="submit" value="Add category" id="add_category" onClick={addCategory}></input> */}
            </div>
          </form>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <button onClick={addCategory} id="add_category_btn" className="">Add category</button>
        </div>
      </div>
    </div>
  );
}

export default Adminpanel;
