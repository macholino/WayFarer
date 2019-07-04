"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Queries =
/*#__PURE__*/
function () {
  function Queries() {
    _classCallCheck(this, Queries);
  }

  _createClass(Queries, null, [{
    key: "insertNewUser",
    get: function get() {
      return 'INSERT into users (firstname, lastname, password, email, isadmin) VALUES ($1, $2, $3, $4, $5) returning *';
    }
  }, {
    key: "checkIfEmailExists",
    get: function get() {
      return 'SELECT * FROM users WHERE email = $1';
    }
  }, {
    key: "createTrip",
    get: function get() {
      return 'INSERT into trips (busid, origin, destination, tripdate, vehiclecapacity, fare, status) vALUES ($1, $2, $3, $4, $5, $6, $7) returning *';
    }
  }, {
    key: "checkIfATripAlreadyExists",
    get: function get() {
      return 'SELECT * FROM trips WHERE busid = $1 AND tripdate = $2';
    }
  }, {
    key: "getAllTrips",
    get: function get() {
      return 'SELECT * FROM trips LIMIT  $1 OFFSET $2';
    }
  }, {
    key: "checkIfABusAlreadyExists",
    get: function get() {
      return 'SELECT * FROM buses WHERE platenumber = $1 OR vinnumber = $2';
    }
  }, {
    key: "registerBus",
    get: function get() {
      return 'INSERT INTO buses (platenumber, manufacturer, model, capacity, year, vinnumber) VALUES ($1, $2, $3, $4, $5, $6) returning *';
    }
  }, {
    key: "retrieveBusCapacity",
    get: function get() {
      return 'SELECT capacity from buses WHERE id = $1';
    }
  }, {
    key: "checkIfThereIsSpaceInVehicle",
    get: function get() {
      return 'SELECT vehiclecapacity, occupiedspaces FROM trips WHERE id = $1';
    }
  }, {
    key: "bookTheSeatOnTheTrip",
    get: function get() {
      return "WITH insertres AS ( INSERT INTO bookings (tripid, userid) VALUES ($1, $2) RETURNING * ), \n    updateres as (UPDATE trips SET occupiedspaces[$3] = $3 WHERE id = $1 returning * )\n    SELECT insertres.id as bookingid, insertres.userid as userid, insertres.tripid, \n    updateres.busid as busid, updateres.tripdate as tripdate, updateres.occupiedspaces FROM insertres, updateres";
    }
  }, {
    key: "checkIfSeatNumberIsAvailabe",
    get: function get() {
      return 'SELECT occupiedspaces[$1] FROM trips WHERE id = $2';
    }
  }, {
    key: "initializeBusCapacity",
    get: function get() {
      return 'UPDATE trips SET occupiedspaces = $1 WHERE id = $2';
    }
  }]);

  return Queries;
}();

exports["default"] = Queries;