'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _defineProperty2 = require('babel-runtime/helpers/defineProperty');

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _cryptoJs = require('crypto-js');

var _cryptoJs2 = _interopRequireDefault(_cryptoJs);

var _Layout = require('../components/Layout');

var _Layout2 = _interopRequireDefault(_Layout);

var _semanticUiReact = require('semantic-ui-react');

var _semanticUiCalendarReact = require('semantic-ui-calendar-react');

var _pramaan = require('../ethereum/pramaan');

var _pramaan2 = _interopRequireDefault(_pramaan);

var _web = require('../ethereum/web3');

var _web2 = _interopRequireDefault(_web);

var _statesdrop = require('../components/statesdrop');

var _statesdrop2 = _interopRequireDefault(_statesdrop);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'F:\\Project1\\EPramaan\\pages\\aadhardept.js?entry';


var Aadhar = function (_Component) {
  (0, _inherits3.default)(Aadhar, _Component);

  function Aadhar(props) {
    var _this2 = this;

    (0, _classCallCheck3.default)(this, Aadhar);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Aadhar.__proto__ || (0, _getPrototypeOf2.default)(Aadhar)).call(this, props));

    _this.handleSubmit = function () {
      var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(event) {
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _this.setState({
                  loading: true,
                  fnameerror: false,
                  lnameerror: false,
                  mnameerror: false,
                  pinerror: false,
                  moberror: false,
                  anoerror: false,
                  open: false
                });
                if (!_this.state.fname.match(/^[a-zA-Z]+$/)) {
                  _this.setState({
                    fnameerror: true,
                    loading: false
                  });
                  _this.fname.focus();
                } else if (!_this.state.mname.match(/^[a-zA-Z]+$/)) {
                  _this.setState({
                    mnameerror: true,
                    loading: false
                  });
                  _this.mname.focus();
                } else if (!_this.state.lname.match(/^[a-zA-Z]+$/)) {
                  _this.setState({
                    lnameerror: true,
                    loading: false
                  });
                  _this.lname.focus();
                } else if (_this.state.pin.length != 6 || isNaN(_this.state.pin) === true) {
                  _this.setState({
                    pinerror: true,
                    loading: false
                  });
                  _this.pin.focus();
                } else if (_this.state.mob.length != 10 || isNaN(_this.state.mob) === true) {
                  _this.setState({
                    moberror: true,
                    loading: false
                  });
                  _this.mob.focus();
                } else if (_this.state.ano.length != 12 || isNaN(_this.state.ano) === true) {
                  _this.setState({
                    anoerror: true,
                    loading: false
                  });
                  _this.ano.focus();
                } else {
                  _this.setState({
                    open: true
                  });
                }

              case 2:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, _this2);
      }));

      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }();

    _this.handleCancel = function () {
      return _this.setState({
        open: false,
        loading: false
      });
    };

    _this.handleconf = function () {
      var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(event) {
        var reacth, test, accounts;
        return _regenerator2.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _this.setState({
                  open: false
                });
                _context2.prev = 1;
                reacth = void 0;
                test = void 0;

                test = (_this.state.fname + _this.state.mname + _this.state.lname + _this.state.date + _this.state.flat + _this.state.build + _this.state.road + _this.state.land + _this.state.tvc + _this.state.subd + _this.state.dist + _this.state.stat + _this.state.pin + _this.state.mob + _this.state.ano).toString();
                test = test.toLowerCase();
                console.log(test);
                reacth = _cryptoJs2.default.SHA256(test).toString();
                console.log(reacth);
                _context2.next = 11;
                return _web2.default.eth.getAccounts();

              case 11:
                accounts = _context2.sent;
                _context2.next = 14;
                return _pramaan2.default.methods.storemap(reacth, _this.state.ano).send({
                  from: accounts[0]
                });

              case 14:
                _this.setState({
                  loading: false, open: false
                });
                _context2.next = 20;
                break;

              case 17:
                _context2.prev = 17;
                _context2.t0 = _context2['catch'](1);

                _this.setState({
                  loading: false,
                  open: false
                });

              case 20:

                e.preventDefault();

              case 21:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, _this2, [[1, 17]]);
      }));

      return function (_x2) {
        return _ref2.apply(this, arguments);
      };
    }();

    _this.handleChange = function (event, _ref3) {
      var name = _ref3.name,
          value = _ref3.value;

      if (_this.state.hasOwnProperty(name)) {
        _this.setState((0, _defineProperty3.default)({}, name, value));
      }
    };

    _this.state = {
      fname: '',
      date: '',
      mname: '',
      lname: '',
      flat: '',
      build: '',
      road: '',
      land: '',
      tvc: '',
      subd: '',
      email: '',
      dist: '',
      stat: '',
      pin: '',
      mob: '',
      ano: '',
      fnameerror: false,
      loading: false,
      lnameerror: false,
      mnameerror: false,
      pinerror: false,
      moberror: false,
      anoerror: false,
      open: false,
      focus: false,
      defcheck: true
    };
    _this.handleSubmit = _this.handleSubmit.bind(_this);
    return _this;
  }

  (0, _createClass3.default)(Aadhar, [{
    key: 'render',
    value: function render() {
      var _this3 = this;

      return _react2.default.createElement(_semanticUiReact.Segment, { inverted: true, color: 'blue', __source: {
          fileName: _jsxFileName,
          lineNumber: 158
        }
      }, _react2.default.createElement(_Layout2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 160
        }
      }, _react2.default.createElement('center', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 162
        }
      }, _react2.default.createElement('h1', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 163
        }
      }, ' Aadhar Department Form '), '    '), ' ', _react2.default.createElement(_semanticUiReact.Segment, { inverted: true, color: 'orange', __source: {
          fileName: _jsxFileName,
          lineNumber: 164
        }
      }, _react2.default.createElement(_semanticUiReact.Message, { attached: true, header: 'Welcome to EPramaan!',
        content: 'Fill out the form below to sign-up for a new Aadhar account',
        icon: 'searchengin',
        color: 'black', __source: {
          fileName: _jsxFileName,
          lineNumber: 166
        }
      }), _react2.default.createElement(_semanticUiReact.Form, { error: this.state.fnameerror || this.state.lnameerror || this.state.mnameerror || this.state.pinerror || this.state.moberror || this.state.anoerror, __source: {
          fileName: _jsxFileName,
          lineNumber: 172
        }
      }, _react2.default.createElement('br', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 176
        }
      }), _react2.default.createElement(_semanticUiReact.Form.Field, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 178
        }
      }, _react2.default.createElement('label', { color: 'black',
        style: {
          fontSize: '20px'
        }, __source: {
          fileName: _jsxFileName,
          lineNumber: 180
        }
      }, ' Name '), ' '), ' ', _react2.default.createElement(_semanticUiReact.Form.Group, { widths: 'equal', __source: {
          fileName: _jsxFileName,
          lineNumber: 187
        }
      }, _react2.default.createElement(_semanticUiReact.Form.Field, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 189
        }
      }, _react2.default.createElement(_semanticUiReact.Input, { fluid: true, label: 'First Name',
        ref: function ref(input) {
          _this3.fname = input;
        },
        value: this.state.fname,
        onChange: function onChange(event) {
          return _this3.setState({
            fname: event.target.value
          });
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 191
        }
      }), ' '), ' ', _react2.default.createElement(_semanticUiReact.Form.Field, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 207
        }
      }, _react2.default.createElement(_semanticUiReact.Input, { label: 'Middle Name',
        fluid: true, ref: function ref(input) {
          _this3.mname = input;
        },
        value: this.state.mname,
        onChange: function onChange(event) {
          return _this3.setState({
            mname: event.target.value
          });
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 209
        }
      }), ' '), ' ', _react2.default.createElement(_semanticUiReact.Form.Field, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 225
        }
      }, _react2.default.createElement(_semanticUiReact.Input, { label: 'Last Name',
        fluid: true, ref: function ref(input) {
          _this3.lname = input;
        }
        //  labelPosition=""
        , value: this.state.lname,
        onChange: function onChange(event) {
          return _this3.setState({
            lname: event.target.value
          });
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 227
        }
      }), ' '), ' '), this.state.fnameerror ? _react2.default.createElement(_semanticUiReact.Message, { color: 'red',
        error: true, header: 'Invalid Content',
        content: 'First Name should contain only characters', __source: {
          fileName: _jsxFileName,
          lineNumber: 249
        }
      }) : null, ' ', this.state.mnameerror ? _react2.default.createElement(_semanticUiReact.Message, { color: 'red',
        error: true, header: 'Invalid Content',
        content: 'Middle Name should contain only characters', __source: {
          fileName: _jsxFileName,
          lineNumber: 257
        }
      }) : null, ' ', this.state.lnameerror ? _react2.default.createElement(_semanticUiReact.Message, { color: 'red',
        error: true, header: 'Invalid Content',
        content: 'Last Name should contain only characters', __source: {
          fileName: _jsxFileName,
          lineNumber: 265
        }
      }) : null, _react2.default.createElement(_semanticUiReact.Form.Field, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 273
        }
      }, _react2.default.createElement('label', { color: 'black',
        style: {
          fontSize: '20px'
        }, __source: {
          fileName: _jsxFileName,
          lineNumber: 275
        }
      }, ' DOB '), ' '), _react2.default.createElement(_semanticUiCalendarReact.DateInput, { name: 'date',
        fluid: true, placeholder: 'Date of Birth',
        value: this.state.date,
        iconPosition: 'left',
        onChange: this.handleChange,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 284
        }
      }), ' ', _react2.default.createElement('br', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 294
        }
      }), _react2.default.createElement(_semanticUiReact.Form.Field, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 297
        }
      }, _react2.default.createElement('label', { color: 'black',
        style: {
          fontSize: '20px'
        }, __source: {
          fileName: _jsxFileName,
          lineNumber: 299
        }
      }, ' Address '), ' '), _react2.default.createElement(_semanticUiReact.Form.Group, { widths: 'equal', __source: {
          fileName: _jsxFileName,
          lineNumber: 308
        }
      }, _react2.default.createElement(_semanticUiReact.Form.Field, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 310
        }
      }, _react2.default.createElement(_semanticUiReact.Input, { label: 'Flat Number',
        fluid: true
        //  labelPosition=""
        , value: this.state.flat,
        onChange: function onChange(event) {
          return _this3.setState({
            flat: event.target.value
          });
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 312
        }
      }), ' '), ' ', _react2.default.createElement(_semanticUiReact.Form.Field, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 325
        }
      }, _react2.default.createElement(_semanticUiReact.Input, { label: 'Building Name',
        fluid: true
        //  labelPosition=""
        , value: this.state.build,
        onChange: function onChange(event) {
          return _this3.setState({
            build: event.target.value
          });
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 327
        }
      }), ' '), ' ', _react2.default.createElement(_semanticUiReact.Form.Field, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 340
        }
      }, _react2.default.createElement(_semanticUiReact.Input, { label: 'Road Name',
        fluid: true
        //  labelPosition=""
        , value: this.state.road,
        onChange: function onChange(event) {
          return _this3.setState({
            road: event.target.value
          });
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 342
        }
      }), ' '), ' '), ' ', _react2.default.createElement('br', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 356
        }
      }), _react2.default.createElement(_semanticUiReact.Form.Group, { widths: 'equal', __source: {
          fileName: _jsxFileName,
          lineNumber: 359
        }
      }, _react2.default.createElement(_semanticUiReact.Form.Field, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 361
        }
      }, _react2.default.createElement(_semanticUiReact.Input, { label: 'Land Mark',
        fluid: true
        //  labelPosition=""
        , value: this.state.land,
        onChange: function onChange(event) {
          return _this3.setState({
            land: event.target.value
          });
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 363
        }
      }), ' '), ' ', _react2.default.createElement(_semanticUiReact.Form.Field, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 376
        }
      }, _react2.default.createElement(_semanticUiReact.Input, { label: 'Town/Village/City',
        fluid: true
        //  labelPosition=""
        , value: this.state.tvc,
        onChange: function onChange(event) {
          return _this3.setState({
            tvc: event.target.value
          });
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 378
        }
      }), ' '), ' ', _react2.default.createElement(_semanticUiReact.Form.Field, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 391
        }
      }, _react2.default.createElement(_semanticUiReact.Input, { label: 'Sub District',
        fluid: true
        //  labelPosition=""
        , value: this.state.subd,
        onChange: function onChange(event) {
          return _this3.setState({
            subd: event.target.value
          });
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 393
        }
      }), ' '), ' '), ' ', _react2.default.createElement('br', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 407
        }
      }), _react2.default.createElement(_semanticUiReact.Form.Group, { widths: 'equal', __source: {
          fileName: _jsxFileName,
          lineNumber: 410
        }
      }, _react2.default.createElement(_semanticUiReact.Form.Field, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 412
        }
      }, _react2.default.createElement(_semanticUiReact.Input, { label: 'District',
        fluid: true
        //  labelPosition=""
        , value: this.state.dist,
        onChange: function onChange(event) {
          return _this3.setState({
            dist: event.target.value
          });
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 414
        }
      }), ' '), _react2.default.createElement(_semanticUiReact.Dropdown, { placeholder: 'Select State',
        fluid: true, selection: true, options: _statesdrop2.default,
        onChange: function onChange(e, _ref4) {
          var value = _ref4.value;
          return _this3.setState({
            stat: value
          });
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 429
        }
      }), _react2.default.createElement('br', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 441
        }
      }), _react2.default.createElement(_semanticUiReact.Form.Field, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 442
        }
      }, _react2.default.createElement(_semanticUiReact.Input, { label: 'PIN Code',
        fluid: true
        //  labelPosition=""
        , value: this.state.pin,
        ref: function ref(input) {
          _this3.pin = input;
        },
        onChange: function onChange(event) {
          return _this3.setState({
            pin: event.target.value
          });
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 444
        }
      }), ' '), ' '), ' ', this.state.pinerror ? _react2.default.createElement(_semanticUiReact.Message, { color: 'red',
        error: true, header: 'Invalid Content',
        content: 'Pin code should be valid', __source: {
          fileName: _jsxFileName,
          lineNumber: 465
        }
      }) : null, ' ', _react2.default.createElement('br', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 471
        }
      }), _react2.default.createElement(_semanticUiReact.Form.Field, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 473
        }
      }, _react2.default.createElement(_semanticUiReact.Input, { label: 'Mobile Number',
        fluid: true
        //  labelPosition=""
        , value: this.state.mob,
        ref: function ref(input) {
          _this3.mob = input;
        },
        onChange: function onChange(event) {
          return _this3.setState({
            mob: event.target.value
          });
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 475
        }
      }), ' '), ' ', this.state.moberror ? _react2.default.createElement(_semanticUiReact.Message, { color: 'red',
        error: true, header: 'Invalid Content',
        content: 'Mobile Number should be valid', __source: {
          fileName: _jsxFileName,
          lineNumber: 495
        }
      }) : null, ' ', _react2.default.createElement('br', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 501
        }
      }), _react2.default.createElement(_semanticUiReact.Form.Group, { widths: 'equal', __source: {
          fileName: _jsxFileName,
          lineNumber: 503
        }
      }), ' ', _react2.default.createElement(_semanticUiReact.Form.Field, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 506
        }
      }, _react2.default.createElement(_semanticUiReact.Input, { label: 'Aadhar Number',
        fluid: true, value: this.state.ano,
        ref: function ref(input) {
          _this3.ano = input;
        },
        onChange: function onChange(event) {
          return _this3.setState({
            ano: event.target.value
          });
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 508
        }
      }), ' '), this.state.anoerror ? _react2.default.createElement(_semanticUiReact.Message, { color: 'red',
        error: true, header: 'Invalid Content',
        content: 'Aadhar Number should be valid', __source: {
          fileName: _jsxFileName,
          lineNumber: 528
        }
      }) : null, ' ', _react2.default.createElement(_semanticUiReact.Form.Field, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 534
        }
      }, _react2.default.createElement(_semanticUiReact.Checkbox, { label: 'I agree that all the information is correct and properly verified.',
        onChange: function onChange(event) {
          return _this3.setState({
            defcheck: !_this3.state.defcheck
          });
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 536
        }
      }), ' '), ' ', _react2.default.createElement(_semanticUiReact.Button, { loading: this.state.loading,
        primary: true, onClick: this.handleSubmit,
        disabled: !this.state.mname || !this.state.fname || !this.state.lname || !this.state.ano || !this.state.mob || !this.state.date || !this.state.flat || !this.state.build || !this.state.road || !this.state.tvc || !this.state.pin || !this.state.stat || !this.state.dist || this.state.defcheck, __source: {
          fileName: _jsxFileName,
          lineNumber: 544
        }
      }, 'Submit '), _react2.default.createElement(_semanticUiReact.Confirm, { open: this.state.open,
        cancelButton: 'Go Back',
        confirmButton: 'Let\'s do it',
        onCancel: this.handleCancel,
        onConfirm: this.handleconf,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 556
        }
      })), ' '), ' '));
    }
  }]);

  return Aadhar;
}(_react.Component);

exports.default = Aadhar;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxhYWRoYXJkZXB0LmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwiUmVhY3RET00iLCJjcnlwdCIsIkxheW91dCIsIkZvcm0iLCJCdXR0b24iLCJJbnB1dCIsIkRyb3Bkb3duIiwiTWVudSIsIk1lc3NhZ2UiLCJTZWdtZW50IiwiQ2hlY2tib3giLCJDb25maXJtIiwiRGF0ZUlucHV0IiwicHJhbWFhbiIsIndlYjMiLCJzdGF0ZXNkcm9wIiwiQWFkaGFyIiwicHJvcHMiLCJoYW5kbGVTdWJtaXQiLCJldmVudCIsInNldFN0YXRlIiwibG9hZGluZyIsImZuYW1lZXJyb3IiLCJsbmFtZWVycm9yIiwibW5hbWVlcnJvciIsInBpbmVycm9yIiwibW9iZXJyb3IiLCJhbm9lcnJvciIsIm9wZW4iLCJzdGF0ZSIsImZuYW1lIiwibWF0Y2giLCJmb2N1cyIsIm1uYW1lIiwibG5hbWUiLCJwaW4iLCJsZW5ndGgiLCJpc05hTiIsIm1vYiIsImFubyIsImhhbmRsZUNhbmNlbCIsImhhbmRsZWNvbmYiLCJyZWFjdGgiLCJ0ZXN0IiwiZGF0ZSIsImZsYXQiLCJidWlsZCIsInJvYWQiLCJsYW5kIiwidHZjIiwic3ViZCIsImRpc3QiLCJzdGF0IiwidG9TdHJpbmciLCJ0b0xvd2VyQ2FzZSIsImNvbnNvbGUiLCJsb2ciLCJTSEEyNTYiLCJldGgiLCJnZXRBY2NvdW50cyIsImFjY291bnRzIiwibWV0aG9kcyIsInN0b3JlbWFwIiwic2VuZCIsImZyb20iLCJlIiwicHJldmVudERlZmF1bHQiLCJoYW5kbGVDaGFuZ2UiLCJuYW1lIiwidmFsdWUiLCJoYXNPd25Qcm9wZXJ0eSIsImVtYWlsIiwiZGVmY2hlY2siLCJiaW5kIiwiZm9udFNpemUiLCJpbnB1dCIsInRhcmdldCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPLEFBQ0w7Ozs7QUFFRixBQUFPOzs7O0FBQ1AsQUFBTzs7OztBQUNQLEFB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