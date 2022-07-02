import React from 'react'
import '../index.css'
import logo from '../airbnb_logo_detail.jpg'

function Adminpanel() {
    function staysOnClick(){
        console.log('stays clicked')
        //display stays table 
        
    }
    function categoriesOnClick(){
        console.log('categories clicked')
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
                            <span class="title">Dashboard</span>
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
    <h1>Stays Table</h1>
  
    <table>
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

    <tr>
        <td>name1</td>
        <td>price</td>
        <td>d</td>
        <td>d</td>
        <td>rate</td>
        <td>name</td>
        <td>category</td>
        <td>no</td>
        <td>image</td>

    </tr>
    </table>
  
</div>
       </div>
    </div>
    
  )
}

export default Adminpanel
