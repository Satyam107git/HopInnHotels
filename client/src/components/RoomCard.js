import React from 'react'
 
import { Card } from "react-bootstrap";
import { Link } from 'react-router-dom'


function RoomCard({room}) {
  return (
    <Card className="my-3 p-3 rounded">

    <Link to={`/room/${room.id}`}>
      <Card.Img src={room.image} style={{  height: "15vw" ,  objectFit: "cover"}}/>
    </Link>

    <Card.Body>
      <Link to={`/select-date`}>
        <Card.Title>
          <strong>{room.name}</strong>
        </Card.Title>
      </Link>
      
      <Card.Text as="div">
        <div className="my-3">
 
        </div>
      </Card.Text>

      <Card.Text as="h4">  {room.description}</Card.Text>
    </Card.Body>
  </Card>
  )
}

export default RoomCard