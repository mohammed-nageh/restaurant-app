
import "./sign.css"


export default function Sign(){
    return(
        <>
        <div className="container">
            <h1 className="headsides">Hurry up! Subscribe our newsletter <br/>
            and get 25% Off</h1>
            <p className="psides">Limited time offer for this month. No credit card required.</p>




            <div className="row">
                <div className="col-md-6">
                <input className="inps" type="text" placeholder="Email Address here"/>
                </div>
                <div className="col-md-6">
                    <button className="bnt">
                        <a href="/">subscribe</a>
                    </button>

                </div>

            </div>

        </div>
        </>
    )
}