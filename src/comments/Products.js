
import "./products.css"


export default function Products(){
    return(
        <>
        <div className="container parnetProducts" >
            <div className="row">
                <h1 className="headExplore" id="Productso"> Explore Our Foods</h1>
                <p className="para">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio finibus bibendum in sit amet <br/> leo. Mauris feugiat erat tellus.
                    Far far away, behind the word mountains, far
                 from the countries Vokalia and <br/> Consonantia, there live the blind texts. Separated they live in Bookmarksgrove.</p>


                <div className="col-md-4">
                <div className="card dive" >
                <img src={require("../asset/01.jpg")} className="card-img-top" alt="dv"/>
                <div className="card-body bg-dark">
                <h5 className="card-title text-danger">Rainbow Vegetable Sandwich</h5>
                <p className="card-text text-warning">Time: 15 - 20 Minutes | Serves: 1</p>
                <p className="text-light">$10.50<del className="delete">$11.70</del></p>
                <button className=" order"><a href="/" >order now</a></button>
               </div>
               </div>

                </div>


                <div className="col-md-4">

                <div className="card dive" >
                <img src={require("../asset/02.jpg")} className="card-img-top" alt="dv"/>
                <div className="card-body bg-dark">
                <h5 className="card-title text-danger">Vegetarian Burger</h5>
                <p className="card-text text-warning">Time: 30 - 45 Minutes | Serves: 1</p>
                <p className="text-light">$9.20<del className="delete">$10.50</del></p>
                <button className=" order"><a href="/" >order now</a></button>
               </div>
               </div>

                </div>


                <div className="col-md-4">

                <div className="card dive" >
                <img src={require("../asset/03.jpg")} className="card-img-top imgae" alt="dv"/>
                <div className="card-body bg-dark">
                <h5 className="card-title text-danger">Raspberry Stuffed French Toast</h5>
                <p className="card-text text-warning">Time: 10 - 15 Minutes | Serves: 1</p>
                <p className="text-light">$12.50<del className="delete">$13.20</del></p>
                <button className="order"><a href="/" >order now</a></button>
               </div>
               </div>
                </div>
                
            </div>

        </div>
        </>
    )
}
