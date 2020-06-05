import React from 'react';
import {Link,useHistory} from 'react-router-dom';

export default function Navbar() {
    const history = useHistory()
    return (
        <nav className="navbar navbar-expand-lg navbar-light navcolor">
            <div className="navbar-brand pr-3"><Link to="/" style={{textDecoration:"none"}}>OnlineShop</Link></div>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                <li class="nav-link nav-item pr-5">
                    <Link className="link" to="/">Home</Link>
                </li>
                <li class="nav-link nav-item dropdown pr-5">
                    <Link className="link dropdown-toggle" data-toggle="dropdown" role="button" id="navbarDropdown"  aria-expanded="false" to="/products">Product</Link>
                    <div class="dropdown-menu" aria-labelledby="navbarDropdown">          
                        <li><Link className="linkd dropdown-item" to="/products">Mobiles</Link></li>
                        <li><Link className="linkd dropdown-item" to="/products">clothes</Link></li>
                        <li><Link className="linkd dropdown-item" to="/products">Laptop</Link></li>
                        <li><Link className="linkd dropdown-item" to="/products">Electronic Items</Link></li>
                        <li><Link className="linkd dropdown-item" to="/products">food item</Link></li>
                    </div>
                </li>
                <li class="nav-link nav-item dropdown pr-5">
                    <Link className="link dropdown-toggle" data-toggle="dropdown" role="button" id="navbarDropdown"  aria-expanded="false" to="/signinseller">Seller Account</Link>
                    <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                        <li><Link className="linkd dropdown-item" to="/signupseller">SignUp</Link></li>
                        <li><Link className="linkd dropdown-item" to="/signinseller">Login</Link></li>
                        <li><Link className="linkd dropdown-item" to="/createproduct">Create Product</Link></li>
                    </div>
                </li>
                <li class="nav-link nav-item dropdown pr-5">
                    <Link className="link dropdown-toggle" data-toggle="dropdown" role="button" id="navbarDropdown"  aria-expanded="false" to="/signin">User Account</Link>
                    <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                        <li><Link className="linkd dropdown-item" to="/signup">SignUp</Link></li>
                        <li><Link className="linkd dropdown-item" to="/signin">Login</Link></li>
                        <li><Link className="linkd dropdown-item" to="/cart"><i className="fas fa-shopping-cart pr-1"></i>Cart</Link></li>   
                     </div>
                </li>
                <li>
                <button className="btn #c62828 red darken-3"
                    onClick={()=>{
                    localStorage.clear()
                    history.push('/signin')
                    }}
                    >
                        Logout
                    </button>
                 </li>
                </ul>
                <form class="form-inline my-2 my-lg-0">
                <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                </form>
                
            </div>
        </nav>
            
    );
}
