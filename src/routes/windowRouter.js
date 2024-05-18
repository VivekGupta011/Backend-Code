const express = require("express");
const {
  createWindow,
  updateCard,
  deleteCard,
  getCard,
  getSingleCard
} = require("../Controllers/windowController");
const auth = require("../middlewares/auth");
const eventRouter = express.Router();

eventRouter.get("/",auth,getCard)

eventRouter.post("/", auth, createWindow);

eventRouter.delete("/:id",auth,deleteCard)

eventRouter.put("/:id",auth,updateCard)
eventRouter.get("/:id",auth,getSingleCard)

module.exports = eventRouter;
