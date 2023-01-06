import React from 'react'
import last1 from "../imgs/last1.jpg"
import last2 from "../imgs/last2.jpg"
import last3 from "../imgs/last3.jpg"
import last4 from "../imgs/last4.jpg"
import last5 from "../imgs/last5.jpg"
import { Link } from 'react-router-dom'


const Pauseonhover = () => {
  return (
    <div className='shop_category whiteback margins'>
    <h3 className="start"><span className='BottomLine'>Shop </span>by category</h3>
    
    <div className="card-group container mt-2 mb-5 widths">
    
  <div className="card m textalignment">
  <Link to='/description' style={{textDecoration: "none"}}>
    <img src={last1} className="card-img-top imgsize" alt="..."/>
    
    <div className="card-body">
      <h5 className="card-title" >Covid Essentials</h5>
      {/* <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p> */}
      <p className="card-text iltalicsView"><small className="text-muted">Last updated 3 mins ago</small></p>
    </div>
    </Link>
  </div>
  
  <div className="card textalignment">
  <Link to='/description' style={{textDecoration: "none"}}>
    <img src={last2} className="card-img-top imgsize" alt="..."/>
    <div className="card-body">
      <h5 className="card-title">Ayush</h5>
      {/* <p className="card-text">This card has supporting text below as a natural lead-in to additional content.</p> */}
      <p className="card-text iltalicsView"><small className="text-muted">Last updated 3 mins ago</small></p>
    </div>
    </Link>
  </div>
  <div className="card textalignment">
  <Link to='/description' style={{textDecoration: "none"}}>
    <img src={last3} className="card-img-top imgsize" alt="..."/>
    <div className="card-body">
      <h5 className="card-title">Mom & Baby</h5>
      {/* <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p> */}
      <p className="card-text iltalicsView"><small className="text-muted">Last updated 3 mins ago</small></p>
    </div>
    </Link>
  </div>
  <div className="card textalignment">
  <Link to='/description' style={{textDecoration: "none"}}>
    <img src={last4} className="card-img-top imgsize" alt="..."/>
    <div className="card-body">
      <h5 className="card-title">Devices</h5>
      {/* <p className="card-text">This card has supporting text below as a natural lead-in to additional content.</p> */}
      <p className="card-text iltalicsView"><small className="text-muted">Last updated 3 mins ago</small></p>
    </div>
    </Link>
  </div>
  <div className="card textalignment">
  <Link to='/description' style={{textDecoration: "none"}}>
    <img src={last5} className="card-img-top imgsize" alt="..."/>
    <div className="card-body">
      <h5 className="card-title">Fitness</h5>
      {/* <p className="card-text">This card has supporting text below as a natural lead-in to additional content.</p> */}
      <p className="card-text iltalicsView"><small className="text-muted">Last updated 3 mins ago</small></p>
    </div>
    </Link>
  </div>
</div>
    </div>
  )
}

export default Pauseonhover