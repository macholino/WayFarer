"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _expressValidator = require("express-validator");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Sanitizer =
/*#__PURE__*/
function () {
  function Sanitizer() {
    _classCallCheck(this, Sanitizer);
  }

  _createClass(Sanitizer, null, [{
    key: "sanitizeUserBioData",

    /**
       * @returns {JSON}
       */
    value: function sanitizeUserBioData() {
      return [(0, _expressValidator.check)('password').trim(), (0, _expressValidator.check)('email').isEmail().trim().normalizeEmail(), (0, _expressValidator.check)('firstname').trim(), (0, _expressValidator.check)('lastname').trim(), (0, _expressValidator.check)('isadmin').trim()];
    }
    /**
     * @returns {JSON}
     */

  }, {
    key: "sanitizeUserSignInData",
    value: function sanitizeUserSignInData() {
      return [(0, _expressValidator.check)('password').trim(), (0, _expressValidator.check)('email').isEmail().trim().normalizeEmail()];
    }
    /**
     * @returns {JSON}
     */

  }, {
    key: "sanitizeCreateTripData",
    value: function sanitizeCreateTripData() {
      return [(0, _expressValidator.check)('busid').trim().isInt(), (0, _expressValidator.check)('origin').trim(), (0, _expressValidator.check)('tripdate').trim(), (0, _expressValidator.check)('destination').trim(), (0, _expressValidator.check)('fare').trim().isFloat(), (0, _expressValidator.check)('status').trim()];
    }
    /**
     * @returns {JSON}
     */

  }, {
    key: "sanitizeTripQueries",
    value: function sanitizeTripQueries() {
      return [(0, _expressValidator.check)('page').isInt(), (0, _expressValidator.check)('quantity').isInt()];
    }
    /**
     * @returns {JSON}
     */

  }, {
    key: "sanitizeBusData",
    value: function sanitizeBusData() {
      return [(0, _expressValidator.check)('platenumber').trim(), (0, _expressValidator.check)('manufacturer').trim(), (0, _expressValidator.check)('model').trim(), (0, _expressValidator.check)('year').trim(), (0, _expressValidator.check)('capacity').trim(), (0, _expressValidator.check)('vinnumber').trim()];
    }
    /**
     * @returns {JSON}
     */

  }, {
    key: "sanitizeBookingData",
    value: function sanitizeBookingData() {
      return [(0, _expressValidator.check)('tripid').trim().isInt()];
    }
  }]);

  return Sanitizer;
}();

exports["default"] = Sanitizer;