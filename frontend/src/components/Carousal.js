import React from 'react'
import c1 from '../imgs/c1.jpg'
import c2 from '../imgs/c2.jpg'
import c3 from '../imgs/c3.jpg'

function Carousal() {
  return (
    <>
    <div id="carouselExampleIndicators " className="carousel slide marginImg" data-bs-ride="true">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={c1} className="d-block c " alt="..."/>
    </div>
    <div className="carousel-item">
      <img src={c2} className="d-block c " alt="..."/>
    </div>
    <div className="carousel-item">
      <img src={c3} className="d-block c" alt="..."/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
    </>
  )
}
export default Carousal