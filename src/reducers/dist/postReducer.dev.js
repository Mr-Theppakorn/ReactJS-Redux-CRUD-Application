"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var postReducer = function postReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case 'ADD_POST':
      return state.concat([action.data]);

    case 'DELETE_POST':
      return state.filter(function (post) {
        return post.id !== action.id;
      });

    case 'EDIT_POST':
      return state.map(function (post) {
        return post.id === action.id ? _objectSpread({}, post, {
          editing: !post.editing
        }) : post;
      });

    case 'UPDATE':
      return state.map(function (post) {
        if (post.id === action.id) {
          return _objectSpread({}, post, {
            title: action.data.newTitle,
            message: action.data.newMessage,
            editing: !post.editing
          });
        } else return post;
      });

    default:
      return state;
  }
};

var _default = postReducer;
exports["default"] = _default;