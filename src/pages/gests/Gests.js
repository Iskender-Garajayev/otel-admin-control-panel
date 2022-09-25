import React from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import userdata from "../../components/userdata/userdata";
import Table from "react-bootstrap/Table";

const Gests = () => {
  return (
    <div className="home">
      <Sidebar />
      <div className="homecontainer">
        <Navbar />
        <div className="gest-containet">
          <Table striped bordered hover>
          <thead>
                    <tr>
                      <th>Room No</th>
                      <th>ID Number</th>
                      <th>First Name</th>
                      <th>Username</th>
                      <th>Phone Number</th>
                      <th>Price</th>
                    </tr>
                  </thead>
            {userdata.map((userdata) => (
              <>
                  <tbody>
                    <tr>
                      <td> {userdata.room_number}</td>
                      <td> {userdata.user_id}</td>
                      <td> {userdata.name}</td>
                      <td> {userdata.surname}</td>
                      <td> {userdata.phone_number}</td>
                      <td> {userdata.price} TL</td>
                    </tr>
                  </tbody>
              </>
            ))}
          </Table>
        </div>
      </div>
    </div>
  );
};

export default Gests;
