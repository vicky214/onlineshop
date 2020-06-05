import React,{Component} from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "green" }}
        onClick={onClick}
      />
    );
  }
  
  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style,display:"block", background: "green" }}
        onClick={onClick}
      />
    );
  }

export default class Recomended extends Component {
    
    render() {
        const name = ['v','r','t','j','ds','gh','kj']
      var settings = {
        dots:false,
        infinite:true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 4,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
      };
      return (
        <div className="container mt-3 mb-3">
          <h4>Deals of the Day: </h4>
        <Slider {...settings}>
            {name.map(data=>(
               // <div className="row">
                    <div className="card">
                        <img className="card-img-top" style={{borderRadius:"10px"}} src="https://images.unsplash.com/photo-1529653762956-b0a27278529c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt="Card image cap" />
                        <div className="card-body">
                        <h6 className="card-title text-center">{data}</h6>
                        <p className="text-center"><span>Price : </span></p>
                        <p className="text-center"><span>good</span></p>
                        </div>
                    </div>
                 //   </div>
            ))}
            
        
        </Slider>
        
        </div>
          
      );
    }
  }