import React from "react";
import Navbar from "../../components/layout/Navbar";
import { Row, Col, Form, Container, Button } from "react-bootstrap";
import RoomCard from "../../components/RoomCard";
import { rooms } from "../../room";
import DateRangePicker from "react-bootstrap-daterangepicker";
import "bootstrap-daterangepicker/daterangepicker.css";
import $ from "jquery";
import { useNavigate } from "react-router-dom";
import {saveRoomDetails } from '../../actions/saveRoomDetails';
import  { Fragment, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';


const handleEvent = (event, picker) => {
//   console.log(picker.startDate);
  // let date=document.getElementById("date-pick").value
  // console.log(date.substr(0,10));
  // console.log(date.substr(13));

  
};
const handleCallback = (start, end, label) => {
  console.log(start, end, label);
};

function selector(e, roomSelected) {
  const card = e.target.closest(".card-parent");
  //   console.log(roomSelected)
  // console.log(card )
  // console.log(card.classList.contains("border-light"))

  if (card.classList.contains("border-success")) {
    card.classList.remove("border-success");
    card.classList.add("border-light");
    // console.log($("#table2").hasClass("border-light"));
  } else if (card.classList.contains("border-light")) {
    card.classList.remove("border-light");
    if (roomSelected == 1) {
      if ($("#table2").hasClass("border-success")) {
        $("#table2").removeClass("border-success");
        $("#table2").addClass("border-light");
        $("#table1").addClass("border-success");
      } else {
        card.classList.add("border-success");
      }
    } else if (roomSelected == 2) {
      if ($("#table1").hasClass("border-success")) {
        $("#table1").removeClass("border-success");
        $("#table1").addClass("border-light");
        $("#table2").addClass("border-success");
      } else {
        card.classList.add("border-success");
      }
    }
  }
}

  const BookRoom = ({ saveRoomDetails }) => {

  const navigate = useNavigate();
  const saveDetails = () => {
    let class1 = $("#table1").hasClass("border-success");
    let class2 = $("#table2").hasClass("border-success");

    console.log(class1, class2);

    let roomType;
    if ((class1 = "false" && class2 == "false")) {
      alert("Please book room");
    } else {
      
      if (class1 == true)
        roomType = "General"
      else
        roomType = "Reserved"
      
        // console.log(document.getElementById("date-pick").value);
        let date=document.getElementById("date-pick").value
        let arrivalDate =date.substr(0,10);
        let departureDate=date.substr(13);
      
      saveRoomDetails( { roomType, arrivalDate, departureDate });
      // navigate("/");
    }
  };

  return (
    <div>
      <header
        className="header-main"
        style={{
          background:
            ' no-repeat center/cover url("http://imgup.motion-twin.com/twinoid/a/7/2ed29009_8368070.jpg")',
          height: "43vw",
          position: "relative",
          objectFit: "contain",
        }}
      ></header>

      <h1 style={{ color: "brown" }} className="text-center my-2">
        Book your Room
      </h1>
      <Row className="flex d-flex justify-content-center ">
        {rooms.map((room, x) => (
          <Col key={room.id} sm={12} md={6} lg={4} xl={3}>
            <div onClick={(e) => selector(e, x + 1)}>
              <RoomCard room={room} border={"light"} id={`table${x + 1}`} />
            </div>
          </Col>
        ))}
      </Row>
      <h1 style={{ color: "brown" }} className="text-center mt-4">
        Select date of your stay
      </h1>
      <div className="min-vh-100">
        <Container className="flex d-flex justify-content-center ">
          <DateRangePicker onEvent={handleEvent} onCallback={handleCallback}>
            <input id="date-pick" />
          </DateRangePicker>
        </Container>
      </div>

      <Button
        className="my-4"
        type="button"
        variant="primary"
        onClick={(e) => saveDetails()}
      >
        Book Room
      </Button>
    </div>
  );
}



BookRoom.propTypes = {
  saveRoomDetails: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
 
});

export default connect(mapStateToProps, {
  saveRoomDetails
})(BookRoom);
