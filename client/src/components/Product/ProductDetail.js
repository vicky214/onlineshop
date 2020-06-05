import React from 'react'

export default function ProductDetail() {
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-4 ml-3 mt-4">
                    <img src="https://rukminim1.flixcart.com/image/416/416/k1fbmvk0/mobile/4/f/f/mi-redmi-8-mzb8251in-original-imafhyacmxaefxgw.jpeg?q=70" />
                </div>
                <div className="col-md-4" style={{marginTop:"60px"}}>
                    <h5>Product Name: </h5>
                    <h6>Price: </h6>
                    <h5>Available:</h5>
                    <h6>Description:</h6>
                </div>
                <div className="col-md-2 buttoncss">
                    <button type="button" className="btn mr-3 mt-3" style={{width:"175px",backgroundColor:"lightGray"}}>
                        Add to Cart
                    </button>
                    <button type="button" className="btn mt-3" style={{width:"175px",backgroundColor:"lightGray"}}>
                        Buy Now
                    </button>
                </div>
            </div>
        </div>
    )
}
