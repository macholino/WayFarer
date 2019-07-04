"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _createUser = _interopRequireDefault(require("../../controller/createUser"));

var _signIn = _interopRequireDefault(require("../../controller/signIn"));

var _trips = _interopRequireDefault(require("../../controller/trips"));

var _sanitizer = _interopRequireDefault(require("../../middleware/sanitizer"));

var _auth = _interopRequireDefault(require("../../middleware/auth"));

var _bus = _interopRequireDefault(require("../../controller/bus"));

var _booking = _interopRequireDefault(require("../../controller/booking"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var router = _express["default"].Router();

router.post('/auth/signup', _sanitizer["default"].sanitizeUserBioData(), _createUser["default"].signUp);
router.post('/auth/signin', _sanitizer["default"].sanitizeUserSignInData(), _signIn["default"].signIn);
router.post('/trips', _sanitizer["default"].sanitizeCreateTripData(), _auth["default"].auth, _trips["default"].createTrip);
router.get('/trips', _sanitizer["default"].sanitizeTripQueries(), _auth["default"].auth, _trips["default"].getAllTrips);
router.post('/buses', _sanitizer["default"].sanitizeBusData(), _auth["default"].auth, _bus["default"].registerBus);
router.post('/bookings', _sanitizer["default"].sanitizeBookingData(), _auth["default"].auth, _booking["default"].bookASeatOnTrip);
var _default = router;
exports["default"] = _default;