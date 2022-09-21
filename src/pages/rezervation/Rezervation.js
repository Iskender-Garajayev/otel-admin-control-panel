import React from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import "./rezervation.css";

const Rezervation = () => {
  return (
    <div className="home">
      <Sidebar />
      <div className="homecontainer">
        <Navbar />
        <div className="containet">
          <div className="form">
            <div className="input-form">

              <input type="text" placeholder=" ID Number" pattern="[0-9]" />
            </div> <br />
            <div className="input-form">
              <input type="text" placeholder=" Name  " />
            </div><br />
            <div className="input-form">
              <input type="text" placeholder=" Surname " />
            </div><br />
            <div className="input-form">
              <input
                type="tel"
                id="phone"
                name="phone"
                placeholder=" Phone Number"
                pattern="[0-9]"
              />
            </div>
            <button className="button" >Submite</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Rezervation;
