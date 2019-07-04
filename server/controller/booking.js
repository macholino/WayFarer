import Joi from 'joi';
import schema from '../helper/schema';
import errorHandler from '../helper/errorHandler';
import helper from '../helper/helper';
import queries from '../model/queries';
import response from '../helper/responseSchema';
import useful from '../helper/useful';

export default class Booking {
  /**
   * @async
   * @method - This method books a seat on a trip
   * @param {Object} req - client request Object
   * @param {Object} res - Server response Object
   * @returns {JSON} - containing the status message and an array of all trips
   */
  static async bookASeatOnTrip(req, res) {
    const result = Joi.validate(req.body, schema.bookingSchema, { convert: true });
    if (result.error === null) {
      const { tripid } = req.body;
      let { seatnumber } = req.body;
      const {
        email, id: userid, isadmin, firstname,
      } = req.user;
      const dbOperationResult = await helper.wrapDbOperationInTryCatchBlock(res, queries.checkIfThereIsSpaceInVehicle, [tripid]);
      if (dbOperationResult.rowCount === 0) {
        return res.status(400).json(response.failure('The trip requested doesn\'t exist! View our list of available trips', {}));
      }
      const { occupiedspaces, vehiclecapacity } = dbOperationResult.rows[0];
      if (seatnumber != null) {
        if (seatnumber > vehiclecapacity) {
          return res.status(400).json(response.failure(`Seat with seatnumber ${seatnumber} doesn't exist! Choose another seatnumber less than or equal to ${vehiclecapacity}`, {}));
        }
        if (occupiedspaces == null) {
          await useful.bookSeatOp(res, queries.bookTheSeatOnTheTrip, [tripid, userid, seatnumber], seatnumber, firstname, email);
        } else {
          const nulls = occupiedspaces.filter(space => space === null);
          if (nulls.length === 0) {
            return res.status(400).json(response.failure('Vehicle is full! Consider another trip', {}));
          }
          /* istanbul ignore next */
          if (nulls.length < vehiclecapacity) {
            const dbOperationResult2 = await helper.wrapDbOperationInTryCatchBlock(res, queries.checkIfSeatNumberIsAvailabe, [seatnumber, tripid]);
            if (dbOperationResult2.rows[0].occupiedspaces === Number(seatnumber)) {
              return res.status(409).json(response.failure('That seat has already been taken on that trip! Kindly choose another seat', {}));
            }
            await useful.bookSeatOp(res, queries.bookTheSeatOnTheTrip, [tripid, userid, seatnumber], seatnumber, firstname, email);
          }
        }
      } else /* if (seatnumber == null) */ {
        // eslint-disable-next-line no-lonely-if
        if (occupiedspaces == null) {
          const arrayOfNulls = Array(vehiclecapacity).fill(null);
          const dbOperation = await helper.wrapDbOperationInTryCatchBlock(res, queries.initializeBusCapacity, [arrayOfNulls, tripid]);
          seatnumber = 1;
          await useful.bookSeatOp(res, queries.bookTheSeatOnTheTrip, [tripid, userid, seatnumber], seatnumber, firstname, email);
        } else {
          seatnumber = occupiedspaces.findIndex(occupiedspace => occupiedspace === null);
          if (seatnumber === -1) {
            return res.status(400).json(response.failure('Vehicle is full! Consider another trip', {}));
          }
          seatnumber += 1;
          await useful.bookSeatOp(res, queries.bookTheSeatOnTheTrip, [tripid, userid, seatnumber], seatnumber, firstname, email);
        }
      }
    } else {
      errorHandler.validationError(res, result);
    }
    return false;
  }
}
