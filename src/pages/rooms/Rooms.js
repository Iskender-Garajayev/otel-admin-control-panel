import React from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import './rooms.css'
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import { Container, Row, Col } from "react-bootstrap";


const Rooms = () => {
  return (
    <div className="home">
      <Sidebar />
      <div className="homecontainer">
        <Navbar />
        <div className="card-container">
        <Container>
      <Row>
       <Col className=" card"><MoreVertOutlinedIcon className="card-menu" />
              <span>01</span>
              <AddOutlinedIcon className="card-add"/></Col>
       <Col className=" card"><MoreVertOutlinedIcon className="card-menu" />
              <span>01</span>
              <AddOutlinedIcon className="card-add"/></Col>
       <Col className=" card"><MoreVertOutlinedIcon className="card-menu" />
              <span>01</span>
              <AddOutlinedIcon className="card-add"/></Col>
       <Col className=" card"><MoreVertOutlinedIcon className="card-menu" />
              <span>01</span>
              <AddOutlinedIcon className="card-add"/></Col>
       <Col className=" card"><MoreVertOutlinedIcon className="card-menu" />
              <span>01</span>
              <AddOutlinedIcon className="card-add"/></Col>
       <Col className=" card"><MoreVertOutlinedIcon className="card-menu" />
              <span>01</span>
              <AddOutlinedIcon className="card-add"/></Col>
      </Row>

      <Row>
        <Col xs={6} md={4}>
          xs=6 md=4
        </Col>
        <Col xs={6} md={4}>
          xs=6 md=4
        </Col>
        <Col xs={6} md={4}>
          xs=6 md=4
        </Col>
      </Row>

      {/* Columns are always 50% wide, on mobile and desktop */}
      <Row>
        <Col xs={6}>xs=6</Col>
        <Col xs={6}>xs=6</Col>
      </Row>
    </Container>


          {/* <div class="card-row">
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
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Rooms;
