import React from 'react'
import '../index.css'
import logo from '../airbnb_logo_detail.jpg'
import axios from 'axios';

function Adminpanel() {
    function staysOnClick(){
        console.log('stays clicked')
        //display stays table 
        loadStays();
        
    }
    function categoriesOnClick(){
        console.log('categories clicked')
        loadCategories();
    }
    function dashboardOnClick(){
        let title = document.getElementById('table-title');
        title.innerHTML = ""
        let stays= document.getElementById('stays_table');
        stays.innerHTML =``;
    }
    function loadStays(){
        let title = document.getElementById('table-title');
        title.innerHTML = "Stays table"

        axios.get(`http://127.0.0.1:8000/api/admin/stays`
  ).then(res => {
    console.log(res.data.stays);
    let stays= document.getElementById('stays_table');
    stays.innerHTML =`<thead>
    <tr class="header-class">
      <th>Id </th>
      <th>Name</th>
      <th>price</th>
      <th>Description</th>
      <th>Date</th>
      <th>Rate</th>
      <th>Category Id</th>
      <th>Number of likes</th>
      <th>Image link</th>
    </tr>
  </thead>`;
  for (let stay=0; stay< res.data.stays.length; stay++){
    stays.innerHTML +=  
        `<tr>
        <td>${res.data.stays[stay]["id"]}</td>
        <td>>${res.data.stays[stay]["name"]}</td>
        <td>>${res.data.stays[stay]["description"]}</td>
        <td>>${res.data.stays[stay]["price"]}</td>
        <td>>${res.data.stays[stay]["rate"]}</td>
        <td>>${res.data.stays[stay]["category_id"]}</td>
        <td>>${res.data.stays[stay]["number_of_likes"]}</td>
        <td>imageLink</td>
        </tr>`
  }
  });
    }
    function loadCategories(){
        let title = document.getElementById('table-title');
        title.innerHTML = "Categories table"
        axios.get(`http://127.0.0.1:8000/api/admin/categories`
  ).then(res => {
    console.log(res.data.categories);
    let categories= document.getElementById('stays_table');
    categories.innerHTML =`<thead>
    <tr class="header-class">
      <th> Id </th>
      <th> Name</th>
    </tr>
  </thead>`;
  for (let category=0; category< res.data.categories.length; category++){
    categories.innerHTML +=  
        `<tr>
        <td>${res.data.categories[category]["id"]}</td>
        <td>>${res.data.categories[category]["name"]}</td>
        </tr>`
  }
  });
    }
  return (
    <div className='admin-panel'>
      {/* Admin panel */}
      <div class="container2">
      <div class="navigation">
                <ul>
                    <li id="logo">
                        <a href="#">
                            <span class="icon"><img src={logo}/></span>
                        </a>
                    </li>
                    <li id="dashboard">
                        <a href="#">
                            <span class="icon"><i class="fa-solid fa-house-chimney"></i></span>
                            <span class="title" onClick={dashboardOnClick}>Dashboard</span>
                        </a>
                    </li>
                    <li id="stays">
                        <a href="#">
                            <span class="icon"><i class="fa-solid fa-cart-shopping"></i></span>
                            <span class="title" onClick={staysOnClick}>stays</span>
                        </a>
                    </li>
                    <li id="categories">
                        <a href="#">
                            <span class="icon"><i class="fa-solid fa-basket-shopping"></i></span>
                            <span class="title" onClick={categoriesOnClick}>Categories</span>
                        </a>
                    </li>

                 </ul>   
                 
            </div>
          <div className=''></div>
    </div>
    <div className="container3">
    {/*displaying stays and categories tables  */}
    <div class="stays-table">
    <h1 id='table-title'>Stays Table</h1>
  
    <table id='stays_table'>
      <thead>
        <tr class="header-class">
          <th>Id </th>
          <th> Name</th>
          <th> price</th>
          <th> Description</th>
          <th> Date</th>
          <th>Rate</th>
          <th> Category Id</th>
          <th>Number of likes</th>
          <th> Image link</th>
        </tr>
      </thead>

    </table>
  
</div>
       </div>
    </div>
    
  )
}

export default Adminpanel
