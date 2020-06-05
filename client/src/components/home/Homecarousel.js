import React from 'react'

export default function Homecarousel() {
    return (
        <div className="container-fluid" style={{backgroundColor:" #e6fff8"}}>
            <div className="row mb-2"> 
                <div className="col-md-12">
                <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                        <img className="d-block w-100 imgcar" src="https://rukminim1.flixcart.com/flap/50/50/image/c2bef673e07b2837.jpg?q=50" alt="First slide" />
                        </div>
                        
                        <div className="carousel-item">
                        <img className="d-block w-100 imgcar" src="https://images.unsplash.com/photo-1589742040837-72bf0bbabb73?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt="First slide" />
                        </div>
                        <div className="carousel-item">
                        <img className="d-block w-100 imgcar" src="https://images.unsplash.com/photo-1589742040837-72bf0bbabb73?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt="First slide" />
                        </div>
                        <div classname="carousel-item">
                        <img className="d-block w-100 imgcar" src="https://images.unsplash.com/photo-1528795259021-d8c86e14354c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt="Third slide" />
                        </div>
                    </div>
                    <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="sr-only">Previous</span>
                    </a>
                    <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="sr-only">Next</span>
                    </a>
                    </div>
                </div>
            </div>
           </div>
    )
}
