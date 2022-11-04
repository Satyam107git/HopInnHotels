import {
    ADD_ROOM_DETAILS
  } from "../actions/types";
  

  
  export default function (state = { }, action) {
    const { type, payload } = action;
    switch (type) {
      case ADD_ROOM_DETAILS:
        return {
          ...state,
        };
    
      default:
        return state;
    }
  }