import React from "react";
import lens from "../image/lens.png";
import { Link } from "react-router-dom";
import "./Landing.css";



function LandingPage() {
  return (
   
      <div className="card mb-1 my-card-wrapper">
      <div className="row g-3  my-card">
        <div className="col-md-4">
          <img src={lens} className="img-fluid rounded-start" alt="" />
          
        </div>
        <div className="col-md-8 my-content">
          <div className="card-body">
            <h5 className="card-title my-title">10x Team 04</h5>
            <ul>
            <li className="btn btn-outline-success my-btn">
                <Link to='/posts'>Enter</Link>
            </li>
          </ul>
          </div>
        </div>
      </div>
      
    </div>
  );
}

export default LandingPage;

