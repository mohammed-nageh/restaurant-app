import "./navbar.css";


export default function Navbar(){
    return(
        <>
        <nav className="navbar navbar-expand-lg">
  <div className="container-fluid">
    <a href="#heado">
    <img src={require("../asset/logo.png")} height={70} alt=""/>
    </a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className=" collapse navbar-collapse" id="navbarNav">
      <ul className="ms-auto navbar-nav">
        <li className="nav-item">
          <a  className="nav-link active ols" aria-current="page" href="#heado">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link ols" href="#footo">About us</a>
        </li>
        <li className=" nav-item">
          <a className="nav-link ols" href="#Productso">Explore foods</a>
        </li>
        <li className=" nav-item">
          <a className="nav-link ols" href="#sideheado">Reviews</a>
        </li>
        <li className=" nav-item">
          <a className="nav-link ols" href="#headmoreo">FAQ</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
        </>
    )
}