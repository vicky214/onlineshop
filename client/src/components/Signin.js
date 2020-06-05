import React,{useState} from 'react';
import {Link,useHistory } from 'react-router-dom';
import 'react-notifications-component/dist/theme.css';
import { store } from 'react-notifications-component';

export default function Signin() {
    const history = useHistory()
    const [password,setPassword] = useState("")
    const [email,setEmail] = useState("")
    const PostData = ()=>{
        fetch("http://localhost:5000/signin",{
            method:"post",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                password,
                email
            })
        }).then(res=>res.json())
        .then(data=>{
           if(data.error){
            store.addNotification({
                title: "Sorry",
                message: data.error,
                type: "danger",
                insert: "top",
                container: "top-right",
                animationIn: ["animated", "fadeIn"],
                animationOut: ["animated", "fadeOut"],
                dismiss: {
                    duration: 2000
                  }
            })          
         }
           else{
               localStorage.setItem("jwt",data.token)
               localStorage.setItem("user",JSON.stringify(data.user))
               store.addNotification({
                title: "Congratulate",
                message: "Successfully Login",
                type: "success",
                insert: "top",
                container: "top-right",
                animationIn: ["animated", "fadeIn"],
                animationOut: ["animated", "fadeOut"],
                dismiss: {
                    duration: 2000
                  }
                })              
             history.push('/')
           }
        }).catch(err=>{
            console.log(err)
        })
        .catch(err=>{
            console.log(err)
        })
    }

    return (
        <div className="container usersignup" style={{backgroundColor:"#ffe6ff"}}>
            <div className="row m-2">
            <h5>if you have not an account click on <Link style={{textDecoration:"none"}} to="sellersignup">Signup</Link></h5>
                <div className="col-sm-12">
                <div className="form-group">
                    <label for="exampleInputPassword1">Email :</label>
                    <input type="text" className="form-control" value={email} onChange={(e)=>setEmail(e.target.value)}/>
                </div>
                <div className="form-group">
                    <label for="exampleInputEmail1">Password:</label>
                    <input type="email" className="form-control" value={password} onChange={(e)=>setPassword(e.target.value)}/>
                </div>
                <button style={{float:"right"}} onClick={()=>PostData()} className="btn btn-primary">Submit</button>
        </div>
        </div>
        </div>
    )
}
