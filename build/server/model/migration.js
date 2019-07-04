"use strict";

var _dotenv = _interopRequireDefault(require("dotenv"));

var _dbConnect = _interopRequireDefault(require("./dbConnect"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

_dotenv["default"].config();

var createSchema = function createSchema() {
  var createTripStatus = 'CREATE TYPE tripstatus AS ENUM(\'active\', \'cancelled\')';
  var createUserTable = "CREATE TABLE IF NOT EXISTS users (\n        id bigserial PRIMARY KEY UNIQUE NOT NULL,\n        firstname VARCHAR(200) NOT NULL,\n        lastname VARCHAR(200) NOT NULL,\n        password VARCHAR(500) NOT NULL,\n        email VARCHAR(200) UNIQUE NOT NULL,\n        isadmin BOOLEAN NOT NULL\n    )";
  var createBusesTable = "CREATE TABLE IF NOT EXISTS buses (\n        id bigserial PRIMARY KEY UNIQUE NOT NULL,\n        platenumber VARCHAR(200) NOT NULL,\n        manufacturer VARCHAR(200) NOT NULL,\n        model VARCHAR(200) NOT NULL,\n        year INTEGER NOT NULL,\n        capacity INTEGER NOT NULL,\n        vinnumber VARCHAR(200) UNIQUE NOT NULL\n        )";
  var createTripsTable = "CREATE TABLE IF NOT EXISTS trips (\n        id bigserial PRIMARY KEY UNIQUE NOT NULL,\n        busid INTEGER NOT NULL,\n        origin VARCHAR(200) NOT NULL,\n        destination VARCHAR(200) NOT NULL,\n        tripdate DATE NOT NULL,\n        vehiclecapacity INTEGER NOT NULL,\n        occupiedspaces INTEGER[],\n        fare FLOAT NOT NULL,\n        status tripstatus NOT NULL\n   )";
  var createBookingsTable = "CREATE TABLE IF NOT EXISTS bookings (\n        id bigserial PRIMARY KEY UNIQUE NOT NULL,\n        tripid INTEGER NOT NULL REFERENCES trips(id),\n        userid INTEGER NOT NULL REFERENCES users(id),\n        createdon TIMESTAMP(8) DEFAULT now()\n   )";

  _dbConnect["default"].connect(
  /*#__PURE__*/
  function () {
    var _ref = _asyncToGenerator(
    /*#__PURE__*/
    regeneratorRuntime.mark(function _callee(err, client) {
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              if (err) console.log(err);
              _context.prev = 1;
              _context.next = 4;
              return client.query('DROP TYPE IF EXISTS tripstatus cascade');

            case 4:
              _context.next = 6;
              return client.query('DROP TABLE IF EXISTS users, buses, trips, bookings cascade');

            case 6:
              _context.next = 8;
              return client.query(createTripStatus);

            case 8:
              _context.next = 10;
              return client.query(createUserTable);

            case 10:
              _context.next = 12;
              return client.query(createBusesTable);

            case 12:
              _context.next = 14;
              return client.query(createTripsTable);

            case 14:
              _context.next = 16;
              return client.query(createBookingsTable);

            case 16:
              console.log('Tables created and Populated');
              _context.next = 22;
              break;

            case 19:
              _context.prev = 19;
              _context.t0 = _context["catch"](1);
              console.log(_context.t0);

            case 22:
              client.release();
              process.exit();

            case 24:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[1, 19]]);
    }));

    return function (_x, _x2) {
      return _ref.apply(this, arguments);
    };
  }());
};

createSchema();