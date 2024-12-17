
import "./header.css";
import "../asset/header.jpg";

export default function Header(){
    return(
       <header className="head" id="heado">
        <div className="container">
           <div className="row">
           <div className="col-md-6">
            <h2>Good food choices are good investments.</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio finibus bibendum amet leo.</p>
            <button className="btn-one">Order Now</button>
            <button className="btn-two">Learn more</button>
            </div>

            
            <div className="col-md-6">
              
            </div>
           </div>
        </div>
       </header>
    )
}