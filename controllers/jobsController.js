import { StatusCodes } from "http-status-codes";
import { BadRequestError } from "../errors/index.js";
import User from "../models/User.js";

const createJob = async (req, res) => {
  res.send("Create Job");
};
const deleteJob = async (req, res) => {
  res.send("Delete Job");
};
const getAllJobs = async (req, res) => {
  res.send("Get All Jobs");
};
const updateJob = async (req, res) => {
  console.log("Update Job");
};
const showStats = async (req, res) => {
  res.send("Show Stats");
};

export { createJob, deleteJob, getAllJobs, updateJob, showStats };
