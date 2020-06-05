import React,{useState} from 'react'
import ReactNotification from 'react-notifications-component'
import 'react-notifications-component/dist/theme.css'
import { store } from 'react-notifications-component';
import {Link} from 'react-router-dom'

export default function Product() {
    const [value,setValue] = useState([])
        fetch("http://localhost:5000/allproduct",{
            method:"get",
            headers:{
                "Content-Type":"application/json",
            }
        }).then(res=>res.json())
        .then(result=>{
            setValue(result.posts)
        })
          

    return (
        <div className="container">
           <div className="row">
               {
               value.map(item=>{
                   return(
                     <div class="card col-md-3 mb-2" style={{width:"25rem"}}>
                     <img class="card-img-top" style={{height:"150px"}}src={item.image} alt="Card image cap" />
                     <div class="card-body">
                         <h6 class="card-title">{item.product_name}</h6>
                         <h6 class="card-title">Price: {item.price}Rs/-</h6>
                         <Link to="/productdetail" style={{width:"150px",marginLeft:"32px"}} class="btn btn-primary">Buy Now</Link>
                     </div>
                     </div>
                   )
               })
            }
               </div>
           </div>
    )

        }