
import "./home.css"

export default function Home(){
    return(
        <>
        <section className="numbers">
      <div className="container">
        <div className="row"> 
          <div className="col-md-3">
            <h2>1287+</h2>
            <h6>savings</h6>
          </div>
          <div className="col-md-3">
            <h2>4587+</h2>
            <h6>photos</h6>
          </div>
          <div className="col-md-3">
            <h2>1287+</h2>
            <h6>rockets</h6>
          </div>
          <div className="col-md-3">
            <h2>1287+</h2>
            <h6>globes</h6>
          </div>
          
        </div>

      </div>

    </section>
    <section className="pride">
        <div className="container">
            <div className="row">
                <div className="col-md-6">
                    <img src={require("../asset/01.jpg")} alt="dv"/>
                </div>
                <div className="col-md-6">
                <h2>We pride ourselves on making real food from the best ingredients.</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio finibus bibendum in sit amet leo. Mauris feugiat erat tellus.</p>
                <button><a href="#/">learn more</a></button>
                </div>

            </div>

        </div>
    </section>
    <section className="ingredients">
      <div className="container">
        <div className="row">
        <div className="col-md-6">
          <h2>We make everything by hand with the best possible ingredients.</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio finibus bibendum in sit amet leo. Mauris feugiat erat tellus.Far far away, behind the word mountains, 
            far from the countries Vokalia and Consonantia, there live the blind texts.</p>
            <ul>
              <li>Etiam sed dolor ac diam volutpat.</li>
              <li>Erat volutpat aliquet imperdiet.</li>
              <li>purus a odio finibus bibendum.</li>
              <button>
              <a href="#/">learn more</a>
              </button>
            </ul>


        </div>
        <div className="col-md-6">
          <img src={require("../asset/2.png")} alt="fv"/>

        </div>


        </div>

      </div>

    </section>

    <section className="paralex">
      <div className="container">
        <div className="col-lg-12 col-md-12">
          <h2>When a man's stomach is full it makes no<br/>
          difference whether he is rich or poor.</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio<br/>
          finibus bibendum in sit amet leo. Mauris feugiat erat tellus.</p>
          <a href="/">watch our story</a>

        </div>

      </div>
    </section>
        </>
    )
}