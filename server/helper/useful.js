import helper from './helper';
import response from './responseSchema';
/**
 * Class holding useful helper functions
 */
export default class Useful {
  /**
 * This method performs the sql query
 * @method
 * @param {object} res - server response object
 * @param {object} query - SQL query
 * @param {array} args - an array of arguments to be used as input to the query
 * @param {Object} - Query result
 */
  static async bookSeatOp(res, query, args, seatnumber, firstname, email) {
    const dbOperationResult = await helper.wrapDbOperationInTryCatchBlock(res, query, args);
    dbOperationResult.rows[0].seatnumber = seatnumber;
    dbOperationResult.rows[0].firstname = firstname;
    dbOperationResult.rows[0].email = email;
    return res.status(201).json(response.success(`Seat booked successfully with seat number ${seatnumber}`, dbOperationResult.rows[0]));
  }


}
