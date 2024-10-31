import React from "react";
import Navbar from "../navbar";

export default function Home() {
  return (
    <>
      <div>
        <Navbar />
      </div>
      <div className="card mt-3" style={{ width: "18rem", maxHeight:"360px"}}>
        <img src="..." className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">
           this is name
          </p>
          <div className="container">
            <select className="m-2 h-100 bg-sucess">
              {
                Array.from(Array(6),(e,i)=>{
                  return(
                   <option key={i+1} value={i+1}>{i+1}</option>
                  )
                  })
              }
            </select>
            <select className="m-2 bg-sucess rounded">
              <option value="half">half</option>
              <option value="full">full</option>
            </select>
          </div>
        </div>
      </div>
    </>
  );
}
