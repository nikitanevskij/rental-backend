import mongoose from 'mongoose';

const RentalSchema = new mongoose.Schema(
  {
    key: {
      type: String,
      required: true,
    },
    startTimeRegistration: {
      type: String,
      required: true,
    },
    userName: {
      type: String,
      required: true,
    },
    docNumber: {
      type: String,
      required: true,
    },
    phoneNumber: {
      type: String,
      required: true,
    },
    timeRental: {
      type: String,
      required: true,
    },
    equipment: {
      type: Array,
      default: [],
    },
    startTimeTrip: {
      type: String,
      required: true,
    },
    comment: {
      type: String,
    },
  },
  {
    timestamps: true,
  },
);

export default mongoose.model('Rental', RentalSchema);
