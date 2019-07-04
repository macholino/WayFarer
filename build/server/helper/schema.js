"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _joi = _interopRequireDefault(require("joi"));

var _joiDate = _interopRequireDefault(require("@hapi/joi-date"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Joi = _joi["default"].extend(_joiDate["default"]);

var Schemas =
/*#__PURE__*/
function () {
  function Schemas() {
    _classCallCheck(this, Schemas);
  }

  _createClass(Schemas, null, [{
    key: "userSchema",

    /**
     * returns schema for validating user signup data
     * @returns {Object} schema for validation
     */
    get: function get() {
      return Joi.object({
        firstname: Joi.string().min(2).trim().required(),
        lastname: Joi.string().trim().min(2).required(),
        password: Joi.string().alphanum().min(4).trim().max(50).required(),
        email: Joi.string().email().min(5).trim().required(),
        isadmin: Joi["boolean"]().required()
      });
    }
    /**
     * returns schema for validating user sign in data
     * @returns {Object} schema for validation
     */

  }, {
    key: "signInSchema",
    get: function get() {
      return Joi.object({
        password: Joi.string().alphanum().min(4).trim().max(50).required(),
        email: Joi.string().email().min(5).trim().required()
      });
    }
    /**
     * returns schema for validating user sign in data
     * @returns {Object} schema for creating an object
     */

  }, {
    key: "createTripSchema",
    get: function get() {
      return Joi.object({
        busid: Joi.number().integer().required(),
        origin: Joi.string().trim().min(3).required(),
        tripdate: Joi.date().format('YYYY-MM-DD').required(),
        destination: Joi.string().trim().min(3).required(),
        fare: Joi.number().required(),
        status: Joi.string().trim().valid('active', 'cancelled')
      });
    }
    /**
     * returns schema for validating user sign in data
     * @returns {Object} schema for creating an object
     */

  }, {
    key: "getAllTripsSchema",
    get: function get() {
      return Joi.object({
        page: Joi.number().integer(),
        quantity: Joi.number().integer()
      });
    }
    /**
     * returns schema for validating bus registration data
     * @returns {Object} schema for creating an object
     */

  }, {
    key: "registerBusSchema",
    get: function get() {
      return Joi.object({
        platenumber: Joi.string().trim().required(),
        manufacturer: Joi.string().required(),
        model: Joi.string().trim().required(),
        year: Joi.number().integer().min(1999).max(new Date().getFullYear()).required(),
        capacity: Joi.number().required(),
        vinnumber: Joi.string().trim().required()
      });
    }
    /**
     * returns schema for validating booking data
     * @returns {Object} schema for creating an object
     */

  }, {
    key: "bookingSchema",
    get: function get() {
      return Joi.object({
        tripid: Joi.number().integer().min(1).required(),
        seatnumber: Joi.number().integer().optional()
      });
    }
  }]);

  return Schemas;
}();

exports["default"] = Schemas;