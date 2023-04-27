import React from "react";
import DonutChart from "./DonutChart";

const ReportCard = () => {
  return (
    <div className="container my-5">
      <div className="card shadow mb-3">
        <h5 className="card-title ml-2 mt-3 text-center">Total Books Report</h5>
        <hr />
        <div className="row my-3">
        <div className="circle col d-flex mb-3">
          <DonutChart />
        </div>
        <div className="col d-flex ul-div">
          <ul className="card-ul text-center">
            <div className="card-li ">
              <li className="nav-link">44%</li>
              <p>New</p>
            </div>
            <div className="card-li">
              <li className="nav-link">33%</li>
              <p>Issued</p>
            </div>
            <div className="card-li">
              <li className="nav-link">11%</li>
              <p>Lost</p>
            </div>
            <div className="card-li">
              <li className="nav-link">12%</li>
              <p>Returned</p>
            </div>
          </ul>
        </div>
        </div>
   
       
      </div>
    </div>
  );
};

export default ReportCard;