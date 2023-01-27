import RentalModel from '../models/Rentals.js';

export const create = async (req, res) => {
  try {
    const doc = new RentalModel({
      key: req.body.key,
      startTimeRegistration: req.body.startTimeRegistration,
      userName: req.body.userName,
      docNumber: req.body.docNumber,
      phoneNumber: req.body.phoneNumber,
      timeRental: req.body.timeRental,
      equipment: req.body.equipment,
      startTimeTrip: req.body.startTimeTrip,
      comment: req.body.comment,
    });

    const post = await doc.save();
    res.json(post);
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: 'Не удалось создать новую аренду',
    });
  }
};

export const getAll = async (req, res) => {
  try {
    const posts = await RentalModel.find();
    return res.json(posts);
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: 'Не удалось создать статью',
    });
  }
};
