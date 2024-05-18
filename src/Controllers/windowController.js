const { model } = require("mongoose");
const windowModel = require("../models/window");
const createWindow = async (req, res) => {
  console.log(req.userId);
  // // this part
  const { title, description, email, windowNumber } = req.body;

  // new object creation
  const newWindow = new windowModel({
    title: title,
    description: description,
    email: email,
    windowNumber: windowNumber,
    userId: req.userId,
  });
  try {
    await newWindow.save();
    res.status(201).json(newWindow);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Something went wrong!" });
  }
};
const updateCard = async (req, res) => {
  const id = req.params.id;
  const { title, description, email, windowNumber } = req.body;

  const updateWindow = {
    title: title,
    description: description,
    email: email,
    windowNumber: windowNumber,
  };

  try {
    const updatedWindow = await windowModel.findByIdAndUpdate(
      id,
      updateWindow,
      { new: true }
    );
    if (!updatedWindow) {
      return res.status(404).json({ message: "Window not found" });
    }
    res.status(200).json(updatedWindow);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Something went wrong!" });
  }
};

const deleteCard = async (req, res) => {
    const id = req.params.id;
    try {
        const deletedWindow = await windowModel.findByIdAndRemove(id);
        if (!deletedWindow) {
            return res.status(404).json({ message: "Window not found" });
        }
        res.status(202).json({ message: "Window deleted successfully" });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Something went wrong!" });
    }
};
const getCard = async (req, res) => {
  try {
    const notes = await windowModel.find({ userId: req.userId });
    res.status(200).json(notes);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Something went wrong" });
  }
};
const getSingleCard = async (req, res) => {
  try {
    // // this part
    const id = req.params.id;
    const SingleElement = await windowModel.findById(id);
    res.status(200).json(SingleElement);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Something went wrong" });
  }
};
module.exports = {
  createWindow,
  updateCard,
  deleteCard,
  getCard,
  getSingleCard
};
