import React from "react";
import Navbar from "../../components/layout/Navbar";
import { Row, Col, Form, Container, Button } from "react-bootstrap";
import RoomCard from "../../components/RoomCard";
import { rooms } from "../../room";
import DateRangePicker from "react-bootstrap-daterangepicker";
import "bootstrap-daterangepicker/daterangepicker.css";

const handleEvent = (event, picker) => {
  console.log(picker.startDate);
  console.log(document.getElementById('date-pick').value)
};
const handleCallback = (start, end, label) => {
  console.log(start, end, label);
};

const today = new Date();

function BookRoom() {
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
      >
      </header>
      <h1 style={{ color: "brown" }} className="text-center my-2">
        Book your Room
      </h1>
      <Row className="flex d-flex justify-content-center ">
        {rooms.map((room) => (
          <Col key={room.id} sm={12} md={6} lg={4} xl={3}>
            <RoomCard room={room} />
          </Col>
        ))}
      </Row>
      <h1 style={{ color: "brown" }} className="text-center mt-4">
        Select date of your stay
      </h1>
      <div className="min-vh-100">
        <Container className="flex d-flex justify-content-center " >
          <DateRangePicker onEvent={handleEvent} onCallback={handleCallback}>
            <input id="date-pick" />
          </DateRangePicker>
        </Container>
      </div>
    </div>
  );
}
export default BookRoom;


