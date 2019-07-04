/* eslint-disable default-case */
import { check, body, validationResult } from 'express-validator';

export default class Sanitizer {
/**
   * @returns {JSON}
   */
  static sanitizeUserBioData() {
    return [
      check('password').trim(),
      check('email').isEmail().trim().normalizeEmail(),
      check('firstname').trim(),
      check('lastname').trim(),
      check('isadmin').trim(),
    ];
  }

  /**
   * @returns {JSON}
   */
  static sanitizeUserSignInData() {
    return [
      check('password').trim(),
      check('email').isEmail().trim().normalizeEmail(),
    ];
  }

  /**
   * @returns {JSON}
   */
  static sanitizeCreateTripData() {
    return [
      check('busid').trim().isInt(),
      check('origin').trim(),
      check('tripdate').trim(),
      check('destination').trim(),
      check('fare').trim().isFloat(),
      check('status').trim(),
    ];
  }

  /**
   * @returns {JSON}
   */
  static sanitizeTripQueries() {
    return [
      check('page').isInt(),
      check('quantity').isInt(),
    ];
  }

  /**
   * @returns {JSON}
   */
  static sanitizeBusData() {
    return [
      check('platenumber').trim(),
      check('manufacturer').trim(),
      check('model').trim(),
      check('year').trim(),
      check('capacity').trim(),
      check('vinnumber').trim(),
    ];
  }

  /**
   * @returns {JSON}
   */
  static sanitizeBookingData() {
    return [
      check('tripid').trim().isInt(),
      // check('seatnumber').trim().isInt(),
    ];
  }
}
