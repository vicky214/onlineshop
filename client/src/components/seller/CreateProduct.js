import React,{useState,useEffect} from 'react'
import { Link,useHistory } from 'react-router-dom'
import 'react-notifications-component/dist/theme.css'
import { store } from 'react-notifications-component';


export default function CreateProduct() {
    const history = useHistory()
    const [product_name,setProduct_name] = useState("")
    const [product_type,setProduct_type] = useState("")
    const [description,setDescription] = useState("")
    const [price,setPrice] = useState("")
    const [image,setImage] = useState("")
    const [warranty,setWarranty] = useState("")
    const [url,setUrl] = useState('')
    const [count,setCount] = useState('')
    const [filename,setFilename] = useState('Choosee');
    useEffect(()=>{
        if(url){
            uploadFields()
        }
    },[url])
        const uploadPic = ()=>{
        const data = new FormData()
        data.append("file",image)
        data.append("upload_preset","onlineshop")
        data.append("cloud_name","derbbitpz")
        fetch("https://api.cloudinary.com/v1_1/derbbitpz/image/upload",{
            method:"post",
            body:data
        })
        .then(res=>res.json())
        .then(data=>{
           setUrl(data.url)
        })
        .catch(err=>{
            console.log(err)
        })
    }
        const uploadFields = ()=>{
        fetch("http://localhost:5000/createproduct",{
            method:"post",
            headers:{
                "Content-Type":"application/json",
            },
            body:JSON.stringify({
                product_name,
                product_type,
                price,
                warranty,
                description,
                count,
                url
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
                 history.push('/signinseller')
             }            
        })
        .catch(err=>{
            console.log(err)
        })
        .catch(err=>{
            console.log(err)
        }) 
       }
    

       const PostData = ()=>{
            uploadPic()
            uploadFields()
        }
       
    
    return (
        <div className="container mt-1" style={{backgroundColor:"orange",borderRadius:"5px"}}>
        <div className="row">
            
            <div className="col-md-12">  
                
            <div class="form-row">
                <div class="form-group col-md-6">
                <label for="inputEmail4">Product Name</label>
                <input type="text" class="form-control" id="inputEmail4" value={product_name} onChange={(e)=>setProduct_name(e.target.value)} placeholder="Enter Name" />
                </div>
                <div class="form-group col-md-6">
                <label for="inputPassword4">Product Type</label>
                <input type="text" class="form-control" id="inputPassword4" value={product_type} onChange={(e)=>setProduct_type(e.target.value)} placeholder="mobile/laptop/toy..." />
                </div>
            </div>
            <div class="form-group">
                <label for="inputAddress">Description</label>
                <input type="text" class="form-control" id="inputAddress"  value={description} onChange={(e)=>setDescription(e.target.value)} placeholder="Description" />
            </div>

            <div class="form-group">
                <label for="inputAddress">Total No. of Items</label>
                <input type="text" class="form-control" id="inputAddress"  value={count} onChange={(e)=>setCount(e.target.value)} placeholder="Description" />
            </div>

           <div className="form-group">
           <label for="inputAddress">Image of Product</label>
            <div className="custom-file">
                <input type="file" className="custom-file-input" id="customFile" onChange={(e)=>setImage(e.target.files[0])} />
                <label className="custom-file-label" for="inputGroupFile01" value={filename} onChange={(e)=>setFilename(e.target.files[0].name)} />
            </div>
            </div>
            
            
            <div class="form-row">
                <div class="form-group col-md-6">
                <label for="inputCity">Price</label>
                <input type="text" class="form-control" id="inputCity" value={price} onChange={(e)=>setPrice(e.target.value)} placeholder="Enter Price" />
                </div>
            
                <div class="form-group col-md-6">
                <label for="inputZip">Warranty</label>
                <input type="text" class="form-control" id="inputZip" value={warranty} onChange={(e)=>setWarranty(e.target.value)} placeholder="Enter Warranty Time" />
                </div>
            </div>
            
            <button style={{marginBottom:"20px"}} onClick={()=>PostData()} class="btn btn-primary">Submit</button>
            
</div>
        </div>
    </div>
    )
}
