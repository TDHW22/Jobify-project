import CustomAPIError from "./custom-error";
import { StatusCodes } from "http-status-codes";

class BadRequest extends CustomAPIError {
  constructor(message) {
    super(message);
    this.StatusCodes = StatusCodes.BAD_REQUEST;
  }
}

module.exports = BadRequest;
