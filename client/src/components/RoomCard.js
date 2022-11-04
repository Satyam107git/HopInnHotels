import React from "react";

import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

function RoomCard( {room,border,id} ) {
 
 
  return (
    <Card className="my-3 p-3 rounded  card-parent border-2" border= {border} id={id}  style={{cursor:"pointer"}} >
      <Card.Img
        src={room.image}
        style={{ height: "15vw", objectFit: "cover" }}
      />

      <Card.Body>
        <Card.Title>
          <strong>{room.name}</strong>
        </Card.Title>

        <Card.Text as="div">
          <div className="my-3"></div>
        </Card.Text>

        <Card.Text as="h4"> {room.description}</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default RoomCard;
