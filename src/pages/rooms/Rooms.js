import React from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import './rooms.css'
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';


const Rooms = () => {
  return (
    <div className="home">
      <Sidebar />
      <div className="homecontainer">
        <Navbar />
        <div className="containet">
          <div class="card-row">
            <div className=" card" >
              <MoreVertOutlinedIcon className="card-menu" />
              <span>01</span>
              <AddOutlinedIcon className="card-add"/>
            </div>
            <div className=" card" >
              <MoreVertOutlinedIcon className="card-menu" />
              <span>02</span>
              <AddOutlinedIcon className="card-add"/>
            </div>
            <div className=" card-yellow" >
              <MoreVertOutlinedIcon className="card-menu" />
              <span>03</span>
              <AddOutlinedIcon className="card-add"/>
            </div>
            <div className=" card" >
              <MoreVertOutlinedIcon className="card-menu" />
              <span>04</span>
              <AddOutlinedIcon className="card-add"/>
            </div>
            <div className=" card-red" >
              <MoreVertOutlinedIcon className="card-menu" />
              <span>05</span>
              <AddOutlinedIcon className="card-add"/>
            </div>
            <div className=" card" >
              <MoreVertOutlinedIcon className="card-menu" />
              <span>06</span>
              <AddOutlinedIcon className="card-add"/>
            </div>
          </div>
          <div class="card-row">
            <div className=" card-red" >
              <MoreVertOutlinedIcon className="card-menu" />
              <span>07</span>
              <AddOutlinedIcon className="card-add"/>
            </div>
            <div className=" card" >
              <MoreVertOutlinedIcon className="card-menu" />
              <span>08</span>
              <AddOutlinedIcon className="card-add"/>
            </div>
            <div className=" card-red" >
              <MoreVertOutlinedIcon className="card-menu" />
              <span>09</span>
              <AddOutlinedIcon className="card-add"/>
            </div>
            <div className=" card-yellow" >
              <MoreVertOutlinedIcon className="card-menu" />
              <span>10</span>
              <AddOutlinedIcon className="card-add"/>
            </div>
            <div className=" card-red" >
              <MoreVertOutlinedIcon className="card-menu" />
              <span>11</span>
              <AddOutlinedIcon className="card-add"/>
            </div>
            <div className=" card" >
              <MoreVertOutlinedIcon className="card-menu" />
              <span>12</span>
              <AddOutlinedIcon className="card-add"/>
            </div>
          </div>

          <div class="card-row">
            <div className=" card-red" >
              <MoreVertOutlinedIcon className="card-menu" />
              <span>13</span>
              <AddOutlinedIcon className="card-add"/>
            </div>
            <div className=" card" >
              <MoreVertOutlinedIcon className="card-menu" />
              <span>14</span>
              <AddOutlinedIcon className="card-add"/>
            </div>
            <div className=" card" >
              <MoreVertOutlinedIcon className="card-menu" />
              <span>15</span>
              <AddOutlinedIcon className="card-add"/>
            </div>
            <div className=" card" >
              <MoreVertOutlinedIcon className="card-menu" />
              <span>16</span>
              <AddOutlinedIcon className="card-add"/>
            </div>
            <div className=" card-yellow" >
              <MoreVertOutlinedIcon className="card-menu" />
              <span>17</span>
              <AddOutlinedIcon className="card-add"/>
            </div>
            <div className=" card-yellow" >
              <MoreVertOutlinedIcon className="card-menu" />
              <span>18</span>
              <AddOutlinedIcon className="card-add"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Rooms;
