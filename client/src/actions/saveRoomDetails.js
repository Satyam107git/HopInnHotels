import {
    ADD_ROOM_DETAILS
  } from './types';
  import axios from 'axios';
  import { setAlert } from './alert';
  
  export const saveRoomDetails =
    ({ roomType, arrivalDate, departureDate}) =>
    async (dispatch) => {

      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      };
     
      const body = JSON.stringify({ roomType, arrivalDate, departureDate});
    
      try {
       
        const res = await axios.post('/api/roomDetails', body, config);
        dispatch({
          type: ADD_ROOM_DETAILS,
        });
        dispatch(setAlert('Booking Successful!', 'success'));
      } catch (err) {
        console.log(err.message);
      }
    };
  
 