"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.provider = exports.authRef = exports.databaseRef = void 0;

var firebase = _interopRequireWildcard(require("firebase"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

var options = {
  apiKey: 'AIzaSyAaSHbdruM1DnyZ1k4QLAlOs_Ho-rAVxUc',
  authDomain: 'ondetempico.firebaseapp.com',
  databaseURL: 'https://ondetempico.firebaseio.com',
  storageBucket: 'ondetempico.appspot.com'
};
var firebaseApp = firebase.initializeApp(options);
var databaseRef = firebaseApp.database();
exports.databaseRef = databaseRef;
var authRef = firebaseApp.auth();
exports.authRef = authRef;
var provider = new firebase.auth.FacebookAuthProvider();
exports.provider = provider;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpcmViYXNlLnRzIl0sIm5hbWVzIjpbIm9wdGlvbnMiLCJhcGlLZXkiLCJhdXRoRG9tYWluIiwiZGF0YWJhc2VVUkwiLCJzdG9yYWdlQnVja2V0IiwiZmlyZWJhc2VBcHAiLCJmaXJlYmFzZSIsImluaXRpYWxpemVBcHAiLCJkYXRhYmFzZVJlZiIsImRhdGFiYXNlIiwiYXV0aFJlZiIsImF1dGgiLCJwcm92aWRlciIsIkZhY2Vib29rQXV0aFByb3ZpZGVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7Ozs7QUFFQSxJQUFNQSxPQUFPLEdBQUc7QUFDZEMsRUFBQUEsTUFBTSxFQUFFLHlDQURNO0FBRWRDLEVBQUFBLFVBQVUsRUFBRSw2QkFGRTtBQUdkQyxFQUFBQSxXQUFXLEVBQUUsb0NBSEM7QUFJZEMsRUFBQUEsYUFBYSxFQUFFO0FBSkQsQ0FBaEI7QUFPQSxJQUFNQyxXQUE2QixHQUFHQyxRQUFRLENBQUNDLGFBQVQsQ0FBdUJQLE9BQXZCLENBQXRDO0FBRU8sSUFBTVEsV0FBdUMsR0FBR0gsV0FBVyxDQUFDSSxRQUFaLEVBQWhEOztBQUVBLElBQU1DLE9BQTJCLEdBQUdMLFdBQVcsQ0FBQ00sSUFBWixFQUFwQzs7QUFDQSxJQUFNQyxRQUE0QyxHQUFHLElBQUlOLFFBQVEsQ0FBQ0ssSUFBVCxDQUFjRSxvQkFBbEIsRUFBckQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBmaXJlYmFzZSBmcm9tICdmaXJlYmFzZSdcblxuY29uc3Qgb3B0aW9ucyA9IHtcbiAgYXBpS2V5OiAnQUl6YVN5QWFTSGJkcnVNMURueVoxazRRTEFsT3NfSG8tckFWeFVjJyxcbiAgYXV0aERvbWFpbjogJ29uZGV0ZW1waWNvLmZpcmViYXNlYXBwLmNvbScsXG4gIGRhdGFiYXNlVVJMOiAnaHR0cHM6Ly9vbmRldGVtcGljby5maXJlYmFzZWlvLmNvbScsXG4gIHN0b3JhZ2VCdWNrZXQ6ICdvbmRldGVtcGljby5hcHBzcG90LmNvbSdcbn1cblxuY29uc3QgZmlyZWJhc2VBcHA6IGZpcmViYXNlLmFwcC5BcHAgPSBmaXJlYmFzZS5pbml0aWFsaXplQXBwKG9wdGlvbnMpXG5cbmV4cG9ydCBjb25zdCBkYXRhYmFzZVJlZjogZmlyZWJhc2UuZGF0YWJhc2UuRGF0YWJhc2UgPSBmaXJlYmFzZUFwcC5kYXRhYmFzZSgpXG5cbmV4cG9ydCBjb25zdCBhdXRoUmVmOiBmaXJlYmFzZS5hdXRoLkF1dGggPSBmaXJlYmFzZUFwcC5hdXRoKClcbmV4cG9ydCBjb25zdCBwcm92aWRlcjogZmlyZWJhc2UuYXV0aC5GYWNlYm9va0F1dGhQcm92aWRlciA9IG5ldyBmaXJlYmFzZS5hdXRoLkZhY2Vib29rQXV0aFByb3ZpZGVyKClcbiJdfQ==