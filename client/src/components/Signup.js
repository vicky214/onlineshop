import React, {useState} from 'react'
import { Link,useHistory } from 'react-router-dom'
import 'react-notifications-component/dist/theme.css'
import { store } from 'react-notifications-component';

export default function Signup() {
    const history = useHistory()
    const [name,setName] = useState("")
    const [password,setPassword] = useState("")
    const [email,setEmail] = useState("")
    const [phone,setPhone] = useState("")
    const [address,setAddress] = useState("")
    const [city,setCity] = useState("")
    const [state,setState] = useState("")
    const [zip,setZip] = useState("")
    const [country,setCountry] = useState("")

    const PostData=()=>{
        fetch("http://localhost:5000/register",{
            method:"post",
            headers:{
                "Content-Type":"application/json",
            },
            body:JSON.stringify({
                name,
                password,
                email,
                city,
                state,
                country,
                address,
                zip,
                phone,
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
                store.addNotification({
                    title: "Congratulate",
                    message: data.message,
                    type: "success",
                    insert: "top",
                    container: "top-right",
                    animationIn: ["animated", "fadeIn"],
                    animationOut: ["animated", "fadeOut"],
                    dismiss: {
                        duration: 2000
                      }
                })
                 history.push('/signin')
             }            
        })
        .catch(err=>{
            console.log(err)
        })
        .catch(err=>{
            console.log(err)
        }) 
       }
    return (
        <div className="container usersignup" style={{backgroundColor:"#ffe6ff"}}>
            <div className="row m-2">
                <h5>if you have already an account click on <Link style={{textDecoration:"none"}}to="signin">Signin</Link></h5>
                <div className="col-sm-12">
                <div class="form-group">
                    <label for="exampleInputPassword1">Name :</label>
                    <input type="text" class="form-control" value={name} onChange={(e)=>setName(e.target.value)} />
                </div>
                <div class="form-group">
                    <label for="exampleInputEmail1">Email address :</label>
                    <input type="email" class="form-control" value={email} onChange={(e)=>setEmail(e.target.value)} />
                </div>
                <div class="form-group">
                    <label for="exampleInputPassword1">Phone No. :</label>
                    <input type="text" class="form-control" value={phone} onChange={(e)=>setPhone(e.target.value)} />
                </div>
                <div class="form-row">
                    <div class="form-group col-md-9">
                    <label for="inputCity">Address :</label>
                    <input type="text" class="form-control" value={address} onChange={(e)=>setAddress(e.target.value)} />
                    </div>
                    <div class="form-group col-md-3">
                    <label for="inputState">Country :</label>
                    <input type="text" class="form-control" value={country} onChange={(e)=>setCountry(e.target.value)} />
                    </div>
                </div>    
                <div class="form-row">
                    <div class="form-group col-md-5">
                    <label for="inputCity">City :</label>
                    <input type="text" class="form-control" value={city} onChange={(e)=>setCity(e.target.value)} />
                    </div>
                    <div class="form-group col-md-4">
                    <label for="inputState">State :</label>
                    <input type="text" class="form-control" value={state} onChange={(e)=>setState(e.target.value)} />
                    </div>
                    <div class="form-group col-md-3">
                    <label for="inputZip">Zip :</label>
                    <input type="number" value={zip} class="form-control" onChange={(e)=>setZip(e.target.value)}/>
                    </div>
                </div>
                <div class="form-group">
                    <label for="exampleInputPassword1">Password :</label>
                    <input type="password" class="form-control"value={password} onChange={(e)=>setPassword(e.target.value)}/>
                </div>
                <div class="form-group">
                    <label for="exampleInputPassword1">Confirm Password :</label>
                    <input type="password" class="form-control" id="exampleInputPassword1"/>
                </div>
                
                <button style={{float:"right"}} onClick={()=>PostData()} class="btn btn-primary">Submit</button>
           </div>
        </div>
        </div>
           )
}
