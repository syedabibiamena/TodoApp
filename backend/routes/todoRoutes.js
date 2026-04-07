import express from "express";
import {
  creating_a_Task,
  geting_a_Tasks,
  get_a_Single_Task,
  update_a_Task,
  delete_a_Task,
  updating_Status,
} from "../controllers/todoController.js";

const rout = express.Rout();

rout.post("/", creating_a_Task);
rout.get("/", geting_a_Tasks);
rout.get("/:id", get_a_Single_Task);
rout.put("/:id", update_a_Task);
rout.delete("/:id", delete_a_Task);
rout.patch("/:id/status", updating_Status);
rout.get("/", (req, res) => {
  res.send("Todo API Working");
});
export default rout;