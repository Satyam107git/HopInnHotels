const mongoose=require('mongoose');
const Schema=mongoose.Schema

const RoomDetailSchema=new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'user'
      },
   roomNo:{
    type: Number,
    required: true
   },
   arrivalDate:{
    type: String,
    required: true
   },
   departureDate:{
    type: String,
    required: true
   },
   roomType:{
    type: String,
    required: true
   }

});

module.exports= roomDetail= mongoose.model('roomDetail',RoomDetailSchema);