import {
    ADD_ROOM_DETAILS
  } from './types';
  import axios from 'axios';
  import { setAlert } from './alert';
  
  export const saveRoomDetails =
    ({ roomType, arrivalDate, departureDate}) =>
    async (dispatch) => {
      console.log( "dcdhj")

      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      };
      console.log( "dcdhj")
     
      const body = JSON.stringify({ roomType, arrivalDate, departureDate});
    
      try {
        console.log( "dcdhj")
       
        const res = await axios.post('/api/roomDetails', body, config);
        dispatch({
          type: ADD_ROOM_DETAILS,
        });
        dispatch(setAlert('Booking Successful!', 'success'));
      } catch (err) {
        console.log(err.message);
      }
    };
  
 